// Prerenders every route in dist/ to static HTML using a real headless
// browser, so crawlers that don't execute JavaScript (Ahrefs by default,
// and Google's *first* crawl pass before its render queue catches up) see
// the exact same fully-rendered title/meta/canonical/H1/links a real
// visitor's browser produces — not the empty SPA shell.
//
// This requires zero changes to any component: it drives the already-built
// app in a real browser and saves whatever it correctly renders.
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getAllRoutes } from './get-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on('error', () => {
          if (Date.now() - start > timeoutMs) {
            reject(new Error(`Server at ${url} did not start within ${timeoutMs}ms`));
          } else {
            setTimeout(check, 300);
          }
        });
    };
    check();
  });
}

function stopServer(server) {
  return new Promise((resolve) => {
    if (!server.pid) return resolve();
    if (process.platform === 'win32') {
      // shell:true means `server.pid` is the shell, not vite itself —
      // /T kills the whole process tree under it, /F forces it.
      spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' }).on('exit', resolve);
    } else {
      try {
        process.kill(-server.pid, 'SIGTERM');
      } catch {
        server.kill('SIGTERM');
      }
      resolve();
    }
  });
}

async function main() {
  console.log('Starting preview server to prerender against...');
  const server = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT), '--strictPort'],
    { cwd: root, stdio: 'pipe', shell: true, detached: process.platform !== 'win32' }
  );
  server.stderr?.on('data', (d) => process.stderr.write(d));

  let serverExited = false;
  server.on('exit', () => { serverExited = true; });

  try {
    await waitForServer(BASE_URL);

    const browser = await chromium.launch();
    const routes = getAllRoutes();
    let failures = 0;

    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle', timeout: 15000 });
        // SEO.tsx sets the per-route canonical tag in a useEffect; wait for
        // it so we don't capture the pre-render static defaults instead.
        await page.waitForFunction(
          (expectedRoute) => {
            const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
            return expectedRoute === '/' ? canonical.endsWith('/') : canonical.includes(expectedRoute);
          },
          route,
          { timeout: 10000 }
        );
        await page.waitForTimeout(150); // small settle buffer

        const html = await page.content();
        const outPath =
          route === '/'
            ? path.join(distDir, 'index.html')
            : path.join(distDir, route.replace(/^\//, ''), 'index.html');
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, `<!DOCTYPE html>\n${html}`);
        console.log(`✓ prerendered ${route} -> ${path.relative(distDir, outPath)}`);
      } catch (err) {
        failures++;
        console.error(`✗ failed to prerender ${route}:`, err.message);
      } finally {
        await page.close();
      }
    }

    await browser.close();

    if (failures > 0) {
      throw new Error(`${failures} route(s) failed to prerender`);
    }
    console.log(`Prerendered ${routes.length} routes successfully.`);
  } finally {
    if (!serverExited) {
      await stopServer(server);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

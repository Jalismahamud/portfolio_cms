// Generates public/sitemap.xml from the project & blog post data files.
// Runs automatically as a `prebuild` step (see package.json) so the sitemap
// never drifts out of sync with the actual routes as content is added.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRoutes } from './get-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const SITE_URL = 'https://jalisdev.com';

const { static: staticPaths, projects: projectPaths, blogPosts: blogPostPaths } = getRoutes();

const priorityFor = {
  '/': { changefreq: 'monthly', priority: '1.0' },
  '/projects': { changefreq: 'monthly', priority: '0.8' },
  '/blog': { changefreq: 'weekly', priority: '0.8' },
};

const allRoutes = [
  ...staticPaths.map((loc) => ({ loc, ...priorityFor[loc] })),
  ...projectPaths.map((loc) => ({ loc, changefreq: 'monthly', priority: '0.7' })),
  ...blogPostPaths.map((loc) => ({ loc, changefreq: 'monthly', priority: '0.6' })),
];

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml generated with ${allRoutes.length} URLs (${projectPaths.length} projects, ${blogPostPaths.length} blog posts).`);

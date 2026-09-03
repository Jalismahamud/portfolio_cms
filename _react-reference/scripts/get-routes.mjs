// Shared route enumeration used by both the sitemap generator and the
// prerenderer, so the two can never drift apart. Reads project ids and
// blog slugs directly out of the source files (regex, not a TS import,
// so this stays a plain Node/ESM script with no build step of its own).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function extractValues(filePath, key) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const re = new RegExp(`${key}:\\s*["']([^"']+)["']`, 'g');
  const values = [];
  let match;
  while ((match = re.exec(content)) !== null) {
    values.push(match[1]);
  }
  return [...new Set(values)];
}

export function getRoutes() {
  const projectIds = extractValues(path.join(root, 'src/data/projects.ts'), 'id');
  const blogSlugs = extractValues(path.join(root, 'src/pages/BlogDetail.tsx'), 'slug');

  return {
    static: ['/', '/projects', '/blog'],
    projects: projectIds.map((id) => `/project/${id}`),
    blogPosts: blogSlugs.map((slug) => `/blog/${slug}`),
  };
}

export function getAllRoutes() {
  const { static: staticRoutes, projects, blogPosts } = getRoutes();
  return [...staticRoutes, ...projects, ...blogPosts];
}

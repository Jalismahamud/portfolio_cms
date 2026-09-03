import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  /** Absolute or root-relative path, e.g. "/project/cryptax" or "https://jalisdev.com/blog" */
  canonical: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  /** One or more JSON-LD objects to inject as <script type="application/ld+json"> */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://jalisdev.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

/** Trims to a target length at a word boundary, for meta descriptions (~150-160 chars). */
export function truncateForMeta(text: string, max = 148): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}...`;
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets per-route title, meta description, canonical, Open Graph/Twitter
 * tags, and JSON-LD structured data. Plain DOM manipulation (no
 * react-helmet-async dependency) since this is a client-rendered SPA with
 * a single static index.html shared by every route.
 */
const SEO = ({ title, description, canonical, image, type = 'website', noindex, jsonLd }: SEOProps) => {
  useEffect(() => {
    const absoluteCanonical = toAbsoluteUrl(canonical);
    const absoluteImage = image ? toAbsoluteUrl(image) : DEFAULT_IMAGE;

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    upsertLink('canonical', absoluteCanonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', absoluteCanonical);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', absoluteImage);

    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);

    // Clear any JSON-LD injected by the previous route, then add this page's.
    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      entries.forEach((entry) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, image, type, noindex, jsonLd]);

  return null;
};

export default SEO;
export { SITE_URL };

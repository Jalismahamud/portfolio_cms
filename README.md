# Portfolio CMS

A personal portfolio site, rebuilt from a static React SPA into a dynamic, CMS-driven application. Content (projects, skills, experience, blog posts, etc.) is managed through a Filament admin panel and served to a Vue.js + Inertia.js frontend.

**Stack:** Laravel 13 · Filament 5 · Vue 3 + Inertia.js · Tailwind CSS · MySQL

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+ and npm
- MySQL (or another Laravel-supported database)

## Setup

1. **Install PHP dependencies**

   ```sh
   composer install
   ```

2. **Install JS dependencies**

   ```sh
   npm install
   ```

3. **Environment file**

   ```sh
   cp .env.example .env
   php artisan key:generate
   ```

   Edit `.env` and set your database credentials (`DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`). The default `MAIL_MAILER=log` writes contact-form emails to `storage/logs/laravel.log` instead of actually sending — swap in real SMTP credentials when you're ready to send for real.

4. **Create the database**, then run migrations:

   ```sh
   php artisan migrate
   ```

5. **Link storage** (required — profile photos, project screenshots, blog images, and certificates are all served from here):

   ```sh
   php artisan storage:link
   ```

6. **Create a Filament admin user**

   ```sh
   php artisan make:filament-user
   ```

7. **Build frontend assets**

   ```sh
   npm run dev        # local development, with hot reload
   # or, for production (also builds the SSR bundle — see SEO section below)
   npm run build:ssr
   ```

8. **Start the Inertia SSR server** (production/SEO — see below for why this matters)

   ```sh
   php artisan inertia:start-ssr
   ```

9. **Serve the app**

   ```sh
   php artisan serve
   ```

The public site is at `/`, and the admin panel is at `/admin`.

## Content Management

All portfolio content is managed from the Filament admin panel (`/admin`): profile info, skills, tech stack, gallery images, work experience, projects, education, certifications, blog posts, contact info, social links, and site settings. Contact form submissions received from the public site also appear there, with reply and read/unread actions.

## Contact Form & Queues

The contact form saves each submission to the database and queues an email notification to the address set on your Profile record (or `MAIL_FROM_ADDRESS` as a fallback). Because `QUEUE_CONNECTION=database` by default, queued jobs sit in the `jobs` table until a worker processes them:

```sh
php artisan queue:work
```

Without a running worker, contact-form notification emails will not send. For local testing without a worker, you can temporarily set `QUEUE_CONNECTION=sync` in `.env`.

## SEO

This site is server-side rendered (Inertia SSR) specifically so search engines and any crawler — including ones that don't execute JavaScript — see fully-rendered HTML (title, meta description, canonical URL, Open Graph/Twitter tags, and JSON-LD structured data) on the very first response, not just after client-side JS runs.

**This requires a second, always-running process in production**, separate from PHP-FPM/`php artisan serve`:

```sh
php artisan inertia:start-ssr
```

Run this under a process manager (Supervisor, systemd, pm2) so it restarts automatically and survives reboots — it must be running continuously, not just once at deploy time. If it ever stops, the site does **not** break: Inertia silently falls back to client-side rendering (same as before SSR was added), it just quietly loses the SEO/crawlability benefit until the SSR process is restarted. Check it's alive with:

```sh
php artisan inertia:check-ssr
```

Rebuild the SSR bundle (`bootstrap/ssr/`) whenever you deploy new frontend code — `npm run build:ssr` builds both the client and SSR bundles, then restart the SSR process to pick up the new bundle:

```sh
npm run build:ssr
php artisan inertia:stop-ssr
php artisan inertia:start-ssr
```

### What's wired up

- **Server-rendered meta per page** — `resources/js/Components/Portfolio/Seo.vue` sets title, description, canonical, Open Graph, Twitter card, and page-specific JSON-LD (`Person`/`BreadcrumbList` on the homepage, `BlogPosting` on blog posts, `CreativeWork` on projects) on every page.
- **Site-wide structured data** — `Person` and `WebSite` JSON-LD (built from your `Profile` and `SocialLink` records) is injected on every page via `resources/views/app.blade.php` + `AppServiceProvider`, so it's present even before a page-specific Vue component mounts.
- **`/sitemap.xml`** — generated dynamically from the database (all projects and published blog posts), cached for 1 hour.
- **`/robots.txt`** — dynamically generated, disallows admin/auth routes, points at `/sitemap.xml`.
- **Google Search Console** — the ownership verification file is at `public/google4fb0f979e4e1a3be.html`. If you ever need to re-verify with a different method, set `GOOGLE_SITE_VERIFICATION` in `.env` to add a verification `<meta>` tag instead.
- **Google Analytics (GA4)** and **Ahrefs Web Analytics** — both load conditionally based on `GOOGLE_ANALYTICS_ID` and `AHREFS_ANALYTICS_KEY` in `.env`. Leave either blank to disable it.
- **`SEO_SITE_URL`** — the canonical domain used to build absolute URLs (sitemap, canonical tags, OG tags, JSON-LD). Defaults to `APP_URL`; override it if the public site is ever served from a different domain than the app itself resolves internally.

All four of these env vars carry over the same values/keys that were configured on the original static site (`jalisdev.com`), so Search Console/Analytics history isn't lost by the rebuild.

## Notes

- The `_react-reference/` folder (if still present) is the original static React site used as a design reference during the rebuild. It is not part of the application and can be deleted once you're done comparing against it.

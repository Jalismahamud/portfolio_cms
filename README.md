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
   npm run dev    # local development, with hot reload
   # or
   npm run build  # production build
   ```

8. **Serve the app**

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

## Notes

- **No server-side rendering**: this is a client-rendered Inertia app (matching the original React SPA it was rebuilt from). Per-page `<title>`/meta tags are set client-side, so they're visible to browsers and JS-executing crawlers, but not to a raw `curl`/View Source of the initial HTML response. Add Inertia SSR later if that becomes a requirement.
- The `_react-reference/` folder (if still present) is the original static React site used as a design reference during the rebuild. It is not part of the application and can be deleted once you're done comparing against it.

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#1a1a2e">

        @if (config('seo.google_site_verification'))
            <meta name="google-site-verification" content="{{ config('seo.google_site_verification') }}">
        @endif

        <!-- Favicon & App Icons -->
        <link rel="icon" type="image/webp" href="/favicon.webp">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/manifest.json">

        <script>
            (function () {
                const stored = localStorage.getItem('portfolio-theme');
                const theme = stored === 'light' ? 'light' : 'dark';
                document.documentElement.classList.add(theme);
            })();
        </script>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=DM+Serif+Text:wght@400&display=swap" rel="stylesheet" />

        <!-- Third-party analytics DNS warm-up -->
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com">
        <link rel="dns-prefetch" href="https://www.googletagmanager.com">

        <!-- Structured Data: Person & WebSite (shared on every page) -->
        @foreach ($siteJsonLd ?? [] as $entry)
            <script type="application/ld+json">{!! json_encode($entry) !!}</script>
        @endforeach

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

        @if (config('seo.ahrefs_analytics_key'))
            <script src="https://analytics.ahrefs.com/analytics.js" data-key="{{ config('seo.ahrefs_analytics_key') }}" async></script>
        @endif

        @if (config('seo.google_analytics_id'))
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('seo.google_analytics_id') }}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', '{{ config('seo.google_analytics_id') }}');
            </script>
        @endif
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

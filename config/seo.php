<?php

$siteUrl = env('SEO_SITE_URL', env('APP_URL'));

if (env('APP_ENV') === 'production') {
    $siteUrl = preg_replace('/^http:/i', 'https:', $siteUrl);
}

return [
    'site_url' => rtrim($siteUrl, '/'),

    'google_site_verification' => env('GOOGLE_SITE_VERIFICATION'),

    'google_analytics_id' => env('GOOGLE_ANALYTICS_ID'),

    'ahrefs_analytics_key' => env('AHREFS_ANALYTICS_KEY'),
];

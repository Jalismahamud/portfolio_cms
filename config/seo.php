<?php

return [
    'site_url' => rtrim(env('SEO_SITE_URL', env('APP_URL')), '/'),

    'google_site_verification' => env('GOOGLE_SITE_VERIFICATION'),

    'google_analytics_id' => env('GOOGLE_ANALYTICS_ID'),

    'ahrefs_analytics_key' => env('AHREFS_ANALYTICS_KEY'),
];

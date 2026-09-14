<?php

use Illuminate\Support\Facades\Cache;

it('renders crawler-visible fallback metadata on the root document', function () {
    $response = $this->get('/');

    $response->assertOk();
    $response->assertSee('<meta name="description"', false);
    $response->assertSee('<link rel="canonical"', false);
    $response->assertSee('<meta property="og:title"', false);
    $response->assertSee('<meta name="twitter:card"', false);
});

it('publishes secure sitemap and robots URLs in production', function () {
    config()->set('seo.site_url', 'https://jalisdev.com');
    Cache::forget('sitemap.xml');

    $sitemap = $this->get('/sitemap.xml');
    $robots = $this->get('/robots.txt');

    $sitemap->assertOk();
    $sitemap->assertSee('https://jalisdev.com/', false);
    $sitemap->assertDontSee('http://jalisdev.com', false);
    $robots->assertOk();
    $robots->assertSee('Sitemap: https://jalisdev.com/sitemap.xml', false);
});

<?php

use App\Models\Profile;
use Illuminate\Support\Facades\Cache;

it('renders crawler-visible fallback metadata on the root document', function () {
    $response = $this->get('/');

    $response->assertOk();
    $response->assertSee('<meta name="description"', false);
    $response->assertSee('<link rel="canonical"', false);
    $response->assertSee('<meta property="og:title"', false);
    $response->assertSee('<meta name="twitter:card"', false);
});

it('publishes the portfolio owner identity in structured data', function () {
    Profile::query()->create([
        'name' => 'Jalis Mahamud',
        'email' => 'jalismahamud31@gmail.com',
        'phone' => '+8801785927491',
    ]);

    $response = $this->get('/');

    $response->assertOk();
    $response->assertSee('"@type":"Person"', false);
    $response->assertSee('jalismahamud31@gmail.com', false);
    $response->assertSee('+8801785927491', false);
    $response->assertSee('"@type":"ContactPoint"', false);
});

it('publishes secure sitemap and robots URLs in production', function () {
    config()->set('seo.site_url', 'https://jalisdev.com');
    Cache::forget('sitemap.xml');

    $sitemap = $this->get('/sitemap.xml');
    $robots = $this->get('/robots.txt');

    $sitemap->assertOk();
    $sitemap->assertHeader('Content-Type', 'application/xml');
    expect(simplexml_load_string($sitemap->getContent()))->not->toBeFalse();
    $sitemap->assertSee('https://jalisdev.com/', false);
    $sitemap->assertDontSee('http://jalisdev.com', false);
    $robots->assertOk();
    $robots->assertSee('Sitemap: https://jalisdev.com/sitemap.xml', false);
});

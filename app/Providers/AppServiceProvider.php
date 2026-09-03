<?php

namespace App\Providers;

use App\Models\Profile;
use App\Models\SocialLink;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        View::composer('app', function ($view) {
            $view->with('siteJsonLd', $this->siteJsonLd());
        });
    }

    /**
     * Site-wide Person + WebSite structured data, shared on every page so
     * search engines can associate the site with its owner regardless of
     * which page is entered first.
     */
    private function siteJsonLd(): array
    {
        $siteUrl = config('seo.site_url');
        $profile = Profile::query()->first();

        $person = [
            '@context' => 'https://schema.org',
            '@type' => 'Person',
            'name' => $profile?->name,
            'url' => $siteUrl,
            'image' => $profile?->profile_photo,
            'jobTitle' => $profile?->tagline,
            'description' => $profile?->bio,
            'email' => $profile?->email ? 'mailto:'.$profile->email : null,
            'sameAs' => SocialLink::query()->orderBy('sort_order')->pluck('href')->all(),
        ];

        $website = [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $profile?->name ? "{$profile->name} | Portfolio" : 'Portfolio',
            'url' => $siteUrl,
        ];

        return [array_filter($person), $website];
    }
}

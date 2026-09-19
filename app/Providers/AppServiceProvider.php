<?php

namespace App\Providers;

use App\Models\Profile;
use App\Models\SiteSetting;
use App\Models\SocialLink;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Vite;
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

        RateLimiter::for('contact', function (Request $request) {
            return Limit::perMinute(5)->by($request->ip().'|'.$request->string('email')->lower());
        });

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
        $siteSettings = SiteSetting::current();

        $person = [
            '@context' => 'https://schema.org',
            '@type' => 'Person',
            'name' => $profile?->name,
            'url' => $siteUrl,
            'image' => $profile?->profile_photo ? $this->absoluteUrl($profile->profile_photo, $siteUrl) : null,
            'jobTitle' => $profile?->tagline,
            'description' => $profile?->bio,
            'email' => $profile?->email ? 'mailto:'.$profile->email : null,
            'telephone' => $profile?->phone,
            'contactPoint' => $profile?->phone || $profile?->email ? [[
                '@type' => 'ContactPoint',
                'contactType' => 'professional inquiries',
                'email' => $profile?->email ? 'mailto:'.$profile->email : null,
                'telephone' => $profile?->phone,
            ]] : null,
            'sameAs' => SocialLink::query()
                ->orderBy('sort_order')
                ->pluck('href')
                ->filter()
                ->values()
                ->all(),
        ];

        $website = [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $siteSettings?->site_name ?: ($profile?->name ? "{$profile->name} | Portfolio" : 'Portfolio'),
            'url' => $siteUrl,
        ];

        return [array_filter($person), $website];
    }

    private function absoluteUrl(?string $url, string $siteUrl): ?string
    {
        if (blank($url)) {
            return $url;
        }

        return str_starts_with($url, 'http://') || str_starts_with($url, 'https://')
            ? $url
            : $siteUrl.'/'.ltrim($url, '/');
    }
}

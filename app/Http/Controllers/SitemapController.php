<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Project;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $siteUrl = config('seo.site_url');

        $xml = Cache::remember('sitemap.xml', now()->addHour(), function () use ($siteUrl) {
            $urls = [
                ['loc' => '/', 'changefreq' => 'monthly', 'priority' => '1.0', 'lastmod' => now()],
                ['loc' => '/projects', 'changefreq' => 'monthly', 'priority' => '0.8', 'lastmod' => now()],
                ['loc' => '/blog', 'changefreq' => 'weekly', 'priority' => '0.8', 'lastmod' => now()],
            ];

            foreach (Project::query()->orderBy('sort_order')->get(['slug', 'updated_at']) as $project) {
                $urls[] = [
                    'loc' => "/project/{$project->slug}",
                    'changefreq' => 'monthly',
                    'priority' => '0.7',
                    'lastmod' => $project->updated_at,
                ];
            }

            foreach (BlogPost::query()->where('is_published', true)->get(['slug', 'updated_at']) as $post) {
                $urls[] = [
                    'loc' => "/blog/{$post->slug}",
                    'changefreq' => 'monthly',
                    'priority' => '0.6',
                    'lastmod' => $post->updated_at,
                ];
            }

            return view('sitemap', ['urls' => $urls, 'siteUrl' => $siteUrl])->render();
        });

        return response($xml, 200)->header('Content-Type', 'application/xml');
    }
}

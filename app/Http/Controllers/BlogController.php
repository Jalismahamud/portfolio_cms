<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->string('search')->trim()->toString();
        $searchTerm = mb_strlen($search) >= 2 ? $search : '';
        $category = $request->string('category')->trim()->toString();

        if ($searchTerm === '' && $category === '') {
            $data = Cache::remember('blog.index', now()->addDay(), function () {
                return [
                    'posts' => BlogPost::query()
                        ->with('tags')
                        ->where('is_published', true)
                        ->orderByDesc('published_at')
                        ->limit(24)
                        ->get(),
                    'categories' => BlogPost::query()
                        ->where('is_published', true)
                        ->whereNotNull('category')
                        ->distinct()
                        ->orderBy('category')
                        ->pluck('category'),
                ];
            });
        } else {
            $data = [
                'posts' => BlogPost::query()
                    ->with('tags')
                    ->where('is_published', true)
                    ->when($searchTerm !== '', function ($query) use ($searchTerm) {
                        $query->where(function ($query) use ($searchTerm) {
                            $query->where('title', 'like', "%{$searchTerm}%")
                                ->orWhere('excerpt', 'like', "%{$searchTerm}%");
                        });
                    })
                    ->when($category !== '', fn ($query) => $query->where('category', $category))
                    ->orderByDesc('published_at')
                    ->limit(24)
                    ->get(),
                'categories' => BlogPost::query()
                    ->where('is_published', true)
                    ->whereNotNull('category')
                    ->distinct()
                    ->orderBy('category')
                    ->pluck('category'),
            ];
        }

        return Inertia::render('Blog/Index', [
            'posts' => $data['posts'],
            'categories' => $data['categories'],
            'search' => $search,
            'category' => $category,
        ]);
    }

    public function show(string $slug): Response
    {
        $post = Cache::remember("blog.show.{$slug}", now()->addDay(), function () use ($slug) {
            return BlogPost::query()
                ->with('tags')
                ->where('slug', $slug)
                ->where('is_published', true)
                ->first();
        });

        abort_if(! $post, 404);

        return Inertia::render('Blog/Show', [
            'post' => $post,
        ]);
    }
}

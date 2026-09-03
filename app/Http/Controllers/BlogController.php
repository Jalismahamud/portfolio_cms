<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->string('search')->trim()->toString();
        $category = $request->string('category')->trim()->toString();

        $posts = BlogPost::query()
            ->with('tags')
            ->where('is_published', true)
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('title', 'like', "%{$search}%")
                        ->orWhere('excerpt', 'like', "%{$search}%");
                });
            })
            ->when($category !== '', fn ($query) => $query->where('category', $category))
            ->orderByDesc('published_at')
            ->get();

        $categories = BlogPost::query()
            ->where('is_published', true)
            ->whereNotNull('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
            'categories' => $categories,
            'search' => $search,
            'category' => $category,
        ]);
    }

    public function show(string $slug): Response
    {
        $post = BlogPost::query()
            ->with('tags')
            ->where('slug', $slug)
            ->where('is_published', true)
            ->first();

        abort_if(! $post, 404);

        return Inertia::render('Blog/Show', [
            'post' => $post,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->string('search')->trim()->toString();
        $searchTerm = mb_strlen($search) >= 2 ? $search : '';

        if ($searchTerm === '') {
            $projects = Cache::remember('projects.index', now()->addDay(), function () {
                return Project::query()
                    ->with(['images', 'technologies'])
                    ->orderBy('sort_order')
                    ->limit(24)
                    ->get();
            });
        } else {
            $projects = Project::query()
                ->with(['images', 'technologies'])
                ->where(function ($query) use ($searchTerm) {
                    $query->where('title', 'like', "%{$searchTerm}%")
                        ->orWhere('description', 'like', "%{$searchTerm}%")
                        ->orWhereHas('technologies', function ($query) use ($searchTerm) {
                            $query->where('name', 'like', "%{$searchTerm}%");
                        });
                })
                ->orderBy('sort_order')
                ->limit(24)
                ->get();
        }

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'search' => $search,
        ]);
    }

    public function show(string $slug): Response
    {
        $project = Cache::remember("project.show.{$slug}", now()->addDay(), function () use ($slug) {
            return Project::query()
                ->with(['images', 'technologies'])
                ->where('slug', $slug)
                ->first();
        });

        abort_if(! $project, 404);

        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);
    }
}

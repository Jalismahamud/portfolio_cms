<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->string('search')->trim()->toString();

        $projects = Project::query()
            ->with(['images', 'technologies'])
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('title', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%")
                        ->orWhereHas('technologies', function ($query) use ($search) {
                            $query->where('name', 'like', "%{$search}%");
                        });
                });
            })
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'search' => $search,
        ]);
    }

    public function show(string $slug): Response
    {
        $project = Project::query()
            ->with(['images', 'technologies'])
            ->where('slug', $slug)
            ->first();

        abort_if(! $project, 404);

        return Inertia::render('Projects/Show', [
            'project' => $project,
        ]);
    }
}

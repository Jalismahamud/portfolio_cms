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
        $searchTerm = mb_strlen($search) >= 2 ? $search : '';

        $projects = Project::query()
            ->with(['images', 'technologies'])
            ->when($searchTerm !== '', function ($query) use ($searchTerm) {
                $query->where(function ($query) use ($searchTerm) {
                    $query->where('title', 'like', "%{$searchTerm}%")
                        ->orWhere('description', 'like', "%{$searchTerm}%")
                        ->orWhereHas('technologies', function ($query) use ($searchTerm) {
                            $query->where('name', 'like', "%{$searchTerm}%");
                        });
                });
            })
            ->orderBy('sort_order')
            ->limit(24)
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

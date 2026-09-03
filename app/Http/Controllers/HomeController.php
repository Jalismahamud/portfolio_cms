<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Certification;
use App\Models\Education;
use App\Models\Experience;
use App\Models\GalleryImage;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SkillGroup;
use App\Models\SocialLink;
use App\Models\Technology;
use App\Models\ContactInfo;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $profile = Profile::query()->first();

        $projects = Project::query()
            ->with(['images', 'technologies'])
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Home', [
            'profile' => $profile,
            'skills' => Skill::query()->orderBy('sort_order')->get(),
            'techStack' => Technology::query()->orderBy('sort_order')->get(),
            'galleryImages' => GalleryImage::query()->orderBy('sort_order')->get(),
            'experiences' => Experience::query()
                ->with('technologies')
                ->orderBy('sort_order')
                ->get(),
            'featuredProjects' => $projects->where('is_featured', true)->values(),
            'otherProjects' => $projects->where('is_featured', false)->values(),
            'education' => Education::query()->orderBy('sort_order')->get(),
            'certifications' => Certification::query()->orderBy('sort_order')->get(),
            'skillGroups' => SkillGroup::query()
                ->with('items')
                ->orderBy('sort_order')
                ->get(),
            'latestBlogPosts' => BlogPost::query()
                ->where('is_published', true)
                ->orderByDesc('published_at')
                ->limit(3)
                ->get(),
            'contactInfo' => ContactInfo::query()->orderBy('sort_order')->get(),
            'socialLinks' => SocialLink::query()->orderBy('sort_order')->get(),
        ]);
    }
}

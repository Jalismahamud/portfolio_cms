<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use App\Models\Certification;
use App\Models\ContactSubmission;
use App\Models\Education;
use App\Models\Experience;
use App\Models\GalleryImage;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class PortfolioStatsOverview extends BaseWidget
{
    protected ?string $heading = 'Portfolio overview';

    protected ?string $description = 'A quick view of the content currently published in your portfolio.';

    protected function getStats(): array
    {
        return [
            $this->stat('Projects', Project::query()->count(), Heroicon::OutlinedRectangleStack, 'primary', 'projects.index'),
            $this->stat('Blog posts', BlogPost::query()->count(), Heroicon::OutlinedNewspaper, 'info', 'blog-posts.index'),
            $this->stat('Certifications', Certification::query()->count(), Heroicon::OutlinedAcademicCap, 'success', 'certifications.index'),
            $this->stat('Education', Education::query()->count(), Heroicon::OutlinedBookOpen, 'warning', 'education.index'),
            $this->stat('Experience', Experience::query()->count(), Heroicon::OutlinedBriefcase, 'gray', 'experiences.index'),
            $this->stat('Skills', Skill::query()->count(), Heroicon::OutlinedSparkles, 'danger', 'skills.index'),
            $this->stat('Technologies', Technology::query()->count(), Heroicon::OutlinedCodeBracket, 'primary', 'technologies.index'),
            $this->stat('Gallery images', GalleryImage::query()->count(), Heroicon::OutlinedPhoto, 'info', 'gallery-images.index'),
            $this->stat('Messages', ContactSubmission::query()->count(), Heroicon::OutlinedEnvelope, 'success', 'contact-submissions.index'),
        ];
    }

    private function stat(string $label, int $value, Heroicon $icon, string $color, string $route): Stat
    {
        return Stat::make($label, $value)
            ->icon($icon)
            ->color($color)
            ->url(route($route));
    }
}

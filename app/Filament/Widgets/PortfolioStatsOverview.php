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
use App\Filament\Resources\BlogPosts\BlogPostResource;
use App\Filament\Resources\Certifications\CertificationResource;
use App\Filament\Resources\ContactSubmissions\ContactSubmissionResource;
use App\Filament\Resources\Education\EducationResource;
use App\Filament\Resources\Experiences\ExperienceResource;
use App\Filament\Resources\GalleryImages\GalleryImageResource;
use App\Filament\Resources\Projects\ProjectResource;
use App\Filament\Resources\Skills\SkillResource;
use App\Filament\Resources\Technologies\TechnologyResource;
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
            $this->stat('Projects', Project::query()->count(), Heroicon::OutlinedRectangleStack, 'primary', ProjectResource::class),
            $this->stat('Blog posts', BlogPost::query()->count(), Heroicon::OutlinedNewspaper, 'info', BlogPostResource::class),
            $this->stat('Certifications', Certification::query()->count(), Heroicon::OutlinedAcademicCap, 'success', CertificationResource::class),
            $this->stat('Education', Education::query()->count(), Heroicon::OutlinedBookOpen, 'warning', EducationResource::class),
            $this->stat('Experience', Experience::query()->count(), Heroicon::OutlinedBriefcase, 'gray', ExperienceResource::class),
            $this->stat('Skills', Skill::query()->count(), Heroicon::OutlinedSparkles, 'danger', SkillResource::class),
            $this->stat('Technologies', Technology::query()->count(), Heroicon::OutlinedCodeBracket, 'primary', TechnologyResource::class),
            $this->stat('Gallery images', GalleryImage::query()->count(), Heroicon::OutlinedPhoto, 'info', GalleryImageResource::class),
            $this->stat('Messages', ContactSubmission::query()->count(), Heroicon::OutlinedEnvelope, 'success', ContactSubmissionResource::class),
        ];
    }

    private function stat(string $label, int $value, Heroicon $icon, string $color, string $resource): Stat
    {
        return Stat::make($label, $value)
            ->icon($icon)
            ->color($color)
            ->url($resource::getUrl('index'));
    }
}

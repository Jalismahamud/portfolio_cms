<?php

namespace App\Models;

use App\Models\Concerns\HasStorageUrls;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'name',
    'tagline',
    'bio',
    'profile_photo',
    'resume_file',
    'location',
    'email',
    'phone',
    'availability_status',
    'years_experience',
    'projects_delivered',
    'satisfaction_rate',
])]
class Profile extends Model
{
    use HasFactory, HasStorageUrls;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'availability_status' => 'boolean',
            'years_experience' => 'integer',
            'projects_delivered' => 'integer',
            'satisfaction_rate' => 'integer',
        ];
    }

    protected function profilePhoto(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $this->resolveStorageUrl($value),
        );
    }

    protected function resumeFile(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $this->resolveStorageUrl($value),
        );
    }
}

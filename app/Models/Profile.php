<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
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
    use HasFactory;

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
}

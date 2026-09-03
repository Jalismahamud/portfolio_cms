<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'degree',
    'institution',
    'location',
    'start_year',
    'end_year',
    'grade',
    'description',
    'highlights',
    'projects_note',
    'sort_order',
])]
class Education extends Model
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
            'start_year' => 'integer',
            'end_year' => 'integer',
            'highlights' => 'array',
            'projects_note' => 'array',
            'sort_order' => 'integer',
        ];
    }
}

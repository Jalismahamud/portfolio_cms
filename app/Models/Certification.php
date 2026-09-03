<?php

namespace App\Models;

use App\Models\Concerns\HasStorageUrls;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'provider',
    'issue_date',
    'description',
    'image',
    'skills',
    'sort_order',
])]
class Certification extends Model
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
            'issue_date' => 'date',
            'skills' => 'array',
            'sort_order' => 'integer',
        ];
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $this->resolveStorageUrl($value),
        );
    }
}

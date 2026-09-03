<?php

namespace App\Models;

use App\Models\Concerns\HasStorageUrls;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable([
    'slug',
    'title',
    'excerpt',
    'category',
    'content',
    'image',
    'author',
    'read_time',
    'published_at',
    'is_published',
])]
class BlogPost extends Model
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
            'read_time' => 'integer',
            'published_at' => 'datetime',
            'is_published' => 'boolean',
        ];
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $this->resolveStorageUrl($value),
        );
    }

    /**
     * @return BelongsToMany<BlogTag, $this>
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(BlogTag::class, 'blog_post_tag');
    }
}

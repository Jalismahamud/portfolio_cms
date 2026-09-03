<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Facades\Storage;

#[Fillable([
    'key',
    'value',
    'site_name',
    'logo',
    'favicon',
    'login_logo',
    'login_heading',
    'login_description',
])]
class SiteSetting extends Model
{
    use HasFactory;

    public static function current(): ?self
    {
        return static::query()->first();
    }

    public function assetUrl(?string $path, string $fallback): string
    {
        if (blank($path)) {
            return asset($fallback);
        }

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://') || str_starts_with($path, '/')) {
            return str_starts_with($path, '/') ? asset(ltrim($path, '/')) : $path;
        }

        /** @var FilesystemAdapter $disk */
        $disk = Storage::disk('public');

        return $disk->url($path);
    }
}

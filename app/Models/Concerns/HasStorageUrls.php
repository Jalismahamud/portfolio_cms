<?php

namespace App\Models\Concerns;

use Illuminate\Support\Facades\Storage;

/**
 * Normalizes file/image attributes so the frontend always receives a fully
 * resolvable URL, regardless of whether the value in the database is a
 * relative disk path (what Filament's FileUpload stores for real uploads)
 * or an already-absolute URL (e.g. seeded data, or an external image URL
 * an admin pasted in directly).
 */
trait HasStorageUrls
{
    protected function resolveStorageUrl(?string $path): ?string
    {
        if (blank($path)) {
            return $path;
        }

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://') || str_starts_with($path, '/')) {
            return $path;
        }

        return Storage::disk('public')->url($path);
    }
}

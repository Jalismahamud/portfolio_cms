<?php

namespace App\Models\Concerns;

use Illuminate\Support\Facades\Cache;

/**
 * Flushes the whole page cache whenever a model using this trait is
 * saved or deleted, so public pages never serve stale data after an
 * admin edit.
 */
trait ClearsPageCache
{
    protected static function bootClearsPageCache(): void
    {
        static::saved(fn () => Cache::flush());
        static::deleted(fn () => Cache::flush());
    }
}

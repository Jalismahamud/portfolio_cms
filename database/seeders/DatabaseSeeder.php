<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\SiteSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@gmail.com',
        ]);

        SiteSetting::firstOrCreate([], [
            'key' => 'branding',
            'site_name' => 'Jalis Mahamud',
            'login_heading' => 'Welcome back',
            'login_description' => 'Sign in to manage your portfolio.',
        ]);

        $this->call(PortfolioSeeder::class);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->index(['is_published', 'published_at']);
            $table->index('category');
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->index('sort_order');
        });

        Schema::table('project_images', function (Blueprint $table) {
            $table->index(['project_id', 'sort_order']);
        });

        Schema::table('experiences', function (Blueprint $table) {
            $table->index('sort_order');
        });

        Schema::table('contact_submissions', function (Blueprint $table) {
            $table->index('is_read');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->dropIndex(['is_published', 'published_at']);
            $table->dropIndex(['category']);
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->dropIndex(['sort_order']);
        });

        Schema::table('project_images', function (Blueprint $table) {
            $table->dropIndex(['project_id', 'sort_order']);
        });

        Schema::table('experiences', function (Blueprint $table) {
            $table->dropIndex(['sort_order']);
        });

        Schema::table('contact_submissions', function (Blueprint $table) {
            $table->dropIndex(['is_read']);
        });
    }
};

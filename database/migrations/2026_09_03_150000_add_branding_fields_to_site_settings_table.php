<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->string('site_name')->nullable()->after('value');
            $table->string('logo')->nullable()->after('site_name');
            $table->string('favicon')->nullable()->after('logo');
            $table->string('login_logo')->nullable()->after('favicon');
            $table->string('login_heading')->nullable()->after('login_logo');
            $table->text('login_description')->nullable()->after('login_heading');
        });
    }

    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn([
                'site_name',
                'logo',
                'favicon',
                'login_logo',
                'login_heading',
                'login_description',
            ]);
        });
    }
};

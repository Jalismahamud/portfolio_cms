<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contact_submissions', function (Blueprint $table) {
            $table->string('company')->nullable()->after('email');
            $table->string('inquiry_type')->nullable()->after('company');
            $table->string('budget_range')->nullable()->after('inquiry_type');
        });
    }

    public function down(): void
    {
        Schema::table('contact_submissions', function (Blueprint $table) {
            $table->dropColumn(['company', 'inquiry_type', 'budget_range']);
        });
    }
};

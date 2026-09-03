<?php

namespace App\Filament\Pages\Auth;

use App\Models\SiteSetting;
use Filament\Auth\Pages\Login as BaseLogin;

class Login extends BaseLogin
{
    public function getHeading(): string
    {
        return SiteSetting::current()?->login_heading ?: 'Welcome back';
    }

    public function getSubheading(): ?string
    {
        return SiteSetting::current()?->login_description ?: 'Sign in to manage your portfolio.';
    }
}

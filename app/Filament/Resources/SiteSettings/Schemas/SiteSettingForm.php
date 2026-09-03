<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('key')->default('branding'),
                Section::make('Site identity')
                    ->description('Control the public site name and brand assets from the admin panel.')
                    ->schema([
                        TextInput::make('site_name')
                            ->label('Site name')
                            ->default('Jalis Mahamud'),
                        FileUpload::make('logo')
                            ->label('Site logo')
                            ->image()
                            ->disk('public')
                            ->directory('branding')
                            ->imageEditor(),
                        FileUpload::make('favicon')
                            ->label('Favicon')
                            ->image()
                            ->disk('public')
                            ->directory('branding'),
                    ])
                    ->columns(2),
                Section::make('Admin login')
                    ->description('Customize the Filament login screen shown to administrators.')
                    ->schema([
                        FileUpload::make('login_logo')
                            ->label('Login logo')
                            ->image()
                            ->disk('public')
                            ->directory('branding')
                            ->imageEditor(),
                        TextInput::make('login_heading')
                            ->label('Login heading'),
                        Textarea::make('login_description')
                            ->label('Login description')
                            ->rows(3)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
            ]);
    }
}

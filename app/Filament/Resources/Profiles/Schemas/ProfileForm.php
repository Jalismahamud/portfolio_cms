<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('tagline'),
                Textarea::make('bio')
                    ->rows(6)
                    ->columnSpanFull(),
                FileUpload::make('profile_photo')
                    ->image()
                    ->disk('public')
                    ->directory('profile'),
                FileUpload::make('resume_file')
                    ->disk('public')
                    ->directory('resume')
                    ->acceptedFileTypes(['application/pdf']),
                TextInput::make('location'),
                TextInput::make('email')
                    ->label('Email address')
                    ->email(),
                TextInput::make('phone')
                    ->tel(),
                Toggle::make('availability_status')
                    ->required()
                    ->default(true),
                TextInput::make('years_experience')
                    ->numeric(),
                TextInput::make('projects_delivered')
                    ->numeric(),
                TextInput::make('satisfaction_rate')
                    ->numeric()
                    ->suffix('%')
                    ->minValue(0)
                    ->maxValue(100),
            ]);
    }
}

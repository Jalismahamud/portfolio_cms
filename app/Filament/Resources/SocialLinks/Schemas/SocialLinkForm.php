<?php

namespace App\Filament\Resources\SocialLinks\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SocialLinkForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('platform_name')
                    ->options([
                        'GitHub' => 'GitHub',
                        'LinkedIn' => 'LinkedIn',
                        'Twitter' => 'Twitter',
                        'Instagram' => 'Instagram',
                        'Facebook' => 'Facebook',
                        'Fiverr' => 'Fiverr',
                        'Medium' => 'Medium',
                        'StackOverflow' => 'StackOverflow',
                    ])
                    ->required()
                    ->searchable(),
                TextInput::make('href')
                    ->label('URL')
                    ->url()
                    ->required(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

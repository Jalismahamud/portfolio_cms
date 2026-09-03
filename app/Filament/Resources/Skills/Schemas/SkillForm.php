<?php

namespace App\Filament\Resources\Skills\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class SkillForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('icon')
                    ->required()
                    ->options([
                        'code' => 'Code',
                        'server' => 'Server',
                        'database' => 'Database',
                        'globe' => 'Globe',
                        'mobile-screen' => 'Mobile',
                        'code-branch' => 'Code Branch',
                    ])
                    ->helperText('Font Awesome icon shown on the About section skill card.'),
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

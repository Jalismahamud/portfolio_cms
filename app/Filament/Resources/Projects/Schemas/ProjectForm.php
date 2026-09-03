<?php

namespace App\Filament\Resources\Projects\Schemas;

use App\Models\Technology;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true),
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->rows(3)
                    ->columnSpanFull(),
                Textarea::make('long_description')
                    ->rows(5)
                    ->columnSpanFull(),
                TextInput::make('github_url')
                    ->url(),
                TextInput::make('live_url')
                    ->url(),
                Repeater::make('features')
                    ->simple(
                        TextInput::make('feature')->required(),
                    )
                    ->reorderable()
                    ->reorderableWithDragAndDrop()
                    ->columnSpanFull(),
                Repeater::make('challenges')
                    ->simple(
                        TextInput::make('challenge')->required(),
                    )
                    ->reorderable()
                    ->reorderableWithDragAndDrop()
                    ->columnSpanFull(),
                Select::make('technologies')
                    ->relationship('technologies', 'name')
                    ->multiple()
                    ->searchable()
                    ->preload()
                    ->options(fn () => Technology::query()->orderBy('sort_order')->pluck('name', 'id'))
                    ->columnSpanFull(),
                Toggle::make('is_featured')
                    ->required()
                    ->default(false),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

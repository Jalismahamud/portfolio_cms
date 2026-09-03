<?php

namespace App\Filament\Resources\Experiences\Schemas;

use App\Models\Technology;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ExperienceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('company')
                    ->required(),
                TextInput::make('location'),
                DatePicker::make('start_date')
                    ->required(),
                DatePicker::make('end_date')
                    ->helperText('Leave blank if this is the current position ("Present").'),
                TagsInput::make('employment_types')
                    ->label('Employment types')
                    ->placeholder('e.g. Full-time, OnSite')
                    ->columnSpanFull(),
                Repeater::make('description')
                    ->label('Key responsibilities')
                    ->simple(
                        TextInput::make('bullet')->required(),
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
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

<?php

namespace App\Filament\Resources\Education\Schemas;

use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class EducationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('degree')
                    ->required(),
                TextInput::make('institution')
                    ->required(),
                TextInput::make('location'),
                TextInput::make('start_year')
                    ->required()
                    ->numeric(),
                TextInput::make('end_year')
                    ->numeric(),
                TextInput::make('grade'),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
                Repeater::make('highlights')
                    ->label('Key subjects / highlights')
                    ->simple(
                        TextInput::make('highlight')->required(),
                    )
                    ->reorderable()
                    ->reorderableWithDragAndDrop()
                    ->columnSpanFull(),
                Repeater::make('projects_note')
                    ->label('Projects')
                    ->simple(
                        TextInput::make('project')->required(),
                    )
                    ->reorderable()
                    ->reorderableWithDragAndDrop()
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}

<?php

namespace App\Filament\Resources\SiteSettings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SiteSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('key')
            ->columns([
                TextColumn::make('site_name')
                    ->label('Site name')
                    ->placeholder('Not configured'),
                TextColumn::make('logo')
                    ->label('Logo')
                    ->formatStateUsing(fn (?string $state) => filled($state) ? 'Configured' : 'Default'),
                TextColumn::make('favicon')
                    ->label('Favicon')
                    ->formatStateUsing(fn (?string $state) => filled($state) ? 'Configured' : 'Default'),
                TextColumn::make('login_heading')
                    ->label('Login heading')
                    ->placeholder('Default'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}

import { NgModule } from '@angular/core';
import { ColorButtonComponent } from './color-button/color-button';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { MenuBarComponent } from './menu-bar/menu-bar';
import { FavoriteButtonComponent } from './favorite-button/favorite-button';

@NgModule({
	declarations: [ColorButtonComponent,
    MenuBarComponent,
    FavoriteButtonComponent],
	imports: [CommonModule,IonicModule, PipesModule],
	exports: [ColorButtonComponent,
    MenuBarComponent,
    FavoriteButtonComponent]
})
export class ComponentsModule {}

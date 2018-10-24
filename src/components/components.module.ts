import { NgModule } from '@angular/core';
import { ColorButtonComponent } from './color-button/color-button';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
	declarations: [ColorButtonComponent],
	  imports: [CommonModule,IonicModule, PipesModule],
	exports: [ColorButtonComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelsPage } from './feels';
import { PoemGridPageModule } from '../poem-grid/poem-grid.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FeelsPage,
  ],
    imports: [
        ComponentsModule,
        PoemGridPageModule,
        IonicPageModule.forChild(FeelsPage),
  ],
})
export class FeelsPageModule {}

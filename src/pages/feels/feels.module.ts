import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelsPage } from './feels';

@NgModule({
  declarations: [
    FeelsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeelsPage),
  ],
})
export class FeelsPageModule {}

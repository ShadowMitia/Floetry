import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemOverlayPage } from '../poem-overlay/poem-overlay';

@NgModule({
  declarations: [
    PoemOverlayPage,
  ],
    imports: [
    IonicPageModule.forChild(PoemOverlayPage),
  ],
})
export class PoemOverlayPageModule {}

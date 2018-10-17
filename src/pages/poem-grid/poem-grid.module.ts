import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemGridPage } from './poem-grid';
import { PoemOverlayPageModule } from '../poem-overlay/poem-overlay.module';

@NgModule({
  declarations: [
      PoemGridPage
  ],
    imports: [
        PoemOverlayPageModule,
        IonicPageModule.forChild(PoemGridPage),
  ],
})
export class PoemGridPageModule {}

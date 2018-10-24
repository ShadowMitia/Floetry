import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemGridPage } from './poem-grid';
import { PoemOverlayPageModule } from '../poem-overlay/poem-overlay.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
      PoemGridPage
  ],
    imports: [
        PoemOverlayPageModule,
        PipesModule,
        IonicPageModule.forChild(PoemGridPage),
  ],
})
export class PoemGridPageModule {}

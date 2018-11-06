import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemOverlayPage } from '../poem-overlay/poem-overlay';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PoemOverlayPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(PoemOverlayPage),
  ],
})
export class PoemOverlayPageModule {}

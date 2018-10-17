import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelsPage } from './feels';
import { PoemGridPage } from '../poem-grid/poem-grid';

@NgModule({
  declarations: [
    FeelsPage,
  ],
    imports: [        
        IonicPageModule.forChild(FeelsPage),
  ],
})
export class FeelsPageModule {}

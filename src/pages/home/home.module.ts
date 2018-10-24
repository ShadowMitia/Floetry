import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from './../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
	      ComponentsModule,
        PipesModule,
	      IonicPageModule.forChild(HomePage),
    ],
})
export class HomePageModule {}

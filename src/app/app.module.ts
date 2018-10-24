import { FeelsPageModule } from '../pages/feels/feels.module'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { PoemGridPageModule } from '../pages/poem-grid/poem-grid.module';
import { PoemOverlayPageModule } from '../pages/poem-overlay/poem-overlay.module';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
      BrowserModule,
      ComponentsModule,
      IonicModule.forRoot(MyApp),
      HomePageModule,
	    FeelsPageModule,
      PoemGridPageModule,
      PoemOverlayPageModule,
      PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

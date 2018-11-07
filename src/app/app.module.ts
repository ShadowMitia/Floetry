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
import { ProfilePageModule } from '../pages/profile/profile.module';
import { PoemApiProvider } from '../providers/poem-api/poem-api';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { firebaseConfig } from '../config';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { SignupPageModule } from '../pages/signup/signup.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
      BrowserModule,
      ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
      HomePageModule,
	    FeelsPageModule,
      PoemGridPageModule,
    PoemOverlayPageModule,
    SignupPageModule,
    PipesModule,
    LoginPageModule,
    HttpClientModule,
	  ProfilePageModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PoemApiProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}

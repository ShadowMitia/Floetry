import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ProfilePage } from '../../pages/profile/profile';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    info = {
        email: "",
        password: ""
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events, private toastCtrl : ToastController, private auth: AuthenticationProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  tryLogin() {
    this.auth.signInWithEmail(this.info)
      .then((value)=>{
        setTimeout(() => {
          this.navCtrl.popToRoot();
          this.navCtrl.push(ProfilePage);
          this.toastCtrl.create({
            message: "Login successfull!",
            duration: 2000
          }).present();
        }, 300);
      })
      .catch((value) => {
        console.error(value);
      this.toastCtrl.create({
        message: "Unknown username or password",
        duration: 2000,
        position: "bottom"
      }).present();
    });

  }

  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }
}

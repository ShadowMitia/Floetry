import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ProfilePage } from '../../pages/profile/profile';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { SignupPage } from '../signup/signup';

/**
 * Login page.
 *
 * Used to log on the website.
 * 
 * @constructor
 * @param {NavController} navCtrl - Required for navigation on the website.
 * @param {NavParams} navParams - Parameters retrieved from last page.
 * @param {ToastController} toastCtrl - Allows you to use pop up notification coming
 * from either the top or the bottom of the screen.
 * @param {AuthenticationProvider} auth - User's account authentication.
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

  /** Tries to log in, using the user's email adress and password 
  * @param {String, String} info - the user's account information, email and password respectively.
  */
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

  /** Goes to the signup Page */
  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }
}

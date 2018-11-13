import { Component } from '@angular/core';

import { ProfilePage } from '../../pages/profile/profile';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * MenuBar component.
 *
 * A menu bar with three options : Home, Discover and Profile.
 *
 * @constructor
 * @param {NavController} navCtrl - Enables navigation in the website.
 * @param {ToastController} toastCtrl - Allows you to use pop up notification coming
 * from either the top or the bottom of the screen.
 * @param {AuthenticationProvider} auth - User's account authentication.
 * @param {AngularFireDatabase} db - Website's database.
 */
@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent {

  showProfilePic: boolean = false; /** Selects if the profile pic is showing or not. */

  constructor(private navCtrl: NavController, private toastCtrl : ToastController, public auth: AuthenticationProvider, private db : AngularFireDatabase) {
    console.log('Hello MenuBarComponent Component');
    let node = this.db.database.ref("poems/");

    setTimeout(()=>this.checkLoggedIn(), 1000);
  }

  /** Executes itself when the page containing the component inits itself.*/
  ngOnInit() {
    this.checkLoggedIn();
  }

  /** Checks if the user is logged in. */
  checkLoggedIn() {
    this.showProfilePic = this.auth.isUserLoggedIn();
  }

  /** Move to home page */
    goToHome() {
      this.checkLoggedIn();
      this.navCtrl.popToRoot();
  }

  /** Move to profile page */
  goToProfile()
	{
    if (this.auth.isUserLoggedIn()) {
      this.checkLoggedIn();
        this.navCtrl.push(ProfilePage);
      } else {
        this.navCtrl.push(LoginPage);
      }
	}

	/** Springs the discover toast */
    goToDiscover() {
      this.checkLoggedIn();
    let toast = this.toastCtrl.create({
      message: "Discover is coming soon", duration: 2000, position: 'top'
    });

    toast.present();
  }


}

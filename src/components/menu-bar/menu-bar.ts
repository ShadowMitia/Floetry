import { Component } from '@angular/core';

import { ProfilePage } from '../../pages/profile/profile';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the MenuBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent {

  showProfilePic: boolean = false;

  constructor(private navCtrl: NavController, private toastCtrl : ToastController, private storage : Storage, public auth: AuthenticationProvider) {
    console.log('Hello MenuBarComponent Component');

  }

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    this.showProfilePic = this.auth.isUserLoggedIn();
  }

    goToHome() {
      this.checkLoggedIn();
      this.navCtrl.popToRoot();
  }

  goToProfile()
	{
    if (this.auth.isUserLoggedIn()) {
      this.checkLoggedIn();
        this.navCtrl.push(ProfilePage);
      } else {
        this.navCtrl.push(LoginPage);
      }
	}

    goToDiscover() {
      this.checkLoggedIn();
    let toast = this.toastCtrl.create({
      message: "Discover is coming soon", duration: 2000, position: 'top'
    });

    toast.present();
  }


}

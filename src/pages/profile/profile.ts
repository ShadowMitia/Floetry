import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	
	state : 'Info';
	states: any = {
		'Info': [
		'Name : Jean', 'Surname : Peuplus', 'Age : 56'
		],
		'Fav': [
		
		]
	};

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  getItems(type: any) {
    return this.states[type];
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels';
import { ProfilePage } from '../profile/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
* Home page.
*
* The home page, containing the primary emotions.
*
* @constructor
* @param {NavController} navCtrl - Required for navigation on the website.
* @param {NavParams} navParams - Parameters retrieved from last page.
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  feelings;

	constructor(public navCtrl: NavController, private auth: AuthenticationProvider)
	  {
      this.feelings = [
        {emotion:"happy", color:"#F7D26C"},
          {emotion:"sad", color:"#67829F"},
          {emotion:"angry", color:"#A70032"},
          {emotion:"anxious", color:"#D25668"},
          {emotion:"ashamed", color:"#C383D7"},
          {emotion:"hurt", color:"#EB5593"},
      ];
	}

	/** Go to next page, using the clicked emotion and color as parameters */
	getFeels(feel, nBtn: number)
	{
		this.navCtrl.push(FeelsPage, {feel:feel.emotion, color:feel.color});
	}



}

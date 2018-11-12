import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels';
import { ProfilePage } from '../profile/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  feelings;

	constructor(public navCtrl: NavController, private auth: AuthenticationProvider, private poemApi: PoemApiProvider)
	  {
      this.feelings = [
        {emotion:"happy", color:"#F7D26C"},
          {emotion:"sad", color:"#67829F"},
          {emotion:"angry", color:"#A70032"},
          {emotion:"anxious", color:"#D25668"},
          {emotion:"ashamed", color:"#C383D7"},
          {emotion:"hurt", color:"#EB5593"},
          {emotion:"depressed", color:"#1C4267"},
          {emotion:"jealous", color:"#BEDFA4"}
      ];
	}

  ngOnInit() {
    /*
    console.log("poem api");

    this.poemApi.getPoemsByFeelings("Happy", "Content")
      .then((val) => {
        console.log("query", val);
      });

    this.poemApi.getPoemById("-LQsRqtkOAazmtfL7E0u")
      .then((val) => {
        console.log(val);
      });
*/
  }

	getFeels(feel, nBtn: number)
	{
		this.navCtrl.push(FeelsPage, {feel:feel.emotion, color:feel.color});
	}



}

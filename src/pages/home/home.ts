import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

    feelings;

	constructor(public navCtrl: NavController) 
	  {
      this.feelings = [
          {emotion:"happy", color:"red"},
          {emotion:"sad", color:"#00FF00"},
          {emotion:"angry", color:"#0000FF"},
          {emotion:"anxious", color:"#11DD11"},
          {emotion:"embarrassed", color:"purple"},
          {emotion:"hurt", color:"rgb(100, 100, 100)"},
          {emotion:"depressed", color:""},
          {emotion:"jealous", color:""}
      ];
	}

	getFeels(feel: string, nBtn: number)
	{
		this.navCtrl.push(FeelsPage, {feel:feel});
	}
}

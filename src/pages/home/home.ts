import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

    feelings;

	constructor(public navCtrl: NavController)
	  {
      this.feelings = [
        {emotion:"happy", color:"#F7D26C"},
          {emotion:"sad", color:"#67829F"},
          {emotion:"angry", color:"#A70032"},
          {emotion:"anxious", color:"#D25668"},
          {emotion:"embarrassed", color:"#C383D7"},
          {emotion:"hurt", color:"#EB5593"},
          {emotion:"depressed", color:"#1C4267"},
          {emotion:"jealous", color:"#BEDFA4"}
      ];
	}

	getFeels(feel, nBtn: number)
	{
		  this.navCtrl.push(FeelsPage, {feel:feel.emotion, color:feel.color});
	}
}

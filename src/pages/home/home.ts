import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})



export class HomePage {

	constructor(public navCtrl: NavController) 
	  {

	}

	getFeels(feel: string, nBtn: number)
	{
		this.navCtrl.push(FeelsPage, {feel:feel});
	}
}

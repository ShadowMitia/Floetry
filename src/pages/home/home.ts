import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeelsPage } from '../feels/feels'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})



export class HomePage {

	fp: FeelsPage;
	constructor(public navCtrl: NavController) 
	{
		
	}

	getFeels(feel: string)
	{
		this.navCtrl.push(FeelsPage, {feel:feel});
	}
}

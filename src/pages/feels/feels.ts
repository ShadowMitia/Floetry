import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feels',
  templateUrl: 'feels.html',
})
export class FeelsPage {

	feels: string;
	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.feels = this.navParams.get('feel');
		console.log(this.feels);
		switch(this.feels) 
		{ 
			case 'Happy': 
			{ 
				//statements; 
				break; 
			} 
			case 'Sad': 
			{ 
				//statements; 
				break; 
			} 
			case 'Angry': 
			{ 
				//statements; 
				break; 
			} 
			case 'Anxious': 
			{ 
				//statements; 
				break; 
			} 
			case 'Embarassed': 
			{ 
				//statements; 
				break; 
			} 
			case 'Hurt': 
			{ 
				//statements; 
				break; 
			} 
			case 'Depressed': 
			{ 
				//statements; 
				break; 
			} 
			case 'Jealous': 
			{ 
				//statements; 
				break; 
			} 
			default: 
			{ 
				//statements; 
				break; 
			} 
		} 
	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad FeelsPage');
	}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feels',
  templateUrl: 'feels.html',
})
export class FeelsPage {

	feels: string;
	emoLst: Array<string>;
	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.feels = this.navParams.get('feel');
		console.log(this.feels);
		this.emoLst = [];
		switch(this.feels) 
		{ 
			case 'Happy': 
			{ 
				this.emoLst.push('glad', 'peppy', 'excited', 'lucky', 'content', 'gay');
				break; 
			} 
			case 'Sad': 
			{ 
				this.emoLst.push('disappointed', 'mournful', 'regretful', 'pessimistic', 'dismayed', 'disillusioned');
				break; 
			} 
			case 'Angry': 
			{ 
				this.emoLst.push('upset', 'enraged', 'violent', 'annoyed', 'furious', 'snappy');
				break; 
			} 
			case 'Anxious': 
			{ 
				this.emoLst.push('angsty', 'confused', 'distressed', 'nervous', 'tense', 'fearful');
				break; 
			} 
			case 'Embarassed': 
			{ 
				this.emoLst.push('awkward', 'shameful', 'unsettled', 'sheepish', 'shy', 'uneasy');
				break; 
			} 
			case 'Hurt': 
			{ 
				this.emoLst.push('ruined', 'wounded', 'damaged', 'abused', 'discomforted', 'injured');
				break; 
			} 
			case 'Depressed': 
			{ 
				this.emoLst.push('downhearted', 'low', 'dispirited', 'gloomy', 'morose', 'oppressed');
				break; 
			} 
			case 'Jealous': 
			{ 
				this.emoLst.push('bitter', 'envious', 'selfish', 'desirous', 'green', 'greedy');
				break; 
			} 
			default: 
			{ 
				//statements; 
				break; 
			} 
		} 
		console.log(this.emoLst);
	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad FeelsPage');
	}

}

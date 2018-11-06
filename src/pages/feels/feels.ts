import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoemGridPage } from '../poem-grid/poem-grid';

@IonicPage()
@Component({
  selector: 'page-feels',
  templateUrl: 'feels.html',
})
export class FeelsPage {

	feels: string;
	  emoLst: Array<any>;
    feelsColor:string;
	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.feels = this.navParams.get('feel');
      this.feelsColor = this.navParams.get('color');
      this.feels = this.feels.toLowerCase();
      this.feels = this.feels.trim();

      console.log("Got emotion: ", this.feels);

		  let emotions = {
          "happy": {subEmotions: ['glad', 'peppy', 'excited', 'lucky', 'content', 'gay'],
                    color: "#FF0000"
                   },
          "sad":  {subEmotions: ['disappointed', 'mournful', 'regretful', 'pessimistic', 'dismayed', 'disillusioned'],
                   color: "#FF0000"
                  },
          "angry":  {subEmotions: ['upset', 'enraged', 'violent', 'annoyed', 'furious', 'snappy'],
                     color: "#FF0000"
                    },
          "anxious":  {subEmotions: ['angsty', 'confused', 'distressed', 'nervous', 'tense', 'fearful'],
                       color: "#FF0000"
                      },
          "embarrassed":  {subEmotions: ['awkward', 'shameful', 'unsettled', 'sheepish', 'shy', 'uneasy'],
                           color: "#FF0000"
                          },
          "hurt":  {subEmotions: ['ruined', 'wounded', 'damaged', 'abused', 'discomforted', 'injured'],
                    color: "#FF0000"
                   },
          "depressed":  {subEmotions: ['downhearted', 'low', 'dispirited', 'gloomy', 'morose', 'oppressed'],
                         color: "#FF0000"
                        },
          "jealous":  {subEmotions: ['bitter', 'envious', 'selfish', 'desirous', 'green', 'greedy'],
                       color: "#FF0000"
                      }
      };

      this.emoLst = emotions[this.feels];

      console.log("Sub emotion list: ", this.emoLst);


	}

    openPage(emotion:string) {
        this.navCtrl.push(PoemGridPage, {feel: this.feels, emotion: emotion});
    }

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad FeelsPage');
	}

}

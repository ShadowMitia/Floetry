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
                    color: "#F7D26C"
                   },
          "sad":  {subEmotions: ['disappointed', 'mournful', 'regretful', 'pessimistic', 'dismayed', 'disillusioned'],
                   color: "#67829F"
                  },
          "angry":  {subEmotions: ['upset', 'enraged', 'violent', 'annoyed', 'furious', 'snappy'],
                     color: "#A70032"
                    },
          "anxious":  {subEmotions: ['angsty', 'confused', 'distressed', 'nervous', 'tense', 'fearful'],
                       color: "#D25668"
                      },
          "ashamed":  {subEmotions: ['awkward', 'shameful', 'unsettled', 'sheepish', 'shy', 'uneasy'],
                           color: "#C383D7"
                          },
          "hurt":  {subEmotions: ['ruined', 'wounded', 'damaged', 'abused', 'discomforted', 'injured'],
                    color: "#EB5593"
                   },
          "depressed":  {subEmotions: ['downhearted', 'low', 'dispirited', 'gloomy', 'morose', 'oppressed'],
                         color: "#1C4267"
                        },
          "jealous":  {subEmotions: ['bitter', 'envious', 'selfish', 'desirous', 'green', 'greedy'],
                       color: "#BEDFA4"
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

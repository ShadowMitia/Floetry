import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoemGridPage } from '../poem-grid/poem-grid';

/**
* Feels page
*
* Contain all the advanced emotions from the base emotion selected in the home page.
* Leads to the poems page.
*
* @constructor
* @param {NavController} navCtrl - Required for navigation on the website.
* @param {NavParams} navParams - Parameters retrieved from last page.
*/

@IonicPage()
@Component({
  selector: 'page-feels',
  templateUrl: 'feels.html',
})
export class FeelsPage {

	feels: string; /** Primary emotion recieved from the home page */
	  emoLst: Array<any>; /** List of advanced emotions */
    feelsColor:string; /** Color related to the primary emotion recieved from the home page */
	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
		this.feels = this.navParams.get('feel');
      this.feelsColor = this.navParams.get('color');
      this.feels = this.feels.toLowerCase();
      this.feels = this.feels.trim();

      console.log("Got emotion: ", this.feels);

		  let emotions = {
          "happy": {subEmotions: ['content', 'in love', 'inspired', 'thankful'],
                    color: "#F7D26C"
                   },
          "sad":  {subEmotions: ['depressed', 'mournful', 'regretful', 'disappointed'],
                   color: "#67829F"
                  },
          "angry":  {subEmotions: ['defensive', 'disgusted', 'frustrated', 'offended'],
                     color: "#A70032"
                    },
          "anxious":  {subEmotions: ['afraid', 'worried', 'stressed', 'nervous'],
                       color: "#D25668"
                      },
          "ashamed":  {subEmotions: ['isolated', 'pathetic', 'inferior', 'guilty'],
                           color: "#C383D7"
                          },
          "hurt":  {subEmotions: ['abandonned', 'betrayed', 'shocked', 'victimized'],
                    color: "#EB5593"
                   }
		  //"depressed":  {subEmotions: ['downhearted', 'low', 'dispirited', 'gloomy', 'morose', 'oppressed'],
                    //color: "#1C4267"
                    //},
          //"jealous":  {subEmotions: ['bitter', 'envious', 'selfish', 'desirous', 'green', 'greedy'],
                    // color: "#BEDFA4"
                    //}
      };

      this.emoLst = emotions[this.feels];

      console.log("Sub emotion list: ", this.emoLst);


	}

	/** Opens the next page */
    openPage(emotion:string) {
        this.navCtrl.push(PoemGridPage, {feel: this.feels, emotion: emotion});
    }

	/** Test function to check if the page loaded correctly */
	ionViewDidLoad()
	{
		console.log('ionViewDidLoad FeelsPage');
	}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PoemApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoemApiProvider {

  poems: [{
    author: string,
    title: string,
    emotion: string,
    feels: string,
    text: string
  }] = [
    {
      author: "toto",
      emotion: "happy",
      feels: "glad",
      title: "Poem title",
      text: "This is a poem"
    },
    {
      author: "toto",
      emotion: "happy",
      feels: "glad",
      title: "Poem title",
      text: "This is a poem with a loooooooooooooooooooooooooooooooooooooooooooooooooooong\n text and it's super super annoying that's it's supppppppppppppppppppppppper long.\n\n\nThis is a poem with a loooooooooooooooooooooooooooooooooooooooooooooooooooong text and it's super super annoying that's it's supppppppppppppppppppppppper long."
    },
  ];

  constructor(public http: HttpClient) {
    console.log('Hello PoemApiProvider Provider');
  }

  getPoemsByFeeling(feels: string, emotion: string) {
    feels = feels.toLowerCase();
    emotion = emotion.toLowerCase();

    let poem = this.poems.filter(poem => poem.emotion === emotion);
    poem.filter(poem => poem.feels === feels);

    return poem;
  }

  getPoemsByAuthor(author: string) {
    author = author.toLowerCase();
    return this.poems.filter(poem => poem.author === author);
  }

}

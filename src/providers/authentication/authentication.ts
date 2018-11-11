import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from 'firebase/app';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private user: firebase.User;
  private userData: {
    favorites: Array<string>,
    firstname: string,
    lastname: string
  } = {
    favorites: new Array<string>(),
    firstname:"",
    lastname: ""
  };

  constructor(public afAuth: AngularFireAuth, private toastCtrl : ToastController, private db : AngularFireDatabase) {
    console.log('Hello AuthenticationProvider Provider');

    this.afAuth.authState.subscribe(user => {
			this.user = user;
      let node = this.db.database.ref("users/"+this.user.uid);
      node.on("value", (val) => {
        let data = val.val();
        this.userData.firstname = data.firstname ? data.firstname : "";
        this.userData.lastname = data.lastname ? data.lastname : "";
        this.userData.favorites = data.favorites ? data.favorites : new Array<string>();
        console.log(data);
      });
    });

    let poems = [{
title: "C'est merveilleux",
author: "Edith Piaf",
text:`C'est merveilleux
Quand on est tous les deux
Le bonheur nous surveille
C'est merveilleux
Quand on est amoureux
Les beaux jours se réveillent
C'est merveilleux
La vie est peinte en bleu
A grands coups de soleil
Puisque je t'aime et que tu m'aimes
C'est merveilleux`,
      emotion: "happy",
      feeling: "in Love"
},
{
  title: "C'est merveilleux",
  author: "Edith Piaf",
  text:`C'est merveilleux
Quand on est tous les deux
Le bonheur nous surveille
C'est merveilleux
Quand on est amoureux
Les beaux jours se réveillent
C'est merveilleux
La vie est peinte en bleu
A grands coups de soleil
Bisque je t'aime et que tu m'aimes
C'est merveilleux`,
  emotion: "happy",
  feeling: "in Love"
}];



    // for (let p of poems) {
    //   this.db.database.ref("poems").push(p);
    // }
  }

  ngOnInit() {

    console.log("ini", this.user, this.userData);
  }

  createAccount(info) {
    this.afAuth.auth.createUserWithEmailAndPassword(info.email, info.password)
      .then((value) => {
        this.toastCtrl.create({message: "Account successfully created!", duration: 2000}).present();
        this.afAuth.authState.subscribe(user => {
			    this.user = user;
          this.user.sendEmailVerification();
          this.user.updateProfile({
            displayName: info.username,
            photoURL: ""
          });

          this.db.database.ref("users/"+this.user.uid).set({
            firstname: info.firstname,
            lastname: info.lastname,
            favorites: new Array<string>()
          });
        });


      } )
      .catch(function(error) {
        console.error(error);
  });
  }

  signInWithEmail(credentials) {
		console.log('Sign in with email', credentials);
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			                                                 credentials.password);
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((value) => this.toastCtrl.create({message: "Succesffully logged out!", duration: 2000}).present() )
      .catch((value) => console.error(value));
  }

  isUserLoggedIn() {
    console.log(this.user);
    if (this.user) {
      console.log("User logged in");
      return true;
    } else {
      console.log("User not logged in");
      return false;
    }
  }

  getUserDisplayName() {
    return this.user.displayName;
  }

  getUserPhotoURL() {
    return this.user.photoURL;
  }

  getUserEmail() {
    return this.user.email;
  }

  getUserID() {
    return this.user.uid;
  }

  getUserFavorites() {
    return this.userData.favorites;
  }

  getUserFirstname() {
    return this.userData.firstname;
  }

  getUserLastname() {
    return this.userData.lastname;
  }

  addPoemToFavorites(poemId: string) {
    console.log("add", this.userData.favorites);
    if (!this.userData.favorites.find((val) => val == poemId)) {
      this.userData.favorites = [...this.userData.favorites, poemId];
    }
    let node = this.db.database.ref("users/"+this.getUserID()+"/favorites").set(Array.from(this.userData.favorites));
    console.log("after add", this.userData.favorites);

  }

  removePoemFromFavorites(poemId: String) {
    this.userData.favorites = this.userData.favorites.filter((val) => val != poemId);
    let node = this.db.database.ref("users/"+this.getUserID()+"/favorites").set(Array.from(this.userData.favorites));
  }
}

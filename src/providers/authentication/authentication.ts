import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from 'firebase/app';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

/**
 * Authentication provider.
 *
 * Provider used to get the users from the database.
 * 
 * @constructor
 * @param {AngularFireAuth} afAuth - User account.
 * @param {ToastController} toastCtrl - Sets up toast window.
 * @param {AngularFireDatabase} db : the website's database.
 */
@Injectable()
export class AuthenticationProvider {

  private user: firebase.User; /** A user from the database */
  private userData: {
    favorites: Array<string>, /** List of favorites */
    firstname: string, /** First name */
    lastname: string /** Last name */
  } = {
    favorites: [],
    firstname:"",
    lastname: ""
  };

  constructor(public afAuth: AngularFireAuth, private toastCtrl : ToastController, private db : AngularFireDatabase) {
    console.log('Hello AuthenticationProvider Provider');

    this.afAuth.authState.subscribe(user => {
      console.log("subscribed!");
			this.user = user;
      let node = this.db.database.ref("users/"+this.user.uid);
      node.on("value", (val) => {
        console.log("value", this.user.uid);
        let data = val.val();
        this.userData.firstname = data.firstname;
        this.userData.lastname = data.lastname;
        this.userData.favorites = data.favorites ? data.favorites : new Array<string>();
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

  }

  /** Create a user account by using user info as a parameter */
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

  /** Signs the user in through their credentials */
  signInWithEmail(credentials) {
		console.log('Sign in with email', credentials);
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			                                                 credentials.password);
  }

  /** Logs the user out */
  logout() {
    this.afAuth.auth.signOut()
      .then((value) => this.toastCtrl.create({message: "Succesffully logged out!", duration: 2000}).present() )
      .catch((value) => console.error(value));
  }

  /** Checks if the user is logged in */
  isUserLoggedIn() {
    var user = this.afAuth.auth.currentUser;
    if (user) {
      console.log("User logged in");
      return true;
    } else {
      console.log("User not logged in");
      return false;
    }
  }

  getUser() {
    return this.afAuth.auth.currentUser;
  }

  getUserFavorites() {
    return this.userData.favorites ? this.userData.favorites : [];
  }

  getUserFirstname() {
    return this.userData.firstname;
  }

  getUserLastname() {
    return this.userData.lastname;
  }

  /** Adds a poem to the user's favorites 
  * * @param poemId - the ID of a poem
  */
  addPoemToFavorites(poemId: string) {
    if (!this.userData) return;
    if (this.userData.favorites && !this.userData.favorites.find((val) => val == poemId)) {
      this.userData.favorites = [...this.userData.favorites, poemId];
      let node = this.db.database.ref("users/"+this.afAuth.auth.currentUser.uid+"/favorites").set(Array.from(this.userData.favorites));
    }
  }

  /** Removes a poem from the user's favorites
  * @param poemId - the ID of a poem
  */
  removePoemFromFavorites(poemId: String) {
    if (!this.userData) return;
    if (this.userData.favorites.find((val) => val != poemId)) {
    this.userData.favorites = this.userData.favorites.filter((val) => val != poemId);
      let node = this.db.database.ref("users/"+this.afAuth.auth.currentUser.uid+"/favorites").set(Array.from(this.userData.favorites));
    }
  }
}

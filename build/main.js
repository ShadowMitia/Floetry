webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_poem_api_poem_api__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, poemApi, auth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poemApi = poemApi;
        this.auth = auth;
        this.db = db;
        this.show = true;
        this.favoritePoems = [];
        this.userInfo = {
            displayName: this.auth.getUserDisplayName(),
            photoURL: this.auth.getUserPhotoURL(),
            email: this.auth.getUserEmail(),
            favorites: this.auth.getUserFavorites(),
            firstname: this.auth.getUserFirstname(),
            lastname: this.auth.getUserLastname()
        };
        var node = this.db.database.ref("poems/");
        node.once("value", function (value) {
            for (var _i = 0, _a = _this.userInfo.favorites; _i < _a.length; _i++) {
                var poemKey = _a[_i];
                var poem = value.val()[poemKey];
                _this.favoritePoems = _this.favoritePoems.concat([poem]);
            }
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.toggle = function (arg) {
        this.show = !this.show;
    };
    ProfilePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.popToRoot();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{userInfo.displayName}}</ion-title>\n    <button ion-button (click)="logout()">Logout</button>\n  </ion-navbar>\n\n   <ion-segment [(ngModel)]="state">\n    <ion-segment-button value="info" (click)="toggle(\'info\')">\n      Profile\n    </ion-segment-button>\n    <ion-segment-button value="fav" (click)="toggle(\'fav\')">\n      Favorites\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content padding>\n	<div *ngIf="!show">\n    <ion-avatar>\n		  <img src="../assets/imgs/Jean.jpg">\n    </ion-avatar>\n    <p>Username: {{userInfo.displayName}}</p>\n    <p>Email: {{userInfo.email}} </p>\n    <p>First name: {{userInfo.firstname}}</p>\n    <p>Last name: {{userInfo.lastname}}</p>\n	</div>\n	<div *ngIf="show">\n    <ion-list>\n		  <ion-list-header>Favorites</ion-list-header>\n		  <ion-item *ngFor="let item of favoritePoems">\n		    <ion-label>{{item.title}}</ion-label>\n		  </ion-item>\n    </ion-list>\n    <!-- <ion-list>\n         <ion-item-sliding #item>\n         <ion-item>\n         Item\n         </ion-item>\n         <ion-item-options side="left">\n         <button ion-button (click)="favorite(item)">Favorite</button>\n         <button ion-button color="danger" (click)="share(item)">Share</button>\n         </ion-item-options>\n\n         <ion-item-options side="right">\n         <button ion-button (click)="unread(item)">Unread</button>\n         </ion-item-options>\n         </ion-item-sliding>\n         </ion-list> -->\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_poem_api_poem_api__["a" /* PoemApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PoemApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PoemApiProvider = /** @class */ (function () {
    function PoemApiProvider(db) {
        this.db = db;
        console.log('Hello PoemApiProvider Provider');
    }
    PoemApiProvider.prototype.getPoemsByFeeling = function (feels, emotion) {
        feels = feels.toLowerCase();
        emotion = emotion.toLowerCase();
        console.log(feels, emotion);
        var result = [];
    };
    PoemApiProvider.prototype.getPoemsByAuthor = function (author) {
        return [];
    };
    PoemApiProvider.prototype.getPoemsById = function (id) {
        return [];
    };
    PoemApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], PoemApiProvider);
    return PoemApiProvider;
}());

//# sourceMappingURL=poem-api.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoemGridPageModule", function() { return PoemGridPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_grid__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poem_overlay_poem_overlay_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PoemGridPageModule = /** @class */ (function () {
    function PoemGridPageModule() {
    }
    PoemGridPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__poem_grid__["a" /* PoemGridPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__poem_overlay_poem_overlay_module__["a" /* PoemOverlayPageModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__poem_grid__["a" /* PoemGridPage */]),
            ],
        })
    ], PoemGridPageModule);
    return PoemGridPageModule;
}());

//# sourceMappingURL=poem-grid.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeelsPageModule", function() { return FeelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feels__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poem_grid_poem_grid_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FeelsPageModule = /** @class */ (function () {
    function FeelsPageModule() {
    }
    FeelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feels__["a" /* FeelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__poem_grid_poem_grid_module__["PoemGridPageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feels__["a" /* FeelsPage */]),
            ],
        })
    ], FeelsPageModule);
    return FeelsPageModule;
}());

//# sourceMappingURL=feels.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feels/feels.module": [
		181
	],
	"../pages/login/login.module": [
		226
	],
	"../pages/poem-grid/poem-grid.module": [
		144
	],
	"../pages/profile/profile.module": [
		336
	],
	"../pages/signup/signup.module": [
		337
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, events, toastCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.info = {
            email: "",
            password: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        this.auth.signInWithEmail(this.info)
            .then(function (value) {
            setTimeout(function () {
                _this.navCtrl.popToRoot();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */]);
                _this.toastCtrl.create({
                    message: "Login successfull!",
                    duration: 2000
                }).present();
            }, 300);
        })
            .catch(function (value) {
            console.error(value);
            _this.toastCtrl.create({
                message: "Unknown username or password",
                duration: 2000,
                position: "bottom"
            }).present();
        });
    };
    LoginPage.prototype.goToSignupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/login/login.html"*/'<!--\n     Generated template for the LoginPage page.\n\n     See http://ionicframework.com/docs/components/#navigation for more info on\n     Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="info.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="info.password"></ion-input>\n  </ion-item>\n  <button ion-button (click)="tryLogin()">Login</button><br><br><br>\n  <button ion-button (click)="goToSignupPage()">Don\'t have an account?</button>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, auth, toast, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.info = {
            email: "",
            password: "",
            password2: "",
            username: "",
            firstname: "",
            lastname: ""
        };
        function matchingPasswords(passwordKey, confirmPasswordKey) {
            return function (group) {
                var password = group.controls[passwordKey];
                var confirmPassword = group.controls[confirmPasswordKey];
                if (password.value !== confirmPassword.value) {
                    return {
                        mismatchedPasswords: true
                    };
                }
            };
        }
        this.signup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            firstname: [''],
            lastname: [''],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        }, { validator: matchingPasswords('password', 'confirmPassword') });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.createAccount = function () {
        this.info = {
            email: this.signup.value["email"],
            password: this.signup.value["password"],
            password2: "",
            username: this.signup.value["username"],
            firstname: this.signup.value["firstname"] || "",
            lastname: this.signup.value["lastname"] || ""
        };
        this.auth.createAccount(this.info);
        this.navCtrl.popToRoot();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/signup/signup.html"*/'<!--\n     Generated template for the SignupPage page.\n\n     See http://ionicframework.com/docs/components/#navigation for more info on\n     Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup to Floetry !</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="signup" (ngSubmit)="createAccount()">\n      <ion-item>\n        <ion-label floating>Email (required) </ion-label>\n        <ion-input type="email" formControlName="email" clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Username (required)</ion-label>\n        <ion-input formControlName="username" type="text" clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password (required, 6 characters min.) </ion-label>\n        <ion-input formControlName="password" type="password" min="6"  clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Confirm password (required) </ion-label>\n        <ion-input formControlName="confirmPassword" type="password" min="6" clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>First name (optional)</ion-label>\n        <ion-input formControlName="firstname" type="text"clearInput="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Last name (optional)</ion-label>\n        <ion-input formControlName="lastname" type="text" clearInput="true"></ion-input>\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="!signup.valid">Create account!</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_poem_api_poem_api__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PoemGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoemGridPage = /** @class */ (function () {
    function PoemGridPage(navCtrl, navParams, modalCtrl, poemApi, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.poemApi = poemApi;
        this.db = db;
        this.poems = [];
        this.feels = this.navParams.get("feel");
        this.emotion = this.navParams.get("emotion");
        var node = this.db.database.ref("poems");
        node.once("value", function (value) {
            for (var _i = 0, _a = Object.keys(value.val()); _i < _a.length; _i++) {
                var poemKey = _a[_i];
                var poem = value.val()[poemKey];
                poem.poemId = poemKey;
                if (poem.emotion.toLowerCase() == _this.feels.toLowerCase() && poem.feeling.toLowerCase() == _this.emotion.toLowerCase()) {
                    _this.poems = _this.poems.concat([poem]);
                }
            }
        });
    }
    PoemGridPage.prototype.openOverlay = function (poem) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__["a" /* PoemOverlayPage */], { poem: poem });
        profileModal.present();
    };
    PoemGridPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoemGridPage');
    };
    PoemGridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-poem-grid',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/poem-grid/poem-grid.html"*/'<!--\n  Generated template for the PoemGridPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <menu-bar></menu-bar>\n\n  <div>\n    <color-button insideText="{{feels}}"></color-button>\n    <color-button insideText="{{emotion}}" size="25"></color-button>\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n           <ion-col *ngFor="let p of poems;" (click)="openOverlay(p)" col-auto>\n               <h1>{{p.title}} by {{p.author | capitalize }}</h1>\n               <p [innerHTML]="p.text | slice:0:200 | htmlify"></p>\n               </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/poem-grid/poem-grid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_poem_api_poem_api__["a" /* PoemApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], PoemGridPage);
    return PoemGridPage;
}());

//# sourceMappingURL=poem-grid.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemOverlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PoemOverlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoemOverlayPage = /** @class */ (function () {
    function PoemOverlayPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.poem = this.params.get("poem");
        this.text = this.poem.text;
        this.title = this.poem.title;
        this.author = this.poem.author;
        this.poemId = this.poem.poemId;
        console.log("poeeeem", this.poem);
    }
    PoemOverlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoemOverlayPage');
    };
    PoemOverlayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PoemOverlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-poem-overlay',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/poem-overlay/poem-overlay.html"*/'<!--\n  Generated template for the PoemOverlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title | titlecase}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n      <favorite-button poemId="{{poem.poemId}}"></favorite-button>\n		  <share-button></share-button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <p [innerHTML]="text | htmlify"></p>\n    <br><br>\n    <p>-- {{author| capitalize}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/poem-overlay/poem-overlay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PoemOverlayPage);
    return PoemOverlayPage;
}());

//# sourceMappingURL=poem-overlay.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemOverlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PoemOverlayPageModule = /** @class */ (function () {
    function PoemOverlayPageModule() {
    }
    PoemOverlayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__["a" /* PoemOverlayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__["a" /* PoemOverlayPage */]),
            ],
        })
    ], PoemOverlayPageModule);
    return PoemOverlayPageModule;
}());

//# sourceMappingURL=poem-overlay.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_grid_poem_grid__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeelsPage = /** @class */ (function () {
    function FeelsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feels = this.navParams.get('feel');
        this.feelsColor = this.navParams.get('color');
        this.feels = this.feels.toLowerCase();
        this.feels = this.feels.trim();
        console.log("Got emotion: ", this.feels);
        var emotions = {
            "happy": { subEmotions: ['glad', 'peppy', 'excited', 'lucky', 'content', 'gay'],
                color: "#FF0000"
            },
            "sad": { subEmotions: ['disappointed', 'mournful', 'regretful', 'pessimistic', 'dismayed', 'disillusioned'],
                color: "#FF0000"
            },
            "angry": { subEmotions: ['upset', 'enraged', 'violent', 'annoyed', 'furious', 'snappy'],
                color: "#FF0000"
            },
            "anxious": { subEmotions: ['angsty', 'confused', 'distressed', 'nervous', 'tense', 'fearful'],
                color: "#FF0000"
            },
            "ashamed": { subEmotions: ['awkward', 'shameful', 'unsettled', 'sheepish', 'shy', 'uneasy'],
                color: "#FF0000"
            },
            "hurt": { subEmotions: ['ruined', 'wounded', 'damaged', 'abused', 'discomforted', 'injured'],
                color: "#FF0000"
            },
            "depressed": { subEmotions: ['downhearted', 'low', 'dispirited', 'gloomy', 'morose', 'oppressed'],
                color: "#FF0000"
            },
            "jealous": { subEmotions: ['bitter', 'envious', 'selfish', 'desirous', 'green', 'greedy'],
                color: "#FF0000"
            }
        };
        this.emoLst = emotions[this.feels];
        console.log("Sub emotion list: ", this.emoLst);
    }
    FeelsPage.prototype.openPage = function (emotion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__poem_grid_poem_grid__["a" /* PoemGridPage */], { feel: this.feels, emotion: emotion });
    };
    FeelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeelsPage');
    };
    FeelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feels',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/feels/feels.html"*/'<ion-header>\n  <menu-bar></menu-bar>\n</ion-header>\n\n\n<ion-content padding>\n	  <div text-center>\n        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">\n            <circle [style.fill]="feelsColor" cx="50%" cy="50%" r="50%" />\n        </svg>\n		<p>Tell us more details...</p>\n\n			<ion-grid>\n			<ion-row>\n				  <ion-col width-50 *ngFor="let emo of emoLst.subEmotions" (click)="openPage(emo)">\n              <color-button text="{{emo}}" fillColor="{{emoLst.color}}"></color-button>\n          </ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/feels/feels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FeelsPage);
    return FeelsPage;
}());

//# sourceMappingURL=feels.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feels_feels__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.feelings = [
            { emotion: "happy", color: "#F7D26C" },
            { emotion: "sad", color: "#67829F" },
            { emotion: "angry", color: "#A70032" },
            { emotion: "anxious", color: "#D25668" },
            { emotion: "ashamed", color: "#C383D7" },
            { emotion: "hurt", color: "#EB5593" },
            { emotion: "depressed", color: "#1C4267" },
            { emotion: "jealous", color: "#BEDFA4" }
        ];
    }
    HomePage.prototype.getFeels = function (feel, nBtn) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__feels_feels__["a" /* FeelsPage */], { feel: feel.emotion, color: feel.color });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/home/home.html"*/'<ion-header>\n  <menu-bar></menu-bar>\n</ion-header>\n\n<ion-content padding>\n	<div text-center>\n    <p>How are you feeling today ?</p>\n\n		<ion-grid>\n			<ion-row>\n				  <ion-col col-auto col-sm *ngFor="let feel of feelings">\n            <color-button (click)="getFeels(feel)"  fillColor="{{feel.color}}" text="{{feel.emotion}}">{{feel.emotion}}</color-button>\n          </ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(393);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_feels_feels_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_poem_grid_poem_grid_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_poem_overlay_poem_overlay_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_poem_api_poem_api__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_storage__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_fire_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_authentication_authentication__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feels/feels.module#FeelsPageModule', name: 'FeelsPage', segment: 'feels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poem-grid/poem-grid.module#PoemGridPageModule', name: 'PoemGridPage', segment: 'poem-grid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_0__pages_feels_feels_module__["FeelsPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_poem_grid_poem_grid_module__["PoemGridPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_poem_overlay_poem_overlay_module__["a" /* PoemOverlayPageModule */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_fire_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_poem_api_poem_api__["a" /* PoemApiProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_authentication_authentication__["a" /* AuthenticationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(afAuth, toastCtrl, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.userData = {
            favorites: new Array(),
            firstname: "",
            lastname: ""
        };
        console.log('Hello AuthenticationProvider Provider');
        this.afAuth.authState.subscribe(function (user) {
            _this.user = user;
            var node = _this.db.database.ref("users/" + _this.user.uid);
            node.on("value", function (val) {
                var data = val.val();
                _this.userData.firstname = data.firstname ? data.firstname : "";
                _this.userData.lastname = data.lastname ? data.lastname : "";
                _this.userData.favorites = data.favorites ? data.favorites : new Array();
                console.log(data);
            });
        });
        var poems = [{
                title: "C'est merveilleux",
                author: "Edith Piaf",
                text: "C'est merveilleux\nQuand on est tous les deux\nLe bonheur nous surveille\nC'est merveilleux\nQuand on est amoureux\nLes beaux jours se r\u00E9veillent\nC'est merveilleux\nLa vie est peinte en bleu\nA grands coups de soleil\nPuisque je t'aime et que tu m'aimes\nC'est merveilleux",
                emotion: "happy",
                feeling: "in Love"
            },
            {
                title: "C'est merveilleux",
                author: "Edith Piaf",
                text: "C'est merveilleux\nQuand on est tous les deux\nLe bonheur nous surveille\nC'est merveilleux\nQuand on est amoureux\nLes beaux jours se r\u00E9veillent\nC'est merveilleux\nLa vie est peinte en bleu\nA grands coups de soleil\nBisque je t'aime et que tu m'aimes\nC'est merveilleux",
                emotion: "happy",
                feeling: "in Love"
            }];
        // for (let p of poems) {
        //   this.db.database.ref("poems").push(p);
        // }
    }
    AuthenticationProvider.prototype.ngOnInit = function () {
        console.log("ini", this.user, this.userData);
    };
    AuthenticationProvider.prototype.createAccount = function (info) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(info.email, info.password)
            .then(function (value) {
            _this.toastCtrl.create({ message: "Account successfully created!", duration: 2000 }).present();
            _this.afAuth.authState.subscribe(function (user) {
                _this.user = user;
                _this.user.sendEmailVerification();
                _this.user.updateProfile({
                    displayName: info.username,
                    photoURL: ""
                });
                _this.db.database.ref("users/" + _this.user.uid).set({
                    firstname: info.firstname,
                    lastname: info.lastname,
                    favorites: new Array()
                });
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    AuthenticationProvider.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email', credentials);
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthenticationProvider.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function (value) { return _this.toastCtrl.create({ message: "Succesffully logged out!", duration: 2000 }).present(); })
            .catch(function (value) { return console.error(value); });
    };
    AuthenticationProvider.prototype.isUserLoggedIn = function () {
        console.log(this.user);
        if (this.user) {
            console.log("User logged in");
            return true;
        }
        else {
            console.log("User not logged in");
            return false;
        }
    };
    AuthenticationProvider.prototype.getUserDisplayName = function () {
        return this.user.displayName;
    };
    AuthenticationProvider.prototype.getUserPhotoURL = function () {
        return this.user.photoURL;
    };
    AuthenticationProvider.prototype.getUserEmail = function () {
        return this.user.email;
    };
    AuthenticationProvider.prototype.getUserID = function () {
        return this.user.uid;
    };
    AuthenticationProvider.prototype.getUserFavorites = function () {
        return this.userData.favorites;
    };
    AuthenticationProvider.prototype.getUserFirstname = function () {
        return this.userData.firstname;
    };
    AuthenticationProvider.prototype.getUserLastname = function () {
        return this.userData.lastname;
    };
    AuthenticationProvider.prototype.addPoemToFavorites = function (poemId) {
        console.log("add", this.userData.favorites);
        if (!this.userData.favorites.find(function (val) { return val == poemId; })) {
            this.userData.favorites = this.userData.favorites.concat([poemId]);
        }
        var node = this.db.database.ref("users/" + this.getUserID() + "/favorites").set(Array.from(this.userData.favorites));
        console.log("after add", this.userData.favorites);
    };
    AuthenticationProvider.prototype.removePoemFromFavorites = function (poemId) {
        this.userData.favorites = this.userData.favorites.filter(function (val) { return val != poemId; });
        var node = this.db.database.ref("users/" + this.getUserID() + "/favorites").set(Array.from(this.userData.favorites));
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmlify_htmlify__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_2__htmlify_htmlify__["a" /* HtmlifyPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_2__htmlify_htmlify__["a" /* HtmlifyPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * Takes a value and makes it uppercase, first word in string by default.
     */
    CapitalizePipe.prototype.transform = function (value, allWords) {
        if (allWords === void 0) { allWords = false; }
        if (value) {
            if (allWords) {
                var words = value.split(' ');
                value = words.map(function (word) { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join(' ');
            }
            else {
                value = value.substring(0, 1).toUpperCase() + value.substring(1);
            }
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize',
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlifyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the HtmlifyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var HtmlifyPipe = /** @class */ (function () {
    function HtmlifyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    HtmlifyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/\n/g, '<br/>');
    };
    HtmlifyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'htmlify',
        })
    ], HtmlifyPipe);
    return HtmlifyPipe;
}());

//# sourceMappingURL=htmlify.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ColorButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ColorButtonComponent = /** @class */ (function () {
    function ColorButtonComponent() {
        this.fillColor = "red";
        this.size = 50;
        console.log('Hello ColorButtonComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorButtonComponent.prototype, "insideText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorButtonComponent.prototype, "fillColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ColorButtonComponent.prototype, "size", void 0);
    ColorButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'color-button',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/components/color-button/color-button.html"*/'<!-- Generated template for the ColorButtonComponent component -->\n<div>\n  <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">\n    <circle [attr.cx]="size" [attr.cy]="size" [attr.r]="size" [attr.fill]="fillColor" />\n      <text [attr.x]="(size)" [attr.y]="(size)" text-anchor="middle" fill="white">{{insideText | capitalize}}</text>\n    </svg>\n<p>{{text | capitalize}}</p>\n</div>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/components/color-button/color-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ColorButtonComponent);
    return ColorButtonComponent;
}());

//# sourceMappingURL=color-button.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(navCtrl, toastCtrl, storage, auth) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.auth = auth;
        this.showProfilePic = false;
        console.log('Hello MenuBarComponent Component');
    }
    MenuBarComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
    };
    MenuBarComponent.prototype.checkLoggedIn = function () {
        this.showProfilePic = this.auth.isUserLoggedIn();
    };
    MenuBarComponent.prototype.goToHome = function () {
        this.checkLoggedIn();
        this.navCtrl.popToRoot();
    };
    MenuBarComponent.prototype.goToProfile = function () {
        if (this.auth.isUserLoggedIn()) {
            this.checkLoggedIn();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__["a" /* ProfilePage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
        }
    };
    MenuBarComponent.prototype.goToDiscover = function () {
        this.checkLoggedIn();
        var toast = this.toastCtrl.create({
            message: "Discover is coming soon", duration: 2000, position: 'top'
        });
        toast.present();
    };
    MenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-bar',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/components/menu-bar/menu-bar.html"*/'<!-- Generated template for the MenuBarComponent component -->\n<ion-navbar>\n  <ion-title>\n    <ion-title>\n      <ion-row>\n      <h1 ion-col col-10>Floetry</h1>\n        <ion-buttons ion-col col-auto>\n          <button ion-button (click)="goToHome()">Home</button>\n          <button ion-button (click)="goToDiscover()">Discovery</button>\n          <button ion-button (click)="goToProfile()">Profile</button>\n          <ion-avatar *ngIf="showProfilePic" ion-button><img src="../assets/imgs/Jean.jpg"></ion-avatar>\n        </ion-buttons>\n      </ion-row>\n    </ion-title>\n  </ion-title>\n</ion-navbar>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/components/menu-bar/menu-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());

//# sourceMappingURL=menu-bar.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoriteButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FavoriteButtonComponent = /** @class */ (function () {
    function FavoriteButtonComponent(auth) {
        this.auth = auth;
        this.isFavorited = false;
        console.log('Hello FavoriteButtonComponent Component');
    }
    FavoriteButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("fav button", this.auth.getUserFavorites());
        var favs = this.auth.getUserFavorites();
        console.log("toto", favs, this.poemId);
        if (favs.find(function (val) { return val == _this.poemId; }))
            this.isFavorited = true;
    };
    FavoriteButtonComponent.prototype.toggle = function () {
        this.isFavorited = !this.isFavorited;
        if (this.isFavorited) {
            this.auth.addPoemToFavorites(this.poemId);
        }
        else {
            this.auth.removePoemFromFavorites(this.poemId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FavoriteButtonComponent.prototype, "poemId", void 0);
    FavoriteButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'favorite-button',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/components/favorite-button/favorite-button.html"*/'<!-- Generated template for the FavoriteButtonComponent component -->\n<div *ngIf="!isFavorited">\n	<svg xmlns="http://www.w3.org/2000/svg" height="25" width="23" (click)="toggle()">\n    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>\n	</svg>\n</div>\n<div *ngIf="isFavorited">\n	<svg xmlns="http://www.w3.org/2000/svg" height="25" width="23" (click)="toggle()">\n    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" fill="#FDE025"/>\n	</svg>\n</div>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/components/favorite-button/favorite-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());

//# sourceMappingURL=favorite-button.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ShareButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShareButtonComponent = /** @class */ (function () {
    function ShareButtonComponent() {
        console.log('Hello ShareButtonComponent Component');
        this.text = 'Hello World';
    }
    ShareButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'share-button',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/components/share-button/share-button.html"*/'<div>\n  <svg xmlns="http://www.w3.org/2000/svg" height="25" width="50">\n    <rect x="0" y="0" width="50" height="25" fill="white" stroke="black"/>\n	<text x="25" y="16" font-size="12" text-anchor="middle" fill="black">Share</text>\n    </svg>\n</div>'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/components/share-button/share-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShareButtonComponent);
    return ShareButtonComponent;
}());

//# sourceMappingURL=share-button.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_button_color_button__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorite_button_favorite_button__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_button_share_button__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__color_button_color_button__["a" /* ColorButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__favorite_button_favorite_button__["a" /* FavoriteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__share_button_share_button__["a" /* ShareButtonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__color_button_color_button__["a" /* ColorButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__favorite_button_favorite_button__["a" /* FavoriteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__share_button_share_button__["a" /* ShareButtonComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyADlYOA3Wfn3J7PFxcuxOdEHoYd87ZgL7U",
        authDomain: "floetry-9fb4c.firebaseapp.com",
        databaseURL: "https://floetry-9fb4c.firebaseio.com",
        projectId: "floetry-9fb4c",
        storageBucket: "floetry-9fb4c.appspot.com",
        messagingSenderId: "84128756346"
    }
};
//# sourceMappingURL=config.js.map

/***/ })

},[388]);
//# sourceMappingURL=main.js.map
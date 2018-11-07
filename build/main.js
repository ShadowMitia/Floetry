webpackJsonp([0],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeelsPageModule", function() { return FeelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feels__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poem_grid_poem_grid_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(47);
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feels/feels.module": [
		116
	],
	"../pages/login/login.module": [
		159
	],
	"../pages/poem-grid/poem-grid.module": [
		82
	],
	"../pages/profile/profile.module": [
		167
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(160);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(81);
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
    function LoginPage(navCtrl, navParams, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.info = {
            email: "",
            pass: ""
        };
        this.loginError = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.tryLogin = function () {
        var _this = this;
        if (this.info.email == "toto" && this.info.pass == "toto") {
            this.loginError = false;
            this.storage.set('username', this.info.email);
            this.storage.set('password', "toto");
            setTimeout(function () {
                _this.events.publish('user:login');
                _this.navCtrl.popToRoot();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */]);
            }, 300);
        }
        else {
            this.loginError = true;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/login/login.html"*/'<!--\n     Generated template for the LoginPage page.\n\n     See http://ionicframework.com/docs/components/#navigation for more info on\n     Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="loginError" style="width: 100%; text-align: center; color: white; background-color: #C81000; margin: 0px; padding: 0px; box-shadow: 1px 1px 12px #555;" id="erreur"> <!-- class="errurLogin" à mettre dans le scss car je le contille pas sur mon serve -->\n        Mauvais e-mail ou mot de passe\n    </div>\n    <div class="inp">\n        <label class="item item-input">\n            <input type="text" placeholder="e-mail" [(ngModel)]="info.email">\n        </label>\n        <label class="item item-input">\n            <input type="password" placeholder="password" [(ngModel)]="info.pass">\n        </label>\n        <div class="btnlogin">\n            <button class="button" (click)="tryLogin()">\n                <div class="row">\n                    <div class="col btlog">\n                        <span> log in</span>\n                    </div>\n                </div>\n            </button>\n        </div>\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_poem_api_poem_api__ = __webpack_require__(164);
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
    function PoemGridPage(navCtrl, navParams, modalCtrl, poemApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.poemApi = poemApi;
        this.feels = this.navParams.get("feel");
        this.emotion = this.navParams.get("emotion");
        this.poems = poemApi.getPoemsByFeeling(this.emotion, this.feels);
        console.log(this.poems);
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
            selector: 'page-poem-grid',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/poem-grid/poem-grid.html"*/'<!--\n  Generated template for the PoemGridPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <menu-bar></menu-bar>\n\n  <div>\n    <color-button insideText="{{feels}}"></color-button>\n    <color-button insideText="{{emotion}}" size="25"></color-button>\n  </div>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor="let p of poems;" (click)="openOverlay(p)" col-2>\n                <h1>{{p.title}} by {{p.author | capitalize }}</h1>\n                <p [innerHTML]="p.text | slice:0:200 | htmlify"></p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/poem-grid/poem-grid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_poem_api_poem_api__["a" /* PoemApiProvider */]])
    ], PoemGridPage);
    return PoemGridPage;
}());

//# sourceMappingURL=poem-grid.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemOverlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    }
    PoemOverlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoemOverlayPage');
    };
    PoemOverlayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PoemOverlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-poem-overlay',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/poem-overlay/poem-overlay.html"*/'<!--\n  Generated template for the PoemOverlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>PoemOverlay</ion-title>\n      <ion-buttons start>\n          <button ion-button (click)="dismiss()">Close</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <h1>{{title | titlecase}}</h1>\n    <p [innerHTML]="text | htmlify"></p>\n    <br><br>\n    <p>-- {{author| capitalize}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/poem-overlay/poem-overlay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PoemOverlayPage);
    return PoemOverlayPage;
}());

//# sourceMappingURL=poem-overlay.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function PoemApiProvider(http) {
        this.http = http;
        /*
          poems: [{
            author: string,
            title: string,
            emotion: string,
            feels: string,
            text: string
          }] = [
        */
        this.poems = [
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
        console.log('Hello PoemApiProvider Provider');
    }
    PoemApiProvider.prototype.getPoemsByFeeling = function (feels, emotion) {
        feels = feels.toLowerCase();
        emotion = emotion.toLowerCase();
        var poem = this.poems.filter(function (poem) { return poem.emotion === emotion; });
        poem.filter(function (poem) { return poem.feels === feels; });
        return poem;
    };
    PoemApiProvider.prototype.getPoemsByAuthor = function (author) {
        author = author.toLowerCase();
        return this.poems.filter(function (poem) { return poem.author === author; });
    };
    PoemApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PoemApiProvider);
    return PoemApiProvider;
}());

//# sourceMappingURL=poem-api.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoemOverlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__poem_overlay_poem_overlay__["a" /* PoemOverlayPage */]),
            ],
        })
    ], PoemOverlayPageModule);
    return PoemOverlayPageModule;
}());

//# sourceMappingURL=poem-overlay.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(81);
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_grid_poem_grid__ = __webpack_require__(162);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feels_feels__ = __webpack_require__(207);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_feels_feels_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_poem_grid_poem_grid_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_poem_overlay_poem_overlay_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_poem_api_poem_api__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(80);
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
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_0__pages_feels_feels_module__["FeelsPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_poem_grid_poem_grid_module__["PoemGridPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_poem_overlay_poem_overlay_module__["a" /* PoemOverlayPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile_module__["ProfilePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_poem_api_poem_api__["a" /* PoemApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlifyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
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
    function MenuBarComponent(navCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        console.log('Hello MenuBarComponent Component');
        this.text = 'Hello World';
    }
    MenuBarComponent.prototype.goToHome = function () {
        this.navCtrl.popToRoot();
    };
    MenuBarComponent.prototype.goToProfile = function () {
        var _this = this;
        this.storage.get('username').then(function (val) {
            if (val) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__["a" /* ProfilePage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    MenuBarComponent.prototype.goToDiscover = function () {
        var toast = this.toastCtrl.create({
            message: "Discover is coming soon", duration: 2000, position: 'top'
        });
        toast.present();
    };
    MenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-bar',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/components/menu-bar/menu-bar.html"*/'<!-- Generated template for the MenuBarComponent component -->\n<ion-navbar>\n  <ion-title>\n    <ion-title>\n      <ion-row>\n        <!-- <color-button color="#F7D26C" size="30"></color-button> -->\n        <span ion-col col-8>Floetry</span>\n        <span ion-col (click)="goToHome()">Home</span>\n        <span ion-col (click)="goToDiscover()">Discover</span>\n        <span ion-col (click)="goToProfile()">Profile</span>\n      </ion-row>\n    </ion-title>\n  </ion-title>\n</ion-navbar>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/components/menu-bar/menu-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());

//# sourceMappingURL=menu-bar.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(41);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmlify_htmlify__ = __webpack_require__(266);
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_button_color_button__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__ = __webpack_require__(268);
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
                __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__["a" /* MenuBarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__color_button_color_button__["a" /* ColorButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_bar_menu_bar__["a" /* MenuBarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = true;
        this.states = {
            'Info': [
                'Name : Jean', 'Surname : Peuplus', 'Age : 56'
            ],
            'Fav': []
        };
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getItems = function (type) {
        return this.states[type];
    };
    ProfilePage.prototype.toggle = function (arg) {
        if (arg == "info") {
            this.show = true;
        }
        else if (arg == "fav") {
            this.show = false;
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/dimitri/Documents/PoemApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Jean Peuplus</ion-title>\n  </ion-navbar>\n  \n   <ion-segment [(ngModel)]="state" color="primary">\n    <ion-segment-button value="Info" (click)="toggle(\'info\')">\n      Informations\n    </ion-segment-button>\n    <ion-segment-button value="Fav" (click)="toggle(\'fav\')">\n      Favourites\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="show">\n		<img src="../assets/imgs/Jean.jpg">\n		<p *ngFor="let item of getItems(state)">\n			{{ item }}\n		</p>\n	</div>\n	<div *ngIf="!show">\n		<ion-list-header>{{ state }}</ion-list-header>\n		<ion-item *ngFor="let item of getItems(state)">\n		{{ item }}\n		</ion-item>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/dimitri/Documents/PoemApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoemGridPageModule", function() { return PoemGridPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poem_grid__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poem_overlay_poem_overlay_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(47);
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

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
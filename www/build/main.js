webpackJsonp([6],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepassPage = (function () {
    function RepassPage(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "email": "" };
    }
    RepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepassPage');
    };
    RepassPage.prototype.alerta = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 10000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    RepassPage.prototype.recupera = function () {
        var _this = this;
        if (this.userData.email) {
            this.authService.postData(this.userData, "recupera").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                _this.alerta(_this.resposeData.mensaje);
            }, function (err) {
                _this.alerta("Ocurrio un error de conexión, por favor verifica tu conexión a internet");
            });
        }
        else {
            this.alerta("Por favor ingresa datos válidos");
            console.log("Give valid information.");
        }
    };
    RepassPage.prototype.login = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]); };
    return RepassPage;
}());
RepassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-repass',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\repass\repass.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-col col-sm-12 offset-md-4 col-md-4 >\n\n       <div class="center-block w-xxl w-auto-xs p-y-md ">\n\n        <div class="center-block w-xxl w-auto-xs p-y-md center">\n\n          <img src="assets/imgs/bananalogo.png" class="logo"/>\n\n        </div>\n\n          <div class="p-a-md box-color r box-shadow-z1 text-color m-a">\n\n            <div>\n\n            Para recuperar tu contraseña coloca tu correo electronico y al dar clic en "Recupera tu contraseña" recibirás un correo electrónico con las instrucciones para generar una nueva contraseña.\n\n            </div>\n\n            <form name="form">\n\n              <div class="md-form-group float-label">\n\n                <input type="email" class="md-input"  [(ngModel)]="userData.email" name="email" required>\n\n                <label>Email</label>\n\n              </div>\n\n              <div class="m-b-md">        \n\n                <label class="md-check">\n\n                  <input type="checkbox"><i class="primary"></i> Acepto términos y condiciones\n\n                </label>\n\n              </div>\n\n              <button class="btn primary btn-block p-x-md" (click)="recupera()">Recupera tu contaseña</button>\n\n            </form>\n\n          </div>\n\n\n\n          <div class="p-v-lg text-center">\n\n            <div>¿Ya tienes cuenta? <a class="text-primary _600" (click)="login()">Ingresa con tu cuenta</a></div>\n\n          </div>\n\n        </div>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n\n\n '/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\repass\repass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], RepassPage);

//# sourceMappingURL=repass.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jmyapis__ = __webpack_require__(43);
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
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiPerfilPage = (function () {
    function MiPerfilPage(common, navCtrl, app, jmyApis) {
        this.common = common;
        this.navCtrl = navCtrl;
        this.app = app;
        this.jmyApis = jmyApis;
        this.resultadoPrint = "";
        this.formulario = { "campo1": ""
        };
        this.ver();
    }
    MiPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiPerfilPage');
    };
    MiPerfilPage.prototype.borrar = function () {
        var _this = this;
        this.jmyApis.borrar({
            "head": {
                //"API":"938a6b38e5092f1ccaede78f57665fdc", // *obligatorio API-TABLA
                // "TABLA":"Test", // *obligatorio API-TABLA
                "DB": "0043c2b81eb5494ed80660d07fdc6810",
                "ID_F": "Prueba",
            },
            "body": ["campo1"],
        }).then(function (result) {
            console.log(result);
            _this.ver();
        });
    };
    MiPerfilPage.prototype.guardar = function () {
        var _this = this;
        this.jmyApis.guardar({
            "head": {
                //"API":"938a6b38e5092f1ccaede78f57665fdc", // *obligatorio API-TABLA
                //"TABLA":"Test", // *obligatorio API-TABLA
                "DB": "0043c2b81eb5494ed80660d07fdc6810",
                "ID_F": "Prueba",
            },
            "body": {
                "campo1": this.formulario.campo1,
                "varialbe1": "guardar uno 3 ",
                "varialbe2": { "guardar uno": "guardar dos  3" },
            },
        }).then(function (result) {
            console.log(result);
            _this.ver();
        });
    };
    MiPerfilPage.prototype.ver = function () {
        var _this = this;
        this.jmyApis.ver({
            "head": {
                //"API":"938a6b38e5092f1ccaede78f57665fdc", // *obligatorio API-TABLA
                //"TABLA":"Test", // *obligatorio API-TABLA
                "DB": "0043c2b81eb5494ed80660d07fdc6810",
                "ID_F": "Prueba",
            }
        }).then(function (result) {
            console.log(result);
            _this.resultado = result;
            if (_this.resultado != undefined) {
                if (_this.resultado.error == 'ninguno' && _this.resultado.ver.otKey != null) {
                    _this.resultadoPrint = _this.resultado.ver.ot.Prueba.campo1;
                }
            }
        });
    };
    return MiPerfilPage;
}());
MiPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mi-perfil',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\mi-perfil\mi-perfil.html"*/'\n\n<ion-content no-padding>\n<div id="content" class="app-content box-shadow-z0" role="main">\n    \n   \n    <div ui-view class="app-body" id="view">\n\n<!-- ############ PAGE START-->\n\n  <div class="item">\n    <div class="item-bg">\n      <img src="../assets/images/a1.jpg" class="blur opacity-3">\n    </div>\n    <div class="p-a-md">\n      <div class="row m-t">\n        <div class="col-sm-7">\n          <a href class="pull-left m-r-md">\n            <span class="avatar w-96">\n              <img src="../assets/images/a1.jpg">\n              <i class="on b-white"></i>\n            </span>\n          </a>\n          <div class="clear m-b">\n            <h3 class="m-0 m-b-xs">Juan Carlos Reyes</h3>\n            <p class="text-muted"><span class="m-r">Boscotron2000</span> <small><i class="fa fa-map-marker m-r-xs"></i>México, DF</small></p>\n            <div class="block clearfix m-b">\n              <ion-icon name="facebook"></ion-icon>\n            </div>\n            <button ion-button color="secondary">Dietas</button>\n          </div>\n        </div>\n        <div class="col-sm-5">\n          <p class="text-md profile-status">{{resultadoPrint || async}}</p>          \n		  <ion-item>\n		    <ion-label floating>Cambiar registro </ion-label>\n		    <ion-textarea type="text" value=""  [(ngModel)]="formulario.campo1"></ion-textarea>\n		  </ion-item>\n          <button ion-button color="energy" (click)="guardar()">Guardar prueba</button>\n          	\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="dker p-x">\n    <div class="row">\n      <div class="col-sm-6 push-sm-6">\n        <div class="p-y text-center text-sm-right">\n          <a href class="inline p-x text-center">\n            <span class="h4 block m-0">2k</span>\n            <small class="text-xs text-muted">Followers</small>\n          </a>\n          <a href class="inline p-x b-l b-r text-center">\n            <span class="h4 block m-0">250</span>\n            <small class="text-xs text-muted">Following</small>\n          </a>\n          <a href class="inline p-x text-center">\n            <span class="h4 block m-0">89</span>\n            <small class="text-xs text-muted">Activities</small>\n          </a>\n        </div>\n      </div>\n      <div class="col-sm-6 pull-sm-6">\n        <div class="p-y-md clearfix nav-active-primary">\n          <ul class="nav nav-pills nav-sm">\n            <li class="nav-item active">\n                <button ion-button color="secondary" small class="nav-link">General</button>\n            </li>\n            <li class="nav-item">\n              <button ion-button color="secondary" small class="nav-link">Preferencias alimenticias</button>\n            </li>\n            <li class="nav-item">\n              <button ion-button color="secondary" small class="nav-link">Médico</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="padding">\n    <div class="row">\n      <div class="col-sm-8 col-lg-9">\n        <div class="tab-content">      \n          <div class="tab-pane p-v-sm active" id="tab_1">\n            <div class="row m-b">\n              <div class="col-xs-6">\n                <small class="text-muted">Cell Phone</small>\n                <div class="_500">1243 0303 0333</div>\n              </div>\n              <div class="col-xs-6">\n                <small class="text-muted">Family Phone</small>\n                <div class="_500">+32(0) 3003 234 543</div>\n              </div>\n            </div>\n            <div class="row m-b">\n              <div class="col-xs-6">\n                <small class="text-muted">Reporter</small>\n                <div class="_500">Coch Jose</div>\n              </div>\n              <div class="col-xs-6">\n                <small class="text-muted">Manager</small>\n                <div class="_500">James Richo</div>\n              </div>\n            </div>\n            <div>\n              <small class="text-muted">Bio</small>\n              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- ############ PAGE END-->\n\n    </div>\n  </div>\n  <!-- / -->\n\n  <!-- theme switcher -->\n  <div id="switcher">\n   \n     \n      \n     \n    </div>\n  <!-- / -->\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\mi-perfil\mi-perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_jmyapis__["a" /* jmyapis */]])
], MiPerfilPage);

//# sourceMappingURL=mi-perfil.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Welcome = (function () {
    function Welcome(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.showSkip = true;
        if (localStorage.getItem('userData')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
        this.slides = [{
                title: "Dieta Positiva",
                description: "Es una aplicación que te ayudará a crear una dieta dirigida estrictamente a tus necesidades y objetivos, sustentada y realizada por nutriólogos especialistas en el control de peso.",
                image: 'assets/imgs/welcome/1.png',
            }, {
                title: "No pierdas más",
                description: " El tiempo con dietas sin supervisión de un nutriólogo profesional.",
                image: 'assets/imgs/welcome/2.png',
            }, {
                title: "Consigue tu objetivo",
                description: "Personal sin gastar tanto dinero y desde la palma de tu mano.",
                image: 'assets/imgs/welcome/3.png',
            }, {
                title: "Con App Dieta Positiva",
                description: "Tienes la posibilidad de reforzar tu dieta hecha por tu nutriólogo de confianza, o te mostramos un directorio para que elijas y conozcas a tu nuevo especialista en nutrición.",
                image: 'assets/imgs/welcome/4.png',
            }, {
                title: "Mantén comunicación",
                description: "Constante con tu nutriólogo para modificar tu dieta si es necesario.",
                image: 'assets/imgs/welcome/5.png',
            }, {
                title: "Aplicación interactiva",
                description: "Que mantendrá tu motivación y compromiso para  lograr tu objetivo en un tiempo específico.",
                image: 'assets/imgs/welcome/6.png',
            }, {
                title: "Comparte tu objetivo",
                description: "Diariamente en Facebook y Twitter y mantén contacto con nuestros miles de usuarios, y al mismo tiempo conviértete en un ejemplo para tus amigos, y motívalos a comenzar su dieta.",
                image: 'assets/imgs/welcome/7.png',
            }
        ];
    }
    Welcome.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    return Welcome;
}());
Welcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\welcome\welcome.html"*/'<ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slides-img" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n\n      <h2 class="slide-title">Listo para empezar!</h2>\n\n      <button ion-button icon-end large clear (click)="login()">\n\n        Inicia ahora\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n     <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="login()" color="dark">Saltar</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/data-base/data-base.module": [
		418,
		0
	],
	"../pages/login/login.module": [
		419,
		5
	],
	"../pages/mi-perfil/mi-perfil.module": [
		421,
		4
	],
	"../pages/repass/repass.module": [
		420,
		3
	],
	"../pages/signup/signup.module": [
		422,
		2
	],
	"../pages/welcome/welcome.module": [
		423,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_HighCharts__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_HighCharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_HighCharts__);
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
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighChartsSolidGuague from 'highcharts-solid-gauge';
HighchartsMore(HighCharts);
HighChartsSolidGuague(HighCharts);
*/
var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.ver();
    };
    AboutPage.prototype.ver = function () {
        __WEBPACK_IMPORTED_MODULE_2_HighCharts__["chart"]('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                    name: 'Jane',
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
        });
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\about\about.html"*/'\n\n<ion-content padding>\n\n<button></button>\n\n<div id="container" style="display: block;"	></div>\n\n<div id="plop" style="width: 100%; height: 400px; margin: 0 auto"></div>\n\n<button (click)="ver()" >Refrescar </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object])
], AboutPage);

var _a;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Sistema de contacto Prepago</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Sistema de contacto Prepago con el usuario (en Desarrollo)</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="american-football" item-left></ion-icon>\n\n     \n\n    </ion-item>\n\n  </ion-list><p> Se mostrará una serie de herramientas para el usuario con el objetibo de brindarle los servicios con cargo mensual o subscripción por clcinica donde el usuario se encuantre registrado</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(common, alertCtrl, navCtrl, app, authService) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            "user_id": "",
            "token": "",
            "feed": "",
            "feed_id": ""
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getFeed();
    }
    HomePage.prototype.getFeed = function () {
        var _this = this;
        this.common.presentLoading();
        this
            .authService
            .postData(this.userPostData, "feed")
            .then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.feedData;
                console.log(_this.dataSet);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    HomePage.prototype.feedUpdate = function () {
        var _this = this;
        if (this.userPostData.feed) {
            this.common.presentLoading();
            this
                .authService
                .postData(this.userPostData, "feedUpdate")
                .then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.feedData) {
                    _this.common.closeLoading();
                    _this.dataSet.unshift(_this.resposeData.feedData);
                    _this.userPostData.feed = "";
                }
                else {
                    console.log("No access");
                }
            }, function (err) {
                //Connection failed message
            });
        }
    };
    HomePage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Feed',
                message: 'Do you want to buy this feed?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this
                                .authService
                                .postData(_this.userPostData, "feedDelete")
                                .then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    HomePage.prototype.backToWelcome = function () {
        var root = this
            .app
            .getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Bienvenido {{userDetails.name}}</h2>\n\n  <div> Útiliza esta herramienta de tareas para agregar tus tareas pendientes!</div>\n\n <ion-item id="udpateBox">\n\n<textarea [(ngModel)]="userPostData.feed"></textarea>\n\n<ion-row>\n\n<button ion-button color="energy" (click)="feedUpdate()">Agregar Tarea</button>\n\n</ion-row>\n\n </ion-item>\n\n\n\n  <ion-card *ngFor="let item of dataSet; let msgIndex = index">\n\n    <ion-item>\n\n      <ion-icon name="trash" item-right (click)="feedDelete(item.feed_id, msgIndex)"></ion-icon>\n\n    <ion-card-content>\n\n     \n\n     <p [innerHTML]="item.feed | linky"></p>\n\n     <span>{{this.converTime(item.created) | amTimeAgo}}</span>\n\n    </ion-card-content>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <!--<button ion-button color="primary" (click)="logout()">Logout</button>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\home\home.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPane; });
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


/*
  Generated class for the SplitPane provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SplitPane = (function () {
    function SplitPane(platform) {
        this.platform = platform;
        console.log('Hello SplitPane Provider');
        this.splitPaneState = false;
    }
    SplitPane.prototype.getSplitPane = function () {
        if (localStorage.getItem('userData')) {
            if (this.platform.width() > 850) {
                this.splitPaneState = true;
            }
            else {
                this.splitPaneState = false;
            }
        }
        else {
            this.splitPaneState = false;
        }
        return this.splitPaneState;
    };
    return SplitPane;
}());
SplitPane = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], SplitPane);

//# sourceMappingURL=split-pane.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jmyfatkit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var jmyfatkit = (function () {
    function jmyfatkit(common, toastCtrl, authService) {
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.uPD = {
            "user_id": "",
            "token": "",
            "body": { "usuario": "",
                "empresa": "",
                "id_usuario": "",
                "data": {}
            },
            "fn": ""
        };
        this.fm = { "id_empresa": "",
            "id_usuario": "",
            "nombre": "",
            "nickname": "",
            "pass": "",
            "pass_ant": "",
            "correo": "",
            "permisos": {},
        };
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            this.uD = d.userData;
            this.uPD.user_id = this.uD.user_id;
            this.uPD.token = this.uD.token;
        }
    }
    jmyfatkit.prototype.guardarPassUsuario = function (data) {
        this.guardar(data);
    };
    jmyfatkit.prototype.guardarEditarUsuario = function (data) {
        this.guardar(data);
    };
    jmyfatkit.prototype.infoUsuario = function () {
        var _this = this;
        this.uPD.fn = "verUsrEdit";
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            this.uPD.body.usuario = d.userData.email;
            this.common.presentLoading();
            this.authService.postData(this.uPD, "usuarios").then(function (r) {
                _this.rD = r;
                console.log(_this.rD);
                if (_this.rD.count > 0) {
                    _this.fm.id_usuario = _this.rD.feedData.user_id;
                    _this.fm.nombre = _this.rD.feedData.name;
                    _this.fm.nickname = _this.rD.feedData.username;
                    _this.fm.correo = _this.rD.feedData.email;
                    _this.user = _this.fm;
                    console.log(_this.fm);
                }
                else {
                }
            }, function (err) {
                //Connection failed message
            });
            this.common.closeLoading();
        }
    };
    jmyfatkit.prototype.guardar = function (data) {
        var _this = this;
        console.log(this.uPD);
        this.fm.nombre = data.nombre;
        this.fm.correo = data.correo;
        this.fm.pass = data.pass;
        this.fm.pass_ant = data.pass_ant;
        this.uPD.fn = "guardarUsrEdit";
        this.uPD.body.data = this.fm;
        this.uPD.body.id_usuario = this.uD.user_id;
        this.common.presentLoading();
        this.authService.postData(this.uPD, "usuarios").then(function (result) {
            _this.rD = result;
            console.log(_this.rD);
            if (_this.rD.error != 'ninguno')
                _this.alerta(_this.rD.error);
            else
                _this.alerta("Actualizado correctamente");
            _this.infoUsuario();
            _this.fm.pass = "";
            _this.fm.pass_ant = "";
        }, function (err) {
            _this.fm.pass = "";
            _this.fm.pass_ant = "";
        });
        this.common.closeLoading();
    };
    jmyfatkit.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    return jmyfatkit;
}());
jmyfatkit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
], jmyfatkit);

//# sourceMappingURL=jmy-fat-kit.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jmyapis__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuloPage = (function () {
    function ModuloPage(common, navCtrl, app, jmyApis) {
        this.common = common;
        this.navCtrl = navCtrl;
        this.app = app;
        this.jmyApis = jmyApis;
        this.resultadoPrint = "";
        this.formulario = { "campo1": ""
        };
        this.ver();
    }
    ModuloPage.prototype.borrar = function () {
        var _this = this;
        this.jmyApis.borrar({
            "head": {
                "API": "938a6b38e5092f1ccaede78f57665fdc",
                "TABLA": "Test",
                //"DB":"0ee548ef3c64b6564191bb0d15a0cc08", // *obligatorio 
                "ID_F": "Prueba",
            },
            "body": ["campo1"],
        }).then(function (result) {
            console.log(result);
            _this.ver();
        });
    };
    ModuloPage.prototype.guardar = function () {
        var _this = this;
        this.jmyApis.guardar({
            "head": {
                "API": "938a6b38e5092f1ccaede78f57665fdc",
                "TABLA": "Test",
                //"DB":"0ee548ef3c64b6564191bb0d15a0cc08", // *obligatorio 
                "ID_F": "Prueba",
            },
            "body": {
                "campo1": this.formulario.campo1,
                "varialbe1": "guardar uno 3 ",
                "varialbe2": { "guardar uno": "guardar dos  3" },
            },
        }).then(function (result) {
            console.log(result);
            _this.ver();
        });
    };
    ModuloPage.prototype.ver = function () {
        var _this = this;
        this.jmyApis.ver({
            "head": {
                "API": "938a6b38e5092f1ccaede78f57665fdc",
                "TABLA": "Test",
                //"DB":"0ee548ef3c64b6564191bb0d15a0cc08", // *obligatorio ver, guardar
                "ID_F": "Prueba",
            }
        }).then(function (result) {
            console.log(result);
            _this.resultado = result;
            if (_this.resultado != undefined) {
                if (_this.resultado.error == 'ninguno' && _this.resultado.ver.otKey != null) {
                    _this.resultadoPrint = _this.resultado.ver.ot.Prueba.campo1;
                }
            }
        });
    };
    return ModuloPage;
}());
ModuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modulo',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\modulo\modulo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Modulo de ejemplo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-col>\n\n		<ion-list>\n\n		 <ion-item>\n\n		   	Registro actual: {{resultadoPrint || async}}\n\n		  </ion-item>\n\n		 <ion-item>\n\n		    <ion-label floating>Cambiar registro </ion-label>\n\n		    <ion-input type="text" value=""  [(ngModel)]="formulario.campo1"></ion-input>\n\n		  </ion-item>\n\n		  <ion-item>\n\n		  </ion-item>\n\n		</ion-list>	\n\n	</ion-col>\n\n	<ion-col>\n\n		<ion-col>\n\n		  	<button ion-button color="energy" (click)="ver()">Ver prueba</button>\n\n		</ion-col>\n\n		<ion-col>\n\n		  	<button ion-button color="energy" (click)="guardar()">Guardar prueba</button>\n\n		</ion-col>\n\n		<ion-col>\n\n		  	<button ion-button color="energy" (click)="borrar()">Borrar prueba</button>\n\n		</ion-col>\n\n	</ion-col>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\modulo\modulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_jmyapis__["a" /* jmyapis */]])
], ModuloPage);

//# sourceMappingURL=modulo.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let apiUrl = "http://localhost/ionic/PHP-Slim-Restful/api/"; 
var apiUrl = 'https://comsis.mx/api/auth/v1/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
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


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Por favor espere..." });
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    return Common;
}());
Common = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], Common);

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_jmyapis__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_jmydb__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_jmy_fat_kit__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_repass_repass__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mi_perfil_mi_perfil__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modulo_modulo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular_linky__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_14__pages_repass_repass__["a" /* RepassPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulo_modulo__["a" /* ModuloPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_24_angular_linky__["LinkyModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/data-base/data-base.module#DataBasePageModule', name: 'DataBasePage', segment: 'data-base', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/repass/repass.module#RepassPageModule', name: 'RepassPage', segment: 'repass', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mi-perfil/mi-perfil.module#MiPerfilPageModule', name: 'MiPerfilPage', segment: 'mi-perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_14__pages_repass_repass__["a" /* RepassPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modulo_modulo__["a" /* ModuloPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_7__providers_jmyapis__["a" /* jmyapis */], __WEBPACK_IMPORTED_MODULE_8__providers_jmydb__["a" /* JMYDB */], __WEBPACK_IMPORTED_MODULE_9__providers_jmy_fat_kit__["a" /* jmyfatkit */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_jmyapis__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_jmy_fat_kit__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modulo_modulo__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mi_perfil_mi_perfil__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, splitPane, menu, toastCtrl, jmyApis, alertCtrl, jmyFatKit) {
        this.app = app;
        this.splitPane = splitPane;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.jmyApis = jmyApis;
        this.alertCtrl = alertCtrl;
        this.jmyFatKit = jmyFatKit;
        this.divs = { "empresa": false,
            "editarPerfil": false,
            "cardPerfil": false
        };
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* Welcome */];
        this.nuevoMenu = [];
        this.formulario = {
            "idEmpresa": ""
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var data = JSON.parse(localStorage.getItem('userData'));
        /* enlistarr los modulos disponibles den esta app */
        this.pages = [{
                title: 'Inicio (Blog)',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* Welcome */],
                icon: "apps",
                api: null
            }, {
                title: 'Mi perfil',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
                icon: "contact",
                api: null
            }, {
                title: 'Modulo',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_modulo_modulo__["a" /* ModuloPage */],
                icon: "cube",
                api: "938a6b38e5092f1ccaede78f57665fdc"
            }, {
                title: 'Test',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_modulo_modulo__["a" /* ModuloPage */],
                icon: "cube",
                api: "c7f8d7eb668bf5c72f773f581c284978"
            }, {
                title: 'Directorio',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_modulo_modulo__["a" /* ModuloPage */],
                icon: "cube",
                api: "8936a70da4c53e42de93a427d7a82fab"
            },
        ];
        /* NO EDITAR DESDE AQUI */
        this.pagesView = [];
        this.divs.empresa = false;
        this.divs.editarPerfil = false;
        this.divs.cardPerfil = false;
        if (data != null) {
            console.log(this.pages);
            //this.pagesView=this.pages;
            this.jmyFatKit.infoUsuario();
            this.empresas = this.jmyApis.verempresas();
            this.formulario.idEmpresa = this.jmyApis.empresadefault();
            this.empresasApis = this.jmyApis.verempresasapis(this.formulario.idEmpresa);
            this.vermenu(this.formulario.idEmpresa);
            this.nombreUsuario();
            this.nombreEmpresa = this.vNE(this.formulario.idEmpresa);
            this.divs.cardPerfil = true;
        }
        else {
        }
    }
    MyApp.prototype.editarPass = function () {
        var _this = this;
        console.log('editarPass');
        var prompt = this.alertCtrl.create({
            title: 'Cambiar Contraseña',
            message: "Por favor coloque su contrassña actual e introdusca 2 veces la nueva contraseña de al menos 5 caracteres para confirmar que sea la correcta",
            inputs: [{
                    name: 'pass_ant',
                    placeholder: 'Contraseña anterior',
                    type: 'password'
                }, {
                    name: 'pass_new',
                    placeholder: 'Nueva contraseña',
                    type: 'password'
                }, {
                    name: 'pass_new_confirm',
                    placeholder: 'Repita contraseña nueva',
                    type: 'password'
                },],
            buttons: [{
                    text: 'Cancelar',
                    handler: function (data) { }
                }, {
                    text: 'Guardar',
                    handler: function (data) {
                        if (data.pass_ant != "" && data.pass_new != "" && data.pass_new_confirm != "") {
                            if (data.pass_new == data.pass_new_confirm) {
                                if (data.pass_new != "") {
                                    var pass = data.pass_new;
                                    if (pass.length > 5) {
                                        _this.jmyFatKit.guardarPassUsuario({ pass_ant: data.pass_ant, pass: pass });
                                    }
                                    else {
                                        _this.alerta("Al menos se requieren 5 caracteres para complemenetar tu contraseña");
                                    }
                                }
                                else {
                                    _this.alerta("Las nuevas contraseñas no coinciden");
                                }
                            }
                            else {
                                _this.alerta("Las nuevas contraseñas no coinciden");
                            }
                        }
                        else {
                            _this.alerta("Se requieren todos los campos completos");
                        }
                    }
                }]
        });
        prompt.present();
    };
    MyApp.prototype.editarPerfil = function () {
        var _this = this;
        this.jmyFatKit.infoUsuario();
        if (this.jmyFatKit.user != undefined) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Editar perfil',
                message: "Hola ",
                inputs: [{
                        name: 'nombre',
                        value: this.jmyFatKit.user.nombre,
                        placeholder: 'Nombre completo'
                    }, {
                        name: 'correo',
                        value: this.jmyFatKit.user.correo,
                        placeholder: 'Correo electronico',
                        type: 'email'
                    },],
                buttons: [{
                        text: 'Cancelar',
                        handler: function (data) {
                        }
                    }, {
                        text: 'Guardar',
                        handler: function (data) {
                            _this.jmyFatKit.guardarEditarUsuario(data);
                            _this.nombreUsuario();
                        }
                    }]
            });
            prompt_1.present();
        }
        else {
            this.alerta("Ocurrio un error al cargar los datos de perfil");
            this.jmyFatKit.infoUsuario();
        }
    };
    MyApp.prototype.salirConfirmar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro',
            message: '¿que ya deseas salir?',
            buttons: [{
                    text: 'Regresar',
                    handler: function () { }
                }, {
                    text: 'Salir',
                    handler: function () {
                        _this.alerta("Hata luego! ");
                        _this.logout();
                    }
                }]
        });
        confirm.present();
    };
    MyApp.prototype.btnEditar = function () {
        if (this.divs.editarPerfil)
            this.divs.editarPerfil = false;
        else
            this.divs.editarPerfil = true;
    };
    MyApp.prototype.btnEmpresa = function () {
        if (this.divs.empresa)
            this.divs.empresa = false;
        else
            this.divs.empresa = true;
    };
    MyApp.prototype.nombreUsuario = function () {
        var d = JSON.parse(localStorage.getItem('userData'));
        if (d != undefined) {
            return (this.jmyFatKit.user != undefined) ? this.jmyFatKit.user.nombre : d.userData.name;
        }
    };
    MyApp.prototype.vNE = function (id) {
        var aa = this.jmyApis.datosEmpresa(this.jmyApis.empresaactual());
        console.log(aa);
        return (aa != undefined) ? aa.nombre : "Sin empresa";
    };
    MyApp.prototype.cambiarEmpresa = function () {
        var idEmpresa = this.formulario.idEmpresa;
        this.vermenu(idEmpresa);
        location.reload();
        this.nombreEmpresa = this.vNE(idEmpresa);
    };
    MyApp.prototype.vermenu = function (idEmpresa) {
        var h = this.pages;
        var aa = this.jmyApis.empresaapi(idEmpresa);
        this.nuevoMenu = [];
        for (var i = 0; i < h.length; ++i) {
            var m = (h[i].api == null) ? true : false;
            if (aa != undefined && h[i].api != null) {
                var newList = aa.filter(function (t) { return t == h[i].api; });
                if (newList.length > 0) {
                    m = true;
                }
            }
            if (m) {
                this.nuevoMenu.push({ title: h[i].title, component: h[i].component, icon: h[i].icon });
            }
        }
        this.pagesView = this.nuevoMenu;
    };
    MyApp.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    Object.defineProperty(MyApp.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.menu.enable(false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* Welcome */]);
        location.reload();
    };
    MyApp.prototype.session = function () {
        return true;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\app\app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n\n<ion-split-pane [when]="splitPane.getSplitPane()">\n\n  <ion-menu [content]="content" >\n    <ion-header>\n      <ion-toolbar>\n        <ion-title><img width="26" style="vertical-align: middle;" src="assets/images/ico_700x700.png"> Panel </ion-title>\n      </ion-toolbar>\n    </ion-header>\n   \n \n\n  \n     <ion-content id="asideMenu"> \n\n      <ion-card id="profile" *ngIf="!!divs.cardPerfil"> \n        <ion-item>\n          <ion-avatar item-start>\n            <ion-icon name="contact"></ion-icon>\n          </ion-avatar>\n          <h2>{{nombreUsuario()}}</h2>\n          <p>{{nombreEmpresa}}</p>\n        </ion-item> \n\n        <ion-item class="tools">\n          <ion-col no-padding no-margin>\n            <button ion-button small no-margin class="pBtn" (click)="btnEditar()"><ion-icon name="build"></ion-icon></button>\n          </ion-col>\n          <ion-col no-padding no-margin>\n            <button ion-button small no-margin class="pBtn" (click)="btnEmpresa()"><ion-icon name="briefcase"></ion-icon></button>\n          </ion-col>\n          <ion-col no-padding no-margin>\n            <button ion-button small no-margin class="pBtn" (click)="salirConfirmar()"><ion-icon name="log-out"></ion-icon></button>\n          </ion-col>\n         </ion-item>\n\n        <ion-item *ngIf="!!divs.empresa">\n          <ion-label floating>Empresa</ion-label>\n          <ion-select (ionChange)=\'cambiarEmpresa()\' [(ngModel)]="formulario.idEmpresa" interface="popover"  okText="Cambiar" cancelText="Cancelar">\n              <ion-option *ngFor="let empresa of empresas " value="{{empresa.id_empresa}}">{{empresa.nombre}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="tools" ion-item *ngIf="!!divs.editarPerfil">\n          <ion-col no-padding no-margin>\n            <button ion-button small no-margin class="pBtn" (click)="editarPerfil()"><ion-icon name="person"> </ion-icon> Perfil </button>\n          </ion-col>\n          <ion-col no-padding no-margin>\n            <button ion-button small no-margin class="pBtn" (click)="editarPass()"><ion-icon name="key"> </ion-icon> Contraseña</button>\n          </ion-col>\n         </ion-item>\n\n\n      </ion-card>\n    <ion-list>\n        <div *ngFor="let p of pagesView" (click)="openPage(p)">\n          <button menuClose ion-item>\n            <ion-icon name="{{p.icon}}"></ion-icon>\n            {{p.title}}\n          </button>\n        </div>\n    </ion-list>\n     </ion-content>\n\n  </ion-menu>\n\n\n\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_jmyapis__["a" /* jmyapis */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_jmy_fat_kit__["a" /* jmyfatkit */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JMYDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(31);
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
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var JMYDB = (function () {
    //public loader: any;
    function JMYDB(loadingCtrl, toastCtrl, authService, common) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.common = common;
        this.userPostData = {
            "user_id": "",
            "token": "",
            "head": {},
            "body": {},
            "fn": ""
        };
        console.log('jmydb inc');
    }
    JMYDB.prototype.jmy = function (datos) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('userData'));
        if (data != undefined) {
            this.userDetails = data.userData;
            this.userPostData.user_id = this.userDetails.user_id;
            this.userPostData.token = this.userDetails.token;
            this.userPostData.fn = datos.fn;
            this.userPostData.head = datos.head;
            this.userPostData.body = datos.body;
            console.log(this.userPostData);
            //this.common.presentLoading();
            this
                .authService
                .postData(this.userPostData, "jmydb")
                .then(function (result) {
                _this.resultado = result;
                //if(datos.titulo!=undefined)
                console.log(datos.titulo);
                console.log(_this.resultado);
            }, function (err) {
                //Connection failed message
            });
        }
    };
    JMYDB.prototype.jmyUsuarios = function (datos) {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        console.log(this.userPostData);
        //this.common.presentLoading();
        this
            .authService
            .postData(this.userPostData, "listaUsuarios")
            .then(function (result) {
            _this.resultado = result;
            console.log(_this.resultado);
        }, function (err) {
        });
    };
    JMYDB.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({ message: men, duration: 9000, position: 'top' });
        toast.present();
    };
    return JMYDB;
}());
JMYDB = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */]])
], JMYDB);

//# sourceMappingURL=jmydb.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 244,
	"./es-do": 245,
	"./es-do.js": 245,
	"./es-us": 246,
	"./es-us.js": 246,
	"./es.js": 244,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fo": 251,
	"./fo.js": 251,
	"./fr": 252,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 252,
	"./fy": 255,
	"./fy.js": 255,
	"./gd": 256,
	"./gd.js": 256,
	"./gl": 257,
	"./gl.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./gu": 259,
	"./gu.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it.js": 267,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ky": 275,
	"./ky.js": 275,
	"./lb": 276,
	"./lb.js": 276,
	"./lo": 277,
	"./lo.js": 277,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./th": 313,
	"./th.js": 313,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 318,
	"./tzm-latn": 319,
	"./tzm-latn.js": 319,
	"./tzm.js": 318,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 413;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jmyapis; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var jmyapis = (function () {
    function jmyapis(http, authService, common, toastCtrl) {
        this.http = http;
        this.authService = authService;
        this.common = common;
        this.toastCtrl = toastCtrl;
        /* variables de session */
        this.uPD = {
            "user_id": "",
            "token": "",
            "api": "",
            "empresa": "",
            "head": {},
            "body": {},
            "fn": ""
        };
        this.json_head = {
            "nombre": ""
        };
        /* Colocar las API´s o Modulos disponibles en esta aplicación */
        this.hostApisList = { "938a6b38e5092f1ccaede78f57665fdc": {
                "nombre": "Modulo",
                "version": "1.0"
            },
            "8936a70da4c53e42de93a427d7a82fab": {
                "nombre": "Directorio",
                "version": "1.0"
            }
        };
    }
    /* NO EDITAR A PARTIR DE AQUI */
    /* funciones para alta, baja y cambios de registros por apis, empresas y permisos */
    jmyapis.prototype.borrar = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            datos.head.borrar = true;
            _this.resultado = _this.guardar(datos);
            if (_this.resultado != undefined) {
                resolve(_this.resultado);
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.guardar = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = JSON.parse(localStorage.getItem('userData'));
            if (data != undefined) {
                _this.userDetails = data.userData;
                _this.uPD.user_id = _this.userDetails.user_id;
                _this.uPD.token = _this.userDetails.token;
                _this.uPD.head = datos.head;
                _this.uPD.body = datos.body;
                _this.uPD.api = datos.head.API;
                _this.uPD.fn = (datos.head.borrar) ? "borrar" : "guardar";
                _this.uPD.empresa = _this.empresaactual();
                _this.common.presentLoading();
                _this.authService.postData(_this.uPD, "apibd")
                    .then(function (result) {
                    _this.resultado = result;
                    console.log(_this.resultado);
                    resolve(_this.resultado);
                }, function (err) {
                    _this.resultado = err;
                    reject({ error: 'send', err: err });
                });
                _this.common.closeLoading();
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.ver = function (datos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = JSON.parse(localStorage.getItem('userData'));
            if (data != undefined) {
                _this.userDetails = data.userData;
                _this.uPD.user_id = _this.userDetails.user_id;
                _this.uPD.token = _this.userDetails.token;
                _this.uPD.head = datos.head;
                _this.uPD.body = datos.body;
                _this.uPD.api = datos.head.API;
                _this.uPD.fn = "ver";
                _this.uPD.empresa = _this.empresaactual();
                //this.common.presentLoading();
                console.log(_this.uPD);
                _this.authService.postData(_this.uPD, "apibd")
                    .then(function (result) {
                    _this.resultado = result;
                    if (_this.resultado != undefined) {
                        if (_this.resultado.error == 'ninguno' && _this.resultado.ver.otKey != null) {
                            resolve(_this.resultado);
                        }
                        else {
                            _this.alerta("Error al conectar con el servidor Error:" + _this.resultado.error);
                        }
                    }
                    else {
                        reject({ error: 'no data user' });
                    }
                }, function (err) {
                    _this.resultado = err;
                    reject({ error: 'send', err: err });
                });
            }
            else {
                reject({ error: 'no data user' });
            }
        });
    };
    jmyapis.prototype.empresaactual = function () {
        var d = JSON.parse(localStorage.getItem('jmyData'));
        if (d != undefined)
            return d.primerempresa;
    };
    jmyapis.prototype.datosEmpresa = function (id) {
        var em = this.verempresas();
        if (em != undefined) {
            for (var i = 0; i < em.length; i++) {
                this.tm = em[i];
                if (this.tm.id_empresa == id)
                    return this.tm;
            }
        }
    };
    jmyapis.prototype.alerta = function (men) {
        var toast = this.toastCtrl.create({
            message: men,
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    /* funciones para el menu */
    jmyapis.prototype.vermenu = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data.menu[idEmpresa] != undefined) ? data.menu[idEmpresa] : [];
    };
    jmyapis.prototype.verempresas = function () {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data != null) ? data.empresaDisp : [];
    };
    jmyapis.prototype.verempresasapis = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        console.log(data);
        if (data != undefined && idEmpresa != undefined) {
            return (data.empresasApis[idEmpresa] != null) ? data.empresasApis[idEmpresa] : 0;
        }
    };
    jmyapis.prototype.empresaapi = function (idEmpresa) {
        if (idEmpresa != undefined) {
            var data = JSON.parse(localStorage.getItem('jmyData'));
            if (data.empresaApi != null) {
                this.cambiarempresa(idEmpresa);
                if (data.empresaApi[idEmpresa] != undefined) {
                    return data.empresaApi[idEmpresa].api;
                }
                else {
                    return null;
                }
            }
        }
        else {
            return [];
        }
    };
    jmyapis.prototype.cambiarempresa = function (idEmpresa) {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        if (data != undefined) {
            data.primerempresa = idEmpresa;
            localStorage.removeItem("jmyData");
            localStorage.setItem('jmyData', JSON.stringify(data));
        }
    };
    jmyapis.prototype.empresadefault = function () {
        var data = JSON.parse(localStorage.getItem('jmyData'));
        return (data != undefined) ? data.primerempresa : 0;
    };
    return jmyapis;
}());
jmyapis = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], jmyapis);

//# sourceMappingURL=jmyapis.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__repass_repass__ = __webpack_require__(108);
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
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, jmyApis, authService, toastCtrl, menu) {
        this.navCtrl = navCtrl;
        this.jmyApis = jmyApis;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.userData = { "username": "",
            "password": "",
            "apis": {},
        };
        var data = JSON.parse(localStorage.getItem('tmpData'));
        if (data != undefined) {
            this.userData.username = data.username;
        }
        console.log(data); //data.username
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.userData.username && this.userData.password) {
            this.userData.apis = this.jmyApis.hostApisList;
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                console.log(_this.jmyApis.hostApisList);
                if (_this.resposeData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    localStorage.setItem('jmyData', JSON.stringify(_this.resposeData.jmyapi));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    _this.menu.enable(true);
                    _this.presentToast("Cargando...");
                    location.reload();
                }
                else {
                    _this.presentToast("El usuario o contraseña no es valido");
                }
            }, function (err) {
                _this.presentToast("Ocurrio un error de conexión, por favor verifica tu conexión a internet");
            });
        }
        else {
            this.presentToast("Se requiere de un usuario y contraseña");
        }
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000
        });
        toast.present();
    };
    Login.prototype.repass = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_6__repass_repass__["a" /* RepassPage */]);
    };
    Login.prototype.signup = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* Signup */]);
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-col col-sm-12 offset-md-4 col-md-4 >\n\n       <div class="center-block w-xxl w-auto-xs p-y-md center">\n\n          <img src="assets/imgs/bananalogo.png" class="logo"/>\n\n          <div class="p-a-md box-color r box-shadow-z1 text-color m-a">\n\n            <div>\n\n             Si ya tienes entra con tu cuenta.\n\n            </div>\n\n            <form name="form">\n\n              <div class="md-form-group float-label">\n\n                <input type="email" class="md-input"  [(ngModel)]="userData.username" name="username" required>\n\n                <label>Email o usuario</label>\n\n              </div>\n\n              <div class="md-form-group float-label">\n\n                <input type="password" class="md-input" [(ngModel)]="userData.password" name="password" required>\n\n                <label>Contraseña</label>\n\n              </div>      \n\n              <div class="m-b-md">        \n\n                <label class="md-check">\n\n                  <input type="checkbox"><i class="primary"></i> Mantenerme conectado\n\n                </label>\n\n              </div>\n\n              <button class="btn primary btn-block p-x-md" (click)="login()">Entrar</button>\n\n            </form>\n\n          </div>\n\n\n\n          <div class="p-v-lg text-center">\n\n            <div class="m-b"><a class="text-primary _600" (click)="repass()">¿Olvidaste tu contraseña?</a></div>\n\n            <div>¿No tienes cuenta? <a class="text-primary _600" (click)="signup()">Registrate</a></div>\n\n          </div>\n\n        </div>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_jmyapis__["a" /* jmyapis */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "",
            "password": "",
            "email": "",
            "name": "",
            "body": {
                "apk_key": "",
                "permiso": "",
                "empresa": ""
            }
        };
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 10000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    Signup.prototype.signup = function () {
        var _this = this;
        if (this.userData.username && this.userData.password && this.userData.email && this.userData.name) {
            this.userData.body.apk_key = "938a6b38e5092f1ccaede78f57665fdc"; // apk Key de registro inicial
            this.userData.body.permiso = "1"; // permiso inicial 
            this.userData.body.empresa = "67"; // empresa inicial 
            this.authService.postData(this.userData, "signup").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                _this.tmpBSK = _this.resposeData.userData;
                console.log(_this.tmpBSK);
                if (_this.tmpBSK === undefined) {
                    console.log("no se pudo registrar por falta de criterios");
                    _this.presentToast("Verifica que los datos esten correctos. El usuario requiere de almenos 3 caracteres, la contraseña requiere de al menos 6 caracteres");
                }
                else {
                    /* console.log(this.resposeData.userData);
                     localStorage.setItem('userData', JSON.stringify(this.resposeData) );*/
                    localStorage.setItem('tmpData', JSON.stringify({ "username": _this.userData.username }));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
                }
            }, function (err) {
                _this.presentToast("Ocurrio un error de conexión, por favor verifica tu conexión a internet");
            });
        }
        else {
            this.presentToast("Por favor ingresa datos válidos");
            console.log("Give valid information.");
        }
    };
    Signup.prototype.login = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\signup\signup.html"*/'<ion-content padding>\n\n  <ion-grid>\n\n    <ion-col col-sm-12 offset-md-4 col-md-4 >\n\n       <div class="center-block w-xxl w-auto-xs p-y-md ">\n\n        <div class="center-block w-xxl w-auto-xs p-y-md center">\n\n          <img src="assets/imgs/bananalogo.png" class="logo"/>\n\n        </div>\n\n          <div class="p-a-md box-color r box-shadow-z1 text-color m-a">\n\n            <div>\n\n            Con solo algunos datos sencillos empieza a usar nuestra aplicación\n\n            </div>\n\n            <form name="form">\n\n              <div class="md-form-group float-label">\n\n                <input type="email" class="md-input"  [(ngModel)]="userData.name" name="name" required>\n\n                <label>Nombre completo</label>\n\n              </div>\n\n              <div class="md-form-group float-label">\n\n                <input type="email" class="md-input"  [(ngModel)]="userData.email" name="email" required>\n\n                <label>Email</label>\n\n              </div>\n\n              <div class="md-form-group float-label">\n\n                <input type="email" class="md-input"  [(ngModel)]="userData.username" name="username" required>\n\n                <label>Usuario</label>\n\n              </div>\n\n              <div class="md-form-group float-label">\n\n                <input type="password" class="md-input" [(ngModel)]="userData.password" name="password" required>\n\n                <label>Contraseña</label>\n\n              </div>      \n\n              <div class="m-b-md">        \n\n                <label class="md-check">\n\n                  <input type="checkbox"><i class="primary"></i> Acepto términos y condiciones\n\n                </label>\n\n              </div>\n\n              <button class="btn primary btn-block p-x-md" (click)="signup()">Registrate</button>\n\n            </form>\n\n          </div>\n\n\n\n          <div class="p-v-lg text-center">\n\n            <div>¿Ya tienes cuenta? <a class="text-primary _600" (click)="login()">Ingresa con tu cuenta</a></div>\n\n          </div>\n\n        </div>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\signup\signup.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\test\ionic\dp4\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab2Root" tabTitle="Retos" tabIcon="stopwatch" tabBadge="5" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="Dietas" tabIcon="restaurant"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Plus" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\xampp\htdocs\test\ionic\dp4\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map
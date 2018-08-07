(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill { \n    min-height: 100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                 <router-outlet></router-outlet>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _fonoaudiologo_fonoaudiologo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonoaudiologo/fonoaudiologo.module */ "./src/app/fonoaudiologo/fonoaudiologo.module.ts");
/* harmony import */ var _fonoaudiologo_fono_fono_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonoaudiologo/fono/fono.module */ "./src/app/fonoaudiologo/fono/fono.module.ts");
/* harmony import */ var _fonoaudiologo_agenda_agenda_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fonoaudiologo/agenda/agenda.module */ "./src/app/fonoaudiologo/agenda/agenda.module.ts");
/* harmony import */ var _fonoaudiologo_paciente_paciente_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fonoaudiologo/paciente/paciente.module */ "./src/app/fonoaudiologo/paciente/paciente.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _fonoaudiologo_jogos_jogos_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fonoaudiologo/jogos/jogos.module */ "./src/app/fonoaudiologo/jogos/jogos.module.ts");
/* harmony import */ var _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paciente/paciente.component */ "./src/app/paciente/paciente.component.ts");
/* harmony import */ var _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./novo-usuario/novo-usuario.component */ "./src/app/novo-usuario/novo-usuario.component.ts");
/* harmony import */ var _novo_usuario_fono_fono_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./novo-usuario/fono/fono.component */ "./src/app/novo-usuario/fono/fono.component.ts");
/* harmony import */ var _fonoaudiologo_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonoaudiologo/perfil/perfil.component */ "./src/app/fonoaudiologo/perfil/perfil.component.ts");
/* harmony import */ var _fonoaudiologo_perfil_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fonoaudiologo/perfil/dashboard/dashboard.component */ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.ts");
/* harmony import */ var _fonoaudiologo_perfil_meus_dados_meus_dados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fonoaudiologo/perfil/meus-dados/meus-dados.component */ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.ts");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../firebase-config */ "./src/firebase-config.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular5-social-auth */ "./node_modules/angular5-social-auth/angular5-social-auth.umd.js");
/* harmony import */ var angular5_social_auth__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// Configs 
function getAuthServiceConfigs() {
    var config = new angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["AuthServiceConfig"]([
        {
            id: angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["FacebookLoginProvider"]("Your-Facebook-app-id")
        },
        {
            id: angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["GoogleLoginProvider"]("449875052890-b486rnik4snau6n34lk28940kh9lt1dj.apps.googleusercontent.com")
        },
        {
            id: angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["GoogleLoginProvider"]("Your-Linkedin-Client-Id")
        },
    ]);
    return config;
}
// import { HomeComponent } from './home/home.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_11__["PacienteComponent"],
                _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_12__["NovoUsuarioComponent"],
                _novo_usuario_fono_fono_component__WEBPACK_IMPORTED_MODULE_13__["FonoComponent"],
                _fonoaudiologo_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_14__["PerfilComponent"],
                _fonoaudiologo_perfil_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _fonoaudiologo_perfil_meus_dados_meus_dados_component__WEBPACK_IMPORTED_MODULE_16__["MeusDadosComponent"],
                _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogComponent"],
            ],
            entryComponents: [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fonoaudiologo_fonoaudiologo_module__WEBPACK_IMPORTED_MODULE_5__["FonoaudiologoModule"],
                _fonoaudiologo_fono_fono_module__WEBPACK_IMPORTED_MODULE_6__["FonoModule"],
                _fonoaudiologo_paciente_paciente_module__WEBPACK_IMPORTED_MODULE_8__["PacienteModule"],
                _fonoaudiologo_jogos_jogos_module__WEBPACK_IMPORTED_MODULE_10__["JogosModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _fonoaudiologo_agenda_agenda_module__WEBPACK_IMPORTED_MODULE_7__["AgendaModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["SocialLoginModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            ],
            providers: [
                {
                    provide: angular5_social_auth__WEBPACK_IMPORTED_MODULE_25__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _fonoaudiologo_fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonoaudiologo/fonoaudiologo.component */ "./src/app/fonoaudiologo/fonoaudiologo.component.ts");
/* harmony import */ var _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./novo-usuario/novo-usuario.component */ "./src/app/novo-usuario/novo-usuario.component.ts");
/* harmony import */ var _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paciente/paciente.component */ "./src/app/paciente/paciente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'fonoaudiologo', component: _fonoaudiologo_fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_3__["FonoaudiologoComponent"] },
    { path: 'newUser', component: _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__["NovoUsuarioComponent"] },
    { path: 'paciente', component: _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_5__["PacienteComponent"] }
];
;
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content>\n  <p>{{data.msg}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Não</button>\n  <button mat-button [mat-dialog-close]=\"1\" cdkFocusInitial>Sim</button>\n</div>"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/entity.ts":
/*!***************************!*\
  !*** ./src/app/entity.ts ***!
  \***************************/
/*! exports provided: ownership, manyToOne, id, Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ownership", function() { return ownership; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyToOne", function() { return manyToOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

// Aluno -> Escola
// 
//
function ownership(target, property) {
    var ownership = [];
    if (this.ownership != undefined) {
        this.ownership.forEach(function (element) {
            ownership.push(new element().className());
        });
    }
    this.ownership = ownership;
}
// any parameters, even optional ones!
function manyToOne(args) {
    // the original decorator
    var x = args;
    var opa = Object.create(x.document, {});
    console.log(opa.constructor.name);
    function actualDecorator(target, property) {
        if (args.document != undefined) {
            if (target._manyToOne == undefined)
                Object.defineProperty(target, '_manyToOne', {
                    value: [],
                    writable: true,
                    enumerable: true
                });
            target._manyToOne[args.document.constructor.name] = args.document;
        }
    }
    // return the decorator
    return actualDecorator;
}
function id(target, key) {
    Object.defineProperty(target, '__id', {
        value: key
    });
}
var Entity = (function () {
    function Entity(fsService, params) {
        this.fsService = fsService;
        this.fireStore = fsService;
        this._build(params);
        //this.ownership = [];
    }
    Entity.isDocument = function (document) {
        if (typeof document == "object" && document != null && typeof document.toObject == "function")
            return true;
        return false;
    };
    Entity.prototype._build = function (params) {
        if (params != undefined && typeof params == "object") {
            for (var key in params) {
                if (params[key] != undefined) {
                    this[key] = params[key];
                }
            }
        }
    };
    /*generateOwnership() {
        let has = []
        if (this.has != undefined) {
            this.has.forEach(element => {
                has.push(new element().className());
            });
        }
        return has;
    }*/
    /*
        Pass over all keys in the object
    */
    Entity.prototype.toObject = function () {
        var _this = this;
        var x = Reflect.ownKeys(this);
        var myObj = {};
        x.forEach(function (element) {
            if (typeof _this[element] != "function" && typeof _this[element] != "object")
                myObj[element] = _this[element];
            else if (Entity.isDocument(_this[element])) {
                var nome = myObj[_this[element].className()];
                //myObj[this[element].className()] = this[element].toObject()
                if (_this[element].__id != undefined) {
                    // TODO: oferecer suporte para que os objetos possam ser associados com outro nome além do nome do document
                    myObj[_this[element].className()] = _this[element].__id;
                }
                else {
                    myObj[_this[element].className()] = _this[element].id;
                }
            }
            else if (typeof _this[element] == "object" && element == "has") {
                //myObj[element] = this.generateOwnership();
            }
        });
        return myObj;
    };
    Entity.className = function () {
        return this.toString().split('(' || /s+/)[0].split(' ' || /s+/)[1];
    };
    Entity.prototype.className = function () {
        return this.constructor.name;
    };
    Entity.__documentToObject = function (fireStore, document) {
        var id;
        var data;
        try {
            if (document.payload.doc == undefined) {
                data = document.payload.data();
                id = document.payload.id;
            }
            else {
                data = document.payload.doc.data();
                id = document.payload.doc.id;
            }
            return [fireStore, __assign({ id: id }, data)];
        }
        catch (e) {
            throw new Error("This document doesn't exist.");
        }
    };
    Entity._documentToObject = function (fireStore, document, classCaller) {
        var id;
        var data;
        try {
            if ((document.payload.exists != undefined && document.payload.exists == true) ||
                document.payload.doc != undefined && document.payload.doc.exists == true) {
                if (document.payload.doc == undefined) {
                    data = document.payload.data();
                    id = document.payload.id;
                }
                else {
                    data = document.payload.doc.data();
                    id = document.payload.doc.id;
                }
                var propriedades_1 = {};
                propriedades_1['id'] = {
                    value: id,
                    writable: true,
                    enumerable: true
                };
                propriedades_1['fireStore'] = {
                    value: fireStore,
                    writable: true,
                    enumerable: true
                };
                if (typeof data == "object") {
                    var x = Reflect.ownKeys(data);
                    x.forEach(function (element) {
                        propriedades_1[element] = {
                            value: data[element],
                            writable: true,
                            enumerable: true
                        };
                        if (classCaller.prototype._manyToOne != undefined) {
                            if (classCaller.prototype._manyToOne[element] != undefined) {
                                var obje = classCaller.prototype._manyToOne[element];
                                if (typeof obje.constructor.get == "function") {
                                    obje.constructor.get(fireStore, data[element]).subscribe(function (result) {
                                        propriedades_1[element] = result;
                                    });
                                }
                            }
                        }
                    });
                    return Object.create(this.prototype, propriedades_1);
                }
            }
            else {
                throw new Error("This document doesn't exist.");
            }
        }
        catch (e) {
            throw new Error("This document doesn't exist.");
        }
    };
    Entity._getFromSnapshot = function (fireStore, collection) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var self = _this;
            collection.snapshotChanges().subscribe(function (result) {
                var documents = [];
                result.map(function (action) {
                    try {
                        var document_1 = _this._documentToObject(fireStore, action, _this);
                        documents.push(document_1);
                    }
                    catch (e) {
                        observer.error(new Error(e));
                    }
                });
                observer.next(documents);
                observer.complete();
            });
        });
    };
    Entity.get = function (fireStore, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var result$;
            var className = _this.className();
            var document = fireStore.doc(_this.className() + "/" + id);
            document.snapshotChanges().subscribe(function (result) {
                try {
                    var doc = _this._documentToObject(fireStore, result, _this);
                    observer.next(doc);
                    observer.complete();
                }
                catch (e) {
                    observer.error(new Error(e.message));
                }
                finally {
                }
            });
        });
    };
    Entity.getAll = function (fireStore, collectionName) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var collection = fireStore.collection(collectionName);
            _this._getFromSnapshot(fireStore, collection).subscribe(function (result) {
                var documents = result;
                observer.next(documents);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    Entity.deleteAll = function (fireStore, collectionName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            if (collectionName == undefined)
                collectionName = _this.className();
            var collection = fireStore.collection(collectionName);
            _this.getAll(fireStore, collectionName).subscribe(function (result) {
                var documents = [];
                for (var i = 0; i < result.length; i++) {
                    documents.push(result[i].delete(collectionName));
                }
                Promise.all(documents).then(function (result) {
                    observer.next();
                    observer.complete();
                });
            }, function (err) {
                observer.error(err);
            });
        });
    };
    Entity.prototype.delete = function (collectionName) {
        if (collectionName == undefined)
            collectionName = this.className();
        var collection = this.fireStore.collection(collectionName);
        /*let has = this.generateOwnership();
        has.forEach(element => {
            Entity.deleteAll(this.fireStore, element);
        });*/
        return collection.doc(this.id).delete();
    };
    /**
     * Returns all documents which belongs to the document.
     */
    Entity.prototype.relationships = function () {
        var x = Reflect.ownKeys(this);
        var myObj = [];
        for (var key in x) {
            if (Entity.isDocument(this[x[key]])) {
                myObj[this[x[key]].className()] = this[x[key]];
            }
        }
        return myObj;
    };
    /**
     * Returns the size of document's inside a collection.
     */
    Entity.count = function (fireStore, collectionName) {
        var _this = this;
        if (collectionName == undefined)
            collectionName = this.className();
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var collection = fireStore.collection(collectionName);
            _this._getFromSnapshot(fireStore, collection).subscribe(function (result) {
                observer.next(result.length);
                observer.complete();
            });
        });
    };
    /**
     * Save all documents which belongs to the document.
     * Not to be called directly. This is called by save() to recursively save all documents.
     */
    Entity.prototype.saveRelationships = function () {
        var promises = [];
        var relationships = this.relationships();
        for (var key in relationships) {
            if (relationships[key].id != undefined) {
                // TODO: update
            }
            else {
                promises.push(relationships[key].add());
            }
        }
        return Promise.all(promises);
    };
    Entity.prototype.add = function () {
        //let inspector = ReflectiveInjector.resolveAndCreate([AngularFirestore]) 
        //let firestore:AngularFirestore = inspector.get(AngularFirestore);
        var collection = this.fireStore.collection(this.className());
        var _this = this; // this is lost in promise.
        return new Promise(function (resolve, reject) {
            var savingRelationships = _this.saveRelationships();
            savingRelationships.then(function (result) {
                collection.add(_this.toObject()).then(function (result) {
                    _this.id = result.id;
                    resolve(_this);
                });
            });
        });
    };
    Entity.prototype.update = function () {
        var _this = this; // this is lost in promise.
        console.log(this.className);
        //let collection: AngularFirestoreCollection<any> = _this.fireStore.collection<any>(_this.className());
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var savingRelationships = _this.saveRelationships();
            savingRelationships.then(function (result) {
                var json = _this.toObject();
                _this.fireStore.doc(_this.className() + "/" + _this.id).update(_this.toObject()).then(function (result) {
                    observer.next();
                    observer.complete();
                });
            });
        });
    };
    return Entity;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/agenda.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/agenda.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/agenda.component.html":
/*!************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/agenda.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/agenda.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/agenda.component.ts ***!
  \**********************************************************/
/*! exports provided: AgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaComponent", function() { return AgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgendaComponent = (function () {
    function AgendaComponent() {
    }
    AgendaComponent.prototype.ngOnInit = function () {
    };
    AgendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agenda',
            template: __webpack_require__(/*! ./agenda.component.html */ "./src/app/fonoaudiologo/agenda/agenda.component.html"),
            styles: [__webpack_require__(/*! ./agenda.component.css */ "./src/app/fonoaudiologo/agenda/agenda.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgendaComponent);
    return AgendaComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/agenda.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/agenda.module.ts ***!
  \*******************************************************/
/*! exports provided: AgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaModule", function() { return AgendaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _agenda_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda.routing.module */ "./src/app/fonoaudiologo/agenda/agenda.routing.module.ts");
/* harmony import */ var _calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario-agenda/calendario-agenda.component */ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.ts");
/* harmony import */ var _consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta-agenda/consulta-agenda.component */ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.ts");
/* harmony import */ var _agenda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agenda.component */ "./src/app/fonoaudiologo/agenda/agenda.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AgendaModule = (function () {
    function AgendaModule() {
    }
    AgendaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agenda_routing_module__WEBPACK_IMPORTED_MODULE_2__["AgendaRoutingModule"]
            ],
            declarations: [_calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_3__["CalendarioAgendaComponent"], _consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaAgendaComponent"], _agenda_component__WEBPACK_IMPORTED_MODULE_5__["AgendaComponent"]]
        })
    ], AgendaModule);
    return AgendaModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/agenda.routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/agenda.routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AgendaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaRoutingModule", function() { return AgendaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _agenda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda.component */ "./src/app/fonoaudiologo/agenda/agenda.component.ts");
/* harmony import */ var _calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario-agenda/calendario-agenda.component */ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.ts");
/* harmony import */ var _consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta-agenda/consulta-agenda.component */ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var agendaRoutes = [
    { path: 'paciente', component: _agenda_component__WEBPACK_IMPORTED_MODULE_2__["AgendaComponent"], children: [
            { path: 'calendarioAgenda', component: _calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_3__["CalendarioAgendaComponent"] },
            { path: 'consultaAgenda', component: _consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaAgendaComponent"] },
        ] }
];
var AgendaRoutingModule = (function () {
    function AgendaRoutingModule() {
    }
    AgendaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(agendaRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgendaRoutingModule);
    return AgendaRoutingModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n      Calendário\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li>Agenda</li>\n      <li class=\"active\">Calendário</li>\n    </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n    <div class=\"row\">      \n        <div class=\"col-md-12\">\n            <div class=\"box box-primary\">\n                <div class=\"box-body no-padding\">\n                  <!-- THE CALENDAR -->\n                  <div id=\"calendar\"></div>\n                </div><!-- /.box-body -->\n            </div><!-- /. box -->\n        </div><!-- /.col -->\n    </div><!-- /.row -->\n</section>"

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CalendarioAgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioAgendaComponent", function() { return CalendarioAgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarioAgendaComponent = (function () {
    function CalendarioAgendaComponent() {
    }
    CalendarioAgendaComponent.prototype.ngOnInit = function () {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: [
                {
                    title: 'Ana Silva',
                    start: '2017-09-25T10:00:00',
                    end: '2017-9-25T11:00:00'
                },
                {
                    title: 'Event2',
                    start: '2017-09-05'
                }
            ],
            minTime: "08:00:00",
            maxTime: "18:00:00",
            businessHours: [
                {
                    // days of week. an array of zero-based day of week integers (0=Sunday)
                    dow: [1, 2, 3],
                    start: '10:00',
                    end: '18:00',
                },
                {
                    // days of week. an array of zero-based day of week integers (0=Sunday)
                    dow: [4, 5],
                    start: '13:00',
                    end: '18:00',
                },
            ]
        });
    };
    CalendarioAgendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendario-agenda',
            template: __webpack_require__(/*! ./calendario-agenda.component.html */ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.html"),
            styles: [__webpack_require__(/*! ./calendario-agenda.component.css */ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarioAgendaComponent);
    return CalendarioAgendaComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n      Agenda\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li>Agenda</li>\n      <li class=\"active\">Consulta</li>\n    </ol>\n  </section>"

/***/ }),

/***/ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultaAgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAgendaComponent", function() { return ConsultaAgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultaAgendaComponent = (function () {
    function ConsultaAgendaComponent() {
    }
    ConsultaAgendaComponent.prototype.ngOnInit = function () {
    };
    ConsultaAgendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-agenda',
            template: __webpack_require__(/*! ./consulta-agenda.component.html */ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.html"),
            styles: [__webpack_require__(/*! ./consulta-agenda.component.css */ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultaAgendaComponent);
    return ConsultaAgendaComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/dash/dash.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fonoaudiologo/dash/dash.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/dash/dash.component.html":
/*!********************************************************!*\
  !*** ./src/app/fonoaudiologo/dash/dash.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n\t\t<h1>\n\t\t  Dashboard\n\t\t  <small>Painel de controle</small>\n\t\t</h1>\n\t\t<ol class=\"breadcrumb\">\n\t\t  <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n\t\t  <li class=\"active\">Dashboard</li>\n\t\t</ol>\n</section>\n  \n<section class=\"content\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-xs-6\">\n\t\t\t\t<!-- small box -->\n\t\t\t\t<div class=\"small-box bg-green\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<h3>21</h3>\n\t\t\n\t\t\t\t\t\t<p>Atendidos Hoje</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\" class=\"small-box-footer\">Mais informações <i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ./col -->\n\t\t\t<div class=\"col-lg-3 col-xs-6\">\n\t\t\t\t<!-- small box -->\n\t\t\t\t<div class=\"small-box bg-red\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<h3>2</h3>\n\t\t\n\t\t\t\t\t\t<p>Faltaram Hoje</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<i class=\"fa fa-user-times\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\" class=\"small-box-footer\">Mais informações <i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ./col -->\n\t\t\t<div class=\"col-lg-3 col-xs-6\">\n\t\t\t\t<!-- small box -->\n\t\t\t\t<div class=\"small-box bg-yellow\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<h3>5</h3>\n\t\t\n\t\t\t\t\t\t<p>Falta Atender</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<i class=\"fa fa-user-plus\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\" class=\"small-box-footer\">Mais informações <i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ./col -->\n\t\t\t<div class=\"col-lg-3 col-xs-6\">\n\t\t\t\t<!-- small box -->\n\t\t\t\t<div class=\"small-box bg-aqua\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<h3>28</h3>\n\t\n\t\t\t\t\t<p>Marcados para Hoje</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t<i class=\"ion ion-stats-bars\"></i>\n\t\t\t\t</div>\n\t\t\t\t<a href=\"#\" class=\"small-box-footer\">Mais informações <i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ./col -->\n\t\t</div>  \n\n\n\t\t\n\n\t\t<div class=\"row\">\n\t\t\t\t<!-- Left col -->\n\t\t\t\t<section class=\"col-lg-7 connectedSortable ui-sortable\">\n\t\t\t\t\t\t<div class=\"box box-info\">\n\t\t\t\t\t\t\t\t<div class=\"box-header with-border\">\n\t\t\t\t\t\t\t\t  <h3 class=\"box-title\">Pacientes do dia</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t  <div class=\"box-tools pull-right\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /.box-header -->\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t<table class=\"table no-margin\">\n\t\t\t\t\t\t\t\t\t  <thead>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<th>nome do Paciente</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hora</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Confirmação</th>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>Call of Duty IV</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-success\">Atendido</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>Samsung Smart TV</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-warning\">Pendente</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>iPhone 6 Plus</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-danger\">Faltou</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>Samsung Smart TV</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-info\">Atendendo</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#00c0ef\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>Samsung Smart TV</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-warning\">Pendente</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>iPhone 6 Plus</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-danger\">Faltou</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>Call of Duty IV</td>\n\t\t\t\t\t\t\t\t\t\t<td><span class=\"label label-success\">Atendido</span></td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\"><canvas width=\"34\" height=\"20\" style=\"display: inline-block; width: 34px; height: 20px; vertical-align: top;\"></canvas></div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <!-- /.table-responsive -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /.box-body -->\n\t\t\t\t\t\t\t\t<div class=\"box-footer clearfix\">\n\t\t\t\t\t\t\t\t  <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-right\">Place New Order</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- /.box-footer -->\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t</section>\n\t\t\t\t<!-- /.Left col -->\n\t\t\t\t<!-- right col (We are only adding the ID to make the widgets sortable)-->\n\t\t\t\t<section class=\"col-lg-5 connectedSortable ui-sortable\">\n\t\t\n\t\t\t\t  <!-- Calendar -->\n\t\t\t\t  <div class=\"box box-solid bg-green-gradient\">\n\t\t\t\t\t<div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n\t\t\t\t\t  <i class=\"fa fa-calendar\"></i>\n\t\t\n\t\t\t\t\t  <h3 class=\"box-title\">Calendar</h3>\n\t\t\t\t\t  <!-- tools box -->\n\t\t\t\t\t  <div class=\"pull-right box-tools\">\n\t\t\t\t\t\t<!-- button with a dropdown -->\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i></button>\n\t\t\t\t\t\t  <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t\t\t\t\t\t<li><a href=\"#\">Add new event</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">Clear events</a></li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">View calendar</a></li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <!-- /. tools -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.box-header -->\n\t\t\t\t\t<div class=\"box-body no-padding\">\n\t\t\t\t\t  <!--The calendar -->\n\t\t\t\t\t  <div id=\"calendar\" style=\"width: 100%\"><div class=\"datepicker datepicker-inline\"><div class=\"datepicker-days\" style=\"\"><table class=\"table-condensed\"><thead><tr><th colspan=\"7\" class=\"datepicker-title\" style=\"display: none;\"></th></tr><tr><th class=\"prev\">«</th><th colspan=\"5\" class=\"datepicker-switch\">April 2021</th><th class=\"next\">»</th></tr><tr><th class=\"dow\">Su</th><th class=\"dow\">Mo</th><th class=\"dow\">Tu</th><th class=\"dow\">We</th><th class=\"dow\">Th</th><th class=\"dow\">Fr</th><th class=\"dow\">Sa</th></tr></thead><tbody><tr><td class=\"old day\" data-date=\"1616889600000\">28</td><td class=\"old day\" data-date=\"1616976000000\">29</td><td class=\"old day\" data-date=\"1617062400000\">30</td><td class=\"old day\" data-date=\"1617148800000\">31</td><td class=\"day\" data-date=\"1617235200000\">1</td><td class=\"day\" data-date=\"1617321600000\">2</td><td class=\"day\" data-date=\"1617408000000\">3</td></tr><tr><td class=\"day\" data-date=\"1617494400000\">4</td><td class=\"day\" data-date=\"1617580800000\">5</td><td class=\"day\" data-date=\"1617667200000\">6</td><td class=\"day\" data-date=\"1617753600000\">7</td><td class=\"day\" data-date=\"1617840000000\">8</td><td class=\"day\" data-date=\"1617926400000\">9</td><td class=\"day\" data-date=\"1618012800000\">10</td></tr><tr><td class=\"day\" data-date=\"1618099200000\">11</td><td class=\"day\" data-date=\"1618185600000\">12</td><td class=\"day\" data-date=\"1618272000000\">13</td><td class=\"day\" data-date=\"1618358400000\">14</td><td class=\"day\" data-date=\"1618444800000\">15</td><td class=\"day\" data-date=\"1618531200000\">16</td><td class=\"day\" data-date=\"1618617600000\">17</td></tr><tr><td class=\"day\" data-date=\"1618704000000\">18</td><td class=\"day\" data-date=\"1618790400000\">19</td><td class=\"day\" data-date=\"1618876800000\">20</td><td class=\"day\" data-date=\"1618963200000\">21</td><td class=\"day\" data-date=\"1619049600000\">22</td><td class=\"day\" data-date=\"1619136000000\">23</td><td class=\"day\" data-date=\"1619222400000\">24</td></tr><tr><td class=\"day\" data-date=\"1619308800000\">25</td><td class=\"day\" data-date=\"1619395200000\">26</td><td class=\"day\" data-date=\"1619481600000\">27</td><td class=\"day\" data-date=\"1619568000000\">28</td><td class=\"day\" data-date=\"1619654400000\">29</td><td class=\"day\" data-date=\"1619740800000\">30</td><td class=\"new day\" data-date=\"1619827200000\">1</td></tr><tr><td class=\"new day\" data-date=\"1619913600000\">2</td><td class=\"new day\" data-date=\"1620000000000\">3</td><td class=\"new day\" data-date=\"1620086400000\">4</td><td class=\"new day\" data-date=\"1620172800000\">5</td><td class=\"new day\" data-date=\"1620259200000\">6</td><td class=\"new day\" data-date=\"1620345600000\">7</td><td class=\"new day\" data-date=\"1620432000000\">8</td></tr></tbody><tfoot><tr><th colspan=\"7\" class=\"today\" style=\"display: none;\">Today</th></tr><tr><th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th></tr></tfoot></table></div><div class=\"datepicker-months\" style=\"display: none;\"><table class=\"table-condensed\"><thead><tr><th colspan=\"7\" class=\"datepicker-title\" style=\"display: none;\"></th></tr><tr><th class=\"prev\">«</th><th colspan=\"5\" class=\"datepicker-switch\">2021</th><th class=\"next\">»</th></tr></thead><tbody><tr><td colspan=\"7\"><span class=\"month\">Jan</span><span class=\"month\">Feb</span><span class=\"month\">Mar</span><span class=\"month focused\">Apr</span><span class=\"month\">May</span><span class=\"month\">Jun</span><span class=\"month\">Jul</span><span class=\"month\">Aug</span><span class=\"month\">Sep</span><span class=\"month\">Oct</span><span class=\"month\">Nov</span><span class=\"month\">Dec</span></td></tr></tbody><tfoot><tr><th colspan=\"7\" class=\"today\" style=\"display: none;\">Today</th></tr><tr><th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th></tr></tfoot></table></div><div class=\"datepicker-years\" style=\"display: none;\"><table class=\"table-condensed\"><thead><tr><th colspan=\"7\" class=\"datepicker-title\" style=\"display: none;\"></th></tr><tr><th class=\"prev\">«</th><th colspan=\"5\" class=\"datepicker-switch\">2020-2029</th><th class=\"next\">»</th></tr></thead><tbody><tr><td colspan=\"7\"><span class=\"year old\">2019</span><span class=\"year\">2020</span><span class=\"year focused\">2021</span><span class=\"year\">2022</span><span class=\"year\">2023</span><span class=\"year\">2024</span><span class=\"year\">2025</span><span class=\"year\">2026</span><span class=\"year\">2027</span><span class=\"year\">2028</span><span class=\"year\">2029</span><span class=\"year new\">2030</span></td></tr></tbody><tfoot><tr><th colspan=\"7\" class=\"today\" style=\"display: none;\">Today</th></tr><tr><th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th></tr></tfoot></table></div><div class=\"datepicker-decades\" style=\"display: none;\"><table class=\"table-condensed\"><thead><tr><th colspan=\"7\" class=\"datepicker-title\" style=\"display: none;\"></th></tr><tr><th class=\"prev\">«</th><th colspan=\"5\" class=\"datepicker-switch\">2000-2090</th><th class=\"next\">»</th></tr></thead><tbody><tr><td colspan=\"7\"><span class=\"decade old\">1990</span><span class=\"decade\">2000</span><span class=\"decade\">2010</span><span class=\"decade focused\">2020</span><span class=\"decade\">2030</span><span class=\"decade\">2040</span><span class=\"decade\">2050</span><span class=\"decade\">2060</span><span class=\"decade\">2070</span><span class=\"decade\">2080</span><span class=\"decade\">2090</span><span class=\"decade new\">2100</span></td></tr></tbody><tfoot><tr><th colspan=\"7\" class=\"today\" style=\"display: none;\">Today</th></tr><tr><th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th></tr></tfoot></table></div><div class=\"datepicker-centuries\" style=\"display: none;\"><table class=\"table-condensed\"><thead><tr><th colspan=\"7\" class=\"datepicker-title\" style=\"display: none;\"></th></tr><tr><th class=\"prev\">«</th><th colspan=\"5\" class=\"datepicker-switch\">2000-2900</th><th class=\"next\">»</th></tr></thead><tbody><tr><td colspan=\"7\"><span class=\"century old\">1900</span><span class=\"century focused\">2000</span><span class=\"century\">2100</span><span class=\"century\">2200</span><span class=\"century\">2300</span><span class=\"century\">2400</span><span class=\"century\">2500</span><span class=\"century\">2600</span><span class=\"century\">2700</span><span class=\"century\">2800</span><span class=\"century\">2900</span><span class=\"century new\">3000</span></td></tr></tbody><tfoot><tr><th colspan=\"7\" class=\"today\" style=\"display: none;\">Today</th></tr><tr><th colspan=\"7\" class=\"clear\" style=\"display: none;\">Clear</th></tr></tfoot></table></div></div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.box-body -->\n\t\t\t\t\t<div class=\"box-footer text-black\">\n\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t  <!-- Progress bars -->\n\t\t\t\t\t\t  <div class=\"clearfix\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Task #1</span>\n\t\t\t\t\t\t\t<small class=\"pull-right\">90%</small>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"progress xs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\n\t\t\t\t\t\t  </div>\n\t\t\n\t\t\t\t\t\t  <div class=\"clearfix\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Task #2</span>\n\t\t\t\t\t\t\t<small class=\"pull-right\">70%</small>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"progress xs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.col -->\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t  <div class=\"clearfix\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Task #3</span>\n\t\t\t\t\t\t\t<small class=\"pull-right\">60%</small>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"progress xs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\n\t\t\t\t\t\t  </div>\n\t\t\n\t\t\t\t\t\t  <div class=\"clearfix\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Task #4</span>\n\t\t\t\t\t\t\t<small class=\"pull-right\">40%</small>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"progress xs\">\n\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.col -->\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <!-- /.row -->\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <!-- /.box -->\n\t\t\n\t\t\t\t</section>\n\t\t\t\t<!-- right col -->\n\t\t\t  </div>\n</section> \n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/dash/dash.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fonoaudiologo/dash/dash.component.ts ***!
  \******************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashComponent = (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/fonoaudiologo/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/fonoaudiologo/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Fonoaudiólogos\n    <small>Tabela de Fonoaudiólogos</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li>Fono</li>\n    <li class=\"active\">Consulta</li>\n  </ol>\n</section>\n\n\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">fonoaudiólogos</h3>\n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n          <table id=\"pacientes\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th >Telefone</th>\n                <th >Email</th>\n                <th >Abrir Pagina</th>\n              </tr>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let lista of fono\">\n                <td>{{lista.nome}}</td>\n                <td>{{lista.telefone}}</td>\n                <td>{{lista.email}}</td>\n                <td align=\"center\"><a (click)=\"OpenRum()\"><i class=\"fa fa-external-link-square\" ></i></a></td>\n              \n              </tr>\n             \n            </tbody>\n            <tfoot>\n              <tr>\n                <th>Nome</th>\n                <th>Telefone</th>\n                <th>Email</th>\n                <th>Abrir Pagin</th>\n                \n              </tr>\n            </tfoot>\n          </table>\n        </div><!-- /.box-body -->\n      </div><!-- /.box -->\n    </div><!-- /.col -->\n  </div><!-- /.row -->\n</section><!-- /.content -->\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsultarFonoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarFonoComponent", function() { return ConsultarFonoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_fono_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fono.service */ "./src/app/services/fono.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultarFonoComponent = (function () {
    function ConsultarFonoComponent(fonoService) {
        this.fonoService = fonoService;
    }
    ConsultarFonoComponent.prototype.OpenRum = function () {
        var new_window = window.open('https://hangouts.google.com/hangouts/_/jyg7ajkibnf6pkmp7fqernkt7ue', "Hangout", 'fullscreen=yes');
    };
    ConsultarFonoComponent.prototype.ngOnInit = function () {
        this.fono = this.fonoService.getFono();
        $(function () {
            $("#pacientes").DataTable();
        });
    };
    ConsultarFonoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-fono',
            template: __webpack_require__(/*! ./consultar-fono.component.html */ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.html"),
            styles: [__webpack_require__(/*! ./consultar-fono.component.css */ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.css")],
            providers: [_services_fono_service__WEBPACK_IMPORTED_MODULE_1__["FonoService"]]
        }),
        __metadata("design:paramtypes", [_services_fono_service__WEBPACK_IMPORTED_MODULE_1__["FonoService"]])
    ], ConsultarFonoComponent);
    return ConsultarFonoComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Fonoaudiólogos\n    <small>Tabela de Meus Fonoaudiólogos</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li>Fono</li>\n    <li class=\"active\">Meus Fonos</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">fonoaudiólogos</h3>\n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n          <table id=\"pacientes\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th >Telefone</th>\n                <th >Email</th>\n                <th >Abrir Pagina</th>\n              </tr>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let lista of fono\">\n                <td>{{lista.nome}}</td>\n                <td>{{lista.telefone}}</td>\n                <td>{{lista.email}}</td>\n                <td align=\"center\"><a (click)=\"OpenRum()\"><i class=\"fa fa-external-link-square\" ></i></a></td>\n              \n              </tr>\n             \n            </tbody>\n            <tfoot>\n              <tr>\n                <th>Nome</th>\n                <th>Telefone</th>\n                <th>Email</th>\n                <th>Abrir Pagin</th>\n                \n              </tr>\n            </tfoot>\n          </table>\n        </div><!-- /.box-body -->\n      </div><!-- /.box -->\n    </div><!-- /.col -->\n  </div><!-- /.row -->\n</section><!-- /.content -->\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultarMeusFonosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarMeusFonosComponent", function() { return ConsultarMeusFonosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_fono_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fono.service */ "./src/app/services/fono.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultarMeusFonosComponent = (function () {
    function ConsultarMeusFonosComponent(fonoService) {
        this.fonoService = fonoService;
    }
    ConsultarMeusFonosComponent.prototype.ngOnInit = function () {
        this.fono = this.fonoService.getFono();
        $(function () {
            $("#pacientes").DataTable();
        });
    };
    ConsultarMeusFonosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-meus-fonos',
            template: __webpack_require__(/*! ./consultar-meus-fonos.component.html */ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.html"),
            styles: [__webpack_require__(/*! ./consultar-meus-fonos.component.css */ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.css")],
            providers: [_services_fono_service__WEBPACK_IMPORTED_MODULE_1__["FonoService"]]
        }),
        __metadata("design:paramtypes", [_services_fono_service__WEBPACK_IMPORTED_MODULE_1__["FonoService"]])
    ], ConsultarMeusFonosComponent);
    return ConsultarMeusFonosComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.css":
/*!************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bt-novo{\n    margin-right: 17px;\n    float: right;\n}"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n      Fonoaudiólogos\n      <small>Tabela de Fonoaudiólogos</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li>Fono</li>\n      <li class=\"active\">Admin</li>\n    </ol>\n  </section>\n  \n  \n  \n  <!-- Main content -->\n  <section class=\"content\">\n      \n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"box\">\n          <div class=\"box-header\">\n            <h3 class=\"box-title\">fonoaudiólogos</h3>\n            <button type=\"button\" class=\"btn btn-default bt-novo\" (click)=\"createPage()\">Novo</button>\n            \n          </div><!-- /.box-header -->\n          <div class=\"box-body\">\n            <table id=\"fonoaudiologos\" class=\"table table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>Nome</th>\n                  <th >CPF</th>\n                  <th >Ações</th>\n                </tr>\n              </thead>\n              <tbody>\n                 <tr *ngFor=\"let f of fonos\">\n                  <td>{{f.nome}}</td>\n                  <td>{{f.cpf}}</td>\n                  <td align=\"center\">\n                    <a [routerLink]=\"['/fonoaudiologo/fono/ver']\" \n                      [queryParams]=\"{ id: f.id }\">\n                      <i class=\"fa fa-eye\" ></i>\n                    </a>\n\n                    <a (click)=\"delete(f)\">\n                      <i class=\"fa fa-trash-o\" ></i>\n                    </a>\n                    <a [routerLink]=\"['/fonoaudiologo/fono/novo']\" \n                       [queryParams]=\"{ id: f.id }\">\n                       <i class=\"fa fa-pencil-square-o\" ></i>\n                    </a>\n                  </td>\n                \n                </tr>\n               \n              </tbody>\n            </table>\n          </div><!-- /.box-body -->\n        </div><!-- /.box -->\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n  </section><!-- /.content -->\n  "

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.ts ***!
  \***********************************************************************/
/*! exports provided: FonoAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoAdminComponent", function() { return FonoAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fonoaudiologo.service */ "./src/app/services/fonoaudiologo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FonoAdminComponent = (function () {
    function FonoAdminComponent(fonoService, router, chRef, dialog) {
        this.fonoService = fonoService;
        this.router = router;
        this.chRef = chRef;
        this.dialog = dialog;
        this.dataInfo = {
            "language": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
            }
        };
    }
    FonoAdminComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    FonoAdminComponent.prototype.refreshData = function () {
        var _this = this;
        this.fonoService.getAll().
            subscribe(function (fonos) {
            _this.fonos = fonos;
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            //let table: any = $('#fonoaudiologos');
            if ($.fn.dataTable.isDataTable('#fonoaudiologos')) {
                _this.dataTable = $('#fonoaudiologos').DataTable();
            }
            else {
                _this.dataTable = $('#fonoaudiologos').DataTable(_this.dataInfo);
            }
            //this.dataTable = table.DataTable();
        });
    };
    FonoAdminComponent.prototype.delete = function (fono) {
        this.openDialog(fono);
    };
    FonoAdminComponent.prototype.createPage = function () {
        this.router.navigate(['/fonoaudiologo/fono/novo']);
    };
    FonoAdminComponent.prototype.openDialog = function (fono) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            data: { msg: "Deseja realmente apagar esse registro?" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.fonoService.delete(fono).then(function (result) {
                    console.log(result);
                    _this.refreshData();
                }).catch(function (result) { return console.log(result); });
            }
        });
    };
    FonoAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fono-admin',
            template: __webpack_require__(/*! ./fono-admin.component.html */ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.html"),
            styles: [__webpack_require__(/*! ./fono-admin.component.css */ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.css")],
            providers: [
                _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_1__["FonoaudiologoService"],
            ]
        }),
        __metadata("design:paramtypes", [_services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_1__["FonoaudiologoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], FonoAdminComponent);
    return FonoAdminComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-detail{\n    margin-right: 17px;\n    float: right;\n}"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n\t\t<div class=\"row\">\n\t\t  <div class=\"col-xs-12\">\n\t\t\t<div class=\"box\">\n\t\t\t  <div class=\"box-header\">\n\t\t\t\t\n\t\t\t\t<h3 class=\"box-title\">Detalhes</h3>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-detail\"\n\t\t\t\t [routerLink]=\"['/fonoaudiologo/fono/admin']\">Admin</button>\n\n\t\t\t\t <button type=\"button\" class=\"btn btn-info btn-detail\" [routerLink]=\"['/fonoaudiologo/fono/novo']\" \n                       [queryParams]=\"{ id: fono.id }\">Atualizar</button>\n\n\n\t\t\t  </div><!-- /.box-header -->\n\t\t\t  <div class=\"box-body\">\n\t\t\t\t<table id=\"fono\" class=\"table table-bordered table-striped\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t   <th>Nome</th>\n\t\t\t\t\t   <td>{{fono.nome}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Descrição</th>\n\t\t\t\t\t\t\t<td>{{fono.descricao}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>CPF</th>\n\t\t\t\t\t\t\t<td>{{fono.cpf}}</td>\n\t\t\t\t\t</tr>\t\t\t\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Data de Nascimento</th>\n\t\t\t\t\t\t\t<td>{{fono.data_nascimento}}</td>\n\t\t\t\t\t</tr>\t\t\t   \n\t\t\t\t</table>\n\t\t\t  </div><!-- /.box-body -->\n\t\t\t</div><!-- /.box -->\n\t\t  </div><!-- /.col -->\n\t\t</div><!-- /.row -->\n\t  </section><!-- /.content -->\n\t  "

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.ts ***!
  \***************************************************************************/
/*! exports provided: FonoDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoDetalheComponent", function() { return FonoDetalheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/fonoaudiologo.service */ "./src/app/services/fonoaudiologo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FonoDetalheComponent = (function () {
    function FonoDetalheComponent(route, fonoService) {
        this.route = route;
        this.fonoService = fonoService;
    }
    FonoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            var id = params['id'];
            if (id != undefined) {
                _this.fonoService.get(id).subscribe(function (fono) { return _this.fono = fono; });
            }
        });
    };
    FonoDetalheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fono-detalhe',
            template: __webpack_require__(/*! ./fono-detalhe.component.html */ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./fono-detalhe.component.css */ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.css")],
            providers: [_services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_2__["FonoaudiologoService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_2__["FonoaudiologoService"]])
    ], FonoDetalheComponent);
    return FonoDetalheComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-form/fono-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-form/fono-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n      Fonoaudiólogo\n      <small>Formulário de Cadastro</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li><a href=\"#\">Perfil</a></li>\n      <li class=\"active\">Cadastro</li>\n    </ol>\n  </section>\n\n<section class=\"content\">\n\n  <!-- SELECT2 EXAMPLE -->\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Identifique-se</h3>\n\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Voce é?</label>\n            <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" tabindex=\"-1\" aria-hidden=\"true\">\n              <!-- <option selected=\"selected\">Alabama</option> -->\n              <option>Paciente</option>\n              <option>Fonoaudiologo</option>\n\n\n            </select>\n            <!-- <span class=\"select2 select2-container select2-container--default\" dir=\"ltr\" style=\"width: 100%;\"><span class=\"selection\"><span class=\"select2-selection select2-selection--single\" role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\" aria-labelledby=\"select2-1zxr-container\"><span class=\"select2-selection__rendered\" id=\"select2-1zxr-container\" title=\"Alabama\">Alabama</span><span class=\"select2-selection__arrow\" role=\"presentation\"><b role=\"presentation\"></b></span></span></span><span class=\"dropdown-wrapper\" aria-hidden=\"true\"></span></span> -->\n          </div>\n\n        </div>\n        <!-- /.col -->\n\n        <!-- /.col -->\n      </div>\n      <!-- /.row -->\n    </div>\n\n  </div>\n\n<!-- \n</section>\n\n<section class=\"content\"> -->\n\n  <div class=\"box box-primary\">\n    <div class=\"box-header with-border\">\n        <h3>Informações Pessoais</h3>\n      <div class=\"box-body\">\n        <form id=\"form1\" #f=\"ngForm\"\n        (ngSubmit)=\"onSubmit()\" class=\"form1\" method=\"post\">\n          <div class=\"col-md-12\">\n            <!-- Custom Tabs (Pulled to the right) -->\n            <div class=\"nav-tabs-custom\">\n              <div class=\"input-group col-xs-12\">\n                <label>Nome\n                  <em>*</em>\n                </label>\n                <input type=\"text\" [(ngModel)]=\"fono.nome\" name=\"nome\" id=\"nome\" class=\"form-control\" placeholder=\"Nome\" min=\"5\" title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\"\n                  required>\n                  <input type=\"hidden\" [(ngModel)]=\"fono.id\">\n              </div>\n              <br>\n              <div class=\"input-group col-xs-12\">\n                <label>Descrição\n                  <em>*</em>\n                </label>\n                <textarea rows=\"5\" [(ngModel)]=\"fono.descricao\" name=\"Descrição\" id=\"descrição\" class=\"form-control\" placeholder=\"Descrição\" min=\"5\" title=\"Breve descrição do seu perfil proficional.\"\n                  required></textarea>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Data de Nascimento\n                        <em>*</em>\n                      </label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </span>\n                      <input type=\"date\" [(ngModel)]=\"fono.data_nascimento\" maxlength=\"8\" name=\"dn\" id=\"dn\" class=\"form-control\" placeholder=\"Data de nascimento\" required>\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-4\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>CPF\n                        <em>*</em>\n                      </label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-credit-card\"></i>\n                      </span>\n                      <input type=\"text\" [(ngModel)]=\"fono.cpf\" name=\"cpf\" class=\"form-control\" placeholder=\"CPF\" pattern=\"\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}\" title=\"Este campo deve conter apenas números\"\n                        maxlength=\"14\" minlength=\"14\" OnKeyPress=\"formatar('###.###.###-##', this)\" id=\"cpf\" required>\n                    </div>\n\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-4\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>CRF\n                      </label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-credit-card\"></i>\n                      </span>\n                      <input type=\"text\" name=\"crf\" class=\"form-control\" \n                             placeholder=\"CRF\" pattern=\"\\d{11}\" \n                             title=\"Este campo deve conter apenas números\"\n                             maxlength=\"11\" minlength=\"11\" \n                             id=\"crf\" title=\"Este campo deve conter 11 caracteres \n                             e ser composto somente por números.\">\n                    </div>\n\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n              </div>\n              <!-- /.row -->\n              <br>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Sexo\n                    </label>\n                    <select name=\"num_sexo\" id=\"num_sexo\" \n                            class=\"form-control select2\"\n                            title=\"Por favor, selecione uma opção.\">\n                      <option value=\"\">--Selecione--</option>\n                      <option value='1'>Feminino</option>\n                      <option value='2'>Masculino</option>\n                    </select>\n\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label>Nacionalidade\n                    </label>\n                    <select name=\"nacionalidade\" id=\"nacionalidade\"\n                            class=\"form-control select2\" \n                            title=\"Por favor, selecione uma opção.\">\n                      <option value=\"\">--Selecione--</option>\n                      <option value='1'>Brasileira</option>\n                      <option value='2'>Brasileira - Nascido no exterior ou naturalizado</option>\n                      <option value='3'>Estrangeira</option>\n                    </select>\n\n                  </div>\n                </div>\n                <!-- /.col (right) -->\n\n              </div>\n              <!-- /.row -->\n\n\n              <h3>Contato</h3>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Telefone</label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-phone\"></i>\n                      </span>\n                      <input type=\"text\" name=\"telefone1\" class=\"form-control\" placeholder=\"xx xxxx-xxxx\" title=\"Telefone\" maxlength=\"12\" OnKeyPress=\"formatar('## ####-####', this);\">\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-6\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Email</label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-envelope\"></i>\n                      </span>\n                      <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n              </div>\n              <!-- /.row -->\n              <br>\n              <br>\n              <h3>Endereço</h3>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"col-lg-12 input-group\">\n                    <label>Localização/Zona de Residência\n                      <em>*</em>\n                    </label>\n                    <select name=\"zona\" id=\"zona\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required>\n                      <option value=\"\">--Selecione--</option>\n                      <option value='1'>Urbana</option>\n                      <option value='2'>Rural</option>\n                    </select>\n                  </div>\n                </div>\n                <!-- /.form-group -->\n                <div class=\"col-lg-6\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>CEP</label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-home\"></i>\n                      </span>\n                      <input type=\"int\" maxlength=\"10\" class=\"form-control\" name=\"cep\" id=\"cep\" OnKeyPress=\"formatar('##.###-###', this);\">\n\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n              </div>\n              <!-- /.row -->\n              <br>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"input-group col-xs-12\">\n                    <label>Estado\n                    </label>\n\n                    <select class=\"form-control select2\" name=\"estado\" id=\"estado\" id=\"estado\" onchange=\"showUser(this.value)\" onChange=\"ativa(this);\"\n                      >\n\n                      <option value=\"\">--Selecione--</option>\n                      <option value='1'>Acre</option>\n                      <option value='2'>Alagoas</option>\n                      <option value='3'>Amazonas</option>\n                      <option value='4'>Amapá</option>\n                      <option value='5'>Bahia</option>\n                      <option value='6'>Ceará</option>\n                      <option value='7'>Distrito Federal</option>\n                      <option value='8'>Espírito Santo</option>\n                      <option value='9'>Goiás</option>\n                      <option value='10'>Maranhão</option>\n                      <option value='11'>Minas Gerais</option>\n                      <option value='12'>Mato Grosso do Sul</option>\n                      <option value='13'>Mato Grosso</option>\n                      <option value='14'>Pará</option>\n                      <option value='15'>Paraíba</option>\n                      <option value='16'>Pernambuco</option>\n                      <option value='17'>Piauí</option>\n                      <option value='18'>Paraná</option>\n                      <option value='19'>Rio de Janeiro</option>\n                      <option value='20'>Rio Grande do Norte</option>\n                      <option value='21'>Rondônia</option>\n                      <option value='22'>Roraima</option>\n                      <option value='23'>Rio Grande do Sul</option>\n                      <option value='24'>Santa Catarina</option>\n                      <option value='25'>Sergipe</option>\n                      <option value='26'>São Paulo</option>\n                      <option value='27'>Tocantins</option>\n                    </select>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-4\">\n                  <div class=\"input-group col-xs-12\">\n                    <label>Município\n                    </label>\n                    <select class=\"form-control select2\" name=\"municipio\" id=\"municipio\">\n                      <option value=\"\">Selecione o Estado</option>\n                      <option value='26'>Garanhuns</option>\n                    </select>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-4\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Bairro</label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-home\"></i>\n                      </span>\n                      <input type=\"text\" name=\"bairro\" id=\"bairro\" class=\"form-control\" placeholder=\"Bairro\" title=\"Bairro\">\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n              </div>\n              <!-- /.row -->\n              <br>\n              <div class=\"row\">\n                <div class=\"col-lg-9\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Rua\n                        <em>*</em>\n                      </label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-home\"></i>\n                      </span>\n                      <input type=\"text\" name=\"rua\" id=\"rua\" class=\"form-control\" placeholder=\"Endereço\" min=\"5\" title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\"\n                        required>\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n                <div class=\"col-lg-3\">\n                  <div class=\"col-lg-12 input-group\">\n                    <div>\n                      <label>Número</label>\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"fa fa-home\"></i>\n                      </span>\n                      <input type=\"text\" name=\"num_end\" class=\"form-control\" placeholder=\"Número\" title=\"Número\">\n                    </div>\n                  </div>\n                  <!-- /input-group -->\n                </div>\n                <!-- /.col-lg-6 -->\n              </div>\n              <!-- /.row -->\n              <br>\n              <br>\n\n\n\n              <h3>Dados de Formação</h3>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Grau de formação\n                      <em>*</em>\n                    </label>\n                    <select name=\"escolaridade\" id=\"escolaridade\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" onChange=\"ativaPosGraduacao(this.value)\"\n                      required>\n                      <option value=\"\">--Selecione--</option>\n                      <option value='1'>Graduação</option>\n                      <option value='2'>Pós Graduação</option>\n                      <option value='3'>Mestrado</option>\n                      <option value='4'>Pós doc</option>\n                    </select>\n                  </div>\n                </div>\n                <!-- /.form-group -->\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Curso:</label>\n                    <input type=\"text\" class=\"form-control pull-right\" id=\"reservationtime\">\n\n                  </div>\n                </div>\n                <!-- /.form-group -->\n                <br>\n              </div>\n              <!-- /.row -->\n              <br>\n              <!-- Date and time range -->\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Instituição de Ensino:</label>\n                    <input type=\"text\" class=\"form-control pull-right\" id=\"reservationtime\">\n\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Data de Conclusão:</label>\n                    <input type=\"date\" class=\"form-control pull-right\" id=\"reservation\">\n                  </div>\n                </div>\n                <br>\n                \n\n              </div>\n\n              \n            </div>\n          </div>\n          <div id=\"formacao\">\n              <div class=\"row\">\n                <div class=\"col-md-12\" align=\"center\">\n                  <input type=\"button\" class=\"btn btn-primary btn-block\" id=\"add\" name=\"add\" value=\"Adicionar Formação\" />\n                </div>\n              </div>\n            </div>\n            <br>\n          <p align=\"right\">\n            <button type=\"submit\" class=\"btn btn-lg btn-primary fa fa-save\" align=\"right\">\n              <b style=\"margin-left: 10px\"> Salvar</b>\n            </button>\n          </p>\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono-form/fono-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: FonoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoFormComponent", function() { return FonoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_fono__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/fono */ "./src/app/models/fono.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/fonoaudiologo.service */ "./src/app/services/fonoaudiologo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FonoFormComponent = (function () {
    function FonoFormComponent(db, route, router, fonoService) {
        this.db = db;
        this.route = route;
        this.router = router;
        this.fonoService = fonoService;
    }
    FonoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            $("input[name='add']").click(function (e) {
                var id = $(".items").length;
                var teste = $(".0").length;
                var teste1 = $(".1").length;
                var teste2 = $(".2").length;
                if (teste == 0) {
                    id = 0;
                }
                else if (teste == 1 && teste1 == 0) {
                    id = 1;
                }
                else if (teste == 1 && teste1 == 1) {
                    id = 2;
                }
                if (teste != 1 || teste1 != 1 || teste2 != 1) {
                    var areaCurso = '<div class="row"><div class="col-md-6"><div class="form-group"> <label>Grau de formação<em>*</em></label><select name="escolaridade" id="escolaridade" class="form-control select2" title="Por favor, selecione uma opção." onChange="ativaPosGraduacao(this.value)"required><option value="">--Selecione--</option><option value="1">Graduação</option><option value="2">Pós Graduação</option><option value="3">Mestrado</option><option value="4">Pós doc</option></select></div></div>';
                    var outrosDados = '<div class="col-md-6"><div class="form-group"><label>Curso:</label><input type="text" class="form-control pull-right" id="reservationtime"></div></div><br></div><br>';
                    var nomePeriodo = '<div class="row"><div class="col-md-6">  <div class="form-group"><label>Instituição de Ensino:</label><input type="text" class="form-control pull-right" id="reservationtime"></div></div><div class="col-md-6"><div class="form-group"><label>Data de Conclusão:</label><input type="date" class="form-control pull-right" id="reservation"> </div></div><br></div>';
                    var input = '<div class="items ' + id + '"><br>' + areaCurso + outrosDados + nomePeriodo + '<a href="#" class="remove" style="margin:20px auto; text-align:center; display:block; width:120px;" ><i class="glyphicon glyphicon-trash" ></i></a></div>';
                    $('#formacao').append(input);
                }
            });
            $('#formacao').delegate('a', 'click', function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
            });
        });
        this.fono = new _models_fono__WEBPACK_IMPORTED_MODULE_1__["Fono"](this.db);
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            var id = params['id'];
            if (id != undefined) {
                _this.fonoService.get(id).subscribe(function (fono) { return _this.fono = fono; });
            }
        });
    };
    FonoFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.fono.id) {
            this.fono.update().subscribe(function (result) {
                console.log(result);
                _this.router.navigate(['/fonoaudiologo/fono/ver'], { queryParams: { id: result.id } });
            });
        }
        else {
            this.fono.add().then(function (result) {
                console.log(result);
                _this.router.navigate(['/fonoaudiologo/fono/ver'], { queryParams: { id: result.id } });
            });
        }
    };
    FonoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fono-form',
            template: __webpack_require__(/*! ./fono-form.component.html */ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.html"),
            styles: [__webpack_require__(/*! ./fono-form.component.css */ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.css")],
            providers: [_services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_4__["FonoaudiologoService"]]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_fonoaudiologo_service__WEBPACK_IMPORTED_MODULE_4__["FonoaudiologoService"]])
    ], FonoFormComponent);
    return FonoFormComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono.component.html":
/*!********************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono.component.ts ***!
  \******************************************************/
/*! exports provided: FonoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoComponent", function() { return FonoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FonoComponent = (function () {
    function FonoComponent() {
    }
    FonoComponent.prototype.ngOnInit = function () {
    };
    FonoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fono',
            template: __webpack_require__(/*! ./fono.component.html */ "./src/app/fonoaudiologo/fono/fono.component.html"),
            styles: [__webpack_require__(/*! ./fono.component.css */ "./src/app/fonoaudiologo/fono/fono.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FonoComponent);
    return FonoComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono.module.ts ***!
  \***************************************************/
/*! exports provided: FonoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoModule", function() { return FonoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _fono_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fono.routing.module */ "./src/app/fonoaudiologo/fono/fono.routing.module.ts");
/* harmony import */ var _fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fono-detalhe/fono-detalhe.component */ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.ts");
/* harmony import */ var _fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fono-form/fono-form.component */ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.ts");
/* harmony import */ var _fono_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fono.component */ "./src/app/fonoaudiologo/fono/fono.component.ts");
/* harmony import */ var _consultar_fono_consultar_fono_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-fono/consultar-fono.component */ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.ts");
/* harmony import */ var _consultar_meus_fonos_consultar_meus_fonos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultar-meus-fonos/consultar-meus-fonos.component */ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fono-admin/fono-admin.component */ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FonoModule = (function () {
    function FonoModule() {
    }
    FonoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fono_routing_module__WEBPACK_IMPORTED_MODULE_2__["FonoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]],
            declarations: [
                _fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_3__["FonoDetalheComponent"],
                _fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_4__["FonoFormComponent"],
                _fono_component__WEBPACK_IMPORTED_MODULE_5__["FonoComponent"],
                _consultar_fono_consultar_fono_component__WEBPACK_IMPORTED_MODULE_6__["ConsultarFonoComponent"],
                _consultar_meus_fonos_consultar_meus_fonos_component__WEBPACK_IMPORTED_MODULE_7__["ConsultarMeusFonosComponent"],
                //GridViewComponent,
                _fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_9__["FonoAdminComponent"]
            ]
        })
    ], FonoModule);
    return FonoModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fono/fono.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/fono/fono.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FonoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoRoutingModule", function() { return FonoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _fono_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fono.component */ "./src/app/fonoaudiologo/fono/fono.component.ts");
/* harmony import */ var _fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fono-form/fono-form.component */ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.ts");
/* harmony import */ var _fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fono-detalhe/fono-detalhe.component */ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.ts");
/* harmony import */ var _fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fono-admin/fono-admin.component */ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var fonoRoutes = [
    { path: 'fono', component: _fono_component__WEBPACK_IMPORTED_MODULE_2__["FonoComponent"], children: [
            { path: 'novo', component: _fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_3__["FonoFormComponent"] },
            { path: 'ver', component: _fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_4__["FonoDetalheComponent"] },
            { path: 'admin', component: _fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_5__["FonoAdminComponent"] },
        ] }
];
var FonoRoutingModule = (function () {
    function FonoRoutingModule() {
    }
    FonoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(fonoRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FonoRoutingModule);
    return FonoRoutingModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fonoaudiologo.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/fonoaudiologo.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix{\n    clear:both;\n}"

/***/ }),

/***/ "./src/app/fonoaudiologo/fonoaudiologo.component.html":
/*!************************************************************!*\
  !*** ./src/app/fonoaudiologo/fonoaudiologo.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper clearfix\">\n    <header class=\"main-header\">\n        <!-- Logo -->\n        <a routerLink=\"/fonoaudiologo/dash\" class=\"logo\">\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class=\"logo-mini\"><b>+F</b></span>\n        <!-- logo for regular state and mobile devices -->\n        <span class=\"logo-lg\"><b>+Fono</b></span>\n        </a>\n        <!-- Header Navbar: style can be found in header.less -->\n        <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n            <!-- Sidebar toggle button-->\n            <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <div class=\"navbar-custom-menu\">\n                <ul class=\"nav navbar-nav\">\n                    <!-- User Account: style can be found in dropdown.less -->\n                    <li class=\"dropdown user user-menu\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <img [src]=\"img\" class=\"user-image\" alt=\"User Image\">\n                            <span class=\"hidden-xs\">{{name}}</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <!-- User image -->\n                            <li class=\"user-header\">\n                                <img src={{img}} class=\"img-circle\" alt=\"User Image\">\n                                <p>\n                                   {{name}}\n                                </p>\n                            </li>\n                            <!-- Menu Footer-->\n                            <li class=\"user-footer\">\n                                <div class=\"pull-left\">\n                                        <a class=\"\" routerLink=\"/fonoaudiologo/perfil/dashboard\">\n                                            Perfil\n                                        </a>\n                                </div>\n                                <div class=\"pull-right\">\n                                        <a (click)=\"attachSignout()\">\n                                            Sair\n                                        </a>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n    \n      <!-- Left side column. contains the logo and sidebar -->\n      <aside class=\"main-sidebar\">\n            <!-- sidebar: style can be found in sidebar.less -->\n            <section class=\"sidebar\">\n              <!-- Sidebar user panel -->\n              <div class=\"user-panel\">\n                <div class=\"pull-left image\">\n                  <img [src]=\"img\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <div class=\"pull-left info\">\n                  <p>{{name}}</p>\n                  <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n                  \n                  <button type=\"button\" (click)=\"openRoom()\" class=\"btn btn-primary\">Sala</button>\n                </div>\n              </div>\n              <!-- search form -->\n              <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n                <div class=\"input-group\">\n                  <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n                  <span class=\"input-group-btn\">\n                    <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i></button>\n                  </span>\n                </div>\n              </form>\n              <!-- /.search form -->\n              <ul class=\"sidebar-menu\">\n                <li class=\"header\">NAVEGAÇÃO PRINCIPAL</li>\n                <!--<li><a routerLink=\"/fonoaudiologo/video\"><i class=\"fa fa-gamepad\"></i>Vídeo</a></li>-->\n                <li class=\"treeview\">\n                  <a>\n                    <i class=\"fa fa-user\"></i>\n                    <span>Fonoaldiologo</span>\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                      <li><a routerLink=\"/fonoaudiologo/fono/admin\"><i class=\"fa fa-circle-o\"></i>Admin</a></li>\n                    <li><a routerLink=\"/fonoaudiologo/fono/consulta\"><i class=\"fa fa-circle-o\"></i> Consultar</a></li>\n                    <li><a routerLink=\"/fonoaudiologo/fono/consultarMeusFonos\"><i class=\"fa fa-circle-o\"></i> Meus Fonoaldiologos</a></li>\n                    <li><a routerLink=\"/fonoaudiologo/fono/novo\"><i class=\"fa fa-circle-o\"></i> Novo</a></li>\n                  </ul>\n                </li>\n                <li class=\"treeview\">\n                  <a>\n                    <i class=\"fa fa-user\"></i>\n                    <span>Paciente</span>\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a routerLink=\"/fonoaudiologo/paciente/consulta\"><i class=\"fa fa-circle-o\"></i> Consultar</a></li>\n                    <li><a routerLink=\"/fonoaudiologo/paciente/consultarMeus\"><i class=\"fa fa-circle-o\"></i> Meus Pacientes</a></li>\n                  </ul>\n                </li>\n                <li class=\"treeview\">\n                  <a>\n                    <i class=\"fa fa-calendar\"></i> \n                    <span>Agenda</span>\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a routerLink=\"/fonoaudiologo/agenda/calendarioAgenda\"><i class=\"fa fa-circle-o\"></i> Calendário</a></li>\n                    <li><a routerLink=\"/fonoaudiologo/agenda/consultaAgenda\"><i class=\"fa fa-circle-o\"></i> Consultar</a></li>\n                  </ul>\n                </li>\n                <li class=\"treeview\">\n                  <a>\n                    <i class=\"fa fa-gamepad\"></i> \n                    <span>Jogos</span>\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a routerLink=\"/fonoaudiologo/jogos/listaJogos\"><i class=\"fa fa-circle-o\"></i> Jogos</a></li>\n                  </ul>\n                </li>\n                <li class=\"treeview\">\n                  <a>\n                    <i class=\"glyphicon glyphicon-piggy-bank\"></i> \n                    <span>Faturamento</span>\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </a>\n                  <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Por Período</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Anual</a></li>\n                  </ul>\n                </li>\n                <li class=\"header\">SITE</li>\n              </ul>\n            </section>\n            <!-- /.sidebar -->\n        </aside>\n        \n        <div class=\"content-wrapper\">\n            <router-outlet></router-outlet>\n            <div class=\"clearfix\"></div>\n        </div>    \n        <footer class=\"main-footer\">\n            <div class=\"pull-right hidden-xs\">\n                <b>Version</b> 1.0\n            </div>\n            <strong>Copyright &copy;.</strong> Todos os direitos reservados.\n        </footer>\n</div>"

/***/ }),

/***/ "./src/app/fonoaudiologo/fonoaudiologo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fonoaudiologo/fonoaudiologo.component.ts ***!
  \**********************************************************/
/*! exports provided: FonoaudiologoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoaudiologoComponent", function() { return FonoaudiologoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FonoaudiologoComponent = (function () {
    function FonoaudiologoComponent() {
    }
    FonoaudiologoComponent.prototype.ngOnInit = function () {
        this.img = localStorage.getItem('img');
        this.name = localStorage.getItem('name');
    };
    FonoaudiologoComponent.prototype.attachSignout = function () {
    };
    FonoaudiologoComponent.prototype.openRoom = function () {
        var new_window = window.open('https://hangouts.google.com/hangouts/_/jyg7ajkibnf6pkmp7fqernkt7ue', "Hangout", 'fullscreen=yes');
        new_window.onunload = function () {
            console.log("fechou");
        };
    };
    FonoaudiologoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./fonoaudiologo.component.html */ "./src/app/fonoaudiologo/fonoaudiologo.component.html"),
            styles: [__webpack_require__(/*! ./fonoaudiologo.component.css */ "./src/app/fonoaudiologo/fonoaudiologo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FonoaudiologoComponent);
    return FonoaudiologoComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/fonoaudiologo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fonoaudiologo/fonoaudiologo.module.ts ***!
  \*******************************************************/
/*! exports provided: FonoaudiologoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoaudiologoModule", function() { return FonoaudiologoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/fonoaudiologo/home.routing.module.ts");
/* harmony import */ var _fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonoaudiologo.component */ "./src/app/fonoaudiologo/fonoaudiologo.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/fonoaudiologo/dash/dash.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video/video.component */ "./src/app/fonoaudiologo/video/video.component.ts");
/* harmony import */ var _paciente_paciente_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paciente/paciente.module */ "./src/app/fonoaudiologo/paciente/paciente.module.ts");
/* harmony import */ var _paciente_paciente_selecionar_paciente_selecionar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paciente/paciente-selecionar/paciente-selecionar.component */ "./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FonoaudiologoModule = (function () {
    function FonoaudiologoModule() {
    }
    FonoaudiologoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _paciente_paciente_module__WEBPACK_IMPORTED_MODULE_6__["PacienteModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [_fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_3__["FonoaudiologoComponent"], _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__["DashComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], _paciente_paciente_selecionar_paciente_selecionar_component__WEBPACK_IMPORTED_MODULE_7__["PacienteSelecionarComponent"]]
        })
    ], FonoaudiologoModule);
    return FonoaudiologoModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/home.routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/fonoaudiologo/home.routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonoaudiologo.component */ "./src/app/fonoaudiologo/fonoaudiologo.component.ts");
/* harmony import */ var _fono_fono_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fono/fono.component */ "./src/app/fonoaudiologo/fono/fono.component.ts");
/* harmony import */ var _fono_consultar_fono_consultar_fono_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fono/consultar-fono/consultar-fono.component */ "./src/app/fonoaudiologo/fono/consultar-fono/consultar-fono.component.ts");
/* harmony import */ var _fono_consultar_meus_fonos_consultar_meus_fonos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fono/consultar-meus-fonos/consultar-meus-fonos.component */ "./src/app/fonoaudiologo/fono/consultar-meus-fonos/consultar-meus-fonos.component.ts");
/* harmony import */ var _fono_fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fono/fono-form/fono-form.component */ "./src/app/fonoaudiologo/fono/fono-form/fono-form.component.ts");
/* harmony import */ var _fono_fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fono/fono-detalhe/fono-detalhe.component */ "./src/app/fonoaudiologo/fono/fono-detalhe/fono-detalhe.component.ts");
/* harmony import */ var _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paciente/paciente.component */ "./src/app/fonoaudiologo/paciente/paciente.component.ts");
/* harmony import */ var _paciente_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paciente/consulta/consulta.component */ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.ts");
/* harmony import */ var _paciente_consultar_meus_consultar_meus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paciente/consultar-meus/consultar-meus.component */ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.ts");
/* harmony import */ var _paciente_paciente_evolucao_paciente_evolucao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paciente/paciente-evolucao/paciente-evolucao.component */ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.ts");
/* harmony import */ var _paciente_paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./paciente/paciente-form/paciente-form.component */ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.ts");
/* harmony import */ var _paciente_paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./paciente/paciente-detalhe/paciente-detalhe.component */ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.ts");
/* harmony import */ var _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./agenda/agenda.component */ "./src/app/fonoaudiologo/agenda/agenda.component.ts");
/* harmony import */ var _agenda_consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./agenda/consulta-agenda/consulta-agenda.component */ "./src/app/fonoaudiologo/agenda/consulta-agenda/consulta-agenda.component.ts");
/* harmony import */ var _agenda_calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./agenda/calendario-agenda/calendario-agenda.component */ "./src/app/fonoaudiologo/agenda/calendario-agenda/calendario-agenda.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/fonoaudiologo/dash/dash.component.ts");
/* harmony import */ var _jogos_jogos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./jogos/jogos.component */ "./src/app/fonoaudiologo/jogos/jogos.component.ts");
/* harmony import */ var _jogos_lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./jogos/lista-jogos/lista-jogos.component */ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.ts");
/* harmony import */ var _paciente_paciente_selecionar_paciente_selecionar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./paciente/paciente-selecionar/paciente-selecionar.component */ "./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/fonoaudiologo/perfil/perfil.component.ts");
/* harmony import */ var _perfil_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./perfil/dashboard/dashboard.component */ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.ts");
/* harmony import */ var _perfil_meus_dados_meus_dados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./perfil/meus-dados/meus-dados.component */ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.ts");
/* harmony import */ var _fono_fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fono/fono-admin/fono-admin.component */ "./src/app/fonoaudiologo/fono/fono-admin/fono-admin.component.ts");
/* harmony import */ var _paciente_admin_paciente_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paciente-admin/paciente-admin.component */ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var homeRoutes = [
    { path: 'fonoaudiologo', component: _fonoaudiologo_component__WEBPACK_IMPORTED_MODULE_2__["FonoaudiologoComponent"], children: [
            { path: 'fono', component: _fono_fono_component__WEBPACK_IMPORTED_MODULE_3__["FonoComponent"], children: [
                    { path: 'novo', component: _fono_fono_form_fono_form_component__WEBPACK_IMPORTED_MODULE_6__["FonoFormComponent"] },
                    { path: 'ver', component: _fono_fono_detalhe_fono_detalhe_component__WEBPACK_IMPORTED_MODULE_7__["FonoDetalheComponent"] },
                    { path: 'admin', component: _fono_fono_admin_fono_admin_component__WEBPACK_IMPORTED_MODULE_24__["FonoAdminComponent"] },
                ] },
            { path: 'fono', component: _fono_fono_component__WEBPACK_IMPORTED_MODULE_3__["FonoComponent"], children: [
                    { path: 'consulta', component: _fono_consultar_fono_consultar_fono_component__WEBPACK_IMPORTED_MODULE_4__["ConsultarFonoComponent"] },
                    { path: 'consultarMeusFonos', component: _fono_consultar_meus_fonos_consultar_meus_fonos_component__WEBPACK_IMPORTED_MODULE_5__["ConsultarMeusFonosComponent"] },
                ] },
            { path: 'paciente', component: _paciente_paciente_component__WEBPACK_IMPORTED_MODULE_8__["PacienteComponent"], children: [
                    { path: 'consulta', component: _paciente_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_9__["ConsultaComponent"] },
                    { path: 'consultarMeus', component: _paciente_consultar_meus_consultar_meus_component__WEBPACK_IMPORTED_MODULE_10__["ConsultarMeusComponent"] },
                    { path: 'evolucao', component: _paciente_paciente_evolucao_paciente_evolucao_component__WEBPACK_IMPORTED_MODULE_11__["PacienteEvolucaoComponent"] },
                    { path: 'novo', component: _paciente_paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_12__["PacienteFormComponent"] },
                    { path: 'ver', component: _paciente_paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_13__["PacienteDetalheComponent"] },
                    { path: 'admin', component: _paciente_admin_paciente_admin_component__WEBPACK_IMPORTED_MODULE_25__["PacienteAdminComponent"] },
                ] },
            { path: 'jogos', component: _jogos_jogos_component__WEBPACK_IMPORTED_MODULE_18__["JogosComponent"], children: [
                    { path: 'listaJogos', component: _jogos_lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_19__["ListaJogosComponent"] },
                ] },
            { path: 'agenda', component: _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_14__["AgendaComponent"], children: [
                    { path: 'consultaAgenda', component: _agenda_consulta_agenda_consulta_agenda_component__WEBPACK_IMPORTED_MODULE_15__["ConsultaAgendaComponent"] },
                    { path: 'calendarioAgenda', component: _agenda_calendario_agenda_calendario_agenda_component__WEBPACK_IMPORTED_MODULE_16__["CalendarioAgendaComponent"] },
                ] },
            { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_21__["PerfilComponent"], children: [
                    { path: 'dashboard', component: _perfil_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"] },
                    { path: 'meusDados', component: _perfil_meus_dados_meus_dados_component__WEBPACK_IMPORTED_MODULE_23__["MeusDadosComponent"] },
                ] },
            { path: 'dash', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_17__["DashComponent"] },
            { path: 'video', component: _paciente_paciente_selecionar_paciente_selecionar_component__WEBPACK_IMPORTED_MODULE_20__["PacienteSelecionarComponent"] }
        ] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(homeRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/jogos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/jogos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/jogos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/jogos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/jogos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/jogos.component.ts ***!
  \********************************************************/
/*! exports provided: JogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosComponent", function() { return JogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JogosComponent = (function () {
    function JogosComponent() {
    }
    JogosComponent.prototype.ngOnInit = function () {
    };
    JogosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jogos',
            template: __webpack_require__(/*! ./jogos.component.html */ "./src/app/fonoaudiologo/jogos/jogos.component.html"),
            styles: [__webpack_require__(/*! ./jogos.component.css */ "./src/app/fonoaudiologo/jogos/jogos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JogosComponent);
    return JogosComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/jogos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/jogos.module.ts ***!
  \*****************************************************/
/*! exports provided: JogosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosModule", function() { return JogosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _jogos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jogos.routing.module */ "./src/app/fonoaudiologo/jogos/jogos.routing.module.ts");
/* harmony import */ var _jogos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jogos.component */ "./src/app/fonoaudiologo/jogos/jogos.component.ts");
/* harmony import */ var _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-jogos/lista-jogos.component */ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var JogosModule = (function () {
    function JogosModule() {
    }
    JogosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _jogos_routing_module__WEBPACK_IMPORTED_MODULE_2__["JogosRoutingModule"]
            ],
            declarations: [_jogos_component__WEBPACK_IMPORTED_MODULE_3__["JogosComponent"], _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__["ListaJogosComponent"]]
        })
    ], JogosModule);
    return JogosModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/jogos.routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/jogos.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: JogosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosRoutingModule", function() { return JogosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _jogos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jogos.component */ "./src/app/fonoaudiologo/jogos/jogos.component.ts");
/* harmony import */ var _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-jogos/lista-jogos.component */ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var jogosRoutes = [
    { path: 'jogos', component: _jogos_component__WEBPACK_IMPORTED_MODULE_2__["JogosComponent"], children: [
            { path: 'listaJogos', component: _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_3__["ListaJogosComponent"] }
        ] }
];
var JogosRoutingModule = (function () {
    function JogosRoutingModule() {
    }
    JogosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(jogosRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JogosRoutingModule);
    return JogosRoutingModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Jogos\n    <small>Lista de Jogos</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Jogos</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 1</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 2</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 3</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n                <ul class=\"nav nav-stacked\">\n                  <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n                </ul>\n              </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n\n\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 1</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 2</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 3</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n                <ul class=\"nav nav-stacked\">\n                  <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n                </ul>\n              </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n\n\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 1</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 2</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n              <ul class=\"nav nav-stacked\">\n                <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-4\">\n          <!-- Widget: user widget style 1 -->\n          <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-black\" style=\"background: url('http://s1.1zoom.net/prev2/435/434655.jpg') center center;\">\n              <h3 class=\"widget-user-username\">Jogo 3</h3>\n              <h5 class=\"widget-user-desc\">Breve detalhe do jogo</h5>\n            </div>\n            <div class=\"box-footer no-padding\">\n                <ul class=\"nav nav-stacked\">\n                  <li><a href=\"#\">Jogar <i class=\"fa fa-gamepad pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Jogar com Paciente <i class=\"fa fa-users pull-right text-blue\"></i></a></li>\n                  <li><a href=\"#\">Indicar a Paciente <i class=\"fa fa-share pull-right text-blue\"></i></a></li>\n                </ul>\n              </div>\n          </div>\n          <!-- /.widget-user -->\n      </div>\n      <!-- /.col -->\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListaJogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaJogosComponent", function() { return ListaJogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaJogosComponent = (function () {
    function ListaJogosComponent() {
    }
    ListaJogosComponent.prototype.ngOnInit = function () {
    };
    ListaJogosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-jogos',
            template: __webpack_require__(/*! ./lista-jogos.component.html */ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.html"),
            styles: [__webpack_require__(/*! ./lista-jogos.component.css */ "./src/app/fonoaudiologo/jogos/lista-jogos/lista-jogos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListaJogosComponent);
    return ListaJogosComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/models/paciente/evolucao.ts":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/models/paciente/evolucao.ts ***!
  \***********************************************************/
/*! exports provided: Evolucao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evolucao", function() { return Evolucao; });
var Evolucao = (function () {
    function Evolucao(titulo, descricao, hora, data, tipoEvolucao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.hora = hora;
        this.data = data;
        this.tipoEvolucao = tipoEvolucao;
    }
    return Evolucao;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/models/paciente/paciente.ts":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/models/paciente/paciente.ts ***!
  \***********************************************************/
/*! exports provided: Paciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../entity */ "./src/app/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Paciente = (function (_super) {
    __extends(Paciente, _super);
    function Paciente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paciente;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-grid-view [title]=\"paciente\"\n               [urlCreate]=\"['/fonoaudiologo/paciente/ver']\"\n               [urlView]=\"['/fonoaudiologo/paciente/ver']\"\n               [urlUpdate]=\"['/fonoaudiologo/paciente/ver']\"\n               (onDelete)=\"delete($event)\"\n               [data]=\"pacientes\"\n               [fields]=\"['nome','telefone','email']\"\n               [labels]=\"['Nome','Telefone','E-mail']\"\n               >\n</app-grid-view>\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: PacienteAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteAdminComponent", function() { return PacienteAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/paciente/paciente */ "./src/app/fonoaudiologo/models/paciente/paciente.ts");
/* harmony import */ var _services_pacientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pacientes.service */ "./src/app/services/pacientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PacienteAdminComponent = (function () {
    function PacienteAdminComponent(pacienteService, router, chRef, dialog, db) {
        this.pacienteService = pacienteService;
        this.router = router;
        this.chRef = chRef;
        this.dialog = dialog;
        this.db = db;
    }
    PacienteAdminComponent.prototype.ngOnInit = function () {
        var p1 = new _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_1__["Paciente"](this.db);
        p1.nome = "Pires";
        p1.id = "1";
        p1.telefone = "32312312";
        p1.email = "w@gmail.com";
        //this.pacientes =[p1]
        this.refreshData();
    };
    PacienteAdminComponent.prototype.refreshData = function () {
        var _this = this;
        this.pacienteService.getAll().
            subscribe(function (pacientes) {
            var p = [];
            pacientes.forEach(function (element) { return p.push(element); });
            _this.pacientes = p;
            _this.chRef.detectChanges();
        });
    };
    PacienteAdminComponent.prototype.delete = function (paciente) {
        this.openDialog(paciente);
    };
    // createPage(){
    //   this.router.navigate(['/fonoaudiologo/fono/novo']);
    // }
    PacienteAdminComponent.prototype.openDialog = function (paciente) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: { msg: "Deseja realmente apagar esse registro?" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.pacienteService.delete(paciente).then(function (result) {
                    console.log(result);
                    _this.refreshData();
                }).catch(function (result) { return console.log(result); });
            }
        });
    };
    PacienteAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente-admin',
            template: __webpack_require__(/*! ./paciente-admin.component.html */ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.html"),
            styles: [__webpack_require__(/*! ./paciente-admin.component.css */ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.css")],
            providers: [_services_pacientes_service__WEBPACK_IMPORTED_MODULE_2__["PacientesService"]]
        }),
        __metadata("design:paramtypes", [_services_pacientes_service__WEBPACK_IMPORTED_MODULE_2__["PacientesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], PacienteAdminComponent);
    return PacienteAdminComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.css":
/*!************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consulta/consulta.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consulta/consulta.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Pacientes\n    <small>Tabela de Pacientes</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li>Paciente</li>\n    <li class=\"active\">Consulta</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Pacientes</h3>\n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n          <table id=\"pacientes\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th width=\"11%\">Telefone</th>\n                <th width=\"11%\">Email</th>\n                <th width=\"11%\">Patologias</th>\n                <th width=\"7%\">Recebendo Tratamento</th>\n                <th width=\"5%\">Oferecer Consulta</th>\n              </tr>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let lista of paciente\">\n                <td>{{lista.nome}}</td>\n                <td>{{lista.telefone}}</td>\n                <td>{{lista.email}}</td>\n                <td>{{lista.Laudo}}</td>\n                <td align=\"center\"><a routerLink=\"/home/paciente/evolucao\"><i class=\"fa fa-line-chart\"></i></a></td>\n                <td>Horario</td>\n              </tr>\n             \n            </tbody>\n            <tfoot>\n              <tr>\n                <th>Nome</th>\n                <th>Telefone</th>\n                <th>Email</th>\n                <th>Patologias</th>\n                <th>Recebendo Tratamento</th>\n                <th>Oferecer Consulta</th>\n              </tr>\n            </tfoot>\n          </table>\n        </div><!-- /.box-body -->\n      </div><!-- /.box -->\n    </div><!-- /.col -->\n  </div><!-- /.row -->\n</section><!-- /.content -->\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consulta/consulta.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/paciente.service */ "./src/app/services/paciente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultaComponent = (function () {
    function ConsultaComponent(pacienteService) {
        this.pacienteService = pacienteService;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.paciente = this.pacienteService.getPaciente();
        $(function () {
            $("#pacientes").DataTable();
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.css */ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.css")],
            providers: [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]]
        }),
        __metadata("design:paramtypes", [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Meus Pacientes\n    <small>Tabela de Meus Pacientes</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li>Paciente</li>\n    <li class=\"active\">Meus Pacientes</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Pacientes</h3>\n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n          <table id=\"pacientesMeus\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th width=\"15%\">Telefone</th>\n                <th width=\"11%\">Email</th>\n                <th width=\"11%\">Laudo</th>\n                <th width=\"7%\">Evolução</th>\n                <th width=\"5%\">Horarios</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let lista of paciente\">\n                <td>{{lista.nome}}</td>\n                <td>{{lista.telefone}}</td>\n                <td>{{lista.email}}</td>\n                <td>{{lista.Laudo}}</td>\n                <td align=\"center\"><a routerLink=\"/fonoaudiologo/paciente/evolucao\"><i class=\"fa fa-line-chart\"></i></a></td>\n                <td>Horario</td>\n              </tr>\n             \n            </tbody>\n            <tfoot>\n              <tr>\n                <th>Nome</th>\n                <th>Telefone</th>\n                <th>Email</th>\n                <th>Laudo</th>\n                <th>Evolução</th>\n                <th>Horarios</th>\n              </tr>\n            </tfoot>\n          </table>\n            <!--<button class=\"btn btn-block btn-primary btn-lg\" routerLink=\"/home/paciente/novo\">CADASTRAR NOVO</button>-->\n        </div><!-- /.box-body -->\n      </div><!-- /.box -->\n\n    </div><!-- /.col -->\n\n\n  </div><!-- /.row -->\n</section><!-- /.content -->"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConsultarMeusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarMeusComponent", function() { return ConsultarMeusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/paciente.service */ "./src/app/services/paciente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultarMeusComponent = (function () {
    function ConsultarMeusComponent(pacienteService) {
        this.pacienteService = pacienteService;
    }
    ConsultarMeusComponent.prototype.ngOnInit = function () {
        this.paciente = this.pacienteService.getPaciente();
        $(function () {
            $("#pacientesMeus").DataTable();
        });
    };
    ConsultarMeusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultar-meus',
            template: __webpack_require__(/*! ./consultar-meus.component.html */ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.html"),
            styles: [__webpack_require__(/*! ./consultar-meus.component.css */ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.css")],
            providers: [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]]
        }),
        __metadata("design:paramtypes", [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]])
    ], ConsultarMeusComponent);
    return ConsultarMeusComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1 class=\"page-header\">paciente-detalhe works!</h1>\n\t\t\t</div>\n\t\t</div><!--/.row-->"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PacienteDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteDetalheComponent", function() { return PacienteDetalheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PacienteDetalheComponent = (function () {
    function PacienteDetalheComponent() {
    }
    PacienteDetalheComponent.prototype.ngOnInit = function () {
    };
    PacienteDetalheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente-detalhe',
            template: __webpack_require__(/*! ./paciente-detalhe.component.html */ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.html"),
            styles: [__webpack_require__(/*! ./paciente-detalhe.component.css */ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PacienteDetalheComponent);
    return PacienteDetalheComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <h1>\n      Evolução\n      <small>Timeline da Evolução</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li>Paciente</li>\n      <li><a routerLink=\"/home/paciente/consultarMeus\">Meus Pacientes</a></li>\n      <li class=\"active\">Evolução</li>\n    </ol>\n  </section>\n\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- row -->\n    <div class=\"row\">\n      <br>\n      <div class=\"col-md-3\"  >\n          <button type=\"button\" class=\"btn btn-block btn-primary\" data-toggle=\"modal\" data-target=\"#modal-default\">Incluir Evolução</button>\n      </div>\n      <br>\n      <br>\n      <br>\n      <div class=\"col-md-12\">\n\n        <!-- The time line -->\n        <ul class=\"timeline\">\n            <ng-container *ngFor=\"let evolucaoLine of evolucao.slice().reverse(); let i=index\">\n                <li class=\"time-label\">\n                    <span class=\"bg-blue\">\n                        {{evolucaoLine.data}}\n                    </span>\n                </li>\n                <!-- /.timeline-label -->\n                <!-- timeline item -->\n                <li>\n\n                  <ng-container [ngSwitch]=\"evolucaoLine.tipoEvolucao\" >\n                      <i *ngSwitchCase=3 class=\"fa fa-arrow-up bg-green\"></i>\n                      <i *ngSwitchCase=2 class=\"fa fa-minus bg-yellow\"></i>\n                      <i *ngSwitchCase=1 class=\"fa fa-arrow-down bg-red\"></i>\n                  </ng-container>\n                  \n      \n                  <div class=\"timeline-item\">\n                      <span class=\"time\"><i class=\"fa fa-clock-o\"></i> {{evolucaoLine.hora}}</span>\n        \n                      <h3 class=\"timeline-header\">{{evolucaoLine.titulo}}</h3>\n        \n                      <div class=\"timeline-body\">\n                          {{evolucaoLine.descricao}}\n                      </div>\n                      <div class=\"timeline-footer\">\n                        <a class=\"btn btn-primary btn-xs\" (click)=\"selecionaEvolucao(evolucaoLine)\"  data-toggle=\"modal\" data-target=\"#modal-editar\" >Editar</a>\n                        <a class=\"btn btn-danger btn-xs\" (click)=\"deletarEvolucao(evolucao.length - i - 1)\">Excluir</a>\n                      </div>\n                  </div>\n                </li>\n              <!-- END timeline item -->         \n            \n            </ng-container>\n            <li>\n              <i class=\"fa fa-clock-o bg-gray\"></i>\n            </li>\n        </ul>\n      </div>\n      <!-- /.col -->\n    </div>\n  </section>\n\n\n  <div class=\"modal fade\" id=\"modal-default\" style=\"display: none;\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">×</span></button>\n            <h4 class=\"modal-title\">Incluir Evolução</h4>\n          </div>\n          <div class=\"modal-body\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Título\" name=\"titulo\" #titulo >  \n                  <br>\n                  <textarea class=\"form-control\" rows=\"3\" placeholder=\"Descrição\" name=\"descricao\" #descricao></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\">Fechar</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"adicionaEvolucao(titulo.value, descricao.value,'12:00','01 Nov. 2017',1)\" data-dismiss=\"modal\" >Salvar</button>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>\n\n\n\n    <!--Modal Editar -->\n    <div class=\"modal fade\" id=\"modal-editar\" style=\"display: none;\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">×</span></button>\n            <h4 class=\"modal-title\">Editar Evolução</h4>\n          </div>\n          <div class=\"modal-body\">\n                  <input [(ngModel)]=\"selectedEvolucao.titulo\" type=\"text\" class=\"form-control\" name=\"titulo\"  >  \n                  <br>\n                  <textarea [(ngModel)]=\"selectedEvolucao.descricao\" class=\"form-control\" rows=\"3\" name=\"descricao\" ></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\">Fechar</button>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PacienteEvolucaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteEvolucaoComponent", function() { return PacienteEvolucaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/paciente/evolucao */ "./src/app/fonoaudiologo/models/paciente/evolucao.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PacienteEvolucaoComponent = (function () {
    function PacienteEvolucaoComponent() {
        this.evolucao = [];
    }
    PacienteEvolucaoComponent.prototype.ngOnInit = function () {
        this.evolucao.push(new _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__["Evolucao"]('Título', 'descricao 1', '12:00', '22 Set. 2017', 2), new _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__["Evolucao"]('Título', 'descricao 2', '12:03', '15 Set. 2017', 3), new _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__["Evolucao"]('Título', 'descricao 3', '12:10', '08 Set. 2017', 2), new _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__["Evolucao"]('Título', 'descricao 4', '12:01', '01 Set. 2017', 1));
        this.selectedEvolucao = { titulo: '', descricao: '', hora: '', data: '', tipoEvolucao: 1 };
    };
    PacienteEvolucaoComponent.prototype.adicionaEvolucao = function (titulo, descricao, hora, data, tipoEvolucao) {
        var evolucao = new _models_paciente_evolucao__WEBPACK_IMPORTED_MODULE_1__["Evolucao"](titulo, descricao, hora, data, tipoEvolucao);
        this.evolucao.push(evolucao);
    };
    PacienteEvolucaoComponent.prototype.deletarEvolucao = function (id) {
        this.evolucao.splice(id, 1);
    };
    PacienteEvolucaoComponent.prototype.selecionaEvolucao = function (evolucao) {
        this.selectedEvolucao = evolucao;
        //this.title = this.selectedEvolucao.titulo;
    };
    PacienteEvolucaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente-evolucao',
            template: __webpack_require__(/*! ./paciente-evolucao.component.html */ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.html"),
            styles: [__webpack_require__(/*! ./paciente-evolucao.component.css */ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PacienteEvolucaoComponent);
    return PacienteEvolucaoComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Cadastrar meus Pacientes\n    \n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home/dash\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li>Paciente</li>\n    <li class=\"active\">Cadastrar Meus Pacientes</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n<div class=\"row\">\n            <div class=\"col-md-12\">\n\n              <div class=\"box box-danger\">\n                <div class=\"box-header\">\n                  <h3 class=\"box-title\">Cadastrar Pacientes</h3>\n                </div>\n                <div class=\"box-body\">\n                <div class=\"form-group\">\n                    <label>Nome:</label>\n                    <div class=\"input-group\">\n                      <div class=\"input-group-addon\">\n                        <i class=\"fa fa-user-plus\"></i>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"paciente.nome\">\n                    </div><!-- /.input group -->\n                  </div><!-- /.form group -->\n                  \n\n                  <!-- phone mask -->\n                  <div class=\"form-group\">\n                    <label>Telefone:</label>\n                    <div class=\"input-group\">\n                      <div class=\"input-group-addon\">\n                        <i class=\"fa fa-phone\"></i>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" data-inputmask=\"'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']\" data-mask [(ngModel)]=\"paciente.telefone\">\n                    </div><!-- /.input group -->\n                  </div><!-- /.form group -->\n\n                    <div class=\"form-group\">\n                    <label>Email:</label>\n                    <div class=\"input-group\">\n                      <div class=\"input-group-addon\">\n                        <i class=\"fa fa-folder\"></i>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"paciente.email\">\n                    </div><!-- /.input group -->\n                  </div><!-- /.form group -->\n\n\n                 <div class=\"col-md-3\">\n                 <button  class=\"btn btn-primary\" label=\"GRAVAR\" (click)=\"gravar(paciente.nome, paciente.telefone, paciente.email)\"  > GRAVAR</button>\n\n                  <!-- (click)=\"gravar(nome.value, telefone.value, email.value, laudo.value)\" #clienteForm=\"ngForm\" -->\n            </div>\n\n                </div><!-- /.box-body -->\n              </div><!-- /.box -->\n          </div>\n        </div>\n      </section>\n\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PacienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteFormComponent", function() { return PacienteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/paciente.service */ "./src/app/services/paciente.service.ts");
/* harmony import */ var _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/paciente/paciente */ "./src/app/fonoaudiologo/models/paciente/paciente.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PacienteFormComponent = (function () {
    function PacienteFormComponent(router, pacienteService, db) {
        this.router = router;
        this.pacienteService = pacienteService;
        this.db = db;
        this.paciente = new _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"](this.db);
    }
    PacienteFormComponent.prototype.gravar = function (nome, telefone, email) {
        var paciente = new _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_3__["Paciente"](this.db);
        paciente.nome = nome;
        paciente.telefone = telefone;
        paciente.email = email;
        this.pacienteService.setPaciente(paciente);
        this.router.navigate(['/home/paciente/consultarMeus']);
        console.log(paciente);
    };
    PacienteFormComponent.prototype.ngOnInit = function () {
    };
    PacienteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente-form',
            template: __webpack_require__(/*! ./paciente-form.component.html */ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.html"),
            styles: [__webpack_require__(/*! ./paciente-form.component.css */ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.css")],
            providers: [_services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], PacienteFormComponent);
    return PacienteFormComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n<strong>Escolha um paciente para integrar a vídeo chamad</strong>\n<table id=\"pacientes\" class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th width=\"10%\">#</th>  \n        <th>Nome</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let paciente of listaPacientes; let idx = index\">\n        <td width=\"10%\"><input type=\"radio\" name=\"paciente\" (click)=\"select(paciente)\"></td>  \n        <td>{{paciente.nome}}</td>\n        <td>{{paciente.email}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <app-video [paciente] = \"selectedPaciente\"></app-video>\n\n</section>"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PacienteSelecionarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteSelecionarComponent", function() { return PacienteSelecionarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_paciente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/paciente.service */ "./src/app/services/paciente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PacienteSelecionarComponent = (function () {
    function PacienteSelecionarComponent(pacienteService) {
        this.pacienteService = pacienteService;
    }
    PacienteSelecionarComponent.prototype.ngOnInit = function () {
        this.listaPacientes = this.pacienteService.getPaciente();
    };
    PacienteSelecionarComponent.prototype.select = function (paciente) {
        this.selectedPaciente = paciente;
    };
    PacienteSelecionarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente-selecionar',
            template: __webpack_require__(/*! ./paciente-selecionar.component.html */ "./src/app/fonoaudiologo/paciente/paciente-selecionar/paciente-selecionar.component.html"),
            styleUrls: [],
            providers: [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]]
        }),
        __metadata("design:paramtypes", [_services_paciente_service__WEBPACK_IMPORTED_MODULE_1__["PacienteService"]])
    ], PacienteSelecionarComponent);
    return PacienteSelecionarComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente.component.css":
/*!***************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente.component.ts ***!
  \**************************************************************/
/*! exports provided: PacienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteComponent", function() { return PacienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PacienteComponent = (function () {
    function PacienteComponent() {
    }
    PacienteComponent.prototype.ngOnInit = function () {
    };
    PacienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente',
            template: __webpack_require__(/*! ./paciente.component.html */ "./src/app/fonoaudiologo/paciente/paciente.component.html"),
            styles: [__webpack_require__(/*! ./paciente.component.css */ "./src/app/fonoaudiologo/paciente/paciente.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PacienteComponent);
    return PacienteComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente.module.ts ***!
  \***********************************************************/
/*! exports provided: PacienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteModule", function() { return PacienteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _paciente_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paciente.routing.module */ "./src/app/fonoaudiologo/paciente/paciente.routing.module.ts");
/* harmony import */ var _paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paciente-detalhe/paciente-detalhe.component */ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.ts");
/* harmony import */ var _paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paciente-form/paciente-form.component */ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.ts");
/* harmony import */ var _paciente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paciente.component */ "./src/app/fonoaudiologo/paciente/paciente.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/fonoaudiologo/paciente/consulta/consulta.component.ts");
/* harmony import */ var _consultar_meus_consultar_meus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consultar-meus/consultar-meus.component */ "./src/app/fonoaudiologo/paciente/consultar-meus/consultar-meus.component.ts");
/* harmony import */ var _paciente_evolucao_paciente_evolucao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paciente-evolucao/paciente-evolucao.component */ "./src/app/fonoaudiologo/paciente/paciente-evolucao/paciente-evolucao.component.ts");
/* harmony import */ var _paciente_admin_paciente_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../paciente-admin/paciente-admin.component */ "./src/app/fonoaudiologo/paciente-admin/paciente-admin.component.ts");
/* harmony import */ var _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../grid-view/grid-view.component */ "./src/app/grid-view/grid-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PacienteModule = (function () {
    function PacienteModule() {
    }
    PacienteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _paciente_routing_module__WEBPACK_IMPORTED_MODULE_3__["PacienteRoutingModule"],
            ],
            declarations: [
                _paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_4__["PacienteDetalheComponent"],
                _paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_5__["PacienteFormComponent"],
                _paciente_component__WEBPACK_IMPORTED_MODULE_6__["PacienteComponent"],
                _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_7__["ConsultaComponent"],
                _consultar_meus_consultar_meus_component__WEBPACK_IMPORTED_MODULE_8__["ConsultarMeusComponent"],
                _paciente_evolucao_paciente_evolucao_component__WEBPACK_IMPORTED_MODULE_9__["PacienteEvolucaoComponent"],
                _paciente_admin_paciente_admin_component__WEBPACK_IMPORTED_MODULE_10__["PacienteAdminComponent"],
                _grid_view_grid_view_component__WEBPACK_IMPORTED_MODULE_11__["GridViewComponent"]
            ]
        })
    ], PacienteModule);
    return PacienteModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/paciente/paciente.routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/fonoaudiologo/paciente/paciente.routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PacienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteRoutingModule", function() { return PacienteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _paciente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paciente.component */ "./src/app/fonoaudiologo/paciente/paciente.component.ts");
/* harmony import */ var _paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paciente-form/paciente-form.component */ "./src/app/fonoaudiologo/paciente/paciente-form/paciente-form.component.ts");
/* harmony import */ var _paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paciente-detalhe/paciente-detalhe.component */ "./src/app/fonoaudiologo/paciente/paciente-detalhe/paciente-detalhe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pacienteRoutes = [
    { path: 'paciente', component: _paciente_component__WEBPACK_IMPORTED_MODULE_2__["PacienteComponent"], children: [
            { path: 'novo', component: _paciente_form_paciente_form_component__WEBPACK_IMPORTED_MODULE_3__["PacienteFormComponent"] },
            { path: 'ver', component: _paciente_detalhe_paciente_detalhe_component__WEBPACK_IMPORTED_MODULE_4__["PacienteDetalheComponent"] },
        ] }
];
var PacienteRoutingModule = (function () {
    function PacienteRoutingModule() {
    }
    PacienteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pacienteRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PacienteRoutingModule);
    return PacienteRoutingModule;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <h1>\n    Perfil\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li class=\"active\">Perfil</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n    \n\n  <!-- Main row -->\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <!-- Profile Image -->\n          <div class=\"box box-primary\">\n            <div class=\"box-body box-profile\">\n              <img class=\"profile-user-img img-responsive img-circle\" src='img/user2-160x160.jpg' alt=\"User profile picture\">\n\n              <h3 class=\"profile-username text-center\">Teste</h3>\n\n              <p class=\"text-muted text-center\">Fonoaudiólogo</p>\n\n              <a href=\"alterarFoto.php\" class=\"btn btn-primary btn-block\"><b>Alterar Foto</b></a>\n            </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n      </div>\n\n      <div class=\"col-md-6\">\n          <!-- Profile Image -->\n          <div class=\"box box-primary\">\n            <div class=\"box-body box-profile\">\n              <h3 class=\"profile-username text-center\">Acessos</h3>\n\n              <ul class=\"list-group list-group-unbordered\" style=\"margin-bottom: 27px\">\n                <li class=\"list-group-item\">\n                  <b>Último acesso</b> <span class=\"pull-right\">05-05-2018 08:02</span>\n                </li>\n                <li class=\"list-group-item\">\n                  <b>Alteração de senha</b> <span class=\"pull-right\">30-11--0001 00:00</span>\n                </li>\n              </ul>\n\n              <a class=\"btn btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#modal-password\" ><b>Alterar de senha</b></a>\n            </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n      </div>\n      <div class=\"col-md-12\">\n          <!-- Profile Image -->\n          <div class=\"box box-primary\">\n            <div class=\"box-body box-profile\">\n              <h3 class=\"profile-username text-center\">Dados Pessoais</h3>\n\n              <div class=\"col-md-6\">\n                <ul class=\"list-group list-group-unbordered\" style=\"margin-bottom: 27px\">\n                  <li class=\"list-group-item\">\n                    <b>E-mail</b> <span class=\"pull-right\">teste@gmail.com</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <b>Endereço</b> <span class=\"pull-right\">Rua Alto das Alamedas, 256 - Farol - Maceió/AL</span>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-6\">\n                <ul class=\"list-group list-group-unbordered\" style=\"margin-bottom: 27px\">\n                  <li class=\"list-group-item\">\n                    <b>Telefone</b> <span class=\"pull-right\">(82) 98888-8888</span>\n                  </li>\n                  <li class=\"list-group-item\">\n                    <b>Telefone</b> <span class=\"pull-right\">(82) 98888-8888</span>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-12\">\n                <a class=\"btn btn-primary btn-block\" routerLink=\"/fonoaudiologo/perfil/meusDados\"><b>Alterar Dados Pessoais</b></a>\n              </div>\n            </div>\n            <!-- /.box-body -->\n          </div>\n          <!-- /.box -->\n      </div>\n  </div><!-- /.row (main row) -->          \n\n\n\n  <!-- Mudar senha  -->\n  <div class=\"modal fade\" id=\"modal-password\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <form action=\"\" method=\"post\" id=\"changePass\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Alterar Senha</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label  for=\"inputPassword\" class=\"sr-only\">Senha Atual</label>\n                  <input type=\"password\" name=\"inputPasswordAtual\"  id=\"inputPassword\" class=\"form-control\" placeholder=\"Senha Atual\" required>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label  for=\"inputPassword\" class=\"sr-only\">Nova Senha</label>\n                  <input type=\"password\" name=\"inputPasswordNova\"  id=\"password\" class=\"form-control\" pattern=\".{6,}\" placeholder=\"Nova Senha\" \n                          title=\"A senha precisa ter no mínimo 6 caracteres.\" required>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label  for=\"inputPassword\" class=\"sr-only\">Repetir Nova Senha</label>\n                  <input type=\"password\" name=\"inputPasswordNovaR\" pattern=\".{6,}\" id=\"confirm_password\" class=\"form-control\" placeholder=\"Repetir Nova Senha\" title=\"A senha precisa ter no mínimo 6 caracteres.\" required>\n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\">Fechar</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n        </div>\n        </form> \n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n  <!-- /.modal -->\n\n</section><!-- /.content -->\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/fonoaudiologo/perfil/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <h1>\n    Fonoaudiólogo\n    <small>Formulário de Edição</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li><a href=\"#\">Perfil</a></li>\n    <li class=\"active\">Editar Dados Pessoais</li>\n  </ol>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  \n\n  <div class=\"box box-primary\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Incluir Professor</h3>\n    </div><!-- /.box-header -->\n    <div class=\"box-body\">\n      <form id=\"form1\" class=\"form1\" method=\"post\">\n        <div class=\"col-md-12\">\n\t\t\t<!-- Custom Tabs (Pulled to the right) -->\n\t\t\t<div class=\"nav-tabs-custom\">\n                <div class=\"input-group col-xs-12\">\n                  <label>Nome  <em>*</em></label>\n                  <input type=\"text\" name=\"nome\" id=\"nome\" class=\"form-control\" placeholder=\"Nome\" min=\"5\" \n                  title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\" required>\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Data de Nascimento  <em>*</em></label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        <input type=\"date\" maxlength=\"8\" name=\"dn\" id=\"dn\" class=\"form-control\" placeholder=\"Data de nascimento\" required>\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-4\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>CPF  <em>*</em></label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n                      <input type=\"text\" name=\"cpf\" class=\"form-control\" placeholder=\"CPF\" pattern=\"\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}\" \n                              title=\"Este campo deve conter apenas números\" maxlength=\"14\" minlength=\"14\" \n                              OnKeyPress=\"formatar('###.###.###-##', this)\" id=\"cpf\" required>\n                      </div>\n                      \n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-4\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>CRF  <em>*</em></label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n                      <input type=\"text\" name=\"crf\" class=\"form-control\" placeholder=\"CRF\" pattern=\"\\d{11}\" \n                              title=\"Este campo deve conter apenas números\" maxlength=\"11\" minlength=\"11\" \n                              id=\"crf\" title=\"Este campo deve conter 11 caracteres e ser composto somente por números.\" required>\n                      </div>\n                      \n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Sexo  <em>*</em></label>\n                      <select name=\"num_sexo\" id=\"num_sexo\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required >\n                        <option value=\"\">--Selecione--</option>\n                        <option value= '1' >Feminino</option><option value= '2' >Masculino</option>                                  </select>\n\n                    </div><!-- /.form-group -->\n                  </div><!-- /.col (right) -->\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Tipo Sanguíneo  <em>*</em></label>\n                      <select name=\"tipo_sanguineo\" id=\"tipo_sanguineo\" class=\"form-control  select2\" title=\"Por favor, selecione uma opção.\" required>\n                        <option value=\"\">--Selecione--</option>\n                          <option value= '1' >A+</option><option value= '2' >A-</option><option value= '3' >B+</option><option value= '4' >B-</option><option value= '5' >O+</option><option value= '6' >O-</option><option value= '7' >AB+</option><option value= '8' >AB-</option>                                  </select>\n                    </div><!-- /.form-group -->\n                  </div>\n                </div><!-- /.row -->\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Estado Civil  <em>*</em></label>\n                      <select name=\"estado_civil\" id=\"estado_civil\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Solteiro(a)</option><option value= '2' >Casado(a)</option><option value= '3' >Viúvo(a)</option><option value= '4' >Divorciado(a)</option>                                  </select>\n\n                    </div><!-- /.form-group -->\n                  </div><!-- /.col (right) -->\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Cor/Raça  <em>*</em></label>\n                      <select name=\"cor\" id=\"cor\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Branca</option><option value= '2' >Preta</option><option value= '3' >Parda</option><option value= '4' >Amarela</option><option value= '5' >Indígena</option><option value= '6' >Não declarada</option>                                  </select>\n\n                    </div><!-- /.form-group -->\n                  </div><!-- /.col (right) -->\n                </div><!-- /.row -->\n                <br>\n\n                <div class=\"input-group col-xs-12\">\n                  <label>Nome do Pai   <em>*</em></label>\n                  <input type=\"text\" name=\"namePai\" class=\"form-control\" placeholder=\"Nome do Pai\" pattern=\"[Aa-Zz\\s]+$\" min=\"5\" \n                  title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\" id=\"namePai\" required>\n                </div>\n                <br>\n                <div class=\"input-group col-xs-12\">\n                  <label>Nome da Mãe  <em>*</em></label>\n                  <input type=\"text\" name=\"nameMae\" class=\"form-control\" placeholder=\"Nome da Mãe\" pattern=\"[Aa-Zz\\s]+$\" min=\"5\" \n                  title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\" id=\"nameMae\" required>\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Nacionalidade  <em>*</em></label>\n                      <select name=\"nacionalidade\" id=\"nacionalidade\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Brasileira</option><option value= '2' >Brasileira - Nascido no exterior ou naturalizado</option><option value= '3' >Estrangeira</option>                                  </select>\n\n                    </div><!-- /.form-group -->\n                  </div><!-- /.col (right) -->\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"input-group col-xs-12\">\n                      <label>Estado de Nascimento  <em>*</em></label>\n                        \n                        <select class=\"form-control  select2\" name=\"estado_nascimento\" id=\"estado_nascimento\" \n                                onchange=\"showUserNascimento(this.value);\"\n                                onChange=\"ativaNascimento(this);\" required>\n                                \n                            <option value=\"\">--Selecione--</option>\n                            <option value= '1' >Acre</option><option value= '2' >Alagoas</option><option value= '3' >Amazonas</option><option value= '4' >Amapá</option><option value= '5' >Bahia</option><option value= '6' >Ceará</option><option value= '7' >Distrito Federal</option><option value= '8' >Espírito Santo</option><option value= '9' >Goiás</option><option value= '10' >Maranhão</option><option value= '11' >Minas Gerais</option><option value= '12' >Mato Grosso do Sul</option><option value= '13' >Mato Grosso</option><option value= '14' >Pará</option><option value= '15' >Paraíba</option><option value= '16' >Pernambuco</option><option value= '17' >Piauí</option><option value= '18' >Paraná</option><option value= '19' >Rio de Janeiro</option><option value= '20' >Rio Grande do Norte</option><option value= '21' >Rondônia</option><option value= '22' >Roraima</option><option value= '23' >Rio Grande do Sul</option><option value= '24' >Santa Catarina</option><option value= '25' >Sergipe</option><option value= '26' >São Paulo</option><option value= '27' >Tocantins</option>                                    </select>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-6\">\n                    <div class=\"input-group col-xs-12\">\n                      <label>Município de Nascimento  <em>*</em></label>\n                      <select class=\"form-control  select2\" name=\"municipio_nascimento\" id=\"municipio_nascimento\" required>\n                        <option value=\"\">Selecione o Estado</option>\n                      </select>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->\n                <br>\n\n                <h3>Contato</h3>\n                <hr>                        \n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Telefone</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\n                        <input type=\"text\" name=\"telefone1\" class=\"form-control\" placeholder=\"xx xxxx-xxxx\" title=\"Telefone\" maxlength=\"12\" OnKeyPress=\"formatar('## ####-####', this);\">\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Telefone</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-mobile-phone\"></i></span>\n                        <input type=\"text\" name=\"telefone2\" class=\"form-control\" placeholder=\"xx xxxxx-xxxx\" title=\"Telefone\" maxlength=\"13\" OnKeyPress=\"formatar('## #####-####', this);\">\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Email</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n                        <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" >\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div>          \n                <br>\n                <br>\n                <h3>Endereço</h3>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 input-group\">\n                      <label>Localização/Zona de Residência  <em>*</em></label>\n                      <select name=\"zona\" id=\"zona\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Urbana</option><option value= '2' >Rural</option>                                  </select>\n                    </div>\n                  </div><!-- /.form-group -->\n                  <div class=\"col-lg-6\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>CEP</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-home\"></i></span>\n                        <input type=\"int\" maxlength=\"10\" class=\"form-control\" name=\"cep\" id=\"cep\" OnKeyPress=\"formatar('##.###-###', this);\">\n                        \n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"input-group col-xs-12\">\n                      <label>Estado  <em>*</em></label>\n                        \n                        <select class=\"form-control select2\" name=\"estado\" id=\"estado\" id=\"estado\" onchange=\"showUser(this.value)\"\n                                onChange=\"ativa(this);\" required>\n                                \n                            <option value=\"\">--Selecione--</option>\n                            <option value= '1' >Acre</option><option value= '2' >Alagoas</option><option value= '3' >Amazonas</option><option value= '4' >Amapá</option><option value= '5' >Bahia</option><option value= '6' >Ceará</option><option value= '7' >Distrito Federal</option><option value= '8' >Espírito Santo</option><option value= '9' >Goiás</option><option value= '10' >Maranhão</option><option value= '11' >Minas Gerais</option><option value= '12' >Mato Grosso do Sul</option><option value= '13' >Mato Grosso</option><option value= '14' >Pará</option><option value= '15' >Paraíba</option><option value= '16' >Pernambuco</option><option value= '17' >Piauí</option><option value= '18' >Paraná</option><option value= '19' >Rio de Janeiro</option><option value= '20' >Rio Grande do Norte</option><option value= '21' >Rondônia</option><option value= '22' >Roraima</option><option value= '23' >Rio Grande do Sul</option><option value= '24' >Santa Catarina</option><option value= '25' >Sergipe</option><option value= '26' >São Paulo</option><option value= '27' >Tocantins</option>                                    </select>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-4\">\n                    <div class=\"input-group col-xs-12\">\n                      <label>Município  <em>*</em></label>\n                      <select class=\"form-control select2\" name=\"municipio\" id=\"municipio\" required>\n                        <option value=\"\">Selecione o Estado</option>\n                      </select>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-4\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Bairro</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-home\"></i></span>\n                        <input type=\"text\" name=\"bairro\" id=\"bairro\" class=\"form-control\" placeholder=\"Bairro\" title=\"Bairro\">\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-lg-9\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Rua  <em>*</em></label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-home\"></i></span>\n                        <input type=\"text\" name=\"rua\" id=\"rua\" class=\"form-control\" placeholder=\"Endereço\" min=\"5\" \n                                title=\"Este campo deve conter apenas letras e um mínimo de 5 caracteres.\" required>\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                  <div class=\"col-lg-3\">\n                    <div class=\"col-lg-12 input-group\">\n                      <div>\n                        <label>Número</label>\n                      </div>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-home\"></i></span>\n                        <input type=\"text\" name=\"num_end\" class=\"form-control\" placeholder=\"Número\" title=\"Número\">\n                      </div>\n                    </div><!-- /input-group -->\n                  </div><!-- /.col-lg-6 -->\n                </div><!-- /.row -->        \n                <br>\n                <br>\n                <h3>Dados de Formação</h3>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Escolaridade  <em>*</em></label>\n                      <select name=\"escolaridade\" id=\"escolaridade\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" onChange=\"ativaPosGraduacao(this.value)\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Fundamental incompleto</option><option value= '2' >Fundamental completo</option><option value= '3' >Ensino Médio - Normal/Magistério</option><option value= '4' >Ensino Médio - Normal/Magistério Específico Indígena</option><option value= '5' >Ensino Médio</option><option value= '6' >Superior</option>                                  </select>\n                    </div>\n                  </div><!-- /.form-group -->\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Pós Graduação </label>\n                      <select name=\"posGraduacao\" id=\"posGraduacao\" class=\"form-control select2\" title=\"Por favor, selecione uma opção.\" disabled=\"disabled\">\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Especialização</option><option value= '2' >Mestrado</option><option value= '3' >Doutorado</option><option value= '4' >Nenhum</option>                                  </select>\n                    </div>\n                  </div><!-- /.form-group -->\n                  <br>\n                </div><!-- /.row -->\n                <br>\n                <div  id=\"formacao\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-12\"  align=\"center\">\n                      <input type=\"button\" class=\"btn btn-primary btn-block\" id=\"add\" name=\"add\" value=\"Adicionar Formação\" />\n                    </div>\n                  </div>\n\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-md-6\" >\n                    <div class=\"form-group\">\n                      <label>Outro(s) curso(s) específico(s)<em>*</em></label>\n                      <select name=\"select_outros_cursos\" id=\"select_outros_cursos\" class=\"form-control select2 select2-multiple-cursos\" title=\"Por favor, selecione uma opção.\" \n                              multiple=\"multiple\" onChange=\"array2()\" data-placeholder=\"Selecione o(s) Curso(s)\" required >\n                          <option value=\"\">--Selecione--</option>\n                          <option value= '1' >Creche (0 a 3 anos)</option><option value= '2' >Pré-escola (4 e 5 anos)</option><option value= '3' >Anos iniciais do ensino fundamental</option><option value= '4' >Anos finais do ensino fundamental</option><option value= '5' >Ensino médio</option><option value= '6' >Educação de jovens e adultos</option><option value= '7' >Educação especial</option><option value= '8' >Educação indígena</option><option value= '9' >Educação de campo</option><option value= '10' >Educação ambiental</option><option value= '11' >Educação em direitos humanos</option><option value= '12' >Gênero e diversidade sexual</option><option value= '13' >Direitos de criança e adolescente</option><option value= '14' >Educação para as relações etnorraciais e história e cultura afro-brasileira e africana</option><option value= '15' >Outros</option><option value= '16' >Nenhum</option>                                  </select>\n\n                      <input type=\"hidden\" name=\"outrosCursos\" id=\"outrosCursos\" value=\"\">\n\n                    </div><!-- /.form-group -->\n                  </div><!-- /.col (right) -->\n                </div><!-- /.row -->\n                <br>\n                <br>\n                <h3>Áreas que Atende</h3>\n                <hr>\n\n                <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\" >\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Outro(s) curso(s) específico(s)<em>*</em></label>\n\t\t\t\t\t\t\t<select name=\"select_outros_cursos\" id=\"select_outros_cursos\" class=\"form-control select2 select2-multiple-cursos\" title=\"Por favor, selecione uma opção.\" \n\t\t\t\t\t\t\t  multiple=\"multiple\" onChange=\"array2()\" data-placeholder=\"Selecione o(s) Curso(s)\" required >\n\t\t\t\t\t\t\t\t<option value=\"\">--Selecione--</option>\n\t\t\t\t\t\t\t\t<option value= '1' >Creche (0 a 3 anos)</option><option value= '2' >Pré-escola (4 e 5 anos)</option><option value= '3' >Anos iniciais do ensino fundamental</option><option value= '4' >Anos finais do ensino fundamental</option><option value= '5' >Ensino médio</option><option value= '6' >Educação de jovens e adultos</option><option value= '7' >Educação especial</option><option value= '8' >Educação indígena</option><option value= '9' >Educação de campo</option><option value= '10' >Educação ambiental</option><option value= '11' >Educação em direitos humanos</option><option value= '12' >Gênero e diversidade sexual</option><option value= '13' >Direitos de criança e adolescente</option><option value= '14' >Educação para as relações etnorraciais e história e cultura afro-brasileira e africana</option><option value= '15' >Outros</option><option value= '16' >Nenhum</option>                                  </select>\n\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"outrosCursos\" id=\"outrosCursos\" value=\"\">\n\n                    </div><!-- /.form-group -->\n\t\t\t\t\t</div>\n                </div><!-- /.row -->\n                <br>\n\n                <p align=\"right\">\n                  <button class=\"btn btn-lg btn-primary fa fa-save\" align=\"right\"><b style=\"margin-left: 10px\"> Salvar</b></button>\n                </p>\n          \t</div><!-- nav-tabs-custom -->\n        </div><!-- /.col -->\n      </form>\n    </div>\n  </div>\n</section><!-- /.content -->\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.ts ***!
  \*************************************************************************/
/*! exports provided: MeusDadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusDadosComponent", function() { return MeusDadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeusDadosComponent = (function () {
    function MeusDadosComponent() {
    }
    MeusDadosComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $("input[name='add']").click(function (e) {
                var id = $(".items").length;
                var teste = $(".0").length;
                var teste1 = $(".1").length;
                var teste2 = $(".2").length;
                if (teste == 0) {
                    id = 0;
                }
                else if (teste == 1 && teste1 == 0) {
                    id = 1;
                }
                else if (teste == 1 && teste1 == 1) {
                    id = 2;
                }
                if (teste != 1 || teste1 != 1 || teste2 != 1) {
                    var areaCurso = '<hr><div class="row"><div class="col-md-6"><div class="form-group"><label>Área  <em>*</em></label><select name="area[]" id="area[' + id + ']" onchange="showCursos(this.value, ' + id + ')" onChange="ativaCurso(this, ' + id + ');" class="form-control select2" title="Por favor, selecione uma opção." required ><option value="">--Selecione--</option><option value="1">Educação</option><option value="2">Humanidades e Artes</option><option value="3">Ciências Sociais, Negócios e Direitos</option><option value="4">Ciências, Matemática e Computação</option><option value="5">Engenharia, Produção e Construção</option><option value="6">Agricultura e Veterinária</option><option value="7">Saúde e Bem-Estar Social</option><option value="8">Serviços</option></select></div></div><div class="col-md-6"><div class="form-group"><label>Curso </label><select name="curso[]" id="cursos[' + id + ']" class="form-control select2" title="Por favor, selecione uma opção."><option value="">--Selecione a Área--</option></select></div></div><br></div>';
                    var outrosDados = '<div class="row"><div class="col-md-4"><div class="form-group"><label>Situação  <em>*</em></label><select name="situacao[]" id="situacao[' + id + ']" class="form-control select2" title="Por favor, selecione uma opção." required ><option value="">--Selecione--</option><option value="1">Concluído</option><option value="2">Em Andamento</option></select></div></div><div class="col-md-4"> <div class="form-group"> <label>Tipo de Intituição  <em>*</em></label> <select name="tipoInstituicao[]" id="tipoInstituicao" class="form-control select2" title="Por favor, selecione uma opção." required > <option value="">--Selecione--</option> <option value="1">Pública</option> <option value="2">Privada</option> </select> </div> </div> <div class="col-md-4"> <div class="form-group"> <label>Complementação Pedagógica  <em>*</em></label> <select name="formacaoComp[]" id="formacaoCom" class="form-control select2" title="Por favor, selecione uma opção." required ><option value="">--Selecione--</option><option value="1">Sim</option> <option value="2">Não</option> </select> </div> </div><br></div>';
                    var nomePeriodo = '<div class="row"> <div class="col-md-6"> <div class="form-group"> <label>Nome da Intituição  <em>*</em></label> <input type="text" name="instituicao[]" class="form-control" required > </div> </div> <div class="col-md-3"> <div class="form-group"> <label>Tipo de Intituição  <em>*</em></label> <input type="number" name="anoInicio[]" minlength=4 maxlength=4 class="form-control" required > </div> </div> <div class="col-md-3"> <div class="form-group"> <label>Ano Fim  <em>*</em></label> <input type="number" name="anoFim[]" minlength=4 maxlength=4 class="form-control" required > </div> </div> <br> </div>';
                    var input = '<div class="items ' + id + '"><br>' + areaCurso + outrosDados + nomePeriodo + '<a href="#" class="remove" style="margin:20px auto; text-align:center; display:block; width:120px;" ><i class="glyphicon glyphicon-trash" ></i></a></div>';
                    $('#formacao').append(input);
                }
            });
            $('#formacao').delegate('a', 'click', function (e) {
                e.preventDefault();
                $(this).parent('div').remove();
            });
        });
    };
    MeusDadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meus-dados',
            template: __webpack_require__(/*! ./meus-dados.component.html */ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.html"),
            styles: [__webpack_require__(/*! ./meus-dados.component.css */ "./src/app/fonoaudiologo/perfil/meus-dados/meus-dados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeusDadosComponent);
    return MeusDadosComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/perfil.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/perfil.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/perfil.component.html":
/*!************************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/perfil.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/perfil/perfil.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fonoaudiologo/perfil/perfil.component.ts ***!
  \**********************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilComponent = (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/fonoaudiologo/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/fonoaudiologo/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/fonoaudiologo/video/video.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fonoaudiologo/video/video.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fonoaudiologo/video/video.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fonoaudiologo/video/video.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n\t<div id=\"placeholder-rr\"></div>\n"

/***/ }),

/***/ "./src/app/fonoaudiologo/video/video.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fonoaudiologo/video/video.component.ts ***!
  \********************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/paciente/paciente */ "./src/app/fonoaudiologo/models/paciente/paciente.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent.prototype.googleInit = function () {
        gapi.hangout.render('placeholder-rr', {
            'render': 'createhangout',
            'initial_apps': [{ 'app_id': '184219133185', 'start_data': 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }],
            'widget_size': 175,
            'invites': "[{ id:'" + this.paciente.email + "',invite_type:'EMAIL'}]"
        });
    };
    VideoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.paciente.currentValue != undefined) {
            this.googleInit();
        }
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
        //this.googleInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_paciente_paciente__WEBPACK_IMPORTED_MODULE_1__["Paciente"])
    ], VideoComponent.prototype, "paciente", void 0);
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/fonoaudiologo/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/fonoaudiologo/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/grid-view/grid-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bt-novo{\n    margin-right: 17px;\n    float: right;\n}"

/***/ }),

/***/ "./src/app/grid-view/grid-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"box\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">{{title}}</h3>\n           <button [routerLink]=\"urlCreate\" type=\"button\" class=\"btn btn-default bt-novo\"\n            >Novo</button>\n          \n        </div><!-- /.box-header -->\n        <div class=\"box-body\">\n          <table id=\"grid\" class=\"table table-bordered table-striped\">\n              <thead>\n              <tr >\n                <th *ngFor=\"let l of labels\">{{l}}</th>\n                <th>Ações</th>\n              </tr>\n              </thead>\n              <tbody>\n               <tr *ngFor=\"let d of data\">\n                  <td *ngFor=\"let f of fields\">{{d[f]}}</td>\n                \n                 \n                <td align=\"center\">\n                  <a [routerLink]=\"urlView\" \n                     [queryParams]=\"{ id: d.id }\"\n                    >\n                    <i class=\"fa fa-eye\" ></i>\n                  </a>\n\n                  <a (click)=\"runOnDelete(d)\">\n                    <i class=\"fa fa-trash-o\" ></i>\n                  </a>\n                  <a [routerLink]=\"urlUpdate\" \n                  [queryParams]=\"{ id: d.id }\"\n                     >\n                     <i class=\"fa fa-pencil-square-o\" ></i>\n                  </a>\n                </td>        \n              </tr>\n            </tbody>\n          </table>\n        </div><!--/.box-body-->\n      </div><!-- /.box -->\n    </div><!-- /.col -->\n  </div><!-- /.row -->\n</section><!-- /.content -->"

/***/ }),

/***/ "./src/app/grid-view/grid-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/grid-view/grid-view.component.ts ***!
  \**************************************************/
/*! exports provided: GridViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridViewComponent", function() { return GridViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridViewComponent = (function () {
    function GridViewComponent(router, chRef, dialog) {
        this.router = router;
        this.chRef = chRef;
        this.dialog = dialog;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataInfo = {
            "language": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
            }
        };
    }
    Object.defineProperty(GridViewComponent.prototype, "data", {
        get: function () {
            // transform value for display
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            //let table: any = $('#fonoaudiologos');
            if ($.fn.dataTable.isDataTable('#grid')) {
                this.dataTable = $('#grid').DataTable();
            }
            else {
                this.dataTable = $('#grid').DataTable(this.dataInfo);
            }
        },
        enumerable: true,
        configurable: true
    });
    GridViewComponent.prototype.ngOnInit = function () {
    };
    GridViewComponent.prototype.createPage = function () {
        this.router.navigate([this.urlCreate]);
    };
    GridViewComponent.prototype.runOnDelete = function (p) {
        this.onDelete.emit(p);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridViewComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridViewComponent.prototype, "urlCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridViewComponent.prototype, "urlView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridViewComponent.prototype, "urlUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridViewComponent.prototype, "fields", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridViewComponent.prototype, "labels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridViewComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GridViewComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridViewComponent.prototype, "deleteParam", void 0);
    GridViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-view',
            template: __webpack_require__(/*! ./grid-view.component.html */ "./src/app/grid-view/grid-view.component.html"),
            styles: [__webpack_require__(/*! ./grid-view.component.css */ "./src/app/grid-view/grid-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], GridViewComponent);
    return GridViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html class=\" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths\" style=\"\"><!--<![endif]--><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\t<title>Valeo</title>\n\t\n\t<!--[if IE]>\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<![endif]-->\n\t<meta name=\"description\" content=\"\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n\n\t<link rel=\"stylesheet\" href=\"./assets/Valeo_files/bootstrap.min.css\">\n\t<link rel=\"stylesheet\" href=\"./assets/Valeo_files/main.css\" id=\"color-switcher-link\">\n\t<link rel=\"stylesheet\" href=\"./assets/Valeo_files/animations.css\">\n\t<link rel=\"stylesheet\" href=\"./assets/Valeo_files/fonts.css\">\n\t<script src=\"./assets/Valeo_files/modernizr-2.6.2.min.js.download\"></script>\n\n\t<!--[if lt IE 9]>\n\t\t<script src=\"js/vendor/html5shiv.min.js\"></script>\n\t\t<script src=\"js/vendor/respond.min.js\"></script>\n\t\t<script src=\"js/vendor/jquery-1.12.4.min.js\"></script>\n\t<![endif]-->\n\n</head>\n\n<body>\n\t<!--[if lt IE 9]>\n\t\t<div class=\"bg-danger text-center\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\" class=\"highlight\">upgrade your browser</a> to improve your experience.</div>\n\t<![endif]-->\n\n\t\n\t<!-- wrappers for visual page editor and boxed version of template -->\n\t<div id=\"canvas\">\n\t\t<div id=\"box_wrapper\">\n\n\t\t\t<!-- template sections -->\n\n\t\t\t<section class=\"page_toplogo table_section table_section ls section_padding_20\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-2 col-sm-push-4 text-center \">\n\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/\" class=\"logo\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/logo.png\" alt=\"\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 col-sm-pull-2 text-center text-sm-left contact-teaser\">\n\t\t\t\t\t\t\t<span class=\"small-text\">Emergency cases</span>\n\t\t\t\t\t\t\t<p class=\"yantramanov weight-black fontsize_25\">+1(800) 450 7550</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center text-sm-right contact-teaser\">\n        \t\t\t\t\t\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"socialSignIn('google')\" class=\"btn pull-right\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-google\"></i> Login com Google\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t\t<div class=\"page_header_wrapper affix-top-wrapper\" style=\"height: 45px;\">\n\t\t\t\t<header class=\"page_header header_color template_header table_section toggle_menu_left affix-top\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"row cs rounded header-block\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t\t\t\t\t<!-- main nav start -->\n\t\t\t\t\t\t\t\t\t\t<nav class=\"mainmenu_wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"mainmenu nav sf-menu sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Home</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#aboutUs\" class=\"sf-with-ul\">Sobre Nós</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#services\" class=\"sf-with-ul\">Nossos Serviços</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#consultaGratis\" class=\"sf-with-ul\">Consulta Grátis</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#ourTeam\">Nossa Equipe</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- eof features -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- contacts -->\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#contact\" class=\"sf-with-ul\">Contato</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- eof contacts -->\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t\t<!-- eof main nav -->\n\t\t\t\t\t\t\t\t\t\t<span class=\"toggle_menu\">\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 text-right\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"page_social greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-icon\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</header>\n\t\t\t</div>\n\n\t\t\t<section class=\"intro_section page_mainslider\">\n\t\t\t\t<div class=\"flexslider\">\n\t\t\t\t\t<ul class=\"slides\">\n\t\t\t\t\t\t<li style=\"width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;\" class=\"flex-active-slide\">\n\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/slide01.jpg\" alt=\"\" draggable=\"false\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"slide_description_wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slide_description highlight\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"intro-layer animated fadeInLeft\" data-animation=\"fadeInLeft\" style=\"visibility: hidden;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"yantramanov text-uppercase fontsize_35\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDesenvolver Capacidades nas Pessoas\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"intro-layer animated fadeInRight\" data-animation=\"fadeInRight\" style=\"visibility: hidden;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase yantramanov big\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tpara Melhorar suas Vidas\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- eof .slide_description -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- eof .slide_description_wrapper -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- eof .col-* -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- eof .row -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- eof .container -->\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- eof flexslider -->\n\t\t\t</section>\n\n\t\t\t<section class=\"ls ms section_padding_25 page_info_banners columns_padding_0 columns_margin_0\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t<div class=\"with_padding cs main_bg_color info_banner\">\n\t\t\t\t\t\t\t\t<h4 class=\"text-uppercase bottommargin_30\">Horários</h4>\n\t\t\t\t\t\t\t\t<ul class=\"list1 no-bullets middle-borders bottommargin_0\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body small-text2 thin\">\n\t\t\t\t\t\t\t\t\t\t\t\t24 x 7\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">A todo momento</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body small-text2 thin\">\n\t\t\t\t\t\t\t\t\t\t\t\tDispomos de um sistema que estará disponível o dia todo. Verifique com seu fonoaudiólogo os horários disponíveis.\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t<div class=\"with_padding cs main_bg_color2 info_banner\">\n\t\t\t\t\t\t\t\t<h4 class=\"text-uppercase bottommargin_30\">Contact details</h4>\n\t\t\t\t\t\t\t\t<ul class=\"list1 no-bullets middle-borders bottommargin_0\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body small-text2 thin\">\n\t\t\t\t\t\t\t\t\t\t\t\tLivingstone, Season Street 45/2\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Los angeles, Inc - 4502\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"topmargin_10\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/contact.html\" class=\"theme_button inverse block_button margin_0\">Get directions on the map\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-caret-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t\t<section class=\"ls section_padding_top_150 section_padding_bottom_120 features\" id=\"aboutUs\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-offset-4 col-md-8\">\n\t\t\t\t\t\t\t<h2 class=\"section_header\">O Que Nos Torna Diferentes</h2>\n\t\t\t\t\t\t\t<p class=\"bold bottommargin_30\">Fazemos parte de um sistema que preza pela qualidade e conforto dos nossos clientes. Tudo que fazemos é pensando em você.</p>\n\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/consultation.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Consultas\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Grátis</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/prices.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Preços\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Acessíveis</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/doctors.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Fonoaudiólogos\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Qualificados</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/staff.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Equipe\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>Profissional</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/opened.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Aberto\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>24/7</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"media img-media-teaser\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/happy.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body media-middle\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"bold text-uppercase margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/#\">Clientes\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br> Felizes</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t\t<section class=\"ds ms section_padding_top_150 section_padding_bottom_100 page_services parallax\" style=\"background-position: 50% 0px;\" id=\"services\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center\">\n\t\t\t\t\t\t\t<h2 class=\"section_header highlight3\">Nossos Serviços Fonoaudiológicos</h2>\n\t\t\t\t\t\t\t<p class=\"bold grey\">\n\t\t\t\t\t\t\t\tTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row topmargin_50 columns_margin_bottom_60\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/cardio.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">Cardio Monitoring</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tThese cases are perfectly simple and easy to distinguish a free hour when our power\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/medical.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">Medical Treatment</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tFusce pellentesque lectus quis placerat ultrices malesuada est vitae urna laoreet porta\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/emergency.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">Emergency Help</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDonec cursus tellus libero, non porttitor felis desluctus ut justo non odio molestie\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center lg-clearfix\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/symptom.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">Symptom Check</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tMauris consectetur dui eget ullamcorper mehendrerit eros ligula consectetur\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/laboratory.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">Laboratory Test</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tPellentesque facilisis.sollicitudin justo non odio molestie, sed venenatis elit laoreet\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 text-center\">\n\t\t\t\t\t\t\t<div class=\"teaser\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/general.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<h4 class=\"grey\">\n\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/single-service.html\">General Analysis</a>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tMorbi sollicitudin justo non odio molestie sed venenatis elit laoreet\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t\t<section class=\"ls section_padding_90 booking_departments background_cover columns_margin_top_30\" id=\"consultaGratis\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-5 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"content-card rounded muted_background\">\n\t\t\t\t\t\t\t\t<h4 class=\"card-heading main_bg_color\">Solicite uma consulta grátis</h4>\n\t\t\t\t\t\t\t\t<div class=\"card-content with_padding\">\n\t\t\t\t\t\t\t\t\t<form class=\"appointment-form\" id=\"appointmentform\" method=\"post\" action=\"http://webdesign-finder.com/html/valeo/\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row columns_padding_5 columns_margin_0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group select-group bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select aria-required=\"true\" id=\"app-categories\" name=\"app-category\" class=\"choice empty form-control\" placeholder=\"Tipo de Atendimento\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"computer\">Primeira consulta no fonoaudiólogo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"laptop\">Primeira consulta através do site</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"app-author\" class=\"sr-only\">Seu Nome Completo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" name=\"app-author\" id=\"app-author\" class=\"form-control\" placeholder=\"Seu Nome Completo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"app-phone\" class=\"sr-only\">Seu Telefone\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" name=\"app-phone\" id=\"app-phone\" class=\"form-control\" placeholder=\"Seu Telefone\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"app-date\" class=\"sr-only\">Data\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" name=\"app-date\" id=\"app-date\" class=\"form-control right-icon\" placeholder=\"Data\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-calendar5\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group bottommargin_10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"app-time\" class=\"sr-only\">Hora\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-required=\"true\" size=\"30\" value=\"\" name=\"app-time\" id=\"app-time\" class=\"form-control right-icon\" placeholder=\"Hora\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-clock2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group bottommargin_20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"app-time\" class=\"sr-only\">Mensagem\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea aria-required=\"true\" rows=\"5\" cols=\"45\" name=\"comment\" id=\"comment\" class=\"form-control\" placeholder=\"Mensagem\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" id=\"app-ubmit\" name=\"app-submit\" class=\"theme_button block_button color1 margin_0\">Marque uma consulta</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t\t<section class=\"ls section_padding_top_150 section_padding_bottom_120\" id=\"ourTeam\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t<h2 class=\"section_header\">Nossa Equipe</h2>\n\t\t\t\t\t\t\t<p class=\"bold\">\n\t\t\t\t\t\t\t\tThe wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"owl-carousel team-carousel top-offset with-nav owl-loaded owl-drag owl-theme\" data-nav=\"true\" data-responsive-lg=\"6\" data-responsive-md=\"4\" data-responsive-sm=\"3\" data-responsive-xs=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 2340px;\"><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/01.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Vickie\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Bryant</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">General Doctor</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 254 4512\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/02.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Geraldine\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Graham</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Dental Surgeon</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 895 4575\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/03.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Valerie\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Farmer</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Cosmetic Surgeon</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 456 5484\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/04.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Eloise\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Stephens</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Therapy</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 800 7000\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/05.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Robin\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Ramsey</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">General Doctor</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 254 4512\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/06.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Claudia\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Ortiz</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Gynecologist</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 550 5500\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/01.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Vickie\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Bryant</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">General Doctor</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 254 4512\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/02.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Geraldine\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Graham</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Dental Surgeon</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 895 4575\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/03.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Valerie\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Farmer</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Cosmetic Surgeon</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 456 5484\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/04.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Eloise\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Stephens</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Therapy</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 800 7000\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/05.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Robin\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Ramsey</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">General Doctor</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 254 4512\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div><div class=\"owl-item\" style=\"width: 165px; margin-right: 30px;\"><div class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/06.jpg\" alt=\"\" class=\"rounded\">\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/team-single.html\">Claudia\n\t\t\t\t\t\t\t\t\t\t\t\t<br> Ortiz</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<p class=\"small-text\">Gynecologist</p>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"divider_15\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-phone3\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body yantramanov\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 (800) 550 5500\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"social-icons greylinks\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-facebook\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Facebook\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-twitter\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Twitter\"></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"social-icon soc-google\" href=\"http://webdesign-finder.com/html/valeo/#\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Google\"></a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div></div></div></div><div class=\"owl-nav\"><div class=\"owl-prev disabled\">prev</div><div class=\"owl-next\">next</div></div><div class=\"owl-dots disabled\"></div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</section>\n\n\n\t\t\t<section class=\"ds ms section_padding_150 parallax page_testimonials columns_margin_0\" style=\"background-position: 50% 0px;\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1 text-center\">\n\t\t\t\t\t\t\t<h2 class=\"section_header highlight3\">What patients say About Valeo</h2>\n\t\t\t\t\t\t\t<div class=\"owl-carousel topmargin_60 owl-loaded owl-drag owl-theme\" data-dots=\"true\" data-responsive-lg=\"1\" data-responsive-md=\"1\" data-responsive-sm=\"1\">\n\n\n\t\t\t\t\t\t\t<div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 2925px;\"><div class=\"owl-item active\" style=\"width: 945px; margin-right: 30px;\"><blockquote class=\"no-border\">\n\t\t\t\t\t\t\t\t\t<p class=\"yantramanov\">“The Cancer team at Valeo are nothing short of miracle workers - they were able to help me overcome my Leukemia in just 6 months”</p>\n\t\t\t\t\t\t\t\t\t<div class=\"item-meta small-text2\">\n\t\t\t\t\t\t\t\t\t\tChristine Blaine / blood patient\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</blockquote></div><div class=\"owl-item\" style=\"width: 945px; margin-right: 30px;\"><blockquote class=\"no-border\">\n\t\t\t\t\t\t\t\t\t<p class=\"yantramanov\">The staff at Valeo are second to none. The amount of knowledge of experience they bring to the table is astounding”</p>\n\t\t\t\t\t\t\t\t\t<div class=\"item-meta small-text2\">\n\t\t\t\t\t\t\t\t\t\tChristine Blaine / kidney patient\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</blockquote></div><div class=\"owl-item\" style=\"width: 945px; margin-right: 30px;\"><blockquote class=\"no-border\">\n\t\t\t\t\t\t\t\t\t<p class=\"yantramanov\">The Dental care team at Valeo was just great - they helped me overcome my dental deficiencies and put me back into good health”</p>\n\t\t\t\t\t\t\t\t\t<div class=\"item-meta small-text2\">\n\t\t\t\t\t\t\t\t\t\tBenjamin Flanco / dental patient\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</blockquote></div></div></div><div class=\"owl-nav disabled\"><div class=\"owl-prev\">prev</div><div class=\"owl-next\">next</div></div><div class=\"owl-dots\"><div class=\"owl-dot active\"><span></span></div><div class=\"owl-dot\"><span></span></div><div class=\"owl-dot\"><span></span></div></div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n<!--\n\t\t\t<section class=\"ls section_padding_25\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t<div class=\"owl-carousel partners-carousel owl-loaded owl-drag owl-theme\" data-responsive-lg=\"6\" data-responsive-md=\"4\" data-responsive-sm=\"3\" data-responsive-xs=\"2\">\n\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t<div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 1170px;\"><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/5.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div><div class=\"owl-item active\" style=\"width: 165px; margin-right: 30px;\"><a href=\"http://webdesign-finder.com/html/valeo/#\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/6.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</a></div></div></div><div class=\"owl-nav disabled\"><div class=\"owl-prev\">prev</div><div class=\"owl-next\">next</div></div><div class=\"owl-dots disabled\"></div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n-->\n\t\t\t<footer class=\"page_footer template_footer cs main_bg_color2\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row display_table_sm divider_40\">\n\t\t\t\t\t\t<div class=\"col-sm-2 col-sm-push-4 text-center display_table_cell_sm\">\n\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/\" class=\"logo\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/Valeo_files/logo-light.png\" alt=\"\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 col-sm-pull-2 text-center text-sm-left contact-teaser display_table_cell_sm\">\n\t\t\t\t\t\t\t<span class=\"small-text\">Emergency cases</span>\n\t\t\t\t\t\t\t<p class=\"yantramanov weight-black fontsize_25\">+1(800) 450 7550</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center text-sm-right contact-teaser display_table_cell_sm\">\n\t\t\t\t\t\t\t<span class=\"small-text\">online consultation</span>\n\t\t\t\t\t\t\t<p class=\"yantramanov weight-black fontsize_25 text-uppercase\">valeo@gmail.com</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row columns_margin_0 widgets-row display_table_md\">\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 display_table_cell_md\">\n\t\t\t\t\t\t\t<div class=\"widget widget_mailchimp\">\n\t\t\t\t\t\t\t\t<h4 class=\"text-uppercase bold\">Newsletter Signup</h4>\n\t\t\t\t\t\t\t\t<form class=\"signup form-inline\" action=\"http://webdesign-finder.com/html/valeo/\" method=\"get\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"email\" type=\"email\" class=\"mailchimp_email form-control\" placeholder=\"your email address\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"theme_button\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Send</span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"rt-icon2-envelope black\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<div class=\"response\"></div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-push-4 col-sm-6 display_table_cell_md\">\n\t\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t\t<h4 class=\"text-uppercase bold\">Meet Our Doctors</h4>\n\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/timetable.html\" class=\"theme_button color2 block_button margin_0\">doctors timetable</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 col-md-pull-4 col-sm-12 display_table_cell_md\">\n\t\t\t\t\t\t\t<div class=\"widget widget_button_map\">\n\t\t\t\t\t\t\t\t<h4 class=\"text-uppercase bold\">Search on the map</h4>\n\t\t\t\t\t\t\t\t<a href=\"http://webdesign-finder.com/html/valeo/contact.html\" class=\"theme_button inverse block_button margin_0\">Get directions on the map\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-caret-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</footer>\n\n\t\t\t<section class=\"page_copyright cs main_bg_color table_section section_padding_35\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center text-sm-left\">\n\t\t\t\t\t\t\t<p class=\"small-text black\">+Fono - Clínica Fonoaudiológica / Centro de Saúde © 2018</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">\n\t\t\t\t\t\t\t<div class=\"page_social darklinks\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"social-icon\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center text-md-right\">\n\t\t\t\t\t\t\t<p class=\"small-text black\">Created with\n\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o highlight3\"></i> by\n\t\t\t\t\t\t\t\t<a href=\"http://modernwebtemplates.com/\">MWTemplates</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\n\t\t</div>\n\t\t<!-- eof #box_wrapper -->\n\t</div>\n\t<!-- eof #canvas -->\n\n\t<script src=\"./assets/Valeo_files/compressed.js.download\"></script>\n\t<script src=\"./assets/Valeo_files/main.js.download\"></script>\n\n\n\n<a href=\"http://webdesign-finder.com/html/valeo/#\" id=\"toTop\" style=\"display: none;\">\n\t<span id=\"toTopHover\"></span>To Top</a>\n\t\n</body>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angular5_social_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular5-social-auth */ "./node_modules/angular5-social-auth/angular5-social-auth.umd.js");
/* harmony import */ var angular5_social_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular5_social_auth__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(socialAuthService, router) {
        this.socialAuthService = socialAuthService;
        this.router = router;
    }
    LoginComponent.prototype.socialSignIn = function (socialPlatform, $scope) {
        var _this = this;
        var img;
        var name;
        //var app = angular.module('img', []);
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular5_social_auth__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            localStorage.setItem('img', userData.image);
            localStorage.setItem('name', userData.name);
            // Now sign-in with userData
            _this.router.navigate(['/fonoaudiologo/dash']);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [angular5_social_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mocks/mock-fono.ts":
/*!************************************!*\
  !*** ./src/app/mocks/mock-fono.ts ***!
  \************************************/
/*! exports provided: FONO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONO", function() { return FONO; });
var FONO = [
    { nome: 'Victor', email: 'victor.eacd@gmail.com', telefone: 'ddi' },
    { nome: 'Pires', email: 'pires@gg.com', telefone: 'ddd' },
    { nome: 'Wylianne', email: 'wylianne@gg.com', telefone: 'ddd' }
];


/***/ }),

/***/ "./src/app/mocks/mock-paciente.ts":
/*!****************************************!*\
  !*** ./src/app/mocks/mock-paciente.ts ***!
  \****************************************/
/*! exports provided: PACIENTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACIENTES", function() { return PACIENTES; });
var PACIENTES = [];


/***/ }),

/***/ "./src/app/models/fono.ts":
/*!********************************!*\
  !*** ./src/app/models/fono.ts ***!
  \********************************/
/*! exports provided: Fono */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fono", function() { return Fono; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity */ "./src/app/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fono = (function (_super) {
    __extends(Fono, _super);
    function Fono() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fono;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/novo-usuario/fono/fono.component.css":
/*!******************************************************!*\
  !*** ./src/app/novo-usuario/fono/fono.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/novo-usuario/fono/fono.component.html":
/*!*******************************************************!*\
  !*** ./src/app/novo-usuario/fono/fono.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fono works!\n  \n</p>\n"

/***/ }),

/***/ "./src/app/novo-usuario/fono/fono.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/novo-usuario/fono/fono.component.ts ***!
  \*****************************************************/
/*! exports provided: FonoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoComponent", function() { return FonoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FonoComponent = (function () {
    function FonoComponent() {
    }
    FonoComponent.prototype.ngOnInit = function () {
    };
    FonoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fono',
            template: __webpack_require__(/*! ./fono.component.html */ "./src/app/novo-usuario/fono/fono.component.html"),
            styles: [__webpack_require__(/*! ./fono.component.css */ "./src/app/novo-usuario/fono/fono.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FonoComponent);
    return FonoComponent;
}());



/***/ }),

/***/ "./src/app/novo-usuario/novo-usuario.component.css":
/*!*********************************************************!*\
  !*** ./src/app/novo-usuario/novo-usuario.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill { \n    height: 100vh;\n}"

/***/ }),

/***/ "./src/app/novo-usuario/novo-usuario.component.html":
/*!**********************************************************!*\
  !*** ./src/app/novo-usuario/novo-usuario.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron fill\" style=\"background-color:#00a7d3\">\n    <a routerLink=\"/newUser/cadFono\">Novo Usuário</a>\n\n    <div class=\"jumbotron\" style=\"background-color:#008bb0\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/novo-usuario/novo-usuario.component.ts":
/*!********************************************************!*\
  !*** ./src/app/novo-usuario/novo-usuario.component.ts ***!
  \********************************************************/
/*! exports provided: NovoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoUsuarioComponent", function() { return NovoUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NovoUsuarioComponent = (function () {
    function NovoUsuarioComponent() {
    }
    NovoUsuarioComponent.prototype.ngOnInit = function () {
    };
    NovoUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-usuario',
            template: __webpack_require__(/*! ./novo-usuario.component.html */ "./src/app/novo-usuario/novo-usuario.component.html"),
            styles: [__webpack_require__(/*! ./novo-usuario.component.css */ "./src/app/novo-usuario/novo-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NovoUsuarioComponent);
    return NovoUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/paciente/paciente.component.css":
/*!*************************************************!*\
  !*** ./src/app/paciente/paciente.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paciente/paciente.component.html":
/*!**************************************************!*\
  !*** ./src/app/paciente/paciente.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  paciente works!\n</p>\n"

/***/ }),

/***/ "./src/app/paciente/paciente.component.ts":
/*!************************************************!*\
  !*** ./src/app/paciente/paciente.component.ts ***!
  \************************************************/
/*! exports provided: PacienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteComponent", function() { return PacienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PacienteComponent = (function () {
    function PacienteComponent() {
    }
    PacienteComponent.prototype.ngOnInit = function () {
    };
    PacienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paciente',
            template: __webpack_require__(/*! ./paciente.component.html */ "./src/app/paciente/paciente.component.html"),
            styles: [__webpack_require__(/*! ./paciente.component.css */ "./src/app/paciente/paciente.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PacienteComponent);
    return PacienteComponent;
}());



/***/ }),

/***/ "./src/app/services/fono.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/fono.service.ts ***!
  \******************************************/
/*! exports provided: FonoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoService", function() { return FonoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _mocks_mock_fono__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/mock-fono */ "./src/app/mocks/mock-fono.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FonoService = (function () {
    function FonoService() {
    }
    FonoService.prototype.getFono = function () {
        return _mocks_mock_fono__WEBPACK_IMPORTED_MODULE_1__["FONO"];
    };
    FonoService.prototype.setFono = function (fono) {
        _mocks_mock_fono__WEBPACK_IMPORTED_MODULE_1__["FONO"].push(fono);
    };
    FonoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FonoService);
    return FonoService;
}());



/***/ }),

/***/ "./src/app/services/fonoaudiologo.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/fonoaudiologo.service.ts ***!
  \***************************************************/
/*! exports provided: FonoaudiologoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonoaudiologoService", function() { return FonoaudiologoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_fono__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fono */ "./src/app/models/fono.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FonoaudiologoService = (function () {
    function FonoaudiologoService(db) {
        this.db = db;
    }
    FonoaudiologoService.prototype.add = function (fono) {
        return fono.add();
    };
    FonoaudiologoService.prototype.getAll = function () {
        return _models_fono__WEBPACK_IMPORTED_MODULE_1__["Fono"].getAll(this.db);
    };
    FonoaudiologoService.prototype.get = function (id) {
        return _models_fono__WEBPACK_IMPORTED_MODULE_1__["Fono"].get(this.db, id);
    };
    FonoaudiologoService.prototype.delete = function (fono) {
        return fono.delete();
    };
    FonoaudiologoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FonoaudiologoService);
    return FonoaudiologoService;
}());



/***/ }),

/***/ "./src/app/services/paciente.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/paciente.service.ts ***!
  \**********************************************/
/*! exports provided: PacienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteService", function() { return PacienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _mocks_mock_paciente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/mock-paciente */ "./src/app/mocks/mock-paciente.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PacienteService = (function () {
    function PacienteService() {
    }
    PacienteService.prototype.getPaciente = function () {
        return _mocks_mock_paciente__WEBPACK_IMPORTED_MODULE_1__["PACIENTES"];
    };
    PacienteService.prototype.setPaciente = function (paciente) {
        _mocks_mock_paciente__WEBPACK_IMPORTED_MODULE_1__["PACIENTES"].push(paciente);
    };
    PacienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PacienteService);
    return PacienteService;
}());



/***/ }),

/***/ "./src/app/services/pacientes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pacientes.service.ts ***!
  \***********************************************/
/*! exports provided: PacientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesService", function() { return PacientesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _fonoaudiologo_models_paciente_paciente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonoaudiologo/models/paciente/paciente */ "./src/app/fonoaudiologo/models/paciente/paciente.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PacientesService = (function () {
    function PacientesService(db) {
        this.db = db;
    }
    PacientesService.prototype.add = function (paciente) {
        return paciente.add();
    };
    PacientesService.prototype.getAll = function () {
        return _fonoaudiologo_models_paciente_paciente__WEBPACK_IMPORTED_MODULE_2__["Paciente"].getAll(this.db, "Paciente");
    };
    PacientesService.prototype.get = function (id) {
        return _fonoaudiologo_models_paciente_paciente__WEBPACK_IMPORTED_MODULE_2__["Paciente"].get(this.db, id);
    };
    PacientesService.prototype.delete = function (paciente) {
        return paciente.delete();
    };
    PacientesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], PacientesService);
    return PacientesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/firebase-config.ts":
/*!********************************!*\
  !*** ./src/firebase-config.ts ***!
  \********************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAVsPx0qmBFa3e_VWxIIxSSvhdgvSxKrtk",
    authDomain: "maisfono-1e0a5.firebaseapp.com",
    databaseURL: "https://maisfono-1e0a5.firebaseio.com",
    projectId: "maisfono-1e0a5",
    storageBucket: "maisfono-1e0a5.appspot.com",
    messagingSenderId: "809924178244"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/juniorpires/mais-fono/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
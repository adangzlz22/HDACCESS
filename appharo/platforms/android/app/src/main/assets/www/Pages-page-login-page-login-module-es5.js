(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-page-login-page-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/page-login/page-login.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/page-login/page-login.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"padding\">\r\n    \r\n    <div class=\"logo\">\r\n      <ion-icon color=\"light\" name=\"contact\"></ion-icon>\r\n      <!-- <ion-icon color=\"light\" name=\"contact\"></ion-icon> -->\r\n      <!-- <ion-icon color=\"light\" name=\"cloudy-night\"></ion-icon> -->\r\n      <!-- <img src=\"../../assets/logo.png\"> -->\r\n    </div>\r\n\r\n\r\n    <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmit($value)\">\r\n\r\n\r\n     \r\n   \r\n     \r\n      <ion-item >\r\n        <ion-icon color=\"light\" name=\"mail\" slot=\"start\"></ion-icon>\r\n        <ion-input color=\"light\" \r\n                    type=\"email\" \r\n                    name=\"email\"\r\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                    placeholder=\"Correo electronico\" \r\n                    [(ngModel)]=\"Correo\" required></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-icon color=\"light\" name=\"lock\" slot=\"start\"></ion-icon>\r\n        <ion-input color=\"light\" name=\"password\" type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"Contrasena\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <br>\r\n      <ion-button color=\"light\" \r\n      expand=\"block\" \r\n      name=\"inciar\"\r\n      shape=\"round\" \r\n      fill=\"outline\" \r\n      (click)=\"Login()\"\r\n      [disabled]=\"formulario.invalid\">Iniciar Sesión</ion-button>\r\n    </form>\r\n\r\n   \r\n\r\n    <ion-item>\r\n      <ion-label color=\"light\">Recordar contrasena</ion-label>\r\n      <ion-checkbox color=\"light\" slot=\"end\" [ngModel]=\"Recordar\" (ionChange)=\"CheckBox($event)\"></ion-checkbox>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/page-login/page-login-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/page-login/page-login-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PageLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginPageRoutingModule", function() { return PageLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-login.page */ "./src/app/Pages/page-login/page-login.page.ts");




var routes = [
    {
        path: '',
        component: _page_login_page__WEBPACK_IMPORTED_MODULE_3__["PageLoginPage"]
    }
];
var PageLoginPageRoutingModule = /** @class */ (function () {
    function PageLoginPageRoutingModule() {
    }
    PageLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageLoginPageRoutingModule);
    return PageLoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/page-login/page-login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/page-login/page-login.module.ts ***!
  \*******************************************************/
/*! exports provided: PageLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginPageModule", function() { return PageLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-login-routing.module */ "./src/app/Pages/page-login/page-login-routing.module.ts");
/* harmony import */ var _page_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-login.page */ "./src/app/Pages/page-login/page-login.page.ts");







var PageLoginPageModule = /** @class */ (function () {
    function PageLoginPageModule() {
    }
    PageLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageLoginPageRoutingModule"],
            ],
            declarations: [_page_login_page__WEBPACK_IMPORTED_MODULE_6__["PageLoginPage"]]
        })
    ], PageLoginPageModule);
    return PageLoginPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/page-login/page-login.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/page-login/page-login.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding {\n  padding: 5% !important;\n}\n\n.logo ion-icon {\n  font-size: 9em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.logo img {\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.logo {\n  position: relative;\n  height: 250px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#ffb618, #eb1e08);\n}\n\nion-item {\n  --ion-background-color: transparent!important;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcGFnZS1sb2dpbi9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxQYWdlc1xccGFnZS1sb2dpblxccGFnZS1sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3BhZ2UtbG9naW4vcGFnZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZBO0VBRUkseURBQUE7QUNJSjs7QUREQTtFQUNJLDZDQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9wYWdlLWxvZ2luL3BhZ2UtbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiA5ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM2REQ1RkEsICMyOTgwQjkpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM0ODU1NjMsICMyOTMyM2MpO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59IiwiLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogOWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/page-login/page-login.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/page-login/page-login.page.ts ***!
  \*****************************************************/
/*! exports provided: PageLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginPage", function() { return PageLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var PageLoginPage = /** @class */ (function () {
    function PageLoginPage(_login, navCtrl, loadCtrl, alertCtrl, storage) {
        this._login = _login;
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.DatosUsuarios = [];
        this.Recordar = false;
        this.objLogin = {
            Correo: '',
            Contrasena: ''
        };
        console.log('Hola Soy page login');
    }
    PageLoginPage.prototype.ngOnInit = function () {
    };
    PageLoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.Recordar = false;
        this.storage.get('objLogin').then(function (r) {
            console.log("======>ionwill", r);
            if (_this.Recordar == false) {
                _this.Correo = r.Correo;
                _this.Contrasena = r.Contrasena;
            }
        });
    };
    PageLoginPage.prototype.onSubmit = function (value) {
        console.log(value);
        console.log('AQUI ANMDAMOS');
    };
    PageLoginPage.prototype.Login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Iniciando sesion',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.objLogin.Correo = this.Correo;
                        this.objLogin.Contrasena = this.Contrasena;
                        this._login.Login(this.Correo, this.Contrasena).then(function (result) {
                            if (result['Model'] != "[]") {
                                loading.onDidDismiss();
                                _this.StorageDatos(_this.Recordar);
                                _this.DatosUsuarios = JSON.parse(result['Model']);
                                console.log(_this.DatosUsuarios);
                                _this._login.PKUsuario = _this.DatosUsuarios[0]['PKUsuario'];
                                _this._login.PKNivel = _this.DatosUsuarios[0]['FKNivel'];
                                _this._login.PKMenuBandera = _this.DatosUsuarios[0]['FKMenuBandera'];
                                _this._login.NombreCompleto = _this.DatosUsuarios[0]['NombreCompleto'];
                                _this._login.Correo = _this.DatosUsuarios[0]['Correo'];
                                _this._login.Telefono = _this.DatosUsuarios[0]['Telefono'];
                                _this._login.FKResidencia = _this.DatosUsuarios[0]['FKResidencia'];
                                _this._login.NombreResidencia = _this.DatosUsuarios[0]['NombreResidencia'];
                                _this._login.GeneradorCodigos = _this.DatosUsuarios[0]['GeneradorCodigos'];
                                _this._login.WhatsappCorreo = _this.DatosUsuarios[0]['WhatsappCorreo'];
                                _this._login.TokenMercado = _this.DatosUsuarios[0]['TokenMercado'];
                                _this._login.KeyMercado = _this.DatosUsuarios[0]['KeyMercado'];
                                _this._login.IDNivelDispotivo = _this.DatosUsuarios[0]['IDNivelDispotivo'];
                                _this._login.Expiracion = _this.DatosUsuarios[0]['Expiracion'];
                                _this._login.IDDepartamento = _this.DatosUsuarios[0]['IDDepartamento'];
                                console.log('Te has logeado');
                                _this.navCtrl.navigateRoot('page-cliente-dashboard');
                            }
                            else {
                                _this.Mensaje();
                                console.log('no te has logeado');
                            }
                        }).catch(function (Error) { console.log(Error); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PageLoginPage.prototype.Mensaje = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Inicio de sesion',
                            message: 'Tus datos son incorrectos',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageLoginPage.prototype.CheckBox = function (item) {
        var _this = this;
        this.Recordar = item.detail.checked;
        if (this.Recordar == false) {
            this.storage.set('objLogin', {}).then(function (r) {
                console.log("======>", r);
                _this.Correo = '';
                _this.Contrasena = '';
            });
        }
    };
    PageLoginPage.prototype.StorageDatos = function (Recordando) {
        if (Recordando == true) {
            this.storage.set('objLogin', this.objLogin).then(function (r) {
                console.log("======>", r);
            });
            this.storage.get('objLogin').then(function (r) {
                console.log("======>GET", r);
            });
        }
        else {
            this.Correo = "";
            this.Contrasena = "";
        }
    };
    PageLoginPage.ctorParameters = function () { return [
        { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    PageLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-login',
            template: __webpack_require__(/*! raw-loader!./page-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/page-login/page-login.page.html"),
            styles: [__webpack_require__(/*! ./page-login.page.scss */ "./src/app/Pages/page-login/page-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], PageLoginPage);
    return PageLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-page-login-page-login-module-es5.js.map
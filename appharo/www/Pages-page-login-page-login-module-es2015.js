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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-login.page */ "./src/app/Pages/page-login/page-login.page.ts");




const routes = [
    {
        path: '',
        component: _page_login_page__WEBPACK_IMPORTED_MODULE_3__["PageLoginPage"]
    }
];
let PageLoginPageRoutingModule = class PageLoginPageRoutingModule {
};
PageLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageLoginPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-login-routing.module */ "./src/app/Pages/page-login/page-login-routing.module.ts");
/* harmony import */ var _page_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-login.page */ "./src/app/Pages/page-login/page-login.page.ts");







let PageLoginPageModule = class PageLoginPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let PageLoginPage = class PageLoginPage {
    constructor(_login, navCtrl, loadCtrl, alertCtrl, storage) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Recordar = false;
        this.storage.get('objLogin').then(r => {
            console.log("======>ionwill", r);
            if (this.Recordar == false) {
                this.Correo = r.Correo;
                this.Contrasena = r.Contrasena;
            }
        });
    }
    onSubmit(value) {
        console.log(value);
        console.log('AQUI ANMDAMOS');
    }
    Login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadCtrl.create({
                message: 'Iniciando sesion',
                duration: 2000
            });
            yield loading.present();
            this.objLogin.Correo = this.Correo;
            this.objLogin.Contrasena = this.Contrasena;
            this._login.Login(this.Correo, this.Contrasena).then(result => {
                if (result['Model'] != "[]") {
                    loading.onDidDismiss();
                    this.StorageDatos(this.Recordar);
                    this.DatosUsuarios = JSON.parse(result['Model']);
                    console.log(this.DatosUsuarios);
                    this._login.PKUsuario = this.DatosUsuarios[0]['PKUsuario'];
                    this._login.PKNivel = this.DatosUsuarios[0]['FKNivel'];
                    this._login.PKMenuBandera = this.DatosUsuarios[0]['FKMenuBandera'];
                    this._login.NombreCompleto = this.DatosUsuarios[0]['NombreCompleto'];
                    this._login.Correo = this.DatosUsuarios[0]['Correo'];
                    this._login.Telefono = this.DatosUsuarios[0]['Telefono'];
                    this._login.FKResidencia = this.DatosUsuarios[0]['FKResidencia'];
                    this._login.NombreResidencia = this.DatosUsuarios[0]['NombreResidencia'];
                    this._login.GeneradorCodigos = this.DatosUsuarios[0]['GeneradorCodigos'];
                    this._login.WhatsappCorreo = this.DatosUsuarios[0]['WhatsappCorreo'];
                    this._login.TokenMercado = this.DatosUsuarios[0]['TokenMercado'];
                    this._login.KeyMercado = this.DatosUsuarios[0]['KeyMercado'];
                    this._login.IDNivelDispotivo = this.DatosUsuarios[0]['IDNivelDispotivo'];
                    this._login.Expiracion = this.DatosUsuarios[0]['Expiracion'];
                    this._login.IDDepartamento = this.DatosUsuarios[0]['IDDepartamento'];
                    console.log('Te has logeado');
                    this.navCtrl.navigateRoot('page-cliente-dashboard');
                }
                else {
                    this.Mensaje();
                    console.log('no te has logeado');
                }
            }).catch(Error => { console.log(Error); });
        });
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Inicio de sesion',
                message: 'Tus datos son incorrectos',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    CheckBox(item) {
        this.Recordar = item.detail.checked;
        if (this.Recordar == false) {
            this.storage.set('objLogin', {}).then(r => {
                console.log("======>", r);
                this.Correo = '';
                this.Contrasena = '';
            });
        }
    }
    StorageDatos(Recordando) {
        if (Recordando == true) {
            this.storage.set('objLogin', this.objLogin).then(r => {
                console.log("======>", r);
            });
            this.storage.get('objLogin').then(r => {
                console.log("======>GET", r);
            });
        }
        else {
            this.Correo = "";
            this.Contrasena = "";
        }
    }
};
PageLoginPage.ctorParameters = () => [
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
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



/***/ })

}]);
//# sourceMappingURL=Pages-page-login-page-login-module-es2015.js.map
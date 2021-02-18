(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-perfil-page-cliente-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-perfil/page-cliente-perfil.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-perfil/page-cliente-perfil.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n    <ion-back-button style = \" color : #fff \"  defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n  </ion-buttons>\r\n    <h2>Perfil del usuario</h2>\r\n  </div>\r\n  <div class=\"flex\">\r\n    <div class=\"border-blue\">\r\n      <div class=\"border-white\">\r\n        <div class=\"img-box\">\r\n          <img src=\"../assets/img/user.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"padding\">\r\n    <ion-item>\r\n      <ion-icon style = \" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Nombre completo\" [(ngModel)]=\"NombreCompleto\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"mail\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"mail\" placeholder=\"Correo electronico\" [(ngModel)]=\"Correo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"number\" placeholder=\"Whatsapp\" [(ngModel)]=\"Telefono\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <br>\r\n    <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"navEstadoCuenta()\" *ngIf=\"_UsuProv.PKNivel == 1\">Estado de cuenta</ion-button>\r\n    <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"ActualizarPerfil()\">Guardar</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page-cliente-perfil/page-cliente-perfil-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page-cliente-perfil/page-cliente-perfil-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PageClientePerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClientePerfilPageRoutingModule", function() { return PageClientePerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_cliente_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-perfil.page */ "./src/app/page-cliente-perfil/page-cliente-perfil.page.ts");




const routes = [
    {
        path: '',
        component: _page_cliente_perfil_page__WEBPACK_IMPORTED_MODULE_3__["PageClientePerfilPage"]
    }
];
let PageClientePerfilPageRoutingModule = class PageClientePerfilPageRoutingModule {
};
PageClientePerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageClientePerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/page-cliente-perfil/page-cliente-perfil.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page-cliente-perfil/page-cliente-perfil.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageClientePerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClientePerfilPageModule", function() { return PageClientePerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-perfil-routing.module */ "./src/app/page-cliente-perfil/page-cliente-perfil-routing.module.ts");
/* harmony import */ var _page_cliente_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-perfil.page */ "./src/app/page-cliente-perfil/page-cliente-perfil.page.ts");







let PageClientePerfilPageModule = class PageClientePerfilPageModule {
};
PageClientePerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_cliente_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClientePerfilPageRoutingModule"]
        ],
        declarations: [_page_cliente_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PageClientePerfilPage"]]
    })
], PageClientePerfilPageModule);



/***/ }),

/***/ "./src/app/page-cliente-perfil/page-cliente-perfil.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/page-cliente-perfil/page-cliente-perfil.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #FF8225;\n  height: 180px;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\n.space-between {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.padding {\n  padding: 5% !important;\n}\n\n.img-box {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.border-white {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid #ec6600;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -76px;\n}\n\n.tweet {\n  margin-top: -10px;\n}\n\n.tweet ion-label {\n  line-height: 1 !important;\n  font-size: 15px;\n  margin: 6px 0px 6px 0px !important;\n  min-height: 34px;\n}\n\n.tweet-img {\n  width: 95%;\n  margin-left: 2.5%;\n  border-radius: 10px;\n}\n\ni {\n  color: #FF8225;\n  font-weight: 800;\n}\n\n.color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLXBlcmZpbC9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxwYWdlLWNsaWVudGUtcGVyZmlsXFxwYWdlLWNsaWVudGUtcGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1jbGllbnRlLXBlcmZpbC9wYWdlLWNsaWVudGUtcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QUREQTtFQUNJLHNCQUFBO0FDSUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QURMQTtFQUVJLGdDQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWNsaWVudGUtcGVyZmlsL3BhZ2UtY2xpZW50ZS1wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uZm9sbG93aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvbGxvd2luZ3MgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmltZy1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uYm9yZGVyLWJsdWUge1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgcmdiKDIzNiwgMTAyLCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzZweDtcclxufVxyXG5cclxuXHJcbi50d2VldCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4udHdlZXQgaW9uLWxhYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNnB4IDBweCA2cHggMHB4IWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbn1cclxuLnR3ZWV0LWltZyB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbmkge1xyXG4gICAgY29sb3I6ICNGRjgyMjU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLmhlYWRlciBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmZvbGxvd2luZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9sbG93aW5ncyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWJveCB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXdoaXRlIHtcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYm9yZGVyLWJsdWUge1xuICBib3JkZXI6IDdweCBzb2xpZCAjZWM2NjAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTc2cHg7XG59XG5cbi50d2VldCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4udHdlZXQgaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDZweCAwcHggNnB4IDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xufVxuXG4udHdlZXQtaW1nIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmkge1xuICBjb2xvcjogI0ZGODIyNTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-cliente-perfil/page-cliente-perfil.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page-cliente-perfil/page-cliente-perfil.page.ts ***!
  \*****************************************************************/
/*! exports provided: PageClientePerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClientePerfilPage", function() { return PageClientePerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let PageClientePerfilPage = class PageClientePerfilPage {
    constructor(_UsuProv, navCtrl) {
        this._UsuProv = _UsuProv;
        this.navCtrl = navCtrl;
        this.NombreCompleto = '';
        this.Correo = '';
        this.Telefono = '';
    }
    ngOnInit() {
        this.NombreCompleto = this._UsuProv.NombreCompleto;
        this.Correo = this._UsuProv.Correo;
        this.Telefono = this._UsuProv.Telefono;
        if (this._UsuProv.PKUsuario == 0 || this._UsuProv.PKUsuario == undefined) {
            this.navCtrl.navigateRoot('page-login');
        }
    }
    ActualizarPerfil() {
        console.log('HOLA');
        this._UsuProv.ActualizarPerfil(this.NombreCompleto, this.Correo, this.Telefono).then(result => {
            console.log(result);
            this._UsuProv.NombreCompleto = this.NombreCompleto;
            this._UsuProv.Correo = this.Correo;
            this._UsuProv.Telefono = this.Telefono;
            this.navCtrl.pop();
        }).catch(Error => {
            console.log(Error);
        });
    }
    navEstadoCuenta() {
        const obj = {
            PKUsuario: this._UsuProv.PKUsuario,
            NombreCompleto: this.NombreCompleto
        };
        const navigationExtras = {
            queryParams: {
                usuario: JSON.stringify(obj),
            }
        };
        this.navCtrl.navigateForward('EstadoCuenta', navigationExtras);
    }
};
PageClientePerfilPage.ctorParameters = () => [
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
PageClientePerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-cliente-perfil',
        template: __webpack_require__(/*! raw-loader!./page-cliente-perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-perfil/page-cliente-perfil.page.html"),
        styles: [__webpack_require__(/*! ./page-cliente-perfil.page.scss */ "./src/app/page-cliente-perfil/page-cliente-perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], PageClientePerfilPage);



/***/ })

}]);
//# sourceMappingURL=page-cliente-perfil-page-cliente-perfil-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-un-solo-uso-page-cliente-un-solo-uso-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">{{NombreDePagina}}</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-label style=\"width: 100%; text-align: right;\">Visitas: {{numeroDeVisitas}}</ion-label>\r\n    </ion-item>\r\n    <ion-list *ngFor=\"let item of DatosVisitas\">\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"DirigirVentanaRegistro( item )\"></ion-icon>\r\n            <ion-label (click)=\"DirigirVentanaRegistro( item )\">\r\n                <h2>{{item.NombreCompleto}}</h2>\r\n                <p>{{item.Descripcion}}</p>\r\n                <p>{{item.TelefonoOCorreo}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n\r\n    </ion-list>\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"AgregarRegistro()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PageClienteUnSoloUsoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoPageRoutingModule", function() { return PageClienteUnSoloUsoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_cliente_un_solo_uso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-un-solo-uso.page */ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.ts");




const routes = [
    {
        path: '',
        component: _page_cliente_un_solo_uso_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteUnSoloUsoPage"]
    }
];
let PageClienteUnSoloUsoPageRoutingModule = class PageClienteUnSoloUsoPageRoutingModule {
};
PageClienteUnSoloUsoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageClienteUnSoloUsoPageRoutingModule);



/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PageClienteUnSoloUsoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoPageModule", function() { return PageClienteUnSoloUsoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_un_solo_uso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-un-solo-uso-routing.module */ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso-routing.module.ts");
/* harmony import */ var _page_cliente_un_solo_uso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-un-solo-uso.page */ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.ts");







let PageClienteUnSoloUsoPageModule = class PageClienteUnSoloUsoPageModule {
};
PageClienteUnSoloUsoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_cliente_un_solo_uso_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClienteUnSoloUsoPageRoutingModule"]
        ],
        declarations: [_page_cliente_un_solo_uso_page__WEBPACK_IMPORTED_MODULE_6__["PageClienteUnSoloUsoPage"]]
    })
], PageClienteUnSoloUsoPageModule);



/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLXVuLXNvbG8tdXNvL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlLWNsaWVudGUtdW4tc29sby11c29cXHBhZ2UtY2xpZW50ZS11bi1zb2xvLXVzby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtY2xpZW50ZS11bi1zb2xvLXVzby9wYWdlLWNsaWVudGUtdW4tc29sby11c28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtY2xpZW50ZS11bi1zb2xvLXVzby9wYWdlLWNsaWVudGUtdW4tc29sby11c28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.ts ***!
  \***************************************************************************/
/*! exports provided: PageClienteUnSoloUsoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoPage", function() { return PageClienteUnSoloUsoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Visitas/visitaProvider */ "./src/app/providers/Visitas/visitaProvider.ts");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PageClienteUnSoloUsoPage = class PageClienteUnSoloUsoPage {
    constructor(_VisPro, _UsuPro, navCtrl, route, alertCtrl) {
        this._VisPro = _VisPro;
        this._UsuPro = _UsuPro;
        this.navCtrl = navCtrl;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Pagina = 0;
        this.Pagina = this.route.snapshot.paramMap.get('Pagina');
        console.log(this.route.snapshot.paramMap.get('Pagina'));
        console.log(this.Pagina);
        this.TipoVisita = 0;
        this.NombreDePagina = '';
        if (parseInt(this.Pagina) === 1) {
            this.TipoVisita = 1;
            console.log('entraste a codigos de un solo uso');
            this.NombreDePagina = 'Codigos de un solo uso';
        }
        if (parseInt(this.Pagina) === 2) {
            this.TipoVisita = 2;
            this.NombreDePagina = 'Visitas frecuentes';
        }
        this.ObtenerVisitas();
    }
    ObtenerVisitas() {
        console.log('HOLA');
        this._VisPro.ObtenerVisitas(this.TipoVisita, this._UsuPro.PKUsuario, -1).then(result => {
            this.DatosVisitas = [];
            this.DatosVisitas = JSON.parse(result['Model']);
            console.log(this.DatosVisitas);
            this.numeroDeVisitas = 20;
            console.log(this.DatosVisitas.length);
            if (parseInt(this.Pagina) === 1) {
                if (this.DatosVisitas.length > 0) {
                    this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasUnSoloUso'] - this.DatosVisitas[0]['Registros'];
                }
            }
            if (parseInt(this.Pagina) === 2) {
                if (this.DatosVisitas.length > 0) {
                    this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasFrecuentes'] - this.DatosVisitas[0]['Registros'];
                }
            }
        }).catch(Error => {
            console.log(Error);
        });
    }
    DirigirVentanaRegistro(obj) {
        this.navCtrl.navigateForward(`page-cliente-un-solo-uso-registro/${obj.PKVisita}/${this.TipoVisita}`);
    }
    AgregarRegistro() {
        if (this.numeroDeVisitas > 0) {
            this.navCtrl.navigateForward(`page-cliente-un-solo-uso-registro/${0}/${this.TipoVisita}`);
        }
        else {
            this.Mensaje();
        }
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: 'Usuario',
                message: 'Has alcanzado el maximo de registros.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PageClienteUnSoloUsoPage.ctorParameters = () => [
    { type: _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__["VisitaProvider"] },
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PageClienteUnSoloUsoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-cliente-un-solo-uso',
        template: __webpack_require__(/*! raw-loader!./page-cliente-un-solo-uso.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.html"),
        styles: [__webpack_require__(/*! ./page-cliente-un-solo-uso.page.scss */ "./src/app/page-cliente-un-solo-uso/page-cliente-un-solo-uso.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__["VisitaProvider"],
        _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], PageClienteUnSoloUsoPage);



/***/ })

}]);
//# sourceMappingURL=page-cliente-un-solo-uso-page-cliente-un-solo-uso-module-es2015.js.map
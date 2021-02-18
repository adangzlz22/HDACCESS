(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-frecuentes-page-cliente-frecuentes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Visitas frecuentes</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-label style=\"width: 100%; text-align: right;\">Visitas: {{numeroDeVisitas}}</ion-label>\r\n    </ion-item>\r\n    <ion-list *ngFor=\"let item of DatosVisitas\">\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>{{item.NombreCompleto}}</h2>\r\n                <p>{{item.Telefono}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes/page-cliente-frecuentes-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PageClienteFrecuentesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesPageRoutingModule", function() { return PageClienteFrecuentesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_cliente_frecuentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-frecuentes.page */ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.ts");




const routes = [
    {
        path: '',
        component: _page_cliente_frecuentes_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteFrecuentesPage"]
    }
];
let PageClienteFrecuentesPageRoutingModule = class PageClienteFrecuentesPageRoutingModule {
};
PageClienteFrecuentesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageClienteFrecuentesPageRoutingModule);



/***/ }),

/***/ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes/page-cliente-frecuentes.module.ts ***!
  \***************************************************************************/
/*! exports provided: PageClienteFrecuentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesPageModule", function() { return PageClienteFrecuentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_frecuentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-frecuentes-routing.module */ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes-routing.module.ts");
/* harmony import */ var _page_cliente_frecuentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-frecuentes.page */ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.ts");







let PageClienteFrecuentesPageModule = class PageClienteFrecuentesPageModule {
};
PageClienteFrecuentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_cliente_frecuentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClienteFrecuentesPageRoutingModule"]
        ],
        declarations: [_page_cliente_frecuentes_page__WEBPACK_IMPORTED_MODULE_6__["PageClienteFrecuentesPage"]]
    })
], PageClienteFrecuentesPageModule);



/***/ }),

/***/ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMvQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXG51ZXZvXFxIREFDQ0VTU1xcYXBwaGFyby9zcmNcXGFwcFxccGFnZS1jbGllbnRlLWZyZWN1ZW50ZXNcXHBhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtY2xpZW50ZS1mcmVjdWVudGVzL3BhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.ts ***!
  \*************************************************************************/
/*! exports provided: PageClienteFrecuentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesPage", function() { return PageClienteFrecuentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Visitas/visitaProvider */ "./src/app/providers/Visitas/visitaProvider.ts");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");




let PageClienteFrecuentesPage = class PageClienteFrecuentesPage {
    constructor(_VisPro, _UsuPro) {
        this._VisPro = _VisPro;
        this._UsuPro = _UsuPro;
        this.DatosVisitas = [];
    }
    ngOnInit() {
        this.ObtenerVisitas();
    }
    ObtenerVisitas() {
        console.log('HOLA');
        this._VisPro.ObtenerVisitas(2, this._UsuPro.PKUsuario, -1).then(result => {
            this.DatosVisitas = JSON.parse(result['Model']);
            console.log(this.DatosVisitas);
            this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasFrecuentes'] - this.DatosVisitas[0]['SumaVisitasFrecuentes'];
        }).catch(Error => {
            console.log(Error);
        });
    }
};
PageClienteFrecuentesPage.ctorParameters = () => [
    { type: _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__["VisitaProvider"] },
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"] }
];
PageClienteFrecuentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-cliente-frecuentes',
        template: __webpack_require__(/*! raw-loader!./page-cliente-frecuentes.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.html"),
        styles: [__webpack_require__(/*! ./page-cliente-frecuentes.page.scss */ "./src/app/page-cliente-frecuentes/page-cliente-frecuentes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_2__["VisitaProvider"],
        _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"]])
], PageClienteFrecuentesPage);



/***/ })

}]);
//# sourceMappingURL=page-cliente-frecuentes-page-cliente-frecuentes-module-es2015.js.map
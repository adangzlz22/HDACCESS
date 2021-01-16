(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-residencias-page-administrador-residencias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-residencias/page-administrador-residencias.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-residencias/page-administrador-residencias.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Residenciales</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-searchbar [(ngModel)]=\"NombreResidencia\" (keyup.enter)=\"ObtenerResidencias()\"></ion-searchbar>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let item of DatosResidencias\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"Actualizar(item)\"></ion-icon>\r\n            <ion-label (click)=\"Actualizar(item)\">\r\n                <h2>{{ item.NombreResidencia }}</h2>\r\n                <p> {{ item.FKDiasActivados }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"AgregarNuevo()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-administrador-residencias/page-administrador-residencias-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias/page-administrador-residencias-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageAdministradorResidenciasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasPageRoutingModule", function() { return PageAdministradorResidenciasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_residencias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-residencias.page */ "./src/app/page-administrador-residencias/page-administrador-residencias.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_residencias_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorResidenciasPage"]
    }
];
let PageAdministradorResidenciasPageRoutingModule = class PageAdministradorResidenciasPageRoutingModule {
};
PageAdministradorResidenciasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorResidenciasPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-residencias/page-administrador-residencias.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias/page-administrador-residencias.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageAdministradorResidenciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasPageModule", function() { return PageAdministradorResidenciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_residencias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-residencias-routing.module */ "./src/app/page-administrador-residencias/page-administrador-residencias-routing.module.ts");
/* harmony import */ var _page_administrador_residencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-residencias.page */ "./src/app/page-administrador-residencias/page-administrador-residencias.page.ts");







let PageAdministradorResidenciasPageModule = class PageAdministradorResidenciasPageModule {
};
PageAdministradorResidenciasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_residencias_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorResidenciasPageRoutingModule"]
        ],
        declarations: [_page_administrador_residencias_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorResidenciasPage"]]
    })
], PageAdministradorResidenciasPageModule);



/***/ }),

/***/ "./src/app/page-administrador-residencias/page-administrador-residencias.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias/page-administrador-residencias.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXJlc2lkZW5jaWFzL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlLWFkbWluaXN0cmFkb3ItcmVzaWRlbmNpYXNcXHBhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy9wYWdlLWFkbWluaXN0cmFkb3ItcmVzaWRlbmNpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy9wYWdlLWFkbWluaXN0cmFkb3ItcmVzaWRlbmNpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-administrador-residencias/page-administrador-residencias.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias/page-administrador-residencias.page.ts ***!
  \***************************************************************************************/
/*! exports provided: PageAdministradorResidenciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasPage", function() { return PageAdministradorResidenciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let PageAdministradorResidenciasPage = class PageAdministradorResidenciasPage {
    constructor(_resiProv, navCtrl) {
        this._resiProv = _resiProv;
        this.navCtrl = navCtrl;
        this.DatosResidencias = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.NombreResidencia = '';
        this.ObtenerResidencias();
    }
    ObtenerResidencias() {
        this._resiProv.ObtenerResidencias(this.NombreResidencia).then(result => {
            this.DatosResidencias = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    Actualizar(item) {
        this.navCtrl.navigateForward(`page-administrador-residencias-registro/${item.PKResidencia}/${item.NombreResidencia}/${item.LimVisitasFrecuentes}/${item.LimVisitasUnSoloUso}/${item.FKDiasActivados}`);
    }
    AgregarNuevo() {
        this.navCtrl.navigateForward(`page-administrador-residencias-registro/${0}/${0}/${0}/${0}/${0}`);
    }
};
PageAdministradorResidenciasPage.ctorParameters = () => [
    { type: _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_2__["ResidenciasProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
PageAdministradorResidenciasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-residencias',
        template: __webpack_require__(/*! raw-loader!./page-administrador-residencias.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-residencias/page-administrador-residencias.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-residencias.page.scss */ "./src/app/page-administrador-residencias/page-administrador-residencias.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_2__["ResidenciasProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], PageAdministradorResidenciasPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-residencias-page-administrador-residencias-module-es2015.js.map
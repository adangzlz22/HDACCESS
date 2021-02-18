(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ver-area-comun-residente-ver-area-comun-residente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"color\">\r\n        <ion-title color=\"light\">Area comun</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <ion-item *ngFor=\"let item of lstMes\">\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"ObtenerAreaComun(item)\"></ion-icon>\r\n            <ion-label (click)=\"ObtenerAreaComun(item)\">\r\n                <h1>{{item.Fecha}}</h1>\r\n                <!-- <ion-chip outline color=\"success\">\r\n                    <ion-label>Disponible</ion-label>\r\n                </ion-chip> -->\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/ver-area-comun-residente/ver-area-comun-residente-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: VerAreaComunResidentePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunResidentePageRoutingModule", function() { return VerAreaComunResidentePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ver_area_comun_residente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-area-comun-residente.page */ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.ts");




const routes = [
    {
        path: '',
        component: _ver_area_comun_residente_page__WEBPACK_IMPORTED_MODULE_3__["VerAreaComunResidentePage"]
    }
];
let VerAreaComunResidentePageRoutingModule = class VerAreaComunResidentePageRoutingModule {
};
VerAreaComunResidentePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerAreaComunResidentePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.module.ts ***!
  \***********************************************************************************/
/*! exports provided: VerAreaComunResidentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunResidentePageModule", function() { return VerAreaComunResidentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ver_area_comun_residente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-area-comun-residente-routing.module */ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente-routing.module.ts");
/* harmony import */ var _ver_area_comun_residente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-area-comun-residente.page */ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.ts");







let VerAreaComunResidentePageModule = class VerAreaComunResidentePageModule {
};
VerAreaComunResidentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ver_area_comun_residente_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerAreaComunResidentePageRoutingModule"]
        ],
        declarations: [_ver_area_comun_residente_page__WEBPACK_IMPORTED_MODULE_6__["VerAreaComunResidentePage"]]
    })
], VerAreaComunResidentePageModule);



/***/ }),

/***/ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyLWFyZWEtY29tdW4tcmVzaWRlbnRlL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2VzXFx2ZXItYXJlYS1jb211bi1yZXNpZGVudGVcXHZlci1hcmVhLWNvbXVuLXJlc2lkZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Zlci1hcmVhLWNvbXVuLXJlc2lkZW50ZS92ZXItYXJlYS1jb211bi1yZXNpZGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXItYXJlYS1jb211bi1yZXNpZGVudGUvdmVyLWFyZWEtY29tdW4tcmVzaWRlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.ts ***!
  \*********************************************************************************/
/*! exports provided: VerAreaComunResidentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunResidentePage", function() { return VerAreaComunResidentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/AreaComun/AreaComun */ "./src/app/providers/AreaComun/AreaComun.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let VerAreaComunResidentePage = class VerAreaComunResidentePage {
    constructor(AreaProvider, navCtrl, route) {
        this.AreaProvider = AreaProvider;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
        this.ObtenerMesAreaComun();
    }
    ObtenerMesAreaComun() {
        this.AreaProvider.ObtenerMesAreaComun().then(result => {
            this.lstMes = JSON.parse(result['Model']);
        }).catch(err => {
            console.log(err);
        });
    }
    ObtenerAreaComun(item) {
        this.navCtrl.navigateForward(`detalles-area-comun/${this.FKResidencia}/${this.FKNivel}/${item.Fecha}`);
    }
};
VerAreaComunResidentePage.ctorParameters = () => [
    { type: src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_2__["AreaComun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
VerAreaComunResidentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ver-area-comun-residente',
        template: __webpack_require__(/*! raw-loader!./ver-area-comun-residente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.html"),
        styles: [__webpack_require__(/*! ./ver-area-comun-residente.page.scss */ "./src/app/pages/ver-area-comun-residente/ver-area-comun-residente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_2__["AreaComun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], VerAreaComunResidentePage);



/***/ })

}]);
//# sourceMappingURL=pages-ver-area-comun-residente-ver-area-comun-residente-module-es2015.js.map
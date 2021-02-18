(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ver-area-comun-ver-area-comun-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ver-area-comun/ver-area-comun.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ver-area-comun/ver-area-comun.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"color\">\r\n        <ion-title color=\"light\">Area comun</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <ion-item>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h1>01</h1>\r\n                <p>Marzo</p>\r\n                <ion-chip outline color=\"danger\">\r\n                    <ion-label>Ocupado</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h1>02</h1>\r\n                <p>Marzo</p>\r\n                <ion-chip outline color=\"danger\">\r\n                    <ion-label>Ocupado</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h1>03</h1>\r\n                <p>Marzo</p>\r\n                <ion-chip outline color=\"success\">\r\n                    <ion-label>Disponible</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h1>04</h1>\r\n                <p>Marzo</p>\r\n                <ion-chip slot=\"end\" outline color=\"warning\">\r\n                    <ion-label>Intermedio</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ver-area-comun/ver-area-comun-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ver-area-comun/ver-area-comun-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VerAreaComunPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunPageRoutingModule", function() { return VerAreaComunPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ver_area_comun_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-area-comun.page */ "./src/app/pages/ver-area-comun/ver-area-comun.page.ts");




var routes = [
    {
        path: '',
        component: _ver_area_comun_page__WEBPACK_IMPORTED_MODULE_3__["VerAreaComunPage"]
    }
];
var VerAreaComunPageRoutingModule = /** @class */ (function () {
    function VerAreaComunPageRoutingModule() {
    }
    VerAreaComunPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VerAreaComunPageRoutingModule);
    return VerAreaComunPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ver-area-comun/ver-area-comun.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ver-area-comun/ver-area-comun.module.ts ***!
  \***************************************************************/
/*! exports provided: VerAreaComunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunPageModule", function() { return VerAreaComunPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ver_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-area-comun-routing.module */ "./src/app/pages/ver-area-comun/ver-area-comun-routing.module.ts");
/* harmony import */ var _ver_area_comun_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-area-comun.page */ "./src/app/pages/ver-area-comun/ver-area-comun.page.ts");







var VerAreaComunPageModule = /** @class */ (function () {
    function VerAreaComunPageModule() {
    }
    VerAreaComunPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ver_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerAreaComunPageRoutingModule"]
            ],
            declarations: [_ver_area_comun_page__WEBPACK_IMPORTED_MODULE_6__["VerAreaComunPage"]]
        })
    ], VerAreaComunPageModule);
    return VerAreaComunPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ver-area-comun/ver-area-comun.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ver-area-comun/ver-area-comun.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyLWFyZWEtY29tdW4vQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXG51ZXZvXFxIREFDQ0VTU1xcYXBwaGFyby9zcmNcXGFwcFxccGFnZXNcXHZlci1hcmVhLWNvbXVuXFx2ZXItYXJlYS1jb211bi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Zlci1hcmVhLWNvbXVuL3Zlci1hcmVhLWNvbXVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyLWFyZWEtY29tdW4vdmVyLWFyZWEtY29tdW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ver-area-comun/ver-area-comun.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ver-area-comun/ver-area-comun.page.ts ***!
  \*************************************************************/
/*! exports provided: VerAreaComunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAreaComunPage", function() { return VerAreaComunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerAreaComunPage = /** @class */ (function () {
    function VerAreaComunPage() {
    }
    VerAreaComunPage.prototype.ngOnInit = function () {
    };
    VerAreaComunPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-area-comun',
            template: __webpack_require__(/*! raw-loader!./ver-area-comun.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ver-area-comun/ver-area-comun.page.html"),
            styles: [__webpack_require__(/*! ./ver-area-comun.page.scss */ "./src/app/pages/ver-area-comun/ver-area-comun.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerAreaComunPage);
    return VerAreaComunPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ver-area-comun-ver-area-comun-module-es5.js.map
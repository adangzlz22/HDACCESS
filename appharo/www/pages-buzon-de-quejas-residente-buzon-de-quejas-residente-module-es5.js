(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buzon-de-quejas-residente-buzon-de-quejas-residente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Buzon de quejas</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"padding\">\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n            <ion-textarea placeholder=\"Tipo\" [(ngModel)]=\"Tipo\"></ion-textarea>\r\n        </ion-item>\r\n        <br>\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n            <ion-textarea placeholder=\"Descripción\" [(ngModel)]=\"Descripcion\"></ion-textarea>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"CrearBuzonDeQuejas()\">Enviar</ion-button>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: BuzonDeQuejasResidentePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasResidentePageRoutingModule", function() { return BuzonDeQuejasResidentePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buzon_de_quejas_residente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buzon-de-quejas-residente.page */ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.ts");




var routes = [
    {
        path: '',
        component: _buzon_de_quejas_residente_page__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejasResidentePage"]
    }
];
var BuzonDeQuejasResidentePageRoutingModule = /** @class */ (function () {
    function BuzonDeQuejasResidentePageRoutingModule() {
    }
    BuzonDeQuejasResidentePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuzonDeQuejasResidentePageRoutingModule);
    return BuzonDeQuejasResidentePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BuzonDeQuejasResidentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasResidentePageModule", function() { return BuzonDeQuejasResidentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buzon_de_quejas_residente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buzon-de-quejas-residente-routing.module */ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente-routing.module.ts");
/* harmony import */ var _buzon_de_quejas_residente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buzon-de-quejas-residente.page */ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.ts");







var BuzonDeQuejasResidentePageModule = /** @class */ (function () {
    function BuzonDeQuejasResidentePageModule() {
    }
    BuzonDeQuejasResidentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _buzon_de_quejas_residente_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuzonDeQuejasResidentePageRoutingModule"]
            ],
            declarations: [_buzon_de_quejas_residente_page__WEBPACK_IMPORTED_MODULE_6__["BuzonDeQuejasResidentePage"]]
        })
    ], BuzonDeQuejasResidentePageModule);
    return BuzonDeQuejasResidentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnV6b24tZGUtcXVlamFzLXJlc2lkZW50ZS9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcQXBwSGFyby9zcmNcXGFwcFxccGFnZXNcXGJ1em9uLWRlLXF1ZWphcy1yZXNpZGVudGVcXGJ1em9uLWRlLXF1ZWphcy1yZXNpZGVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9idXpvbi1kZS1xdWVqYXMtcmVzaWRlbnRlL2J1em9uLWRlLXF1ZWphcy1yZXNpZGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idXpvbi1kZS1xdWVqYXMtcmVzaWRlbnRlL2J1em9uLWRlLXF1ZWphcy1yZXNpZGVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.ts ***!
  \***********************************************************************************/
/*! exports provided: BuzonDeQuejasResidentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasResidentePage", function() { return BuzonDeQuejasResidentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/BuzonDeQuejas/BuzonDeQuejas */ "./src/app/providers/BuzonDeQuejas/BuzonDeQuejas.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var BuzonDeQuejasResidentePage = /** @class */ (function () {
    function BuzonDeQuejasResidentePage(route, buzonProviders, navCtrl) {
        this.route = route;
        this.buzonProviders = buzonProviders;
        this.navCtrl = navCtrl;
    }
    BuzonDeQuejasResidentePage.prototype.ngOnInit = function () {
    };
    BuzonDeQuejasResidentePage.prototype.ionViewWillEnter = function () {
        this.FKUsuario = this.route.snapshot.paramMap.get('FKUsuario');
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
    };
    BuzonDeQuejasResidentePage.prototype.CrearBuzonDeQuejas = function () {
        var _this = this;
        this.buzonProviders.CrearBuzonDeQuejas(this.FKUsuario, this.FKResidencia, this.Tipo, this.Descripcion).then(function (r) {
            _this.navCtrl.pop();
            console.log(r);
        }).catch(function (err) {
            console.log(err);
        });
    };
    BuzonDeQuejasResidentePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejas"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    BuzonDeQuejasResidentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buzon-de-quejas-residente',
            template: __webpack_require__(/*! raw-loader!./buzon-de-quejas-residente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.html"),
            styles: [__webpack_require__(/*! ./buzon-de-quejas-residente.page.scss */ "./src/app/pages/buzon-de-quejas-residente/buzon-de-quejas-residente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejas"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], BuzonDeQuejasResidentePage);
    return BuzonDeQuejasResidentePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buzon-de-quejas-residente-buzon-de-quejas-residente-module-es5.js.map
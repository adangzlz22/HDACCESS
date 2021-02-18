(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalles-buzon-de-quejas-detalles-buzon-de-quejas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"color\">\r\n        <ion-title color=\"light\">Detalles de quejas</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\" ALIGN=\"justify\">\r\n\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-card-title>{{NombreCompleto}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <br> Fecha: {{DescripcionEstatus}}\r\n                <br> Tipo: {{Tipo}}\r\n                <br> Telefono: {{Telefono}}\r\n                <br> Mensaje: {{DescripcionArea}}\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <br>\r\n    \r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetallesBuzonDeQuejasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesBuzonDeQuejasPageRoutingModule", function() { return DetallesBuzonDeQuejasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detalles_buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-buzon-de-quejas.page */ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.ts");




var routes = [
    {
        path: '',
        component: _detalles_buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_3__["DetallesBuzonDeQuejasPage"]
    }
];
var DetallesBuzonDeQuejasPageRoutingModule = /** @class */ (function () {
    function DetallesBuzonDeQuejasPageRoutingModule() {
    }
    DetallesBuzonDeQuejasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetallesBuzonDeQuejasPageRoutingModule);
    return DetallesBuzonDeQuejasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DetallesBuzonDeQuejasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesBuzonDeQuejasPageModule", function() { return DetallesBuzonDeQuejasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_buzon_de_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-buzon-de-quejas-routing.module */ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas-routing.module.ts");
/* harmony import */ var _detalles_buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-buzon-de-quejas.page */ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.ts");







var DetallesBuzonDeQuejasPageModule = /** @class */ (function () {
    function DetallesBuzonDeQuejasPageModule() {
    }
    DetallesBuzonDeQuejasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _detalles_buzon_de_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesBuzonDeQuejasPageRoutingModule"]
            ],
            declarations: [_detalles_buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_6__["DetallesBuzonDeQuejasPage"]]
        })
    ], DetallesBuzonDeQuejasPageModule);
    return DetallesBuzonDeQuejasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZXMtYnV6b24tZGUtcXVlamFzL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2VzXFxkZXRhbGxlcy1idXpvbi1kZS1xdWVqYXNcXGRldGFsbGVzLWJ1em9uLWRlLXF1ZWphcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGVzLWJ1em9uLWRlLXF1ZWphcy9kZXRhbGxlcy1idXpvbi1kZS1xdWVqYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlcy1idXpvbi1kZS1xdWVqYXMvZGV0YWxsZXMtYnV6b24tZGUtcXVlamFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallesBuzonDeQuejasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesBuzonDeQuejasPage", function() { return DetallesBuzonDeQuejasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetallesBuzonDeQuejasPage = /** @class */ (function () {
    function DetallesBuzonDeQuejasPage(route) {
        this.route = route;
    }
    DetallesBuzonDeQuejasPage.prototype.ngOnInit = function () {
        this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
        this.Telefono = this.route.snapshot.paramMap.get('Telefono');
        this.Tipo = this.route.snapshot.paramMap.get('Tipo');
        this.DescripcionArea = this.route.snapshot.paramMap.get('DescripcionArea');
        this.DescripcionEstatus = this.route.snapshot.paramMap.get('DescripcionEstatus');
    };
    DetallesBuzonDeQuejasPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DetallesBuzonDeQuejasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalles-buzon-de-quejas',
            template: __webpack_require__(/*! raw-loader!./detalles-buzon-de-quejas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.html"),
            styles: [__webpack_require__(/*! ./detalles-buzon-de-quejas.page.scss */ "./src/app/pages/detalles-buzon-de-quejas/detalles-buzon-de-quejas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetallesBuzonDeQuejasPage);
    return DetallesBuzonDeQuejasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detalles-buzon-de-quejas-detalles-buzon-de-quejas-module-es5.js.map
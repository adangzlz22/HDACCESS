(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-frecuentes-registro-page-cliente-frecuentes-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title color=\"light\">Registro de frecuentes</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style = \" color : #fff \"  defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<br><br><br>\r\n  <div class=\"padding\">\r\n    <ion-item>\r\n      <ion-icon style = \" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Nombre completo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"number\" placeholder=\"Whatsapp\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n      <ion-textarea placeholder=\"Descripción\"></ion-textarea>\r\n    </ion-item>\r\n    <br>\r\n    <br>\r\n    <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\">Guardar</ion-button>\r\n    <ion-button color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\">Eliminar</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PageClienteFrecuentesRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesRegistroPageRoutingModule", function() { return PageClienteFrecuentesRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro.page */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts");




var routes = [
    {
        path: '',
        component: _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteFrecuentesRegistroPage"]
    }
];
var PageClienteFrecuentesRegistroPageRoutingModule = /** @class */ (function () {
    function PageClienteFrecuentesRegistroPageRoutingModule() {
    }
    PageClienteFrecuentesRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageClienteFrecuentesRegistroPageRoutingModule);
    return PageClienteFrecuentesRegistroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PageClienteFrecuentesRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesRegistroPageModule", function() { return PageClienteFrecuentesRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_frecuentes_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro-routing.module */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro-routing.module.ts");
/* harmony import */ var _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro.page */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts");







var PageClienteFrecuentesRegistroPageModule = /** @class */ (function () {
    function PageClienteFrecuentesRegistroPageModule() {
    }
    PageClienteFrecuentesRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_cliente_frecuentes_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClienteFrecuentesRegistroPageRoutingModule"]
            ],
            declarations: [_page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_6__["PageClienteFrecuentesRegistroPage"]]
        })
    ], PageClienteFrecuentesRegistroPageModule);
    return PageClienteFrecuentesRegistroPageModule;
}());



/***/ }),

/***/ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8vQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXG51ZXZvXFxIREFDQ0VTU1xcYXBwaGFyby9zcmNcXGFwcFxccGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm9cXHBhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8vcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWNsaWVudGUtZnJlY3VlbnRlcy1yZWdpc3Ryby9wYWdlLWNsaWVudGUtZnJlY3VlbnRlcy1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageClienteFrecuentesRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteFrecuentesRegistroPage", function() { return PageClienteFrecuentesRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageClienteFrecuentesRegistroPage = /** @class */ (function () {
    function PageClienteFrecuentesRegistroPage() {
    }
    PageClienteFrecuentesRegistroPage.prototype.ngOnInit = function () {
    };
    PageClienteFrecuentesRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-cliente-frecuentes-registro',
            template: __webpack_require__(/*! raw-loader!./page-cliente-frecuentes-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.html"),
            styles: [__webpack_require__(/*! ./page-cliente-frecuentes-registro.page.scss */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageClienteFrecuentesRegistroPage);
    return PageClienteFrecuentesRegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-cliente-frecuentes-registro-page-cliente-frecuentes-registro-module-es5.js.map
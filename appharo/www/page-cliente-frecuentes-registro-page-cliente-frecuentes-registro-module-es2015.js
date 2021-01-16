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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro.page */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts");




const routes = [
    {
        path: '',
        component: _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteFrecuentesRegistroPage"]
    }
];
let PageClienteFrecuentesRegistroPageRoutingModule = class PageClienteFrecuentesRegistroPageRoutingModule {
};
PageClienteFrecuentesRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageClienteFrecuentesRegistroPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_frecuentes_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro-routing.module */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro-routing.module.ts");
/* harmony import */ var _page_cliente_frecuentes_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-frecuentes-registro.page */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.ts");







let PageClienteFrecuentesRegistroPageModule = class PageClienteFrecuentesRegistroPageModule {
};
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



/***/ }),

/***/ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8vQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXEFwcEhhcm8vc3JjXFxhcHBcXHBhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLXJlZ2lzdHJvXFxwYWdlLWNsaWVudGUtZnJlY3VlbnRlcy1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLXJlZ2lzdHJvL3BhZ2UtY2xpZW50ZS1mcmVjdWVudGVzLXJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8vcGFnZS1jbGllbnRlLWZyZWN1ZW50ZXMtcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageClienteFrecuentesRegistroPage = class PageClienteFrecuentesRegistroPage {
    constructor() { }
    ngOnInit() {
    }
};
PageClienteFrecuentesRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-cliente-frecuentes-registro',
        template: __webpack_require__(/*! raw-loader!./page-cliente-frecuentes-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.html"),
        styles: [__webpack_require__(/*! ./page-cliente-frecuentes-registro.page.scss */ "./src/app/page-cliente-frecuentes-registro/page-cliente-frecuentes-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageClienteFrecuentesRegistroPage);



/***/ })

}]);
//# sourceMappingURL=page-cliente-frecuentes-registro-page-cliente-frecuentes-registro-module-es2015.js.map
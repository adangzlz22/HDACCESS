(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-generador-codigo-page-administrador-generador-codigo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"color\">\r\n    <ion-title color=\"light\">Generador de codigos</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style = \" color : #fff \"  defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <div class=\"padding\">\r\n    <br><br><br><br><br><br><br><br>\r\n  <ion-item>\r\n    <ion-label>Seleccionar Residencia</ion-label>\r\n    <ion-select ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\r\n      <ion-select-option value=\"la jolla\">La Jolla</ion-select-option>\r\n      <ion-select-option value=\"los portales\">Los Portales</ion-select-option>\r\n      <ion-select-option value=\"los altos\">Los Altos</ion-select-option>\r\n      <ion-select-option value=\"la rioja norte\">La Rioja Norte</ion-select-option>\r\n      <ion-select-option value=\"la cima\">La Cima</ion-select-option>\r\n      <ion-select-option value=\"villa bonita\">Villa Bonita</ion-select-option>\r\n      <ion-select-option value=\"alta california\">Alta California</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <br><br>\r\n    <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\">Generar nuevos codigos</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PageAdministradorGeneradorCodigoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorGeneradorCodigoPageRoutingModule", function() { return PageAdministradorGeneradorCodigoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_generador_codigo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-generador-codigo.page */ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_generador_codigo_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorGeneradorCodigoPage"]
    }
];
let PageAdministradorGeneradorCodigoPageRoutingModule = class PageAdministradorGeneradorCodigoPageRoutingModule {
};
PageAdministradorGeneradorCodigoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorGeneradorCodigoPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: PageAdministradorGeneradorCodigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorGeneradorCodigoPageModule", function() { return PageAdministradorGeneradorCodigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_generador_codigo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-generador-codigo-routing.module */ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo-routing.module.ts");
/* harmony import */ var _page_administrador_generador_codigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-generador-codigo.page */ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.ts");







let PageAdministradorGeneradorCodigoPageModule = class PageAdministradorGeneradorCodigoPageModule {
};
PageAdministradorGeneradorCodigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_generador_codigo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorGeneradorCodigoPageRoutingModule"]
        ],
        declarations: [_page_administrador_generador_codigo_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorGeneradorCodigoPage"]]
    })
], PageAdministradorGeneradorCodigoPageModule);



/***/ }),

/***/ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLWdlbmVyYWRvci1jb2RpZ28vQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXG51ZXZvXFxIREFDQ0VTU1xcYXBwaGFyby9zcmNcXGFwcFxccGFnZS1hZG1pbmlzdHJhZG9yLWdlbmVyYWRvci1jb2RpZ29cXHBhZ2UtYWRtaW5pc3RyYWRvci1nZW5lcmFkb3ItY29kaWdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLWdlbmVyYWRvci1jb2RpZ28vcGFnZS1hZG1pbmlzdHJhZG9yLWdlbmVyYWRvci1jb2RpZ28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWFkbWluaXN0cmFkb3ItZ2VuZXJhZG9yLWNvZGlnby9wYWdlLWFkbWluaXN0cmFkb3ItZ2VuZXJhZG9yLWNvZGlnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageAdministradorGeneradorCodigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorGeneradorCodigoPage", function() { return PageAdministradorGeneradorCodigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageAdministradorGeneradorCodigoPage = class PageAdministradorGeneradorCodigoPage {
    constructor() { }
    ngOnInit() {
    }
};
PageAdministradorGeneradorCodigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-generador-codigo',
        template: __webpack_require__(/*! raw-loader!./page-administrador-generador-codigo.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-generador-codigo.page.scss */ "./src/app/page-administrador-generador-codigo/page-administrador-generador-codigo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageAdministradorGeneradorCodigoPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-generador-codigo-page-administrador-generador-codigo-module-es2015.js.map
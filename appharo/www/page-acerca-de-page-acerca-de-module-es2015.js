(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-acerca-de-page-acerca-de-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-acerca-de/page-acerca-de.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-acerca-de/page-acerca-de.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Acerca de</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br>\r\n\r\n\r\n    <ion-content fullscreen>\r\n        <ion-card>\r\n\r\n            <ion-card-header>\r\n                <div ALIGN=\"center\">\r\n                    <ion-card-title>ACERCA DE LA APLICACIÓN</ion-card-title>\r\n                </div>\r\n            </ion-card-header>\r\n\r\n            <div ALIGN=\"justify\">\r\n                <ion-card-content>\r\n                    En HARODOOR, ofrecemos soluciones en controles de accesos, automatismos y herrería. Contamos con más de 25 años de experiencia en el ramo. Tenemos una amplia gama de productos y servicios de la más alta calidad, que constantemente estamos actualizando,\r\n                    ofreciendo al cliente, lo mejor y lo más nuevo.\r\n                </ion-card-content>\r\n            </div>\r\n\r\n            <div ALIGN=\"justify\">\r\n                <ion-card-content>\r\n                    Esta aplicación consiste en brindar una mejor experiencia en automatización del acceso a la residencia por medio de lectoras de códigos de barras únicos, aportando un mayor control de acceso a las visitas del residente, como también aportando un mayor\r\n                    flujo para la visita haciendo una reducción del tiempo de espera para acceder al recinto.\r\n                </ion-card-content>\r\n            </div>\r\n\r\n            <div ALIGN=\"justify\">\r\n                <ion-card-content>\r\n                    <b>POLITICA DE PRIVACIDAD:</b>\r\n                    <hr> HARODOOR informa a los usuarios de HD-ACCESS sobre su política con respecto al tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados por la contratación y uso de este servicio.\r\n                    <hr> <b>CONTACTO DIRECTO:</b>\r\n                    <li>http://harodoor.com.mx/</li>\r\n                    <li>Tel. (662)-214-73-62</li>\r\n                </ion-card-content>\r\n            </div>\r\n\r\n\r\n        </ion-card>\r\n    </ion-content>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-acerca-de/page-acerca-de-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page-acerca-de/page-acerca-de-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PageAcercaDePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAcercaDePageRoutingModule", function() { return PageAcercaDePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_acerca_de_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-acerca-de.page */ "./src/app/page-acerca-de/page-acerca-de.page.ts");




const routes = [
    {
        path: '',
        component: _page_acerca_de_page__WEBPACK_IMPORTED_MODULE_3__["PageAcercaDePage"]
    }
];
let PageAcercaDePageRoutingModule = class PageAcercaDePageRoutingModule {
};
PageAcercaDePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAcercaDePageRoutingModule);



/***/ }),

/***/ "./src/app/page-acerca-de/page-acerca-de.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-acerca-de/page-acerca-de.module.ts ***!
  \*********************************************************/
/*! exports provided: PageAcercaDePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAcercaDePageModule", function() { return PageAcercaDePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-acerca-de-routing.module */ "./src/app/page-acerca-de/page-acerca-de-routing.module.ts");
/* harmony import */ var _page_acerca_de_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-acerca-de.page */ "./src/app/page-acerca-de/page-acerca-de.page.ts");







let PageAcercaDePageModule = class PageAcercaDePageModule {
};
PageAcercaDePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAcercaDePageRoutingModule"]
        ],
        declarations: [_page_acerca_de_page__WEBPACK_IMPORTED_MODULE_6__["PageAcercaDePage"]]
    })
], PageAcercaDePageModule);



/***/ }),

/***/ "./src/app/page-acerca-de/page-acerca-de.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/page-acerca-de/page-acerca-de.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hY2VyY2EtZGUvQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXEFwcEhhcm8vc3JjXFxhcHBcXHBhZ2UtYWNlcmNhLWRlXFxwYWdlLWFjZXJjYS1kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWNlcmNhLWRlL3BhZ2UtYWNlcmNhLWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1hY2VyY2EtZGUvcGFnZS1hY2VyY2EtZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-acerca-de/page-acerca-de.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-acerca-de/page-acerca-de.page.ts ***!
  \*******************************************************/
/*! exports provided: PageAcercaDePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAcercaDePage", function() { return PageAcercaDePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageAcercaDePage = class PageAcercaDePage {
    constructor() { }
    ngOnInit() {
    }
};
PageAcercaDePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-acerca-de',
        template: __webpack_require__(/*! raw-loader!./page-acerca-de.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-acerca-de/page-acerca-de.page.html"),
        styles: [__webpack_require__(/*! ./page-acerca-de.page.scss */ "./src/app/page-acerca-de/page-acerca-de.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageAcercaDePage);



/***/ })

}]);
//# sourceMappingURL=page-acerca-de-page-acerca-de-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-dashboard-page-administrador-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-dashboard/page-administrador-dashboard.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-dashboard/page-administrador-dashboard.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"color\">\r\n    <ion-buttons slot=\"start\">\r\n<ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">HD-Access</ion-title>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\" CreatePopOver( $event )\">\r\n        <ion-icon color=\"light\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <br><br>\r\n     \r\n <div class=\"padding\">\r\n <ion-list>\r\n <ion-item>\r\n  <ion-label color=\"danger\">Residencias:</ion-label>\r\n  <ion-label slot=\"end\" color=\"danger\">Numero:</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Los Altos</ion-label>\r\n  <ion-label slot=\"end\">100</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Villa Bonita</ion-label>\r\n  <ion-label slot=\"end\">99</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>La Cima</ion-label>\r\n  <ion-label slot=\"end\">132</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Valle de Lago</ion-label>\r\n  <ion-label slot=\"end\" >210</ion-label>\r\n</ion-item>\r\n</ion-list>\r\n\r\n\r\n\r\n</div>\r\n\r\n  <ion-split-pane>\r\n    <ion-menu contentId=\"content\">\r\n  <ion-content>\r\n    <ion-list>\r\n      \r\n        <ion-item><ion-icon name=\"people\" slot=\"start\"></ion-icon>Visitas frecuentes</ion-item>\r\n        <ion-item><ion-icon name=\"person\" slot=\"start\"></ion-icon>Visitas de un solo uso</ion-item>\r\n        <ion-item><ion-icon name=\"home\" slot=\"start\"></ion-icon>Residencias</ion-item>\r\n        <ion-item><ion-icon name=\"barcode\" slot=\"start\"></ion-icon>Generador de codigo</ion-item>\r\n        <ion-item><ion-icon name=\"people\" slot=\"start\"></ion-icon>Usuarios</ion-item>\r\n        <ion-item><ion-icon name=\"briefcase\" slot=\"start\"></ion-icon>Roles</ion-item>\r\n        <ion-item><ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>Permisos</ion-item>\r\n        <ion-item><ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>Acerca de</ion-item>\r\n      \r\n    </ion-list>\r\n  </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-content>\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/page-administrador-dashboard/page-administrador-dashboard-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-administrador-dashboard/page-administrador-dashboard-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PageAdministradorDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorDashboardPageRoutingModule", function() { return PageAdministradorDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-dashboard.page */ "./src/app/page-administrador-dashboard/page-administrador-dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorDashboardPage"]
    }
];
let PageAdministradorDashboardPageRoutingModule = class PageAdministradorDashboardPageRoutingModule {
};
PageAdministradorDashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorDashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-dashboard/page-administrador-dashboard.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/page-administrador-dashboard/page-administrador-dashboard.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PageAdministradorDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorDashboardPageModule", function() { return PageAdministradorDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-dashboard-routing.module */ "./src/app/page-administrador-dashboard/page-administrador-dashboard-routing.module.ts");
/* harmony import */ var _page_administrador_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-dashboard.page */ "./src/app/page-administrador-dashboard/page-administrador-dashboard.page.ts");







let PageAdministradorDashboardPageModule = class PageAdministradorDashboardPageModule {
};
PageAdministradorDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorDashboardPageRoutingModule"]
        ],
        declarations: [_page_administrador_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorDashboardPage"]]
    })
], PageAdministradorDashboardPageModule);



/***/ }),

/***/ "./src/app/page-administrador-dashboard/page-administrador-dashboard.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/page-administrador-dashboard/page-administrador-dashboard.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLWRhc2hib2FyZC9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcQXBwSGFyby9zcmNcXGFwcFxccGFnZS1hZG1pbmlzdHJhZG9yLWRhc2hib2FyZFxccGFnZS1hZG1pbmlzdHJhZG9yLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1kYXNoYm9hcmQvcGFnZS1hZG1pbmlzdHJhZG9yLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtBQ0FKOztBREVBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1kYXNoYm9hcmQvcGFnZS1hZG1pbmlzdHJhZG9yLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcclxufVxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-administrador-dashboard/page-administrador-dashboard.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page-administrador-dashboard/page-administrador-dashboard.page.ts ***!
  \***********************************************************************************/
/*! exports provided: PageAdministradorDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorDashboardPage", function() { return PageAdministradorDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popovercomponent/popovercomponent.page */ "./src/app/popovercomponent/popovercomponent.page.ts");




let PageAdministradorDashboardPage = class PageAdministradorDashboardPage {
    constructor(popover) {
        this.popover = popover;
    }
    ngOnInit() {
    }
    CreatePopOver(evento) {
        this.popover.create({ component: _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__["PopovercomponentPage"],
            showBackdrop: false,
            event: evento,
            backdropDismiss: false }).then((popoverelement => {
            popoverelement.present();
        }));
    }
};
PageAdministradorDashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PageAdministradorDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-dashboard',
        template: __webpack_require__(/*! raw-loader!./page-administrador-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-dashboard/page-administrador-dashboard.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-dashboard.page.scss */ "./src/app/page-administrador-dashboard/page-administrador-dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PageAdministradorDashboardPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-dashboard-page-administrador-dashboard-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-permisos-page-administrador-permisos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-permisos/page-administrador-permisos.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-permisos/page-administrador-permisos.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Permisos</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-searchbar></ion-searchbar>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>Total permisos</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>Total permisos</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>Total permisos</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>Total permisos</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            <ion-label>\r\n                <h2>Total permisos</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-administrador-permisos/page-administrador-permisos-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-administrador-permisos/page-administrador-permisos-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageAdministradorPermisosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPermisosPageRoutingModule", function() { return PageAdministradorPermisosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_administrador_permisos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-permisos.page */ "./src/app/page-administrador-permisos/page-administrador-permisos.page.ts");




var routes = [
    {
        path: '',
        component: _page_administrador_permisos_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorPermisosPage"]
    }
];
var PageAdministradorPermisosPageRoutingModule = /** @class */ (function () {
    function PageAdministradorPermisosPageRoutingModule() {
    }
    PageAdministradorPermisosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageAdministradorPermisosPageRoutingModule);
    return PageAdministradorPermisosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-administrador-permisos/page-administrador-permisos.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page-administrador-permisos/page-administrador-permisos.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PageAdministradorPermisosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPermisosPageModule", function() { return PageAdministradorPermisosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_permisos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-permisos-routing.module */ "./src/app/page-administrador-permisos/page-administrador-permisos-routing.module.ts");
/* harmony import */ var _page_administrador_permisos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-permisos.page */ "./src/app/page-administrador-permisos/page-administrador-permisos.page.ts");







var PageAdministradorPermisosPageModule = /** @class */ (function () {
    function PageAdministradorPermisosPageModule() {
    }
    PageAdministradorPermisosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_administrador_permisos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorPermisosPageRoutingModule"]
            ],
            declarations: [_page_administrador_permisos_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorPermisosPage"]]
        })
    ], PageAdministradorPermisosPageModule);
    return PageAdministradorPermisosPageModule;
}());



/***/ }),

/***/ "./src/app/page-administrador-permisos/page-administrador-permisos.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/page-administrador-permisos/page-administrador-permisos.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXBlcm1pc29zL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlLWFkbWluaXN0cmFkb3ItcGVybWlzb3NcXHBhZ2UtYWRtaW5pc3RyYWRvci1wZXJtaXNvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1wZXJtaXNvcy9wYWdlLWFkbWluaXN0cmFkb3ItcGVybWlzb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1wZXJtaXNvcy9wYWdlLWFkbWluaXN0cmFkb3ItcGVybWlzb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-administrador-permisos/page-administrador-permisos.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page-administrador-permisos/page-administrador-permisos.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PageAdministradorPermisosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPermisosPage", function() { return PageAdministradorPermisosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageAdministradorPermisosPage = /** @class */ (function () {
    function PageAdministradorPermisosPage() {
    }
    PageAdministradorPermisosPage.prototype.ngOnInit = function () {
    };
    PageAdministradorPermisosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-administrador-permisos',
            template: __webpack_require__(/*! raw-loader!./page-administrador-permisos.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-permisos/page-administrador-permisos.page.html"),
            styles: [__webpack_require__(/*! ./page-administrador-permisos.page.scss */ "./src/app/page-administrador-permisos/page-administrador-permisos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageAdministradorPermisosPage);
    return PageAdministradorPermisosPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-administrador-permisos-page-administrador-permisos-module-es5.js.map
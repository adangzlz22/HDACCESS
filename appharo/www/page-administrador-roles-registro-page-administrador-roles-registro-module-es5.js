(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-roles-registro-page-administrador-roles-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Registro de roles</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-administrador-roles\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"padding\">\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Nombre del rol\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n            <ion-textarea placeholder=\"Descripción del rol\"></ion-textarea>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\">Guardar</ion-button>\r\n        <ion-button color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\">Eliminar</ion-button>\r\n    </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/page-administrador-roles-registro/page-administrador-roles-registro-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PageAdministradorRolesRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorRolesRegistroPageRoutingModule", function() { return PageAdministradorRolesRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_administrador_roles_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-roles-registro.page */ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.ts");




var routes = [
    {
        path: '',
        component: _page_administrador_roles_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorRolesRegistroPage"]
    }
];
var PageAdministradorRolesRegistroPageRoutingModule = /** @class */ (function () {
    function PageAdministradorRolesRegistroPageRoutingModule() {
    }
    PageAdministradorRolesRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageAdministradorRolesRegistroPageRoutingModule);
    return PageAdministradorRolesRegistroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-administrador-roles-registro/page-administrador-roles-registro.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: PageAdministradorRolesRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorRolesRegistroPageModule", function() { return PageAdministradorRolesRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_roles_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-roles-registro-routing.module */ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro-routing.module.ts");
/* harmony import */ var _page_administrador_roles_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-roles-registro.page */ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.ts");







var PageAdministradorRolesRegistroPageModule = /** @class */ (function () {
    function PageAdministradorRolesRegistroPageModule() {
    }
    PageAdministradorRolesRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_administrador_roles_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorRolesRegistroPageRoutingModule"]
            ],
            declarations: [_page_administrador_roles_registro_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorRolesRegistroPage"]]
        })
    ], PageAdministradorRolesRegistroPageModule);
    return PageAdministradorRolesRegistroPageModule;
}());



/***/ }),

/***/ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXJvbGVzLXJlZ2lzdHJvL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlLWFkbWluaXN0cmFkb3Itcm9sZXMtcmVnaXN0cm9cXHBhZ2UtYWRtaW5pc3RyYWRvci1yb2xlcy1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1yb2xlcy1yZWdpc3Ryby9wYWdlLWFkbWluaXN0cmFkb3Itcm9sZXMtcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWFkbWluaXN0cmFkb3Itcm9sZXMtcmVnaXN0cm8vcGFnZS1hZG1pbmlzdHJhZG9yLXJvbGVzLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: PageAdministradorRolesRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorRolesRegistroPage", function() { return PageAdministradorRolesRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageAdministradorRolesRegistroPage = /** @class */ (function () {
    function PageAdministradorRolesRegistroPage() {
    }
    PageAdministradorRolesRegistroPage.prototype.ngOnInit = function () {
    };
    PageAdministradorRolesRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-administrador-roles-registro',
            template: __webpack_require__(/*! raw-loader!./page-administrador-roles-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.html"),
            styles: [__webpack_require__(/*! ./page-administrador-roles-registro.page.scss */ "./src/app/page-administrador-roles-registro/page-administrador-roles-registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageAdministradorRolesRegistroPage);
    return PageAdministradorRolesRegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-administrador-roles-registro-page-administrador-roles-registro-module-es5.js.map
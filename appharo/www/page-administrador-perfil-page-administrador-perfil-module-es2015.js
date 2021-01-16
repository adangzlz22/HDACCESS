(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-perfil-page-administrador-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-perfil/page-administrador-perfil.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-perfil/page-administrador-perfil.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n    <ion-back-button style = \" color : #fff \"  defaultHref=\"\"></ion-back-button>\r\n  </ion-buttons>\r\n    <h2>Perfil del usuario</h2>\r\n  </div>\r\n  <div class=\"flex\">\r\n    <div class=\"border-blue\">\r\n      <div class=\"border-white\">\r\n        <div class=\"img-box\">\r\n          <img src=\"../assets/img/user.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"padding\">\r\n    <ion-item>\r\n      <ion-icon style = \" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Nombre completo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"mail\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"mail\" placeholder=\"Correo electronico\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Contraseña\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Confirmación de contraseña\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-icon style = \" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"number\" placeholder=\"Whatsapp\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\">Guardar</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page-administrador-perfil/page-administrador-perfil-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/page-administrador-perfil/page-administrador-perfil-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PageAdministradorPerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPerfilPageRoutingModule", function() { return PageAdministradorPerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-perfil.page */ "./src/app/page-administrador-perfil/page-administrador-perfil.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_perfil_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorPerfilPage"]
    }
];
let PageAdministradorPerfilPageRoutingModule = class PageAdministradorPerfilPageRoutingModule {
};
PageAdministradorPerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorPerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-perfil/page-administrador-perfil.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/page-administrador-perfil/page-administrador-perfil.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PageAdministradorPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPerfilPageModule", function() { return PageAdministradorPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-perfil-routing.module */ "./src/app/page-administrador-perfil/page-administrador-perfil-routing.module.ts");
/* harmony import */ var _page_administrador_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-perfil.page */ "./src/app/page-administrador-perfil/page-administrador-perfil.page.ts");







let PageAdministradorPerfilPageModule = class PageAdministradorPerfilPageModule {
};
PageAdministradorPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorPerfilPageRoutingModule"]
        ],
        declarations: [_page_administrador_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorPerfilPage"]]
    })
], PageAdministradorPerfilPageModule);



/***/ }),

/***/ "./src/app/page-administrador-perfil/page-administrador-perfil.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/page-administrador-perfil/page-administrador-perfil.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #FF8225;\n  height: 180px;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\n.space-between {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.padding {\n  padding: 5% !important;\n}\n\n.img-box {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.border-white {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid #ec6600;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -76px;\n}\n\n.tweet {\n  margin-top: -10px;\n}\n\n.tweet ion-label {\n  line-height: 1 !important;\n  font-size: 15px;\n  margin: 6px 0px 6px 0px !important;\n  min-height: 34px;\n}\n\n.tweet-img {\n  width: 95%;\n  margin-left: 2.5%;\n  border-radius: 10px;\n}\n\ni {\n  color: #FF8225;\n  font-weight: 800;\n}\n\n.color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXBlcmZpbC9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcQXBwSGFyby9zcmNcXGFwcFxccGFnZS1hZG1pbmlzdHJhZG9yLXBlcmZpbFxccGFnZS1hZG1pbmlzdHJhZG9yLXBlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1wZXJmaWwvcGFnZS1hZG1pbmlzdHJhZG9yLXBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FEREE7RUFDSSxzQkFBQTtBQ0lKOztBREFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETEE7RUFFSSxnQ0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXBlcmZpbC9wYWdlLWFkbWluaXN0cmFkb3ItcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbi5oZWFkZXIgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmZvbGxvd2luZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb2xsb3dpbmdzIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5pbWctYm94IHtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ib3JkZXItd2hpdGUge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmJvcmRlci1ibHVlIHtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHJnYigyMzYsIDEwMiwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTc2cHg7XHJcbn1cclxuXHJcblxyXG4udHdlZXQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLnR3ZWV0IGlvbi1sYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweCFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG59XHJcbi50d2VldC1pbWcge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5pIHtcclxuICAgIGNvbG9yOiAjRkY4MjI1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5oZWFkZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5mb2xsb3dpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvbGxvd2luZ3MgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn1cblxuLmltZy1ib3gge1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJvcmRlci1ibHVlIHtcbiAgYm9yZGVyOiA3cHggc29saWQgI2VjNjYwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC03NnB4O1xufVxuXG4udHdlZXQge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnR3ZWV0IGlvbi1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzRweDtcbn1cblxuLnR3ZWV0LWltZyB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pIHtcbiAgY29sb3I6ICNGRjgyMjU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-administrador-perfil/page-administrador-perfil.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page-administrador-perfil/page-administrador-perfil.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PageAdministradorPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorPerfilPage", function() { return PageAdministradorPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageAdministradorPerfilPage = class PageAdministradorPerfilPage {
    constructor() { }
    ngOnInit() {
    }
};
PageAdministradorPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-perfil',
        template: __webpack_require__(/*! raw-loader!./page-administrador-perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-perfil/page-administrador-perfil.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-perfil.page.scss */ "./src/app/page-administrador-perfil/page-administrador-perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageAdministradorPerfilPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-perfil-page-administrador-perfil-module-es2015.js.map
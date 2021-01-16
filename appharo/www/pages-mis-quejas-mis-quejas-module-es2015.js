(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mis-quejas-mis-quejas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mis-quejas/mis-quejas.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mis-quejas/mis-quejas.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"color\">\r\n        <ion-title color=\"light\">Mis quejas o sugerencias</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <ion-item *ngFor=\"let item of lstMisQuejas\" (click)=\"VerDetalles(item)\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"VerDetalles(item)\"></ion-icon>\r\n            <ion-label>\r\n                <h2>{{item.Tipo}}</h2>\r\n                <p>{{item.FechaAsignacion}}</p>\r\n                <ion-chip *ngIf=\"item.Estatus==1\" outline color=\"danger\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n                <ion-chip *ngIf=\"item.Estatus==2\" outline color=\"warning\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n                <ion-chip *ngIf=\"item.Estatus==3\" outline color=\"success\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n        \r\n    </div>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"AgregarQueja()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mis-quejas/mis-quejas-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mis-quejas/mis-quejas-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MisQuejasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisQuejasPageRoutingModule", function() { return MisQuejasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mis_quejas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-quejas.page */ "./src/app/pages/mis-quejas/mis-quejas.page.ts");




const routes = [
    {
        path: '',
        component: _mis_quejas_page__WEBPACK_IMPORTED_MODULE_3__["MisQuejasPage"]
    }
];
let MisQuejasPageRoutingModule = class MisQuejasPageRoutingModule {
};
MisQuejasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisQuejasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mis-quejas/mis-quejas.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mis-quejas/mis-quejas.module.ts ***!
  \*******************************************************/
/*! exports provided: MisQuejasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisQuejasPageModule", function() { return MisQuejasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mis_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-quejas-routing.module */ "./src/app/pages/mis-quejas/mis-quejas-routing.module.ts");
/* harmony import */ var _mis_quejas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-quejas.page */ "./src/app/pages/mis-quejas/mis-quejas.page.ts");







let MisQuejasPageModule = class MisQuejasPageModule {
};
MisQuejasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mis_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisQuejasPageRoutingModule"]
        ],
        declarations: [_mis_quejas_page__WEBPACK_IMPORTED_MODULE_6__["MisQuejasPage"]]
    })
], MisQuejasPageModule);



/***/ }),

/***/ "./src/app/pages/mis-quejas/mis-quejas.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/mis-quejas/mis-quejas.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzLXF1ZWphcy9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcQXBwSGFyby9zcmNcXGFwcFxccGFnZXNcXG1pcy1xdWVqYXNcXG1pcy1xdWVqYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taXMtcXVlamFzL21pcy1xdWVqYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXMtcXVlamFzL21pcy1xdWVqYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mis-quejas/mis-quejas.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mis-quejas/mis-quejas.page.ts ***!
  \*****************************************************/
/*! exports provided: MisQuejasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisQuejasPage", function() { return MisQuejasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/BuzonDeQuejas/BuzonDeQuejas */ "./src/app/providers/BuzonDeQuejas/BuzonDeQuejas.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MisQuejasPage = class MisQuejasPage {
    constructor(route, buzonProviders, navCtrl) {
        this.route = route;
        this.buzonProviders = buzonProviders;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.FKUsuario = this.route.snapshot.paramMap.get('FKUsuario');
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.ObtenerBuzonDeQuejas();
    }
    ObtenerBuzonDeQuejas() {
        this.buzonProviders.ObtenerBuzonDeQueja(this.FKUsuario, this.FKResidencia, -1).then(result => {
            this.lstMisQuejas = JSON.parse(result['Model']);
            console.log(this.lstMisQuejas);
        }).catch(err => {
            console.log(err);
        });
    }
    AgregarQueja() {
        this.navCtrl.navigateForward(`buzon-de-quejas-residente/${this.FKUsuario}/${this.FKResidencia}`);
    }
    VerDetalles(item) {
        this.navCtrl.navigateForward(`detalles-buzon-de-quejas/${item.NombreCompleto}/${item.Telefono}/${item.Tipo}/${item.DescripcionArea}/${item.FechaAsignacion}`);
    }
};
MisQuejasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejas"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
MisQuejasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-quejas',
        template: __webpack_require__(/*! raw-loader!./mis-quejas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mis-quejas/mis-quejas.page.html"),
        styles: [__webpack_require__(/*! ./mis-quejas.page.scss */ "./src/app/pages/mis-quejas/mis-quejas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejas"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], MisQuejasPage);



/***/ })

}]);
//# sourceMappingURL=pages-mis-quejas-mis-quejas-module-es2015.js.map
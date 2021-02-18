(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detalles-area-comun-detalles-area-comun-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detalles-area-comun/detalles-area-comun.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detalles-area-comun/detalles-area-comun.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"color\">\r\n        <ion-title color=\"light\">Detalles de area comun</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <ion-item *ngFor=\"let item of lstAreaComun\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>{{item.NombreCompleto}}</h2>\r\n                <!-- <p>{{item.Telefono}}</p> -->\r\n                <p>{{item.Descripcion}}</p>\r\n                <p>{{item.FechaAsignacion}}</p>\r\n                <p>{{item.Horario}}</p>\r\n                <ion-chip outline color=\"danger\">\r\n                    <ion-label>Ocupado</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </div>\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"AsignarAreaComun()\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/detalles-area-comun/detalles-area-comun-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/detalles-area-comun/detalles-area-comun-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallesAreaComunPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesAreaComunPageRoutingModule", function() { return DetallesAreaComunPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detalles_area_comun_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-area-comun.page */ "./src/app/pages/detalles-area-comun/detalles-area-comun.page.ts");




var routes = [
    {
        path: '',
        component: _detalles_area_comun_page__WEBPACK_IMPORTED_MODULE_3__["DetallesAreaComunPage"]
    }
];
var DetallesAreaComunPageRoutingModule = /** @class */ (function () {
    function DetallesAreaComunPageRoutingModule() {
    }
    DetallesAreaComunPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetallesAreaComunPageRoutingModule);
    return DetallesAreaComunPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detalles-area-comun/detalles-area-comun.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalles-area-comun/detalles-area-comun.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetallesAreaComunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesAreaComunPageModule", function() { return DetallesAreaComunPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalles_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-area-comun-routing.module */ "./src/app/pages/detalles-area-comun/detalles-area-comun-routing.module.ts");
/* harmony import */ var _detalles_area_comun_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-area-comun.page */ "./src/app/pages/detalles-area-comun/detalles-area-comun.page.ts");







var DetallesAreaComunPageModule = /** @class */ (function () {
    function DetallesAreaComunPageModule() {
    }
    DetallesAreaComunPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _detalles_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesAreaComunPageRoutingModule"]
            ],
            declarations: [_detalles_area_comun_page__WEBPACK_IMPORTED_MODULE_6__["DetallesAreaComunPage"]]
        })
    ], DetallesAreaComunPageModule);
    return DetallesAreaComunPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detalles-area-comun/detalles-area-comun.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalles-area-comun/detalles-area-comun.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZXMtYXJlYS1jb211bi9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWxsZXMtYXJlYS1jb211blxcZGV0YWxsZXMtYXJlYS1jb211bi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFsbGVzLWFyZWEtY29tdW4vZGV0YWxsZXMtYXJlYS1jb211bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGVzLWFyZWEtY29tdW4vZGV0YWxsZXMtYXJlYS1jb211bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/detalles-area-comun/detalles-area-comun.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/detalles-area-comun/detalles-area-comun.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetallesAreaComunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesAreaComunPage", function() { return DetallesAreaComunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/AreaComun/AreaComun */ "./src/app/providers/AreaComun/AreaComun.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var DetallesAreaComunPage = /** @class */ (function () {
    function DetallesAreaComunPage(route, AreaProvider, navCtrl) {
        this.route = route;
        this.AreaProvider = AreaProvider;
        this.navCtrl = navCtrl;
    }
    DetallesAreaComunPage.prototype.ngOnInit = function () {
    };
    DetallesAreaComunPage.prototype.ionViewWillEnter = function () {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
        this.Fecha = this.route.snapshot.paramMap.get('Fecha');
        this.ObtenerAreaComun();
    };
    DetallesAreaComunPage.prototype.ObtenerAreaComun = function () {
        var _this = this;
        this.AreaProvider.ObtenerAreaComun(this.FKResidencia, this.Fecha).then(function (result) {
            _this.lstAreaComun = JSON.parse(result['Model']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    DetallesAreaComunPage.prototype.AsignarAreaComun = function () {
        this.navCtrl.navigateForward("asignar-area-comun/" + this.FKResidencia);
    };
    DetallesAreaComunPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_3__["AreaComun"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    DetallesAreaComunPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalles-area-comun',
            template: __webpack_require__(/*! raw-loader!./detalles-area-comun.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detalles-area-comun/detalles-area-comun.page.html"),
            styles: [__webpack_require__(/*! ./detalles-area-comun.page.scss */ "./src/app/pages/detalles-area-comun/detalles-area-comun.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_3__["AreaComun"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], DetallesAreaComunPage);
    return DetallesAreaComunPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detalles-area-comun-detalles-area-comun-module-es5.js.map
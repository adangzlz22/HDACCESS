(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editar-cuotas-editar-cuotas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/editar-cuotas/editar-cuotas.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/editar-cuotas/editar-cuotas.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"color\">\n      <ion-title color=\"light\">Editar Cuotas</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-icon style=\" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\n    <ion-input type=\"text\" [(ngModel)]=\"TipoSuscripcion\" placeholder=\"Tipo Suscripcion\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-icon style=\" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\n  <ion-input type=\"text\" [(ngModel)]=\"Costo\" placeholder=\"Costo\"></ion-input>\n</ion-item>\n\n  <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Actualizar()\">Aceptar</ion-button>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/editar-cuotas/editar-cuotas-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/editar-cuotas/editar-cuotas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditarCuotasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarCuotasPageRoutingModule", function() { return EditarCuotasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editar_cuotas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-cuotas.page */ "./src/app/pages/editar-cuotas/editar-cuotas.page.ts");




var routes = [
    {
        path: '',
        component: _editar_cuotas_page__WEBPACK_IMPORTED_MODULE_3__["EditarCuotasPage"]
    }
];
var EditarCuotasPageRoutingModule = /** @class */ (function () {
    function EditarCuotasPageRoutingModule() {
    }
    EditarCuotasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditarCuotasPageRoutingModule);
    return EditarCuotasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/editar-cuotas/editar-cuotas.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editar-cuotas/editar-cuotas.module.ts ***!
  \*************************************************************/
/*! exports provided: EditarCuotasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarCuotasPageModule", function() { return EditarCuotasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editar_cuotas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-cuotas-routing.module */ "./src/app/pages/editar-cuotas/editar-cuotas-routing.module.ts");
/* harmony import */ var _editar_cuotas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-cuotas.page */ "./src/app/pages/editar-cuotas/editar-cuotas.page.ts");







var EditarCuotasPageModule = /** @class */ (function () {
    function EditarCuotasPageModule() {
    }
    EditarCuotasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _editar_cuotas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarCuotasPageRoutingModule"]
            ],
            declarations: [_editar_cuotas_page__WEBPACK_IMPORTED_MODULE_6__["EditarCuotasPage"]]
        })
    ], EditarCuotasPageModule);
    return EditarCuotasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/editar-cuotas/editar-cuotas.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/editar-cuotas/editar-cuotas.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdGFyLWN1b3Rhcy9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxwYWdlc1xcZWRpdGFyLWN1b3Rhc1xcZWRpdGFyLWN1b3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRhci1jdW90YXMvZWRpdGFyLWN1b3Rhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRhci1jdW90YXMvZWRpdGFyLWN1b3Rhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/editar-cuotas/editar-cuotas.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/editar-cuotas/editar-cuotas.page.ts ***!
  \***********************************************************/
/*! exports provided: EditarCuotasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarCuotasPage", function() { return EditarCuotasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");





var EditarCuotasPage = /** @class */ (function () {
    function EditarCuotasPage(resi, route, navCtrl) {
        this.resi = resi;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    EditarCuotasPage.prototype.ngOnInit = function () {
        this.IdCatTipoSuscripcion = this.route.snapshot.paramMap.get('IdCatTipoSuscripcion');
        this.TipoSuscripcion = this.route.snapshot.paramMap.get('TipoSuscripcion');
        this.Costo = this.route.snapshot.paramMap.get('Costo');
    };
    EditarCuotasPage.prototype.Actualizar = function () {
        var _this = this;
        this.resi.Actualizar(this.IdCatTipoSuscripcion, this.Costo).then(function (result) {
            _this.navCtrl.pop();
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditarCuotasPage.ctorParameters = function () { return [
        { type: src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__["ResidenciasProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    EditarCuotasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-cuotas',
            template: __webpack_require__(/*! raw-loader!./editar-cuotas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editar-cuotas/editar-cuotas.page.html"),
            styles: [__webpack_require__(/*! ./editar-cuotas.page.scss */ "./src/app/pages/editar-cuotas/editar-cuotas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__["ResidenciasProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EditarCuotasPage);
    return EditarCuotasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editar-cuotas-editar-cuotas-module-es5.js.map
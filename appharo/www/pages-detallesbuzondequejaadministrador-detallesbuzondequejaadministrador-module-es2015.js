(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detallesbuzondequejaadministrador-detallesbuzondequejaadministrador-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"color\">\r\n    <ion-title color=\"light\">Detalles buzon de queja</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <div class=\"padding\" ALIGN=\"justify\">\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>{{NombreCompleto}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n          <br> Fecha: {{DescripcionEstatus}}\r\n          <br> Tipo: {{Tipo}}\r\n          <br> Telefono: {{Telefono}}\r\n          <br> Mensaje: {{DescripcionArea}}\r\n      </ion-card-content>\r\n      </ion-card>\r\n      <ion-item>\r\n          <ion-label>Estatus</ion-label>\r\n          <ion-select [(ngModel)]=\"Estatus\">\r\n              <ion-select-option value=\"1\">Pendiente</ion-select-option>\r\n              <ion-select-option value=\"2\">Activo</ion-select-option>\r\n              <ion-select-option value=\"3\">Resuelto</ion-select-option>\r\n          </ion-select>\r\n      </ion-item>\r\n      <br>\r\n      <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Guardar()\">Guardar</ion-button>\r\n\r\n      <ion-button color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Cancelar()\">Cancelar</ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DetallesbuzondequejaadministradorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesbuzondequejaadministradorPageRoutingModule", function() { return DetallesbuzondequejaadministradorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detallesbuzondequejaadministrador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detallesbuzondequejaadministrador.page */ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.ts");




const routes = [
    {
        path: '',
        component: _detallesbuzondequejaadministrador_page__WEBPACK_IMPORTED_MODULE_3__["DetallesbuzondequejaadministradorPage"]
    }
];
let DetallesbuzondequejaadministradorPageRoutingModule = class DetallesbuzondequejaadministradorPageRoutingModule {
};
DetallesbuzondequejaadministradorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesbuzondequejaadministradorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetallesbuzondequejaadministradorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesbuzondequejaadministradorPageModule", function() { return DetallesbuzondequejaadministradorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detallesbuzondequejaadministrador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detallesbuzondequejaadministrador-routing.module */ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador-routing.module.ts");
/* harmony import */ var _detallesbuzondequejaadministrador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detallesbuzondequejaadministrador.page */ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.ts");







let DetallesbuzondequejaadministradorPageModule = class DetallesbuzondequejaadministradorPageModule {
};
DetallesbuzondequejaadministradorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detallesbuzondequejaadministrador_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesbuzondequejaadministradorPageRoutingModule"]
        ],
        declarations: [_detallesbuzondequejaadministrador_page__WEBPACK_IMPORTED_MODULE_6__["DetallesbuzondequejaadministradorPage"]]
    })
], DetallesbuzondequejaadministradorPageModule);



/***/ }),

/***/ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWxsZXNidXpvbmRlcXVlamFhZG1pbmlzdHJhZG9yL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWxsZXNidXpvbmRlcXVlamFhZG1pbmlzdHJhZG9yXFxkZXRhbGxlc2J1em9uZGVxdWVqYWFkbWluaXN0cmFkb3IucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhbGxlc2J1em9uZGVxdWVqYWFkbWluaXN0cmFkb3IvZGV0YWxsZXNidXpvbmRlcXVlamFhZG1pbmlzdHJhZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWxsZXNidXpvbmRlcXVlamFhZG1pbmlzdHJhZG9yL2RldGFsbGVzYnV6b25kZXF1ZWphYWRtaW5pc3RyYWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: DetallesbuzondequejaadministradorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesbuzondequejaadministradorPage", function() { return DetallesbuzondequejaadministradorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/BuzonDeQuejas/BuzonDeQuejas */ "./src/app/providers/BuzonDeQuejas/BuzonDeQuejas.ts");





let DetallesbuzondequejaadministradorPage = class DetallesbuzondequejaadministradorPage {
    constructor(route, navCtrl, buzonPrivder) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.buzonPrivder = buzonPrivder;
    }
    ngOnInit() {
        this.PKBuzonDeQueja = this.route.snapshot.paramMap.get('PKBuzonDeQueja');
        this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
        this.Telefono = this.route.snapshot.paramMap.get('Telefono');
        this.Tipo = this.route.snapshot.paramMap.get('Tipo');
        this.DescripcionArea = this.route.snapshot.paramMap.get('DescripcionArea');
        this.DescripcionEstatus = this.route.snapshot.paramMap.get('DescripcionEstatus');
        this.Estatus = this.route.snapshot.paramMap.get('Estatus');
    }
    Guardar() {
        this.buzonPrivder.Guardar(this.PKBuzonDeQueja, this.Estatus).then(result => {
            console.log(result);
            this.navCtrl.pop();
        }).catch(err => {
            console.log(err);
        });
    }
    Cancelar() {
        this.navCtrl.pop();
    }
};
DetallesbuzondequejaadministradorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_4__["BuzonDeQuejas"] }
];
DetallesbuzondequejaadministradorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detallesbuzondequejaadministrador',
        template: __webpack_require__(/*! raw-loader!./detallesbuzondequejaadministrador.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.html"),
        styles: [__webpack_require__(/*! ./detallesbuzondequejaadministrador.page.scss */ "./src/app/pages/detallesbuzondequejaadministrador/detallesbuzondequejaadministrador.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_4__["BuzonDeQuejas"]])
], DetallesbuzondequejaadministradorPage);



/***/ })

}]);
//# sourceMappingURL=pages-detallesbuzondequejaadministrador-detallesbuzondequejaadministrador-module-es2015.js.map
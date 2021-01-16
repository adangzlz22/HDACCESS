(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buzon-de-quejas-buzon-de-quejas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Buzon de quejas y sugerencias</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <!-- <ion-item>\r\n            <ion-label>Tipo</ion-label>\r\n            <ion-select value=\"Seguridad\">\r\n                <ion-select-option value=\"Seguridad\">Seguridad</ion-select-option>\r\n                <ion-select-option value=\"GYM\">GYM</ion-select-option>\r\n                <ion-select-option value=\"Comedor\">Comedor</ion-select-option>\r\n                <ion-select-option value=\"Jardin\">Jardin</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n-->\r\n        <ion-item>\r\n            <ion-label>Estatus</ion-label>\r\n            <ion-select [(ngModel)]=\"Estatus\" (ionChange)=\"onChange($event)\">\r\n                <ion-select-option value=\"-1\">Todos</ion-select-option>\r\n                <ion-select-option value=\"1\">Pendiente</ion-select-option>\r\n                <ion-select-option value=\"2\">Activo</ion-select-option>\r\n                <ion-select-option value=\"3\">Resuelto</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let item of lstMisQuejas\" (click)=\"VerDetalles(item)\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"VerDetalles(item)\"></ion-icon>\r\n            <ion-label>\r\n                <h2>{{item.Tipo}}</h2>\r\n                <p>{{item.NombreCompleto}}</p>\r\n                <p>{{item.FechaAsignacion}}</p>\r\n                <ion-chip *ngIf=\"item.Estatus==1\" outline color=\"danger\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n                <ion-chip *ngIf=\"item.Estatus==2\" outline color=\"warning\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n                <ion-chip *ngIf=\"item.Estatus==3\" outline color=\"success\">\r\n                    <ion-label>{{item.DescripcionEstatus}}</ion-label>\r\n                </ion-chip>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/buzon-de-quejas/buzon-de-quejas-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas/buzon-de-quejas-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BuzonDeQuejasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasPageRoutingModule", function() { return BuzonDeQuejasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buzon-de-quejas.page */ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.ts");




var routes = [
    {
        path: '',
        component: _buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_3__["BuzonDeQuejasPage"]
    }
];
var BuzonDeQuejasPageRoutingModule = /** @class */ (function () {
    function BuzonDeQuejasPageRoutingModule() {
    }
    BuzonDeQuejasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuzonDeQuejasPageRoutingModule);
    return BuzonDeQuejasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas/buzon-de-quejas.module.ts ***!
  \*****************************************************************/
/*! exports provided: BuzonDeQuejasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasPageModule", function() { return BuzonDeQuejasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buzon_de_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buzon-de-quejas-routing.module */ "./src/app/pages/buzon-de-quejas/buzon-de-quejas-routing.module.ts");
/* harmony import */ var _buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buzon-de-quejas.page */ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.ts");







var BuzonDeQuejasPageModule = /** @class */ (function () {
    function BuzonDeQuejasPageModule() {
    }
    BuzonDeQuejasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _buzon_de_quejas_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuzonDeQuejasPageRoutingModule"]
            ],
            declarations: [_buzon_de_quejas_page__WEBPACK_IMPORTED_MODULE_6__["BuzonDeQuejasPage"]]
        })
    ], BuzonDeQuejasPageModule);
    return BuzonDeQuejasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnV6b24tZGUtcXVlamFzL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlc1xcYnV6b24tZGUtcXVlamFzXFxidXpvbi1kZS1xdWVqYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9idXpvbi1kZS1xdWVqYXMvYnV6b24tZGUtcXVlamFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnV6b24tZGUtcXVlamFzL2J1em9uLWRlLXF1ZWphcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.ts ***!
  \***************************************************************/
/*! exports provided: BuzonDeQuejasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzonDeQuejasPage", function() { return BuzonDeQuejasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/BuzonDeQuejas/BuzonDeQuejas */ "./src/app/providers/BuzonDeQuejas/BuzonDeQuejas.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BuzonDeQuejasPage = /** @class */ (function () {
    function BuzonDeQuejasPage(buzonProvider, navCtrl, route) {
        this.buzonProvider = buzonProvider;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    BuzonDeQuejasPage.prototype.ngOnInit = function () {
    };
    BuzonDeQuejasPage.prototype.ionViewWillEnter = function () {
        this.Estatus = -1;
        this.FKUsuario = -1;
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        // this.ObtenerBuzonDeQuejas();
    };
    BuzonDeQuejasPage.prototype.onChange = function (event) {
        var _this = this;
        this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario, this.FKResidencia, this.Estatus).then(function (result) {
            _this.lstMisQuejas = JSON.parse(result['Model']);
            console.log(_this.lstMisQuejas);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // ObtenerBuzonDeQuejas(){
    //   this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario,this.FKResidencia,this.Estatus).then(result=>{
    //     this.lstMisQuejas=JSON.parse(result['Model']);
    //     console.log(this.lstMisQuejas);
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // }
    BuzonDeQuejasPage.prototype.VerDetalles = function (item) {
        this.navCtrl.navigateForward("detallesbuzondequejaadministrador/" + item.PKBuzonDeQueja + "/" + item.NombreCompleto + "/" + item.Telefono + "/" + item.Tipo + "/" + item.DescripcionArea + "/" + item.FechaAsignacion + "/" + item.Estatus);
    };
    BuzonDeQuejasPage.ctorParameters = function () { return [
        { type: src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_2__["BuzonDeQuejas"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    BuzonDeQuejasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buzon-de-quejas',
            template: __webpack_require__(/*! raw-loader!./buzon-de-quejas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.html"),
            styles: [__webpack_require__(/*! ./buzon-de-quejas.page.scss */ "./src/app/pages/buzon-de-quejas/buzon-de-quejas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_BuzonDeQuejas_BuzonDeQuejas__WEBPACK_IMPORTED_MODULE_2__["BuzonDeQuejas"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BuzonDeQuejasPage);
    return BuzonDeQuejasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buzon-de-quejas-buzon-de-quejas-module-es5.js.map
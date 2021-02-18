(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cuotas-cuotas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cuotas/cuotas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cuotas/cuotas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"color\">\n      <ion-title color=\"light\">Cuotas</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"padding\">\n   \n  <ion-item>\n  \n</ion-item>\n<ion-list *ngFor=\"let item of lstCuotas\">\n\n  <ion-item>\n      <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"DirigirCuotas( item )\"></ion-icon>\n      <ion-label (click)=\"DirigirCuotas( item )\">\n          <p>{{item.TipoSuscripcion}}</p>\n          <p>{{item.Costo}}</p>\n      </ion-label>\n  </ion-item>\n\n\n</ion-list>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cuotas/cuotas-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cuotas/cuotas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CuotasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuotasPageRoutingModule", function() { return CuotasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuotas.page */ "./src/app/pages/cuotas/cuotas.page.ts");




var routes = [
    {
        path: '',
        component: _cuotas_page__WEBPACK_IMPORTED_MODULE_3__["CuotasPage"]
    }
];
var CuotasPageRoutingModule = /** @class */ (function () {
    function CuotasPageRoutingModule() {
    }
    CuotasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CuotasPageRoutingModule);
    return CuotasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/cuotas/cuotas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.module.ts ***!
  \***********************************************/
/*! exports provided: CuotasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuotasPageModule", function() { return CuotasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cuotas-routing.module */ "./src/app/pages/cuotas/cuotas-routing.module.ts");
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuotas.page */ "./src/app/pages/cuotas/cuotas.page.ts");







var CuotasPageModule = /** @class */ (function () {
    function CuotasPageModule() {
    }
    CuotasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CuotasPageRoutingModule"]
            ],
            declarations: [_cuotas_page__WEBPACK_IMPORTED_MODULE_6__["CuotasPage"]]
        })
    ], CuotasPageModule);
    return CuotasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cuotas/cuotas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VvdGFzL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2VzXFxjdW90YXNcXGN1b3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2N1b3Rhcy9jdW90YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jdW90YXMvY3VvdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cuotas/cuotas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.ts ***!
  \*********************************************/
/*! exports provided: CuotasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuotasPage", function() { return CuotasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");





var CuotasPage = /** @class */ (function () {
    function CuotasPage(_usu, _resi, navCtrl) {
        this._usu = _usu;
        this._resi = _resi;
        this.navCtrl = navCtrl;
        this.lstCuotas = [];
    }
    CuotasPage.prototype.ngOnInit = function () {
    };
    CuotasPage.prototype.ionViewWillEnter = function () {
        this.ObtenerCuotasTipo();
    };
    CuotasPage.prototype.ObtenerCuotasTipo = function () {
        var _this = this;
        this._resi.ObtenerCuotasTipo(1015).then(function (result) {
            _this.lstCuotas = JSON.parse(result.Model);
            console.log(_this.lstCuotas);
        }).catch(function (error) {
            console.log(error);
        });
    };
    CuotasPage.prototype.DirigirCuotas = function (item) {
        this.navCtrl.navigateForward("editar-cuotas/" + item.IdCatTipoSuscripcion + "/" + item.TipoSuscripcion + "/" + item.Costo);
    };
    CuotasPage.ctorParameters = function () { return [
        { type: src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_4__["UsuarioProvider"] },
        { type: src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__["ResidenciasProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    CuotasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuotas',
            template: __webpack_require__(/*! raw-loader!./cuotas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cuotas/cuotas.page.html"),
            styles: [__webpack_require__(/*! ./cuotas.page.scss */ "./src/app/pages/cuotas/cuotas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_4__["UsuarioProvider"],
            src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__["ResidenciasProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], CuotasPage);
    return CuotasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cuotas-cuotas-module-es5.js.map
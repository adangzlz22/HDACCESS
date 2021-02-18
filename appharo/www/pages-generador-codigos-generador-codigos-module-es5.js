(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-generador-codigos-generador-codigos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/generador-codigos/generador-codigos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/generador-codigos/generador-codigos.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"color\">\r\n    <ion-title color=\"light\">Generador De Codigos QR</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n  </ion-buttons>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-item *ngIf=\"this.Nivel==2\">\r\n    <ion-label>Residencia</ion-label>\r\n    <ion-select  ok-text=\"Aceptar\" cancel-text=\"Cancelar\"  \r\n        [(ngModel)]=\"PKResidencia\" >\r\n      <ion-select-option *ngFor=\"let item of lstResidencias\" \r\n      [value]=\"item.PKResidencia\" >{{item.NombreResidencia}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <br><br><br>\r\n  <ion-button (click)=\"presentAlertConfirm()\" color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\">Generar nuevos codigos QR</ion-button>\r\n    \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/generador-codigos/generador-codigos-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/generador-codigos/generador-codigos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GeneradorCodigosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneradorCodigosPageRoutingModule", function() { return GeneradorCodigosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generador_codigos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generador-codigos.page */ "./src/app/pages/generador-codigos/generador-codigos.page.ts");




var routes = [
    {
        path: '',
        component: _generador_codigos_page__WEBPACK_IMPORTED_MODULE_3__["GeneradorCodigosPage"]
    }
];
var GeneradorCodigosPageRoutingModule = /** @class */ (function () {
    function GeneradorCodigosPageRoutingModule() {
    }
    GeneradorCodigosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GeneradorCodigosPageRoutingModule);
    return GeneradorCodigosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/generador-codigos/generador-codigos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/generador-codigos/generador-codigos.module.ts ***!
  \*********************************************************************/
/*! exports provided: GeneradorCodigosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneradorCodigosPageModule", function() { return GeneradorCodigosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _generador_codigos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generador-codigos-routing.module */ "./src/app/pages/generador-codigos/generador-codigos-routing.module.ts");
/* harmony import */ var _generador_codigos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generador-codigos.page */ "./src/app/pages/generador-codigos/generador-codigos.page.ts");







var GeneradorCodigosPageModule = /** @class */ (function () {
    function GeneradorCodigosPageModule() {
    }
    GeneradorCodigosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _generador_codigos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneradorCodigosPageRoutingModule"]
            ],
            declarations: [_generador_codigos_page__WEBPACK_IMPORTED_MODULE_6__["GeneradorCodigosPage"]]
        })
    ], GeneradorCodigosPageModule);
    return GeneradorCodigosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/generador-codigos/generador-codigos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/generador-codigos/generador-codigos.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhZG9yLWNvZGlnb3MvQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXG51ZXZvXFxIREFDQ0VTU1xcYXBwaGFyby9zcmNcXGFwcFxccGFnZXNcXGdlbmVyYWRvci1jb2RpZ29zXFxnZW5lcmFkb3ItY29kaWdvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dlbmVyYWRvci1jb2RpZ29zL2dlbmVyYWRvci1jb2RpZ29zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VuZXJhZG9yLWNvZGlnb3MvZ2VuZXJhZG9yLWNvZGlnb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogNSUhaW1wb3J0YW50O1xyXG59IiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/generador-codigos/generador-codigos.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/generador-codigos/generador-codigos.page.ts ***!
  \*******************************************************************/
/*! exports provided: GeneradorCodigosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneradorCodigosPage", function() { return GeneradorCodigosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var src_app_providers_GeneradorCodigosDeBarra_GeneradorProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider */ "./src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider.ts");







var GeneradorCodigosPage = /** @class */ (function () {
    function GeneradorCodigosPage(alertCtrl, usuProv, navCtrl, route, residenciaPriv, generadorProvider) {
        this.alertCtrl = alertCtrl;
        this.usuProv = usuProv;
        this.navCtrl = navCtrl;
        this.route = route;
        this.residenciaPriv = residenciaPriv;
        this.generadorProvider = generadorProvider;
    }
    GeneradorCodigosPage.prototype.ngOnInit = function () {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.ObtenerResidencias();
        this.Nivel = this.usuProv.PKNivel;
    };
    GeneradorCodigosPage.prototype.ObtenerResidencias = function () {
        var _this = this;
        this.residenciaPriv.ObtenerResidencias('').then(function (result) {
            _this.lstResidencias = JSON.parse(result['Model']);
        }).catch(function (error) {
            console.log(error);
        });
    };
    GeneradorCodigosPage.prototype.GenerarCodigoDeBarras = function () {
        var _this = this;
        if (this.Nivel == 0) {
            this.generadorProvider.GenerarCodigosDeBarra(this.FKResidencia).then(function (result) {
                _this.navCtrl.pop();
            }).catch(function (erro) {
                console.log(erro);
            });
        }
        if (this.Nivel == 2) {
            if (this.PKResidencia == 0 || this.PKResidencia == undefined) {
                this.Mensaje();
            }
            else {
                this.generadorProvider.GenerarCodigosDeBarra(this.PKResidencia).then(function (result) {
                    _this.navCtrl.pop();
                }).catch(function (erro) {
                    console.log(erro);
                });
            }
        }
    };
    GeneradorCodigosPage.prototype.Mensaje = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            cssClass: 'my-custom-class',
                            header: 'Generador de codigos',
                            subHeader: 'Atencion',
                            message: 'Favor de seleccionar una residencia.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneradorCodigosPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '¡Confirmar!',
                            message: ' <strong>¿Seguro desea generar códigos nuevos?</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.GenerarCodigoDeBarras();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneradorCodigosPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__["ResidenciasProvider"] },
        { type: src_app_providers_GeneradorCodigosDeBarra_GeneradorProvider__WEBPACK_IMPORTED_MODULE_6__["GeneradorProvider"] }
    ]; };
    GeneradorCodigosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generador-codigos',
            template: __webpack_require__(/*! raw-loader!./generador-codigos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/generador-codigos/generador-codigos.page.html"),
            styles: [__webpack_require__(/*! ./generador-codigos.page.scss */ "./src/app/pages/generador-codigos/generador-codigos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__["ResidenciasProvider"],
            src_app_providers_GeneradorCodigosDeBarra_GeneradorProvider__WEBPACK_IMPORTED_MODULE_6__["GeneradorProvider"]])
    ], GeneradorCodigosPage);
    return GeneradorCodigosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-generador-codigos-generador-codigos-module-es5.js.map
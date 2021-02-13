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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _generador_codigos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generador-codigos.page */ "./src/app/pages/generador-codigos/generador-codigos.page.ts");




const routes = [
    {
        path: '',
        component: _generador_codigos_page__WEBPACK_IMPORTED_MODULE_3__["GeneradorCodigosPage"]
    }
];
let GeneradorCodigosPageRoutingModule = class GeneradorCodigosPageRoutingModule {
};
GeneradorCodigosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeneradorCodigosPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _generador_codigos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generador-codigos-routing.module */ "./src/app/pages/generador-codigos/generador-codigos-routing.module.ts");
/* harmony import */ var _generador_codigos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generador-codigos.page */ "./src/app/pages/generador-codigos/generador-codigos.page.ts");







let GeneradorCodigosPageModule = class GeneradorCodigosPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/generador-codigos/generador-codigos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/generador-codigos/generador-codigos.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhZG9yLWNvZGlnb3MvQzpcXFVzZXJzXFxBZGFuR29uemFsZXpcXERlc2t0b3BcXEFwcEhhcm8vc3JjXFxhcHBcXHBhZ2VzXFxnZW5lcmFkb3ItY29kaWdvc1xcZ2VuZXJhZG9yLWNvZGlnb3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nZW5lcmFkb3ItY29kaWdvcy9nZW5lcmFkb3ItY29kaWdvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYWRvci1jb2RpZ29zL2dlbmVyYWRvci1jb2RpZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var src_app_providers_GeneradorCodigosDeBarra_GeneradorProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider */ "./src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider.ts");







let GeneradorCodigosPage = class GeneradorCodigosPage {
    constructor(alertCtrl, usuProv, navCtrl, route, residenciaPriv, generadorProvider) {
        this.alertCtrl = alertCtrl;
        this.usuProv = usuProv;
        this.navCtrl = navCtrl;
        this.route = route;
        this.residenciaPriv = residenciaPriv;
        this.generadorProvider = generadorProvider;
    }
    ngOnInit() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.ObtenerResidencias();
        this.Nivel = this.usuProv.PKNivel;
    }
    ObtenerResidencias() {
        this.residenciaPriv.ObtenerResidencias('').then(result => {
            this.lstResidencias = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    GenerarCodigoDeBarras() {
        if (this.Nivel == 0) {
            this.generadorProvider.GenerarCodigosDeBarra(this.FKResidencia).then(result => {
                this.navCtrl.pop();
            }).catch(erro => {
                console.log(erro);
            });
        }
        if (this.Nivel == 2) {
            if (this.PKResidencia == 0 || this.PKResidencia == undefined) {
                this.Mensaje();
            }
            else {
                this.generadorProvider.GenerarCodigosDeBarra(this.PKResidencia).then(result => {
                    this.navCtrl.pop();
                }).catch(erro => {
                    console.log(erro);
                });
            }
        }
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Generador de codigos',
                subHeader: 'Atencion',
                message: 'Favor de seleccionar una residencia.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '¡Confirmar!',
                message: ' <strong>¿Seguro desea generar códigos nuevos?</strong>!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.GenerarCodigoDeBarras();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
GeneradorCodigosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__["ResidenciasProvider"] },
    { type: src_app_providers_GeneradorCodigosDeBarra_GeneradorProvider__WEBPACK_IMPORTED_MODULE_6__["GeneradorProvider"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-generador-codigos-generador-codigos-module-es2015.js.map
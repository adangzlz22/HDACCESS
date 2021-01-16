(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-asignar-area-comun-asignar-area-comun-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/asignar-area-comun/asignar-area-comun.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/asignar-area-comun/asignar-area-comun.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Asignar area comun</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"padding\">\r\n        <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"buscarResidente()\">Seleccionar residente</ion-button>\r\n        <ion-item>\r\n            <ion-label>Nombre </ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"NombreCompleto\" disabled=\"true\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Fecha Dia Asignado</ion-label>\r\n            <ion-datetime value=\"1990-02-19\" placeholder=\"Select Date\" [(ngModel)]=\"FechaAsignacion\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Horario Inicial</ion-label>\r\n            <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"HorarioInicial\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Horario Final</ion-label>\r\n            <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"HorarioFinal\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-input type=\"text\" placeholder=\"Escribir area comun\" [(ngModel)]=\"Descripcion\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"CrearAreaComun()\">Guardar</ion-button>\r\n\r\n        <ion-button color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Cancelar()\">Cancelar</ion-button>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/asignar-area-comun/asignar-area-comun-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asignar-area-comun/asignar-area-comun-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AsignarAreaComunPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarAreaComunPageRoutingModule", function() { return AsignarAreaComunPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asignar_area_comun_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asignar-area-comun.page */ "./src/app/pages/asignar-area-comun/asignar-area-comun.page.ts");




var routes = [
    {
        path: '',
        component: _asignar_area_comun_page__WEBPACK_IMPORTED_MODULE_3__["AsignarAreaComunPage"]
    }
];
var AsignarAreaComunPageRoutingModule = /** @class */ (function () {
    function AsignarAreaComunPageRoutingModule() {
    }
    AsignarAreaComunPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AsignarAreaComunPageRoutingModule);
    return AsignarAreaComunPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/asignar-area-comun/asignar-area-comun.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignar-area-comun/asignar-area-comun.module.ts ***!
  \***********************************************************************/
/*! exports provided: AsignarAreaComunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarAreaComunPageModule", function() { return AsignarAreaComunPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asignar_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asignar-area-comun-routing.module */ "./src/app/pages/asignar-area-comun/asignar-area-comun-routing.module.ts");
/* harmony import */ var _asignar_area_comun_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asignar-area-comun.page */ "./src/app/pages/asignar-area-comun/asignar-area-comun.page.ts");







var AsignarAreaComunPageModule = /** @class */ (function () {
    function AsignarAreaComunPageModule() {
    }
    AsignarAreaComunPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _asignar_area_comun_routing_module__WEBPACK_IMPORTED_MODULE_5__["AsignarAreaComunPageRoutingModule"]
            ],
            declarations: [_asignar_area_comun_page__WEBPACK_IMPORTED_MODULE_6__["AsignarAreaComunPage"]]
        })
    ], AsignarAreaComunPageModule);
    return AsignarAreaComunPageModule;
}());



/***/ }),

/***/ "./src/app/pages/asignar-area-comun/asignar-area-comun.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignar-area-comun/asignar-area-comun.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNpZ25hci1hcmVhLWNvbXVuL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlc1xcYXNpZ25hci1hcmVhLWNvbXVuXFxhc2lnbmFyLWFyZWEtY29tdW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc2lnbmFyLWFyZWEtY29tdW4vYXNpZ25hci1hcmVhLWNvbXVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNpZ25hci1hcmVhLWNvbXVuL2FzaWduYXItYXJlYS1jb211bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/asignar-area-comun/asignar-area-comun.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asignar-area-comun/asignar-area-comun.page.ts ***!
  \*********************************************************************/
/*! exports provided: AsignarAreaComunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarAreaComunPage", function() { return AsignarAreaComunPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/AreaComun/AreaComun */ "./src/app/providers/AreaComun/AreaComun.ts");
/* harmony import */ var src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");






var AsignarAreaComunPage = /** @class */ (function () {
    function AsignarAreaComunPage(navCtrl, route, areaComunProvider, usuario) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.areaComunProvider = areaComunProvider;
        this.usuario = usuario;
        this.pago = {
            total: 0,
            tipo: '',
            FKUsuario: 0,
            origen: 'asignar-area-comun'
        };
        this.NombreCompleto = '';
    }
    AsignarAreaComunPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['pago']) {
                _this.pago = JSON.parse(params['pago']);
                console.log(_this.pago);
                _this.NombreCompleto = _this.pago['userObj'].NombreCompleto;
            }
        });
    };
    AsignarAreaComunPage.prototype.ionViewWillEnter = function () {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
    };
    AsignarAreaComunPage.prototype.CrearAreaComun = function () {
        var _this = this;
        this.Horario = this.FormatearHora(this.HorarioInicial) + ' a ' + this.FormatearHora(this.HorarioFinal);
        this.areaComunProvider.CrearAreaComun(this.FechaAsignacion, this.Horario, this.Descripcion, this.pago.FKUsuario, this.usuario.FKResidencia).then(function (result) {
            console.log(result);
            _this.navCtrl.navigateRoot('page-cliente-dashboard');
        }).catch(function (err) {
            console.log(err);
        });
    };
    AsignarAreaComunPage.prototype.FormatearHora = function (VariableHora) {
        var RegresarHora = '';
        var hora = VariableHora.split('T');
        var Minutos = hora[1].split(':');
        RegresarHora = Minutos[0] + ':' + Minutos[1];
        return RegresarHora;
    };
    AsignarAreaComunPage.prototype.Cancelar = function () {
        this.navCtrl.pop();
    };
    AsignarAreaComunPage.prototype.buscarResidente = function () {
        var navigationExtras = {
            queryParams: {
                pago: JSON.stringify(this.pago),
            }
        };
        // this.modalCtrl.create(BuscadorResidenteComponent ).present();
        this.navCtrl.navigateForward("buscarResidente/" + this.usuario.PKUsuario, navigationExtras).then(function (response) {
        });
    };
    AsignarAreaComunPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_4__["AreaComun"] },
        { type: src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"] }
    ]; };
    AsignarAreaComunPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asignar-area-comun',
            template: __webpack_require__(/*! raw-loader!./asignar-area-comun.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/asignar-area-comun/asignar-area-comun.page.html"),
            styles: [__webpack_require__(/*! ./asignar-area-comun.page.scss */ "./src/app/pages/asignar-area-comun/asignar-area-comun.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_providers_AreaComun_AreaComun__WEBPACK_IMPORTED_MODULE_4__["AreaComun"],
            src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"]])
    ], AsignarAreaComunPage);
    return AsignarAreaComunPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-asignar-area-comun-asignar-area-comun-module-es5.js.map
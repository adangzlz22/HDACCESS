(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-dashboard-page-cliente-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-dashboard/page-cliente-dashboard.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-dashboard/page-cliente-dashboard.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n<ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">HD-Access</ion-title>\r\n    \r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"CreatePopOver( $event )\">\r\n        <ion-icon color=\"light\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <br><br>\r\n <ion-card>\r\n\r\n <ion-card-content *ngIf=\"this._UsuPro.PKNivel==0\">\r\n  <label for=\"\">{{NombreResidencia}}</label>\r\n   </ion-card-content>\r\n  </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header *ngIf=\"ApareceImagen\">\r\n            <ion-card-title style=\"width: 100%; text-align: center;\"><h3>Codigo de Acceso</h3></ion-card-title>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content *ngIf=\"ApareceImagen\">\r\n            <img [src]=\"ObtenerImagen()\"/>\r\n          </ion-card-content>\r\n\r\n          <ion-card-content *ngIf=\"this._UsuPro.PKNivel==2\">\r\n            <img src=\"../assets/img/splash.png\"/>\r\n          </ion-card-content>\r\n     \r\n          <ion-card-content *ngIf=\"this._UsuPro.PKNivel==0\">\r\n            <img src=\"../assets/img/splash.png\"/>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        \r\n\r\n  <ion-split-pane>\r\n    <ion-menu contentId=\"content\">\r\n  <ion-content>\r\n    <ion-list *ngFor=\"let item of DatosMenu\">\r\n      \r\n        <ion-item (click)=\"this.Direccion( item )\"><ion-icon name=\"{{item.Icono}}\" slot=\"start\"></ion-icon>{{item.Opcion1}}</ion-item>\r\n   \r\n    </ion-list>\r\n  </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-content>\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/page-cliente-dashboard/page-cliente-dashboard-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page-cliente-dashboard/page-cliente-dashboard-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PageClienteDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteDashboardPageRoutingModule", function() { return PageClienteDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_cliente_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-dashboard.page */ "./src/app/page-cliente-dashboard/page-cliente-dashboard.page.ts");




var routes = [
    {
        path: '',
        component: _page_cliente_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteDashboardPage"]
    }
];
var PageClienteDashboardPageRoutingModule = /** @class */ (function () {
    function PageClienteDashboardPageRoutingModule() {
    }
    PageClienteDashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageClienteDashboardPageRoutingModule);
    return PageClienteDashboardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-cliente-dashboard/page-cliente-dashboard.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page-cliente-dashboard/page-cliente-dashboard.module.ts ***!
  \*************************************************************************/
/*! exports provided: PageClienteDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteDashboardPageModule", function() { return PageClienteDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-dashboard-routing.module */ "./src/app/page-cliente-dashboard/page-cliente-dashboard-routing.module.ts");
/* harmony import */ var _page_cliente_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-dashboard.page */ "./src/app/page-cliente-dashboard/page-cliente-dashboard.page.ts");







var PageClienteDashboardPageModule = /** @class */ (function () {
    function PageClienteDashboardPageModule() {
    }
    PageClienteDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_cliente_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClienteDashboardPageRoutingModule"]
            ],
            declarations: [_page_cliente_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["PageClienteDashboardPage"]]
        })
    ], PageClienteDashboardPageModule);
    return PageClienteDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/page-cliente-dashboard/page-cliente-dashboard.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/page-cliente-dashboard/page-cliente-dashboard.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLWRhc2hib2FyZC9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxwYWdlLWNsaWVudGUtZGFzaGJvYXJkXFxwYWdlLWNsaWVudGUtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1jbGllbnRlLWRhc2hib2FyZC9wYWdlLWNsaWVudGUtZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWNsaWVudGUtZGFzaGJvYXJkL3BhZ2UtY2xpZW50ZS1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn1cclxuIiwiLmNvbG9yIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-cliente-dashboard/page-cliente-dashboard.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page-cliente-dashboard/page-cliente-dashboard.page.ts ***!
  \***********************************************************************/
/*! exports provided: PageClienteDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteDashboardPage", function() { return PageClienteDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popovercomponent/popovercomponent.page */ "./src/app/popovercomponent/popovercomponent.page.ts");
/* harmony import */ var _providers_Menu_menuProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/Menu/menuProvider */ "./src/app/providers/Menu/menuProvider.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _Config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Config/config */ "./src/app/Config/config.ts");
/* harmony import */ var _providers_Suscripciones_suscripcionesProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/Suscripciones/suscripcionesProvider */ "./src/app/providers/Suscripciones/suscripcionesProvider.ts");









var PageClienteDashboardPage = /** @class */ (function () {
    function PageClienteDashboardPage(popover, _MenuPro, _UsuPro, navCtrl, iap, config, alertCtrl, TiposSus, platform) {
        // this.suscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
        //   if(this.constructor.name == "PageClienteDashboardPage"){
        //       navigator["app"].exitApp();
        //   }
        // })
        this.popover = popover;
        this._MenuPro = _MenuPro;
        this._UsuPro = _UsuPro;
        this.navCtrl = navCtrl;
        this.iap = iap;
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.TiposSus = TiposSus;
        this.platform = platform;
        this.ApareceImagen = true;
        this.DatosMenu = [];
        this.Total = 100;
        console.log(this._UsuPro.PKNivel);
        if (this._UsuPro.PKUsuario == 0 || this._UsuPro.PKUsuario == undefined) {
            this.navCtrl.navigateRoot('page-login');
        }
        if (this._UsuPro.PKNivel == 0 || this._UsuPro.PKNivel == undefined || this._UsuPro.PKNivel == 2) {
            this.ApareceImagen = false;
        }
    }
    PageClienteDashboardPage.prototype.ngOnInit = function () {
        this.CargarTotal();
        if (this._UsuPro.Expiracion <= 0) {
            this._UsuPro.EliminarDispositivo(this._UsuPro.PKUsuario);
        }
        this.NombreResidencia = this._UsuPro.NombreResidencia;
        if (this._UsuPro.PKNivel == 1 || this._UsuPro.PKNivel != undefined) {
            this.ObtenerImagen();
        }
        this.ObtenerMenu();
    };
    PageClienteDashboardPage.prototype.CreatePopOver = function (evento) {
        this.popover.create({ component: _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__["PopovercomponentPage"],
            showBackdrop: false,
            event: evento,
        }).then((function (popoverelement) {
            popoverelement.present();
        }));
    };
    PageClienteDashboardPage.prototype.ObtenerMenu = function () {
        var _this = this;
        this._MenuPro.ObtenerMenu(this._UsuPro.PKMenuBandera).then(function (result) {
            var item = JSON.parse(result['Model']);
            for (var index = 0; index < item.length; index++) {
                if (_this._UsuPro.GeneradorCodigos == false) {
                    var item1 = {
                        Orden: item[index].Orden,
                        Opcion1: item[index].Opcion1,
                        Icono: item[index].Icono
                    };
                    if (item[index].Opcion1 != 'Generador de codigos de barra') {
                        _this.DatosMenu.push(item1);
                    }
                }
                else {
                    var item1 = {
                        Orden: item[index].Orden,
                        Opcion1: item[index].Opcion1,
                        Icono: item[index].Icono
                    };
                    _this.DatosMenu.push(item1);
                }
            }
            console.log(_this.DatosMenu);
        }).catch(function (Error) {
            console.log(Error);
        });
    };
    PageClienteDashboardPage.prototype.CargarTotal = function () {
        var _this = this;
        this.TiposSus.cargarTipos(this._UsuPro.FKResidencia).subscribe(function (response) {
            // console.log(val);
            if (response.mensajeError) {
                console.warn(response.mensajeError);
            }
            _this.tiposSuscripciones = response.resultado;
            console.log(_this.tiposSuscripciones);
            // this.Total=this.tiposSuscripciones[0].costo;
        }, function (Error) {
            console.log('POST call in Agregar', Error);
            if (Error != undefined) {
                console.warn(Error);
            }
        });
    };
    PageClienteDashboardPage.prototype.Direccion = function (item) {
        if (this._UsuPro.FKResidencia == 0) {
            this.FKResidencia = -1;
        }
        else {
            this.FKResidencia = this._UsuPro.FKResidencia;
        }
        if (item.Opcion1 == "Visitas de un solo uso") {
            if (this._UsuPro.Expiracion > 0) {
                this.navCtrl.navigateForward("page-cliente-un-solo-uso/" + 1);
            }
            else {
                this.presentAlertConfirm();
            }
        }
        if (item.Opcion1 == "Visitas frecuentes") {
            if (this._UsuPro.Expiracion > 0) {
                this.navCtrl.navigateForward("page-cliente-un-solo-uso/" + 2);
            }
            else {
                this.presentAlertConfirm();
            }
        }
        if (item.Opcion1 == "Acerca de") {
            this.navCtrl.navigateRoot('page-acerca-de');
        }
        if (item.Opcion1 == "Residencias") {
            this.navCtrl.navigateRoot('page-administrador-residencias');
        }
        if (item.Opcion1 == "Administrador") {
            this.navCtrl.navigateForward("page-administrador-usuarios/" + this._UsuPro.PKUsuario + "/" + 0 + "/" + this.FKResidencia);
        }
        if (item.Opcion1 == "Residentes") {
            this.navCtrl.navigateForward("page-administrador-usuarios/" + this._UsuPro.PKUsuario + "/" + 1 + "/" + this.FKResidencia);
        }
        if (item.Opcion1 == "Roles") {
            this.navCtrl.navigateRoot('page-administrador-roles');
        }
        if (item.Opcion1 == "Asignar Tags") {
            this.navCtrl.navigateRoot('tags');
        }
        if (item.Opcion1 == "Cuotas") {
            this.navCtrl.navigateRoot('cuotas');
        }
        if (item.Opcion1 == 'Pagos') {
            var page = '', msgError = 'no hay pagina de pagos para este tipo de usuario';
            if (this._UsuPro.PKMenuBandera == 0) {
                page = 'pagoEfectivo';
                page ? this.navCtrl.navigateRoot(page) : console.warn(msgError);
            }
            else {
                //AQUI VA
                var url = "https://apiharodoor.harodoor.eu/MP/Index?PKUsuario=" + this._UsuPro.PKUsuario + "&Total=" + this.Total + "";
                // this.iap.window(url);
                this.iap.create(url);
                // this.route.params();
            }
            // this._UsuPro.PKMenuBandera == 1 ? page = 'pagoMP' : console.warn(msgError);
            // this._UsuPro.PKMenuBandera == 1 ? page = 'pago-mercado-p' : console.warn(msgError);
        }
        if (item.Opcion1 == 'Reportes') {
            this.navCtrl.navigateRoot('reporte');
        }
        if (item.Opcion1 == 'EstadoCuenta') {
            this.navCtrl.navigateRoot('EstadoCuenta');
        }
        if (item.Opcion1 == 'Buzon de queja' && this._UsuPro.PKNivel == 1) {
            this.navCtrl.navigateForward("mis-quejas/" + this._UsuPro.PKUsuario + "/" + this.FKResidencia);
        }
        if (item.Opcion1 == 'Buzon de queja' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward("buzon-de-quejas/" + this.FKResidencia);
        }
        if (item.Opcion1 == 'Area Comun' && this._UsuPro.PKNivel == 1) {
            this.navCtrl.navigateForward("ver-area-comun-residente/" + this.FKResidencia + "/" + this._UsuPro.PKNivel);
        }
        if (item.Opcion1 == 'Asignar Area Comun' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward("ver-area-comun-residente/" + this.FKResidencia + "/" + this._UsuPro.PKNivel);
        }
        if (item.Opcion1 == 'Generador de codigos QR' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward("generador-codigos/" + this.FKResidencia);
        }
        if (item.Opcion1 == 'Generador de codigos QR' && this._UsuPro.PKNivel == 2) {
            this.navCtrl.navigateForward("generador-codigos/" + 0);
        }
    };
    PageClienteDashboardPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            message: ' <strong>no tienes suscripcion activa fabor de pasar a pagar</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
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
    PageClienteDashboardPage.prototype.ObtenerImagen = function () {
        return this.config.APIURLCODIGOS + "Codigos/ObtenerImagen?PKUsuario=" + this._UsuPro.PKUsuario;
    };
    PageClienteDashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _providers_Menu_menuProvider__WEBPACK_IMPORTED_MODULE_4__["MenuProvider"] },
        { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_6__["UsuarioProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
        { type: _Config_config__WEBPACK_IMPORTED_MODULE_7__["ConfigProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _providers_Suscripciones_suscripcionesProvider__WEBPACK_IMPORTED_MODULE_8__["SuscripcionesControllerProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    PageClienteDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-cliente-dashboard',
            template: __webpack_require__(/*! raw-loader!./page-cliente-dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-dashboard/page-cliente-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./page-cliente-dashboard.page.scss */ "./src/app/page-cliente-dashboard/page-cliente-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _providers_Menu_menuProvider__WEBPACK_IMPORTED_MODULE_4__["MenuProvider"],
            _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_6__["UsuarioProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            _Config_config__WEBPACK_IMPORTED_MODULE_7__["ConfigProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Suscripciones_suscripcionesProvider__WEBPACK_IMPORTED_MODULE_8__["SuscripcionesControllerProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], PageClienteDashboardPage);
    return PageClienteDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-cliente-dashboard-page-cliente-dashboard-module-es5.js.map
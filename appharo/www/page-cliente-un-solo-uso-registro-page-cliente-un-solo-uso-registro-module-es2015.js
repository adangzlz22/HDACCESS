(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-cliente-un-solo-uso-registro-page-cliente-un-solo-uso-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">{{NombrePagina}}</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br><br><br>\r\n    <div class=\"padding\">\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" [(ngModel)]=\"evento.NombreCompleto\" placeholder=\"Nombre completo\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf='WhatCorreo==1'>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"number\" [(ngModel)]=\"evento.TelefonoOCorreo\" placeholder=\"Whatsapp\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf='WhatCorreo==0'>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" [(ngModel)]=\"evento.TelefonoOCorreo\" placeholder=\"Correo\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n            <ion-textarea [(ngModel)]=\"evento.Descripcion\" placeholder=\"Descripción\"></ion-textarea>\r\n        </ion-item>\r\n        <br>\r\n\r\n        <br>\r\n        <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Guardar()\">Guardar</ion-button>\r\n        <ion-button color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Mensajes()\" *ngIf=\"this.verBtnEliminar\">Eliminar</ion-button>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PageClienteUnSoloUsoRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoRegistroPageRoutingModule", function() { return PageClienteUnSoloUsoRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_cliente_un_solo_uso_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-cliente-un-solo-uso-registro.page */ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.ts");




const routes = [
    {
        path: '',
        component: _page_cliente_un_solo_uso_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageClienteUnSoloUsoRegistroPage"]
    }
];
let PageClienteUnSoloUsoRegistroPageRoutingModule = class PageClienteUnSoloUsoRegistroPageRoutingModule {
};
PageClienteUnSoloUsoRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageClienteUnSoloUsoRegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: PageClienteUnSoloUsoRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoRegistroPageModule", function() { return PageClienteUnSoloUsoRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_cliente_un_solo_uso_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-cliente-un-solo-uso-registro-routing.module */ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro-routing.module.ts");
/* harmony import */ var _page_cliente_un_solo_uso_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-cliente-un-solo-uso-registro.page */ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.ts");







let PageClienteUnSoloUsoRegistroPageModule = class PageClienteUnSoloUsoRegistroPageModule {
};
PageClienteUnSoloUsoRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_cliente_un_solo_uso_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageClienteUnSoloUsoRegistroPageRoutingModule"],
        ],
        declarations: [_page_cliente_un_solo_uso_registro_page__WEBPACK_IMPORTED_MODULE_6__["PageClienteUnSoloUsoRegistroPage"]]
    })
], PageClienteUnSoloUsoRegistroPageModule);



/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1jbGllbnRlLXVuLXNvbG8tdXNvLXJlZ2lzdHJvL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxBcHBIYXJvL3NyY1xcYXBwXFxwYWdlLWNsaWVudGUtdW4tc29sby11c28tcmVnaXN0cm9cXHBhZ2UtY2xpZW50ZS11bi1zb2xvLXVzby1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UtY2xpZW50ZS11bi1zb2xvLXVzby1yZWdpc3Ryby9wYWdlLWNsaWVudGUtdW4tc29sby11c28tcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWNsaWVudGUtdW4tc29sby11c28tcmVnaXN0cm8vcGFnZS1jbGllbnRlLXVuLXNvbG8tdXNvLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiA1JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: PageClienteUnSoloUsoRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageClienteUnSoloUsoRegistroPage", function() { return PageClienteUnSoloUsoRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/Visitas/visitaProvider */ "./src/app/providers/Visitas/visitaProvider.ts");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");






let PageClienteUnSoloUsoRegistroPage = class PageClienteUnSoloUsoRegistroPage {
    constructor(route, VisPro, alertCtrl, navCtrl, _UsuPro, loadCtrl) {
        this.route = route;
        this.VisPro = VisPro;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this._UsuPro = _UsuPro;
        this.loadCtrl = loadCtrl;
        this.DatosVisitas = [];
        this.evento = {
            NombreCompleto: '',
            Descripcion: '',
            TelefonoOCorreo: '',
        };
        this.verBtnEliminar = false;
    }
    ionViewWillEnter() {
        this.PKVisita = this.route.snapshot.paramMap.get('PKVisita');
        this.TipoVisita = this.route.snapshot.paramMap.get('TipoVisita');
        this.WhatCorreo = this._UsuPro.WhatsappCorreo;
        if (parseInt(this.TipoVisita) === 1) {
            if (parseInt(this.PKVisita) >= 1) {
                this.NombrePagina = 'Modificar visita un solo uso';
            }
            else {
                this.NombrePagina = 'Agregar visita un solo uso';
            }
        }
        if (parseInt(this.TipoVisita) === 2) {
            if (parseInt(this.PKVisita) >= 1) {
                this.NombrePagina = 'Modificar visita frecuentes';
            }
            else {
                this.NombrePagina = 'Agregar visita frecuentes';
            }
        }
        if (this.PKVisita >= 1) {
            this.ObtenerVisitas();
            this.verBtnEliminar = true;
        }
        else {
            this.verBtnEliminar = false;
        }
    }
    ngOnInit() {
    }
    Eliminar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.VisPro.EliminarVisita(parseInt(this.PKVisita)).then(result => {
            });
        });
    }
    ObtenerVisitas() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.VisPro.ObtenerVisitas(parseInt(this.TipoVisita), this._UsuPro.PKUsuario, parseInt(this.PKVisita)).then(result => {
                this.DatosVisitas = JSON.parse(result['Model']);
                this.evento.NombreCompleto = this.DatosVisitas[0]['NombreCompleto'];
                this.evento.Descripcion = this.DatosVisitas[0]['Descripcion'];
                this.evento.TelefonoOCorreo = this.DatosVisitas[0]['TelefonoOCorreo'];
            }).catch(Error => {
                console.log(Error);
            });
        });
    }
    Mensajes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar!',
                message: '<strong>Esta seguro de Eliminar?</strong>!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.Eliminar();
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Guardar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.evento.NombreCompleto != "" && this.evento.TelefonoOCorreo != "") {
                const loading = yield this.loadCtrl.create({
                    message: 'Espere unos momentos para guardar...',
                    duration: 2000
                });
                yield loading.present();
                if (this.PKVisita >= 1) {
                    yield this.VisPro.ActualizarVisita(this.PKVisita, this.evento.NombreCompleto, this.evento.TelefonoOCorreo, this.evento.Descripcion, this.WhatCorreo).then(result => {
                        loading.onDidDismiss();
                        this.navCtrl.pop();
                        console.log(result);
                    }).catch(Error => {
                        console.log(Error);
                    });
                }
                else {
                    yield this.VisPro.CrearVisita(this._UsuPro.PKUsuario, parseInt(this.TipoVisita), this.evento.NombreCompleto, this.evento.TelefonoOCorreo, this.evento.Descripcion, this.WhatCorreo).then(result => {
                        loading.onDidDismiss();
                        this.navCtrl.pop();
                        console.log(result);
                    }).catch(Error => {
                        console.log(Error);
                    });
                }
            }
            else {
                this.Mensaje();
            }
        });
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Datos',
                message: 'Necesario Introducir telefono y nombre completo',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PageClienteUnSoloUsoRegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_4__["VisitaProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
PageClienteUnSoloUsoRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-cliente-un-solo-uso-registro',
        template: __webpack_require__(/*! raw-loader!./page-cliente-un-solo-uso-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.html"),
        styles: [__webpack_require__(/*! ./page-cliente-un-solo-uso-registro.page.scss */ "./src/app/page-cliente-un-solo-uso-registro/page-cliente-un-solo-uso-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _providers_Visitas_visitaProvider__WEBPACK_IMPORTED_MODULE_4__["VisitaProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], PageClienteUnSoloUsoRegistroPage);



/***/ })

}]);
//# sourceMappingURL=page-cliente-un-solo-uso-registro-page-cliente-un-solo-uso-registro-module-es2015.js.map
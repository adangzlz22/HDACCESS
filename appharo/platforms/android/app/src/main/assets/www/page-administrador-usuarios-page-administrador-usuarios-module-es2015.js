(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-usuarios-page-administrador-usuarios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-usuarios/page-administrador-usuarios.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-usuarios/page-administrador-usuarios.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">{{NombrePagina}}</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n\r\n        <ion-item>\r\n            <ion-searchbar [(ngModel)]=\"NombreCompleto\" (keyup.enter)=\"ObtenerUsuarios()\"></ion-searchbar>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let item of DatosUsuarios\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../assets/img/user.png\">\r\n            </ion-avatar>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" (click)=\"ActualizarUsuarios(item)\"></ion-icon>\r\n            <ion-label (click)=\"ActualizarUsuarios(item)\">\r\n                <h2>{{item.NombreCompleto}}</h2>\r\n                <p>{{item.Correo}}</p>\r\n                <p>{{item.Telefono}}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"MoverAgregarUsuario()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-administrador-usuarios/page-administrador-usuarios-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios/page-administrador-usuarios-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageAdministradorUsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosPageRoutingModule", function() { return PageAdministradorUsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-usuarios.page */ "./src/app/page-administrador-usuarios/page-administrador-usuarios.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_usuarios_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorUsuariosPage"]
    }
];
let PageAdministradorUsuariosPageRoutingModule = class PageAdministradorUsuariosPageRoutingModule {
};
PageAdministradorUsuariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorUsuariosPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-usuarios/page-administrador-usuarios.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios/page-administrador-usuarios.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PageAdministradorUsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosPageModule", function() { return PageAdministradorUsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-usuarios-routing.module */ "./src/app/page-administrador-usuarios/page-administrador-usuarios-routing.module.ts");
/* harmony import */ var _page_administrador_usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-usuarios.page */ "./src/app/page-administrador-usuarios/page-administrador-usuarios.page.ts");







let PageAdministradorUsuariosPageModule = class PageAdministradorUsuariosPageModule {
};
PageAdministradorUsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorUsuariosPageRoutingModule"]
        ],
        declarations: [_page_administrador_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorUsuariosPage"]]
    })
], PageAdministradorUsuariosPageModule);



/***/ }),

/***/ "./src/app/page-administrador-usuarios/page-administrador-usuarios.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios/page-administrador-usuarios.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvc1xccGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zL3BhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zL3BhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-administrador-usuarios/page-administrador-usuarios.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios/page-administrador-usuarios.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PageAdministradorUsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosPage", function() { return PageAdministradorUsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PageAdministradorUsuariosPage = class PageAdministradorUsuariosPage {
    constructor(_usuProv, navCtrl, route) {
        this._usuProv = _usuProv;
        this.navCtrl = navCtrl;
        this.route = route;
        this.NombreCompleto = '';
        this.NombrePagina = '';
    }
    ionViewWillEnter() {
        this.PKUsuario = this.route.snapshot.paramMap.get('PKUsuario');
        this.Tipo = this.route.snapshot.paramMap.get('Tipo');
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        console.log('Ando aqui', this.FKResidencia);
        if (this.Tipo == 1) {
            this.NombrePagina = 'Residentes';
            this.FKNivel = 1;
            this.FKMenuBandera = 1;
        }
        else if (this.Tipo == 0) {
            this.NombrePagina = 'Adm Residentes';
            this.FKNivel = 0;
            this.FKMenuBandera = 0;
        }
        this.ObtenerUsuarios();
    }
    ngOnInit() {
    }
    ObtenerUsuarios() {
        this._usuProv.ObtenerUsuarios(this.NombreCompleto, this.PKUsuario, this.FKNivel, this.FKResidencia).then(result => {
            this.DatosUsuarios = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    ActualizarUsuarios(item) {
        this.navCtrl.navigateForward(`page-administrador-usuarios-registro/${item.PKUsuario}/${item.NombreCompleto}/${item.Correo}/${item.Telefono}/${this.FKNivel}/${this.FKMenuBandera}/${this.FKResidencia}`);
    }
    MoverAgregarUsuario() {
        this.navCtrl.navigateForward(`page-administrador-usuarios-registro/${0}/${0}/${0}/${0}/${this.FKNivel}/${this.FKMenuBandera}/${this.FKResidencia}`);
    }
};
PageAdministradorUsuariosPage.ctorParameters = () => [
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PageAdministradorUsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-usuarios',
        template: __webpack_require__(/*! raw-loader!./page-administrador-usuarios.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-usuarios/page-administrador-usuarios.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-usuarios.page.scss */ "./src/app/page-administrador-usuarios/page-administrador-usuarios.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_2__["UsuarioProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], PageAdministradorUsuariosPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-usuarios-page-administrador-usuarios-module-es2015.js.map
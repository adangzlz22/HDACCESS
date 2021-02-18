(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-tags-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/tags/tags.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/tags/tags.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"color\">\n      <ion-title color=\"light\">Asignar Tags</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button style=\" color : #fff \" defaultHref=\"page-cliente-dashboard\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"padding\">\n    <ion-item>\n      <ion-label>\n          <p>Residente: {{userName}}</p>\n          <!-- <ion-item> -->\n              <!-- <ion-note slot=\"end\">TOTAL: ${{pago.total}}</ion-note> -->\n          <!-- </ion-item> -->\n      </ion-label>\n      <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"buscarResidente()\"> \n          <span *ngIf=\"userName == 'No seleccionado'\">Seleccionar</span> \n          <span *ngIf=\"userName != 'No seleccionado'\">Cambiar</span>\n      </ion-button>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n        <p>TAGS: {{tags}}</p>\n        <!-- <ion-item> -->\n            <!-- <ion-note slot=\"end\">TOTAL: ${{pago.total}}</ion-note> -->\n        <!-- </ion-item> -->\n    </ion-label>\n    <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"BuscarTAGS()\"> \n        <span *ngIf=\"tags == 'No seleccionado'\">Seleccionar</span> \n        <span *ngIf=\"tags != 'No seleccionado'\">Cambiar</span>\n    </ion-button>\n</ion-item>\n\n      <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"AsignarTAGS()\">Aceptar</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/tags/tags-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/tags/tags-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.page */ "./src/app/Pages/tags/tags.page.ts");




const routes = [
    {
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
    }
];
let TagsPageRoutingModule = class TagsPageRoutingModule {
};
TagsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TagsPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/tags/tags.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/tags/tags.module.ts ***!
  \*******************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/Pages/tags/tags-routing.module.ts");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.page */ "./src/app/Pages/tags/tags.page.ts");







let TagsPageModule = class TagsPageModule {
};
TagsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsPageRoutingModule"]
        ],
        declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_6__["TagsPage"]]
    })
], TagsPageModule);



/***/ }),

/***/ "./src/app/Pages/tags/tags.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/tags/tags.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdGFncy9DOlxcVXNlcnNcXEFkYW5Hb256YWxlelxcRGVza3RvcFxcbnVldm9cXEhEQUNDRVNTXFxhcHBoYXJvL3NyY1xcYXBwXFxQYWdlc1xcdGFnc1xcdGFncy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3RhZ3MvdGFncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhZ3MvdGFncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xyXG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoI2ZmYjYxOCwgI2ViMWUwOCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn0iLCIuY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/tags/tags.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/tags/tags.page.ts ***!
  \*****************************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");






let TagsPage = class TagsPage {
    constructor(navCtrl, usuario, route, _resi, alertCtrl) {
        this.navCtrl = navCtrl;
        this.usuario = usuario;
        this.route = route;
        this._resi = _resi;
        this.alertCtrl = alertCtrl;
        this.pago = {
            total: 0,
            tipo: 0,
            FKUsuario: 0,
            origen: 'tags',
            PersonID: ''
        };
        this.userName = 'No seleccionado';
        this.tags = 'No seleccionado';
    }
    ngOnInit() {
        console.log(this.usuario.PKUsuario);
        this.route.queryParams.subscribe(params => {
            if (params['pago']) {
                this.pago = JSON.parse(params['pago']);
                console.log('------------------->', this.pago);
                console.log(this.pago);
                this.userName = this.pago['userObj'].NombreCompleto;
                this.tags = this.pago.PersonID;
            }
        });
    }
    buscarResidente() {
        const navigationExtras = {
            queryParams: {
                pago: JSON.stringify(this.pago),
            }
        };
        // this.modalCtrl.create(BuscadorResidenteComponent ).present();
        this.navCtrl.navigateForward(`buscarResidente/${this.usuario.PKUsuario}`, navigationExtras).then((response) => {
            console.log(response);
        });
    }
    BuscarTAGS() {
        const navigationExtras = {
            queryParams: {
                pago: JSON.stringify(this.pago),
            }
        };
        // this.modalCtrl.create(BuscadorResidenteComponent ).present();
        this.navCtrl.navigateForward(`buscarTAGS`, navigationExtras).then((response) => {
            console.log(response);
        });
    }
    AsignarTAGS() {
        if (this.validarVacios() == false) {
            this.Mensaje();
        }
        else {
            let person = this.pago.PersonID;
            let PKUsuario = this.pago['userObj'].PKUsuario;
            let nombre = this.pago['userObj'].NombreCompleto;
            this._resi.CrearTAGS(PKUsuario, person, nombre).then((result) => {
                console.log(result);
                this.pago = {
                    total: 0,
                    tipo: 0,
                    FKUsuario: 0,
                    origen: 'tags',
                    PersonID: ''
                };
                this.userName = 'No seleccionado';
                this.tags = 'No seleccionado';
            }).catch(error => {
                console.log(error);
            });
        }
    }
    validarVacios() {
        let retu = false;
        if (this.pago.PersonID == "") {
            retu = false;
        }
        else {
            retu = true;
        }
        return retu;
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Aviso',
                message: 'No ha seleccionado ningun tag ni persona favor de seleeccionar',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
TagsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__["ResidenciasProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
TagsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags',
        template: __webpack_require__(/*! raw-loader!./tags.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/tags/tags.page.html"),
        styles: [__webpack_require__(/*! ./tags.page.scss */ "./src/app/Pages/tags/tags.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_5__["UsuarioProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_4__["ResidenciasProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], TagsPage);



/***/ })

}]);
//# sourceMappingURL=Pages-tags-tags-module-es2015.js.map
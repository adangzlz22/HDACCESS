(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-residencias-registro-page-administrador-residencias-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-title color=\"light\">Registro de residencias</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button style=\" color : #fff \" defaultHref=\"page-administrador-residencias\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <br>\r\n    <div class=\"padding\">\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"home\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Nombre de residencia\" [(ngModel)]=\"NombreResidencia\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"keypad\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"number\" placeholder=\"Número de visitas frecuentes\" [(ngModel)]=\"LimVisitasFrecuentes\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon style=\" color : #FF8225 \" name=\"keypad\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"number\" placeholder=\"Número de visitas de un solo uso\" [(ngModel)]=\"LimVisitasUnSoloUso\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Actualizacion de periodo</ion-label>\r\n                <ion-select [(ngModel)]=\"selectedCodeValue\" name=\"selectCode\" \r\n                multiple=\"true\" placeholder=\"Tap to select..\" [selectedText]=\"selectedCodeValue\"\r\n                (ionChange)=\"funciones()\" required >\r\n                      <ion-select-option  (ionChange)=\"funciones()\" *ngFor=\"let code of lstDias\" value=\"{{code.Id}}\">\r\n                          {{code.Dia}}\r\n                      </ion-select-option>\r\n                </ion-select>\r\n          </ion-item>\r\n        <ion-item>\r\n            <ion-label>Correo / WhatsApp</ion-label>\r\n            <ion-toggle slot=\"start\" name=\"cherry\" color=\"danger\" [(ngModel)]=\"WhatsappCorreo\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"Desaparecer\">\r\n            <ion-icon style=\" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Token\" [(ngModel)]=\"TokenMercado\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"Desaparecer\">\r\n            <ion-icon style=\" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"Key\" [(ngModel)]=\"KeyMercado\"></ion-input>\r\n        </ion-item>\r\n        <ion-item >\r\n            <ion-label>Selecionar Nivel</ion-label>\r\n            <ion-select [(ngModel)]=\"Dispositivo\"  >\r\n              <ion-select-option *ngFor=\"let item of lst\" [value]=\"item\">{{item.NombreDispositivo}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n            <ion-item *ngIf=\"Desaparecer\">\r\n                <ion-label>Fecha Dia Asignado</ion-label>\r\n                <ion-datetime value=\"1990-02-19\" placeholder=\"Select Date\" [(ngModel)]=\"FechaExpiracion\"></ion-datetime>\r\n            </ion-item>\r\n            <ion-item >\r\n                <ion-label>Selecionar Departamento</ion-label>\r\n                <ion-select [(ngModel)]=\"Departamentos\"  >\r\n                  <ion-select-option *ngFor=\"let item of lstDepartam\" [value]=\"item\">{{item.NombreDepartamento}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n        <br>\r\n        <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Guardar()\">{{ ModificTexto }}</ion-button>\r\n        <ion-button *ngIf=\"Desaparecer\" color=\"danger\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"Eliminar()\">Eliminar</ion-button>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro-routing.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PageAdministradorResidenciasRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasRegistroPageRoutingModule", function() { return PageAdministradorResidenciasRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_residencias_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-residencias-registro.page */ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_residencias_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorResidenciasRegistroPage"]
    }
];
let PageAdministradorResidenciasRegistroPageRoutingModule = class PageAdministradorResidenciasRegistroPageRoutingModule {
};
PageAdministradorResidenciasRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorResidenciasRegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PageAdministradorResidenciasRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasRegistroPageModule", function() { return PageAdministradorResidenciasRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_residencias_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-residencias-registro-routing.module */ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro-routing.module.ts");
/* harmony import */ var _page_administrador_residencias_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-residencias-registro.page */ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.ts");







let PageAdministradorResidenciasRegistroPageModule = class PageAdministradorResidenciasRegistroPageModule {
};
PageAdministradorResidenciasRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_residencias_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorResidenciasRegistroPageRoutingModule"]
        ],
        declarations: [_page_administrador_residencias_registro_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorResidenciasRegistroPage"]]
    })
], PageAdministradorResidenciasRegistroPageModule);



/***/ }),

/***/ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  --ion-background-color: #FF8225 ;\n}\n\n.padding {\n  padding: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXJlc2lkZW5jaWFzLXJlZ2lzdHJvL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy1yZWdpc3Ryb1xccGFnZS1hZG1pbmlzdHJhZG9yLXJlc2lkZW5jaWFzLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXJlc2lkZW5jaWFzLXJlZ2lzdHJvL3BhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy1yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtYWRtaW5pc3RyYWRvci1yZXNpZGVuY2lhcy1yZWdpc3Ryby9wYWdlLWFkbWluaXN0cmFkb3ItcmVzaWRlbmNpYXMtcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcclxuICAgIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNmZmI2MTgsICNlYjFlMDgpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZGODIyNSA7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufSIsIi5jb2xvciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PageAdministradorResidenciasRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorResidenciasRegistroPage", function() { return PageAdministradorResidenciasRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PageAdministradorResidenciasRegistroPage = class PageAdministradorResidenciasRegistroPage {
    constructor(route, ResiProvi, navCtrl) {
        this.route = route;
        this.ResiProvi = ResiProvi;
        this.navCtrl = navCtrl;
        this.lstDepartam = [];
        this.lst = [];
        this.lstDiasActivados = [];
        this.WhatsappCorreo = false;
        this.lstDias = [
            {
                Id: 1,
                Dia: "Lunes"
            },
            {
                Id: 2,
                Dia: "Martes"
            },
            {
                Id: 3,
                Dia: "Miercoles"
            },
            {
                Id: 4,
                Dia: "Jueves"
            },
            {
                Id: 5,
                Dia: "Viernes"
            },
            {
                Id: 6,
                Dia: "Sabado"
            },
            {
                Id: 7,
                Dia: "Domingo"
            },
        ];
    }
    ngOnInit() {
        this.ObtenerNivel();
        this.ObtenerDepartamento();
        this.lstDiasActivados = [];
    }
    ionViewWillEnter() {
        this.WhatsappCorreo = false;
        this.PKResidencia = this.route.snapshot.paramMap.get('PKResidencia');
        console.log(this.PKResidencia);
        this.NombreResidencia = this.route.snapshot.paramMap.get('NombreResidencia');
        this.LimVisitasFrecuentes = this.route.snapshot.paramMap.get('LimVisitasFrecuentes');
        this.LimVisitasUnSoloUso = this.route.snapshot.paramMap.get('LimVisitasUnSoloUso');
        if (this.NombreResidencia != '0') {
            this.ModificTexto = 'Modificar';
            this.Desaparecer = true;
        }
        else {
            this.ModificTexto = 'Agregar';
            this.Desaparecer = false;
            this.NombreResidencia = '';
            this.LimVisitasFrecuentes = '';
            this.LimVisitasUnSoloUso = '';
        }
    }
    ObtenerNivel() {
        this.ResiProvi.ObtenerNivel().then(result => {
            this.lstNivelDispositivos = JSON.parse(result['Model']);
            for (let i = 0; i < this.lstNivelDispositivos.length; i++) {
                const element = {
                    IdDispositivo: this.lstNivelDispositivos[i].IdNivel,
                    NombreDispositivo: this.lstNivelDispositivos[i].NombreNivel
                };
                this.lst.push(element);
            }
            console.log(this.lst);
        }).catch(error => {
            console.log(error);
        });
    }
    ObtenerDepartamento() {
        this.ResiProvi.ObtenerDepartamento().then(result => {
            this.lstDepartamentos = JSON.parse(result['Model']);
            for (let i = 0; i < this.lstDepartamentos.length; i++) {
                const element = {
                    IDDepartamento: this.lstDepartamentos[i].id,
                    NombreDepartamento: this.lstDepartamentos[i].nombreDepartamento
                };
                this.lstDepartam.push(element);
            }
            console.log(this.lstDepartam);
            console.log('AQUI ANDO DEPARTAMENTO');
        }).catch(error => {
            console.log(error);
        });
    }
    Guardar() {
        console.log(this.WhatsappCorreo);
        if (this.Desaparecer == false) {
            console.log(this.Dispositivo);
            this.ResiProvi.CrearResidencias(this.NombreResidencia, this.LimVisitasFrecuentes, this.LimVisitasUnSoloUso, this.WhatsappCorreo, this.lstDiasActivados, this.Dispositivo, this.Departamentos).then(result => {
                console.log(result);
                this.navCtrl.pop();
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            this.ResiProvi.ActualizarResidencias(this.PKResidencia, this.NombreResidencia, this.LimVisitasFrecuentes, this.LimVisitasUnSoloUso, this.WhatsappCorreo, this.lstDiasActivados, this.Dispositivo, this.TokenMercado, this.KeyMercado, this.FechaExpiracion, this.Departamentos).then(result => {
                console.log(result);
                this.navCtrl.pop();
            }).catch(error => {
                console.log(error);
            });
        }
    }
    Eliminar() {
        this.ResiProvi.EliminarResidencias(this.PKResidencia).then(result => {
            console.log(result);
            this.navCtrl.pop();
        }).catch(error => {
            console.log(error);
        });
    }
    funciones() {
        console.log(this.lstDias);
        console.log(this.selectedCodeValue);
        for (let index = 0; index < this.selectedCodeValue.length; index++) {
            switch (this.selectedCodeValue[index]) {
                case "1":
                    let item1 = { Dia: 'Lunes', Checked: true };
                    this.lstDiasActivados.push(item1);
                    break;
                case "2":
                    let item2 = { Dia: 'Martes', Checked: true };
                    this.lstDiasActivados.push(item2);
                    break;
                case "3":
                    let item3 = { Dia: 'Miercoles', Checked: true };
                    this.lstDiasActivados.push(item3);
                    break;
                case "4":
                    let item4 = { Dia: 'Jueves', Checked: true };
                    this.lstDiasActivados.push(item4);
                    break;
                case "5":
                    let item5 = { Dia: 'Viernes', Checked: true };
                    this.lstDiasActivados.push(item5);
                    break;
                case "6":
                    let item6 = { Dia: 'Sabado', Checked: true };
                    this.lstDiasActivados.push(item6);
                    break;
                case "7":
                    let item7 = { Dia: 'Domingo', Checked: true };
                    this.lstDiasActivados.push(item7);
                    break;
            }
        }
        console.log(this.lstDiasActivados);
    }
};
PageAdministradorResidenciasRegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__["ResidenciasProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PageAdministradorResidenciasRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-residencias-registro',
        template: __webpack_require__(/*! raw-loader!./page-administrador-residencias-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-residencias-registro.page.scss */ "./src/app/page-administrador-residencias-registro/page-administrador-residencias-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_3__["ResidenciasProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], PageAdministradorResidenciasRegistroPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-residencias-registro-page-administrador-residencias-registro-module-es2015.js.map
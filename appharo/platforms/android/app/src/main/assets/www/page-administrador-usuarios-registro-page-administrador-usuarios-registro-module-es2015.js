(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administrador-usuarios-registro-page-administrador-usuarios-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n    <ion-back-button style = \" color : #fff \"  defaultHref=\"page-administrador-usuarios\"></ion-back-button>\r\n  </ion-buttons>\r\n    <h2>Perfil del usuario</h2>\r\n  </div>\r\n  <div class=\"flex\">\r\n    <div class=\"border-blue\">\r\n      <div class=\"border-white\">\r\n        <div class=\"img-box\">\r\n          <img src=\"../assets/img/user.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"padding\">\r\n    <ion-item>\r\n      <ion-icon style = \" color : #FF8225 \" name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"text\" placeholder=\"Nombre completo\" [(ngModel)]=\"NombreCompleto\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-label color='light'>\r\n        {{ texto }}\r\n     </ion-label>  \r\n     <ion-item hidden>\r\n      <ion-input type=\"text\" name=\"text\" [(ngModel)]=\"valido\" hidden>\r\n        {{formulario.valid}}\r\n      </ion-input> \r\n    </ion-item>  \r\n      <ion-item >\r\n        <ion-icon style=\"color : #FF8225 \" name=\"mail\" slot=\"start\"></ion-icon>\r\n        <ion-input \r\n                    type=\"email\" \r\n                    name=\"email\"\r\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                    placeholder=\"Correo electronico\" \r\n                    [(ngModel)]=\"Correo\" required></ion-input>\r\n      </ion-item>\r\n     \r\n\r\n      <ion-item >\r\n        <ion-icon style = \" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n        <ion-input type=\"password\" name=\"contraseña\" placeholder=\"Contraseña\" [(ngModel)]=\"ContrasenaVerif\"></ion-input>\r\n      </ion-item>\r\n      <ion-item >\r\n        <ion-icon style = \" color : #FF8225 \" name=\"lock\" slot=\"start\"></ion-icon>\r\n        <ion-input type=\"password\" name=\"Confirmación de contraseña\" placeholder=\"Confirmación de contraseña\" [(ngModel)]=\"Contrasena\"></ion-input>\r\n      </ion-item>\r\n      <ion-item >\r\n        <ion-icon style = \" color : #FF8225 \" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\r\n        <ion-input type=\"number\" name=\"Whatsapp\" placeholder=\"Whatsapp\" [(ngModel)]=\"Telefono\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"AparecerResidencias\">\r\n        <ion-label>Residencia</ion-label>\r\n        <ion-select  ok-text=\"Aceptar\" name=\"Residencia\" cancel-text=\"Cancelar\" \r\n        (ionChange)=\"Elejir()\"  [(ngModel)]=\"PKResidencia\" >\r\n          <ion-select-option *ngFor=\"let item of DatosResidencias\" \r\n          [value]=\"item.PKResidencia\" >{{item.NombreResidencia}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <br>\r\n      <ion-button color=\"success\" expand=\"block\" name=\"moficar\" shape=\"round\" fill=\"outline\" (click)=\"CrearUsuarios()\" [disabled]=\"formulario.invalid\">{{NombreBotonModificar}}</ion-button>\r\n      <ion-button *ngIf=\"Desaparecer\" color=\"danger\" name=\"eliminar\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"EliminarUsuarios()\">Eliminar</ion-button>\r\n\r\n\r\n\r\n    </form>\r\n    \r\n\r\n   \r\n  </div>\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PageAdministradorUsuariosRegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosRegistroPageRoutingModule", function() { return PageAdministradorUsuariosRegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_administrador_usuarios_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-administrador-usuarios-registro.page */ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.ts");




const routes = [
    {
        path: '',
        component: _page_administrador_usuarios_registro_page__WEBPACK_IMPORTED_MODULE_3__["PageAdministradorUsuariosRegistroPage"]
    }
];
let PageAdministradorUsuariosRegistroPageRoutingModule = class PageAdministradorUsuariosRegistroPageRoutingModule {
};
PageAdministradorUsuariosRegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageAdministradorUsuariosRegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PageAdministradorUsuariosRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosRegistroPageModule", function() { return PageAdministradorUsuariosRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_administrador_usuarios_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-administrador-usuarios-registro-routing.module */ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro-routing.module.ts");
/* harmony import */ var _page_administrador_usuarios_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-administrador-usuarios-registro.page */ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.ts");







let PageAdministradorUsuariosRegistroPageModule = class PageAdministradorUsuariosRegistroPageModule {
};
PageAdministradorUsuariosRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_administrador_usuarios_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageAdministradorUsuariosRegistroPageRoutingModule"]
        ],
        declarations: [_page_administrador_usuarios_registro_page__WEBPACK_IMPORTED_MODULE_6__["PageAdministradorUsuariosRegistroPage"]]
    })
], PageAdministradorUsuariosRegistroPageModule);



/***/ }),

/***/ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #FF8225;\n  height: 180px;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n\n.space-between {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.padding {\n  padding: 5% !important;\n}\n\n.img-box {\n  height: 130px;\n  width: 130px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.border-white {\n  border: 4px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid #ec6600;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -76px;\n}\n\n.tweet {\n  margin-top: -10px;\n}\n\n.tweet ion-label {\n  line-height: 1 !important;\n  font-size: 15px;\n  margin: 6px 0px 6px 0px !important;\n  min-height: 34px;\n}\n\n.tweet-img {\n  width: 95%;\n  margin-left: 2.5%;\n  border-radius: 10px;\n}\n\ni {\n  color: #FF8225;\n  font-weight: 800;\n}\n\n.color {\n  --ion-background-color: #FF8225 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zLXJlZ2lzdHJvL0M6XFxVc2Vyc1xcQWRhbkdvbnphbGV6XFxEZXNrdG9wXFxudWV2b1xcSERBQ0NFU1NcXGFwcGhhcm8vc3JjXFxhcHBcXHBhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvcy1yZWdpc3Ryb1xccGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zLXJlZ2lzdHJvL3BhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvcy1yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSwyQkFBQTtBQ0dKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FEREE7RUFDSSxzQkFBQTtBQ0lKOztBREFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETEE7RUFFSSxnQ0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1hZG1pbmlzdHJhZG9yLXVzdWFyaW9zLXJlZ2lzdHJvL3BhZ2UtYWRtaW5pc3RyYWRvci11c3Vhcmlvcy1yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjgyMjU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG4uaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9sbG93aW5ncyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaW1nLWJveCB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYm9yZGVyLXdoaXRlIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5ib3JkZXItYmx1ZSB7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCByZ2IoMjM2LCAxMDIsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC03NnB4O1xyXG59XHJcblxyXG5cclxuLnR3ZWV0IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi50d2VldCBpb24tbGFiZWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA2cHggMHB4IDZweCAwcHghaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMzRweDtcclxufVxyXG4udHdlZXQtaW1nIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuaSB7XHJcbiAgICBjb2xvcjogI0ZGODIyNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb2xvciB7XHJcbiAgICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZmZiNjE4LCAjZWIxZTA4KTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjgyMjUgO1xyXG59XHJcbiIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uaGVhZGVyIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4uZm9sbG93aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb2xsb3dpbmdzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctYm94IHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib3JkZXItd2hpdGUge1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5ib3JkZXItYmx1ZSB7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNlYzY2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNzZweDtcbn1cblxuLnR3ZWV0IHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi50d2VldCBpb24tbGFiZWwge1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNnB4IDBweCA2cHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG59XG5cbi50d2VldC1pbWcge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaSB7XG4gIGNvbG9yOiAjRkY4MjI1O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY29sb3Ige1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MjI1IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: PageAdministradorUsuariosRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdministradorUsuariosRegistroPage", function() { return PageAdministradorUsuariosRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/usuarios/usuariosProviders */ "./src/app/providers/usuarios/usuariosProviders.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/Residencias/residenciasProvider */ "./src/app/providers/Residencias/residenciasProvider.ts");






let PageAdministradorUsuariosRegistroPage = class PageAdministradorUsuariosRegistroPage {
    constructor(route, _usuProv, navCtrl, alertCtrl, _resiProv) {
        this.route = route;
        this._usuProv = _usuProv;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this._resiProv = _resiProv;
        this.Desaparecer = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.ObtenerResidencias();
        this.PKUsuario = this.route.snapshot.paramMap.get('PKUsuario');
        this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
        this.Correo = this.route.snapshot.paramMap.get('Correo');
        this.Telefono = this.route.snapshot.paramMap.get('Telefono');
        this.FKMenuBandera = this.route.snapshot.paramMap.get('FKMenuBandera');
        this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        if (this.FKResidencia == 0 || this.FKResidencia == -1) {
            this.AparecerResidencias = true;
        }
        else {
            this.AparecerResidencias = false;
            this.PKResidencia = this.FKResidencia;
        }
        if (this.PKUsuario != '0') {
            this.NombreBotonModificar = 'Modificar';
            this.Desaparecer = true;
        }
        else {
            this.NombreBotonModificar = 'Agregar';
            this.Desaparecer = false;
            this.NombreCompleto = '';
            this.Correo = '';
            this.Telefono = '';
            this.Contrasena = '';
        }
    }
    CrearUsuarios() {
        if (this.Contrasena != '' || this.ContrasenaVerif != '') {
            if (this.Contrasena == this.ContrasenaVerif) {
                if (this.Desaparecer == true) {
                    //Modificar Usuario
                    this._usuProv.ActualizarUsuarios(this.PKUsuario, this.NombreCompleto, this.Correo, this.Telefono, this.Contrasena, this.PKResidencia).then(result => {
                        this.navCtrl.pop();
                        console.log(result);
                    }).catch(error => {
                        console.log(error);
                    });
                }
                else {
                    //Agregar Usuario
                    this.ExisteUsuario();
                }
            }
            else {
                this.Mensaje();
            }
        }
        else {
            this.MensajeFalta();
        }
    }
    EliminarUsuarios() {
        this._usuProv.EliminarUsuarios(this.PKUsuario).then(result => {
            console.log(result);
            this.navCtrl.pop();
        }).catch(error => {
            console.log(error);
        });
    }
    Mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Contraseña',
                message: 'Las contraseña no coinciden',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    MensajeExiste() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Usuario',
                message: 'Ya existe un usuario admin en esta privada',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    MensajeFalta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Contraseña',
                message: 'Favor de escribir una contraseña',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ObtenerResidencias() {
        this._resiProv.ObtenerResidencias('').then(result => {
            this.DatosResidencias = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    Elejir() {
    }
    ExisteUsuario() {
        if (this.FKNivel == 1) {
            this._usuProv.CrearUsuarios(this.NombreCompleto, this.Correo, this.Telefono, this.Contrasena, this.PKResidencia, this.FKNivel, this.FKMenuBandera).then(result => {
                console.log(result);
                this.lstExiste = [];
                this.navCtrl.pop();
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            this._resiProv.ExisteUsuario(this.PKResidencia, this.FKNivel).then(result => {
                this.lstExiste = JSON.parse(result['Model']);
                console.log(this.lstExiste);
                if (this.lstExiste.length != 0) {
                    this.MensajeExiste();
                }
                else {
                    this._usuProv.CrearUsuarios(this.NombreCompleto, this.Correo, this.Telefono, this.Contrasena, this.PKResidencia, this.FKNivel, this.FKMenuBandera).then(result => {
                        console.log(result);
                        this.lstExiste = [];
                        this.navCtrl.pop();
                    }).catch(error => {
                        console.log(error);
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
    onSubmit() {
        console.log('AQUI ANMDAMOS');
    }
};
PageAdministradorUsuariosRegistroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__["ResidenciasProvider"] }
];
PageAdministradorUsuariosRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-administrador-usuarios-registro',
        template: __webpack_require__(/*! raw-loader!./page-administrador-usuarios-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.html"),
        styles: [__webpack_require__(/*! ./page-administrador-usuarios-registro.page.scss */ "./src/app/page-administrador-usuarios-registro/page-administrador-usuarios-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _providers_usuarios_usuariosProviders__WEBPACK_IMPORTED_MODULE_3__["UsuarioProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _providers_Residencias_residenciasProvider__WEBPACK_IMPORTED_MODULE_5__["ResidenciasProvider"]])
], PageAdministradorUsuariosRegistroPage);



/***/ })

}]);
//# sourceMappingURL=page-administrador-usuarios-registro-page-administrador-usuarios-registro-module-es2015.js.map
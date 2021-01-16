import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigProvider } from 'src/app/Config/config';
let SuscripcionesControllerProvider = class SuscripcionesControllerProvider {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        console.log('Hello Menu Provider');
        this.urlPrincipal = this.config.ApiPagos + 'Suscripciones/';
    }
    cargarTipos() {
        // const httpOptions = {
        const url = this.urlPrincipal + 'cargarTipos';
        return this.http.get(url);
    }
};
SuscripcionesControllerProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider])
], SuscripcionesControllerProvider);
export { SuscripcionesControllerProvider };
//# sourceMappingURL=suscripcionesProvider.js.map
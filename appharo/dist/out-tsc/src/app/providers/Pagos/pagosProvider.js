import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigProvider } from 'src/app/Config/config';
let PagosControllerProvider = class PagosControllerProvider {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        console.log('Hello Menu Provider');
        this.url_principal = this.config.ApiPagos + 'Pagos/';
    }
    Agregar(parametros) {
        const url = this.url_principal + 'Agregar';
        return this.http.post(url, parametros);
    }
    // parametros = Ano,IdUsuario
    estadoCuenta(parametros) {
        const url = this.url_principal + 'ObtenerEstadoDeCuenta';
        return this.http.post(url, parametros);
    }
    totalXResidencia(params) {
        const url = this.url_principal + 'ObtenerTotalXResidencia';
        return this.http.post(url, params);
    }
    obtenerReporteResidentes(params) {
        const url = this.url_principal + 'ObtenerReporteResidentes';
        return this.http.post(url, params);
    }
    obtenerAnos() {
        const url = this.url_principal + 'ObtenerAnos';
        return this.http.get(url);
    }
    agregarPagoMP(objPagoMP) {
        const url = this.url_principal + 'AgregarMP';
        return this.http.post(url, objPagoMP);
    }
};
PagosControllerProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider])
], PagosControllerProvider);
export { PagosControllerProvider };
//# sourceMappingURL=pagosProvider.js.map
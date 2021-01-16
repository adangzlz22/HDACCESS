import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';
let GeneradorProvider = class GeneradorProvider {
    constructor(http, config, _TipoPeticion) {
        this.http = http;
        this.config = config;
        this._TipoPeticion = _TipoPeticion;
        console.log('Hello Generador Provider');
        this.url_principal = this.config.APIURL + "GeneradorDeCodigos/";
    }
    GenerarCodigosDeBarra(FKResidencia) {
        let Generador = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "GenerarCodigosDeBarra";
            let Model = {
                FKResidencia: FKResidencia,
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Permisos,
                Formato: 2
            };
            this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(val => {
                // console.log(val);
                if (val != undefined) {
                    resolve(val);
                }
            }, Error => {
                console.log("POST call in error", Error);
                if (Error != undefined) {
                    reject(Error);
                }
            });
        });
        return Generador;
    }
};
GeneradorProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider,
        TipoPeticionControllerProvider])
], GeneradorProvider);
export { GeneradorProvider };
//# sourceMappingURL=GeneradorProvider.js.map
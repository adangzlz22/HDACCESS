import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../usuarios/TipoPeticion/TipoPeticion';
let BandejaConteoFisicoProvider = class BandejaConteoFisicoProvider {
    constructor(http, config, _TipoPeticion) {
        this.http = http;
        this.config = config;
        this._TipoPeticion = _TipoPeticion;
        // console.log('Hello BandejaMontacarguistaProvider Provider');
        this.url_principal = this.config.APIURL + "Usuarios/";
    }
    tryConteoFisico(pagina) {
        let conteo = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "CargarIndiceConteoFisico";
            let Model = {
                Pagina: pagina,
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Login,
                Formato: 2
            };
            this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(val => {
                // console.log(val);
                if (val != undefined) {
                    resolve(val);
                }
            }, response => {
                console.log("POST call in error", response);
                if (response != undefined) {
                    reject(response);
                }
            });
        });
        return conteo;
    }
};
BandejaConteoFisicoProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider,
        TipoPeticionControllerProvider])
], BandejaConteoFisicoProvider);
export { BandejaConteoFisicoProvider };
//# sourceMappingURL=usuariosControllers.js.map
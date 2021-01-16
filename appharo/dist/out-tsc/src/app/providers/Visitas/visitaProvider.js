import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';
let VisitaProvider = class VisitaProvider {
    constructor(http, config, _TipoPeticion) {
        this.http = http;
        this.config = config;
        this._TipoPeticion = _TipoPeticion;
        console.log('Hello visita Provider');
        this.url_principal = this.config.APIURL + "Visitas/";
    }
    ObtenerVisitas(TipoVisita, PKUsuario, PKVisita) {
        console.log('ENTRO');
        let visita = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ObtenerVisitas";
            let Model = {
                TipoVisita: TipoVisita,
                PKUsuario: PKUsuario,
                PKVisita: PKVisita
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Visitas,
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
        return visita;
    }
    //
    //
    //
    EliminarVisita(PKVisita) {
        console.log('ENTRO');
        let visita = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "EliminarVisita";
            let Model = {
                PKVisita: PKVisita
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Visitas,
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
        return visita;
    }
    //
    //
    //
    ActualizarVisita(PKVisita, NombreCompleto, TelefonoOCorreo, Descripcion, WhatCorreo) {
        console.log('ENTRO');
        let visita = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ActualizarVisita";
            let Model = {
                PKVisita: PKVisita,
                NombreCompleto: NombreCompleto,
                TelefonoOCorreo: TelefonoOCorreo,
                Descripcion: Descripcion,
                WhatCorreo: WhatCorreo
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Visitas,
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
        return visita;
    }
    //
    //
    //
    CrearVisita(PKUsuario, TipoVisita, NombreCompleto, TelefonoOCorreo, Descripcion, WhatCorreo) {
        console.log('ENTRO');
        let visita = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "CrearVisita";
            let Model = {
                PKUsuario: PKUsuario,
                TipoVisita: TipoVisita,
                NombreCompleto: NombreCompleto,
                TelefonoOCorreo: TelefonoOCorreo,
                Descripcion: Descripcion,
                WhatCorreo: WhatCorreo
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Visitas,
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
        return visita;
    }
};
VisitaProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider,
        TipoPeticionControllerProvider])
], VisitaProvider);
export { VisitaProvider };
//# sourceMappingURL=visitaProvider.js.map
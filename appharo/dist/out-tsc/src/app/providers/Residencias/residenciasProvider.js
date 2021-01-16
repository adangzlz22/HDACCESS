import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';
let ResidenciasProvider = class ResidenciasProvider {
    constructor(http, config, _TipoPeticion) {
        this.http = http;
        this.config = config;
        this._TipoPeticion = _TipoPeticion;
        console.log('Hello Menu Provider');
        this.url_principal = this.config.APIURL + "Residencias/";
    }
    ObtenerResidencias(NombreResidencia) {
        let Menu = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ObtenerResidencias";
            let Model = { NombreResidencia: NombreResidencia };
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
        return Menu;
    }
    CrearResidencias(NombreResidencia, LimVisitasFrecuentes, LimVisitasUnSoloUso, WhatsappCorreo) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "CrearResidencias";
            let Model = {
                NombreResidencia: NombreResidencia,
                LimVisitasFrecuentes: LimVisitasFrecuentes,
                LimVisitasUnSoloUso: LimVisitasUnSoloUso,
                WhatsAppCorreo: WhatsappCorreo
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
        return usuario;
    }
    ActualizarResidencias(PKResidencia, NombreResidencia, LimVisitasFrecuentes, LimVisitasUnSoloUso, WhatsappCorreo) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ActualizarResidencias";
            let Model = {
                PKResidencia: PKResidencia,
                NombreResidencia: NombreResidencia,
                LimVisitasFrecuentes: LimVisitasFrecuentes,
                LimVisitasUnSoloUso: LimVisitasUnSoloUso,
                WhatsAppCorreo: WhatsappCorreo
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
        return usuario;
    }
    EliminarResidencias(PKResidencia) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "EliminarResidencias";
            let Model = {
                PKResidencia: PKResidencia
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
        return usuario;
    }
};
ResidenciasProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider,
        TipoPeticionControllerProvider])
], ResidenciasProvider);
export { ResidenciasProvider };
//# sourceMappingURL=residenciasProvider.js.map
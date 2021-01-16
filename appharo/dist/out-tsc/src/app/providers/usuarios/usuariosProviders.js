import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';
let UsuarioProvider = class UsuarioProvider {
    constructor(http, config, _TipoPeticion) {
        this.http = http;
        this.config = config;
        this._TipoPeticion = _TipoPeticion;
        console.log('Hello Usuario Provider');
        this.url_principal = this.config.APIURL + "Usuarios/";
    }
    Login(Correo, Contrasena) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "Login";
            let Model = {
                Correo: Correo,
                Contrasena: Contrasena,
            };
            let Peticion = {
                Model: JSON.stringify(Model),
                TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
                Formato: 2
            };
            this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(val => {
                resolve(val);
            }, Error => {
                console.log("POST call in error", Error);
                reject(Error);
            });
        });
        return usuario;
    }
    ActualizarPerfil(NombreCompleto, Correo, Telefono) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ActualizarPerfil";
            let Model = {
                PKUsuario: this.PKUsuario,
                NombreCompleto: NombreCompleto,
                Correo: Correo,
                Telefono: Telefono
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
    ObtenerUsuarios(NombreCompleto, PKUsuario, FKNivel, FKResidencia) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ObtenerUsuarios";
            let Model = {
                NombreCompleto: NombreCompleto,
                PKUsuario: PKUsuario,
                FKNivel: FKNivel,
                FKResidencia: FKResidencia
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
    CrearUsuarios(NombreCompleto, Correo, Telefono, Contrasena, FKResidencia, FKNivel, FKMenuBandera) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "CrearUsuario";
            let Model = {
                NombreCompleto: NombreCompleto,
                Correo: Correo,
                Telefono: Telefono,
                Contrasena: Contrasena,
                FKResidencia: FKResidencia,
                FKMenuBandera: FKMenuBandera,
                FKNivel: FKNivel
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
    ActualizarUsuarios(PKUsuario, NombreCompleto, Correo, Telefono, Contrasena, FKResidencia) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "ActualizarUsuario";
            let Model = {
                PKUsuario: PKUsuario,
                NombreCompleto: NombreCompleto,
                Correo: Correo,
                Telefono: Telefono,
                Contrasena: Contrasena,
                FKResidencia: FKResidencia
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
    EliminarUsuarios(PKUsuario) {
        let usuario = new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                    "Content-type": "application/json"
                })
            };
            let url = this.url_principal + "EliminarUsuario";
            let Model = {
                PKUsuario: PKUsuario
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
UsuarioProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigProvider,
        TipoPeticionControllerProvider])
], UsuarioProvider);
export { UsuarioProvider };
//# sourceMappingURL=usuariosProviders.js.map
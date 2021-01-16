import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { NavController, AlertController } from '@ionic/angular';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';
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
                    this._usuProv.CrearUsuarios(this.NombreCompleto, this.Correo, this.Telefono, this.Contrasena, this.PKResidencia, this.FKNivel, this.FKMenuBandera).then(result => {
                        console.log(result);
                        this.navCtrl.pop();
                    }).catch(error => {
                        console.log(error);
                    });
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Contraseña',
                message: 'Las contraseña no coinciden',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    MensajeFalta() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
};
PageAdministradorUsuariosRegistroPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-administrador-usuarios-registro',
        templateUrl: './page-administrador-usuarios-registro.page.html',
        styleUrls: ['./page-administrador-usuarios-registro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        UsuarioProvider,
        NavController,
        AlertController,
        ResidenciasProvider])
], PageAdministradorUsuariosRegistroPage);
export { PageAdministradorUsuariosRegistroPage };
//# sourceMappingURL=page-administrador-usuarios-registro.page.js.map
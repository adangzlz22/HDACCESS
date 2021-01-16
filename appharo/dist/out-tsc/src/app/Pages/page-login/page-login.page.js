import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioProvider } from '../../providers/usuarios/usuariosProviders';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
let PageLoginPage = class PageLoginPage {
    constructor(_login, navCtrl, loadCtrl, alertCtrl) {
        this._login = _login;
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.DatosUsuarios = [];
        console.log('Hola Soy page login');
    }
    ngOnInit() {
    }
    Login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadCtrl.create({
                message: 'Iniciando sesion',
                duration: 2000
            });
            yield loading.present();
            this._login.Login(this.Correo, this.Contrasena).then(result => {
                if (result['Model'] != "[]") {
                    loading.onDidDismiss();
                    this.DatosUsuarios = JSON.parse(result['Model']);
                    console.log(this.DatosUsuarios[0]['FKNivel']);
                    this._login.PKUsuario = this.DatosUsuarios[0]['PKUsuario'];
                    this._login.PKNivel = this.DatosUsuarios[0]['FKNivel'];
                    this._login.PKMenuBandera = this.DatosUsuarios[0]['FKMenuBandera'];
                    this._login.NombreCompleto = this.DatosUsuarios[0]['NombreCompleto'];
                    this._login.Correo = this.DatosUsuarios[0]['Correo'];
                    this._login.Telefono = this.DatosUsuarios[0]['Telefono'];
                    this._login.FKResidencia = this.DatosUsuarios[0]['FKResidencia'];
                    this._login.NombreResidencia = this.DatosUsuarios[0]['NombreResidencia'];
                    this._login.GeneradorCodigos = this.DatosUsuarios[0]['GeneradorCodigos'];
                    this._login.WhatsappCorreo = this.DatosUsuarios[0]['WhatsappCorreo'];
                    console.log('Te has logeado');
                    this.navCtrl.navigateRoot('page-cliente-dashboard');
                }
                else {
                    this.Mensaje();
                    console.log('no te has logeado');
                }
            }).catch(Error => { console.log(Error); });
        });
    }
    Mensaje() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Inicio de sesion',
                message: 'Tus datos son incorrectos',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PageLoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-login',
        templateUrl: './page-login.page.html',
        styleUrls: ['./page-login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UsuarioProvider,
        NavController,
        LoadingController,
        AlertController])
], PageLoginPage);
export { PageLoginPage };
//# sourceMappingURL=page-login.page.js.map
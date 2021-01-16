import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { MenuProvider } from '../providers/Menu/menuProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { ConfigProvider } from '../Config/config';
let PageClienteDashboardPage = class PageClienteDashboardPage {
    constructor(popover, _MenuPro, _UsuPro, navCtrl, config) {
        this.popover = popover;
        this._MenuPro = _MenuPro;
        this._UsuPro = _UsuPro;
        this.navCtrl = navCtrl;
        this.config = config;
        this.ApareceImagen = true;
        this.DatosMenu = [];
        console.log(this._UsuPro.PKNivel);
        if (this._UsuPro.PKUsuario == 0 || this._UsuPro.PKUsuario == undefined) {
            this.navCtrl.navigateRoot('page-login');
        }
        if (this._UsuPro.PKNivel == 0 || this._UsuPro.PKNivel == undefined || this._UsuPro.PKNivel == 2) {
            this.ApareceImagen = false;
        }
    }
    ngOnInit() {
        this.NombreResidencia = this._UsuPro.NombreResidencia;
        if (this._UsuPro.PKNivel == 1 || this._UsuPro.PKNivel != undefined) {
            this.ObtenerImagen();
        }
        this.ObtenerMenu();
    }
    CreatePopOver(evento) {
        this.popover.create({ component: PopovercomponentPage,
            showBackdrop: false,
            event: evento,
        }).then((popoverelement => {
            popoverelement.present();
        }));
    }
    ObtenerMenu() {
        this._MenuPro.ObtenerMenu(this._UsuPro.PKMenuBandera).then(result => {
            let item = JSON.parse(result['Model']);
            for (let index = 0; index < item.length; index++) {
                if (this._UsuPro.GeneradorCodigos == false) {
                    const item1 = {
                        Orden: item[index].Orden,
                        Opcion1: item[index].Opcion1,
                        Icono: item[index].Icono
                    };
                    if (item[index].Opcion1 != 'Generador de codigos de barra') {
                        this.DatosMenu.push(item1);
                    }
                }
                else {
                    const item1 = {
                        Orden: item[index].Orden,
                        Opcion1: item[index].Opcion1,
                        Icono: item[index].Icono
                    };
                    this.DatosMenu.push(item1);
                }
            }
            console.log(this.DatosMenu);
        }).catch(Error => {
            console.log(Error);
        });
    }
    Direccion(item) {
        if (this._UsuPro.FKResidencia == 0) {
            this.FKResidencia = -1;
        }
        else {
            this.FKResidencia = this._UsuPro.FKResidencia;
        }
        if (item.Opcion1 == "Visitas de un solo uso") {
            this.navCtrl.navigateForward(`page-cliente-un-solo-uso/${1}`);
        }
        if (item.Opcion1 == "Visitas frecuentes") {
            this.navCtrl.navigateForward(`page-cliente-un-solo-uso/${2}`);
        }
        if (item.Opcion1 == "Acerca de") {
            this.navCtrl.navigateRoot('page-acerca-de');
        }
        if (item.Opcion1 == "Residencias") {
            this.navCtrl.navigateRoot('page-administrador-residencias');
        }
        if (item.Opcion1 == "Administrador") {
            this.navCtrl.navigateForward(`page-administrador-usuarios/${this._UsuPro.PKUsuario}/${0}/${this.FKResidencia}`);
        }
        if (item.Opcion1 == "Residentes") {
            this.navCtrl.navigateForward(`page-administrador-usuarios/${this._UsuPro.PKUsuario}/${1}/${this.FKResidencia}`);
        }
        if (item.Opcion1 == "Roles") {
            this.navCtrl.navigateRoot('page-administrador-roles');
        }
        if (item.Opcion1 == 'Pagos') {
            let page = '', msgError = 'no hay pagina de pagos para este tipo de usuario';
            this._UsuPro.PKMenuBandera == 0 ? page = 'pagoEfectivo' :
                this._UsuPro.PKMenuBandera == 1 ? page = 'pagoMP' : console.warn(msgError);
            page ? this.navCtrl.navigateRoot(page) : console.warn(msgError);
        }
        if (item.Opcion1 == 'Reportes') {
            this.navCtrl.navigateRoot('reporte');
        }
        if (item.Opcion1 == 'EstadoCuenta') {
            this.navCtrl.navigateRoot('EstadoCuenta');
        }
        if (item.Opcion1 == 'Buzon de queja' && this._UsuPro.PKNivel == 1) {
            this.navCtrl.navigateForward(`mis-quejas/${this._UsuPro.PKUsuario}/${this.FKResidencia}`);
        }
        if (item.Opcion1 == 'Buzon de queja' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward(`buzon-de-quejas/${this.FKResidencia}`);
        }
        if (item.Opcion1 == 'Area Comun' && this._UsuPro.PKNivel == 1) {
            this.navCtrl.navigateForward(`ver-area-comun-residente/${this.FKResidencia}/${this._UsuPro.PKNivel}`);
        }
        if (item.Opcion1 == 'Asignar Area Comun' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward(`ver-area-comun-residente/${this.FKResidencia}/${this._UsuPro.PKNivel}`);
        }
        if (item.Opcion1 == 'Generador de codigos de barra' && this._UsuPro.PKNivel == 0) {
            this.navCtrl.navigateForward(`generador-codigos/${this.FKResidencia}`);
        }
    }
    ObtenerImagen() {
        return this.config.APIURLCODIGOS + "Codigos/ObtenerImagen?PKUsuario=" + this._UsuPro.PKUsuario;
    }
};
PageClienteDashboardPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-cliente-dashboard',
        templateUrl: './page-cliente-dashboard.page.html',
        styleUrls: ['./page-cliente-dashboard.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController,
        MenuProvider,
        UsuarioProvider,
        NavController,
        ConfigProvider])
], PageClienteDashboardPage);
export { PageClienteDashboardPage };
//# sourceMappingURL=page-cliente-dashboard.page.js.map
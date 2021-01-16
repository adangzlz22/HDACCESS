import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
let PopovercomponentPage = class PopovercomponentPage {
    constructor(popover, navCtrl, _usuPriv) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this._usuPriv = _usuPriv;
    }
    ngOnInit() {
        if (this._usuPriv.PKUsuario == 0 || this._usuPriv.PKUsuario == undefined) {
            this.navCtrl.navigateRoot('page-login');
        }
    }
    ClosePopover() {
        this.popover.dismiss();
    }
    Perfil() {
        this.navCtrl.navigateForward(`page-cliente-perfil/${this._usuPriv.NombreCompleto}+'/'+${this._usuPriv.Correo}+'/'+${this._usuPriv.Telefono}`);
        this.popover.dismiss();
    }
    CerrarCesion() {
        this._usuPriv.PKUsuario = 0;
        this.navCtrl.navigateRoot('page-login');
        this.popover.dismiss();
    }
};
PopovercomponentPage = tslib_1.__decorate([
    Component({
        selector: 'app-popovercomponent',
        templateUrl: './popovercomponent.page.html',
        styleUrls: ['./popovercomponent.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController,
        NavController,
        UsuarioProvider])
], PopovercomponentPage);
export { PopovercomponentPage };
//# sourceMappingURL=popovercomponent.page.js.map
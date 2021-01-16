import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';
import { NavController } from '@ionic/angular';
let PageAdministradorResidenciasPage = class PageAdministradorResidenciasPage {
    constructor(_resiProv, navCtrl) {
        this._resiProv = _resiProv;
        this.navCtrl = navCtrl;
        this.DatosResidencias = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.NombreResidencia = '';
        this.ObtenerResidencias();
    }
    ObtenerResidencias() {
        this._resiProv.ObtenerResidencias(this.NombreResidencia).then(result => {
            this.DatosResidencias = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    Actualizar(item) {
        this.navCtrl.navigateForward(`page-administrador-residencias-registro/${item.PKResidencia}/${item.NombreResidencia}/${item.LimVisitasFrecuentes}/${item.LimVisitasUnSoloUso}/${item.FKDiasActivados}`);
    }
    AgregarNuevo() {
        this.navCtrl.navigateForward(`page-administrador-residencias-registro/${0}/${0}/${0}/${0}/${0}`);
    }
};
PageAdministradorResidenciasPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-administrador-residencias',
        templateUrl: './page-administrador-residencias.page.html',
        styleUrls: ['./page-administrador-residencias.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ResidenciasProvider,
        NavController])
], PageAdministradorResidenciasPage);
export { PageAdministradorResidenciasPage };
//# sourceMappingURL=page-administrador-residencias.page.js.map
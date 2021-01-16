import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VisitaProvider } from '../providers/Visitas/visitaProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
let PageClienteFrecuentesPage = class PageClienteFrecuentesPage {
    constructor(_VisPro, _UsuPro) {
        this._VisPro = _VisPro;
        this._UsuPro = _UsuPro;
        this.DatosVisitas = [];
    }
    ngOnInit() {
        this.ObtenerVisitas();
    }
    ObtenerVisitas() {
        console.log('HOLA');
        this._VisPro.ObtenerVisitas(2, this._UsuPro.PKUsuario, -1).then(result => {
            this.DatosVisitas = JSON.parse(result['Model']);
            console.log(this.DatosVisitas);
            this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasFrecuentes'] - this.DatosVisitas[0]['SumaVisitasFrecuentes'];
        }).catch(Error => {
            console.log(Error);
        });
    }
};
PageClienteFrecuentesPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-cliente-frecuentes',
        templateUrl: './page-cliente-frecuentes.page.html',
        styleUrls: ['./page-cliente-frecuentes.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [VisitaProvider,
        UsuarioProvider])
], PageClienteFrecuentesPage);
export { PageClienteFrecuentesPage };
//# sourceMappingURL=page-cliente-frecuentes.page.js.map
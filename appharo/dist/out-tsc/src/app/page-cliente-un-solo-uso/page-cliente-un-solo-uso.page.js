import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VisitaProvider } from '../providers/Visitas/visitaProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
let PageClienteUnSoloUsoPage = class PageClienteUnSoloUsoPage {
    constructor(_VisPro, _UsuPro, navCtrl, route, alertCtrl) {
        this._VisPro = _VisPro;
        this._UsuPro = _UsuPro;
        this.navCtrl = navCtrl;
        this.route = route;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Pagina = 0;
        this.Pagina = this.route.snapshot.paramMap.get('Pagina');
        console.log(this.route.snapshot.paramMap.get('Pagina'));
        console.log(this.Pagina);
        this.TipoVisita = 0;
        this.NombreDePagina = '';
        if (parseInt(this.Pagina) === 1) {
            this.TipoVisita = 1;
            console.log('entraste a codigos de un solo uso');
            this.NombreDePagina = 'Codigos de un solo uso';
        }
        if (parseInt(this.Pagina) === 2) {
            this.TipoVisita = 2;
            this.NombreDePagina = 'Visitas frecuentes';
        }
        this.ObtenerVisitas();
    }
    ObtenerVisitas() {
        console.log('HOLA');
        this._VisPro.ObtenerVisitas(this.TipoVisita, this._UsuPro.PKUsuario, -1).then(result => {
            this.DatosVisitas = [];
            this.DatosVisitas = JSON.parse(result['Model']);
            console.log(this.DatosVisitas);
            this.numeroDeVisitas = 20;
            console.log(this.DatosVisitas.length);
            if (parseInt(this.Pagina) === 1) {
                if (this.DatosVisitas.length > 0) {
                    this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasUnSoloUso'] - this.DatosVisitas[0]['Registros'];
                }
            }
            if (parseInt(this.Pagina) === 2) {
                if (this.DatosVisitas.length > 0) {
                    this.numeroDeVisitas = this.DatosVisitas[0]['LimVisitasFrecuentes'] - this.DatosVisitas[0]['Registros'];
                }
            }
        }).catch(Error => {
            console.log(Error);
        });
    }
    DirigirVentanaRegistro(obj) {
        this.navCtrl.navigateForward(`page-cliente-un-solo-uso-registro/${obj.PKVisita}/${this.TipoVisita}`);
    }
    AgregarRegistro() {
        if (this.numeroDeVisitas > 0) {
            this.navCtrl.navigateForward(`page-cliente-un-solo-uso-registro/${0}/${this.TipoVisita}`);
        }
        else {
            this.Mensaje();
        }
    }
    Mensaje() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: 'Usuario',
                message: 'Has alcanzado el maximo de registros.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PageClienteUnSoloUsoPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-cliente-un-solo-uso',
        templateUrl: './page-cliente-un-solo-uso.page.html',
        styleUrls: ['./page-cliente-un-solo-uso.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [VisitaProvider,
        UsuarioProvider,
        NavController,
        ActivatedRoute,
        AlertController])
], PageClienteUnSoloUsoPage);
export { PageClienteUnSoloUsoPage };
//# sourceMappingURL=page-cliente-un-solo-uso.page.js.map
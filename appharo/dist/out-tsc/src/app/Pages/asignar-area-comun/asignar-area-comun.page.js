import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AreaComun } from 'src/app/providers/AreaComun/AreaComun';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
let AsignarAreaComunPage = class AsignarAreaComunPage {
    constructor(navCtrl, route, areaComunProvider, usuario) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.areaComunProvider = areaComunProvider;
        this.usuario = usuario;
        this.pago = {
            total: 0,
            tipo: '',
            FKUsuario: 0,
            origen: 'asignar-area-comun'
        };
        this.NombreCompleto = '';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['pago']) {
                this.pago = JSON.parse(params['pago']);
                console.log(this.pago);
                this.NombreCompleto = this.pago['userObj'].NombreCompleto;
            }
        });
    }
    ionViewWillEnter() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
    }
    CrearAreaComun() {
        this.Horario = this.FormatearHora(this.HorarioInicial) + ' a ' + this.FormatearHora(this.HorarioFinal);
        this.areaComunProvider.CrearAreaComun(this.FechaAsignacion, this.Horario, this.Descripcion, this.pago.FKUsuario, this.usuario.FKResidencia).then(result => {
            console.log(result);
            this.navCtrl.navigateRoot('page-cliente-dashboard');
        }).catch(err => {
            console.log(err);
        });
    }
    FormatearHora(VariableHora) {
        var RegresarHora = '';
        var hora = VariableHora.split('T');
        var Minutos = hora[1].split(':');
        RegresarHora = Minutos[0] + ':' + Minutos[1];
        return RegresarHora;
    }
    Cancelar() {
        this.navCtrl.pop();
    }
    buscarResidente() {
        const navigationExtras = {
            queryParams: {
                pago: JSON.stringify(this.pago),
            }
        };
        // this.modalCtrl.create(BuscadorResidenteComponent ).present();
        this.navCtrl.navigateForward(`buscarResidente/${this.usuario.PKUsuario}`, navigationExtras).then((response) => {
        });
    }
};
AsignarAreaComunPage = tslib_1.__decorate([
    Component({
        selector: 'app-asignar-area-comun',
        templateUrl: './asignar-area-comun.page.html',
        styleUrls: ['./asignar-area-comun.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ActivatedRoute,
        AreaComun,
        UsuarioProvider])
], AsignarAreaComunPage);
export { AsignarAreaComunPage };
//# sourceMappingURL=asignar-area-comun.page.js.map
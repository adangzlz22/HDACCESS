import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';
let EstadoCuentaComponent = class EstadoCuentaComponent {
    constructor(navCtrl, modalCtrl, route, cdRef, alertCtrl, pagoProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.cdRef = cdRef;
        this.alertCtrl = alertCtrl;
        this.pagoProvider = pagoProvider;
        this.registros = [];
        // Origen
        this.origen = 0;
    }
    ngOnInit() {
        this.pagoProvider.obtenerAnos().toPromise().then((res) => {
            if (res.resultado) {
                this.anos = res.resultado;
                this.anoSeleccionado = this.anos[0];
            }
            else {
                console.error('obtenerAnos()', res.mensajeError);
            }
        }).finally(() => {
            this.route.queryParams.subscribe(params => {
                if (params.usuario) {
                    this.usuario = JSON.parse(params.usuario);
                }
            });
            if (history.state.data) {
                this.origen = 2;
                this.anoSeleccionado = history.state.data.Ano;
                this.usuario = { PKUsuario: history.state.data.PKUSUARIO };
            }
            this.obtener(null);
        });
    }
    obtener(e) {
        /*
        usuario
        residencia
        fechacreacion
        fechaExpiracion
        fechaPago
        total
        */
        if (this.origen == 0) {
            this.anoSeleccionado = e.detail.value;
        }
        console.log('estoy en obtener', {
            // tslint:disable-next-line: radix
            Ano: this.anoSeleccionado,
            // tslint:disable-next-line: radix
            IdUsuario: this.usuario.PKUsuario,
        });
        this.pagoProvider.estadoCuenta({
            // tslint:disable-next-line: radix
            Ano: this.anoSeleccionado,
            // tslint:disable-next-line: radix
            IdUsuario: this.usuario.PKUsuario.toString(),
        }).subscribe((obj) => {
            if (obj.mensajeError) {
                console.warn(obj.mensajeError);
            }
            console.log('', obj);
            this.registros = obj.resultado;
        });
    }
};
EstadoCuentaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-estado-cuenta',
        templateUrl: './estado-cuenta.component.html',
        styleUrls: ['./estado-cuenta.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ModalController,
        ActivatedRoute,
        ChangeDetectorRef,
        AlertController,
        PagosControllerProvider])
], EstadoCuentaComponent);
export { EstadoCuentaComponent };
//# sourceMappingURL=estado-cuenta.component.js.map
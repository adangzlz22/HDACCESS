import * as tslib_1 from "tslib";
import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';
import { SuscripcionesControllerProvider } from 'src/app/providers/Suscripciones/suscripcionesProvider';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
let PagosEfectivoComponent = class PagosEfectivoComponent {
    constructor(pagosProvider, suscripciones, navCtrl, usuario, modalCtrl, route, cdRef, alertCtrl) {
        this.pagosProvider = pagosProvider;
        this.suscripciones = suscripciones;
        this.navCtrl = navCtrl;
        this.usuario = usuario;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.cdRef = cdRef;
        this.alertCtrl = alertCtrl;
        this.pago = {
            total: 0,
            tipo: 0,
            FKUsuario: 0
        };
        this.userName = 'No seleccionado';
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['pago']) {
                const objTmp = JSON.parse(params['pago']);
                this.pago.FKUsuario = objTmp.FKUsuario;
                this.pago.tipo = objTmp.tipo;
                this.pago.total = objTmp.total;
                // Nombre
                const nameUser = objTmp.userObj.NombreCompleto.split(' ');
                this.userName = nameUser[0];
            }
        });
        this.obtenesTipos();
    }
    obtenesTipos() {
        this.suscripciones.cargarTipos().subscribe((response) => {
            // console.log(val);
            if (response.mensajeError) {
                console.warn(response.mensajeError);
            }
            console.log(response);
            this.tiposSuscripciones = response.resultado;
        }, Error => {
            console.log('POST call in Agregar', Error);
            if (Error != undefined) {
                console.warn(Error);
            }
        });
    }
    setTotal() {
        this.pago.tipo = this.tipoSeleccionado.value.idCatTipoSuscripcion;
        this.pago.total = this.tipoSeleccionado.value.costo;
    }
    pagar() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.pago.FKUsuario) {
                return null;
            }
            const pagos = {
                FKUsuario: this.pago.FKUsuario,
                IdCatTipoPago: 1,
                IdCatTipoSuscripcion: this.pago.tipo,
                IdUsuarioCreacion: this.usuario.PKUsuario,
                Total: this.pago.total
            };
            const alert = yield this.alertCtrl.create({
                header: 'Pagar!',
                message: '<strong>Confirmar pago</strong>',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.pagosProvider.Agregar(pagos).subscribe((response) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                // console.log(val);
                                if (response.mensajeError) {
                                    console.warn(response.mensajeError);
                                }
                                else {
                                    const alert = yield this.alertCtrl.create({
                                        header: 'Exito!',
                                        message: '<strong>Se realizado su pago con exito</strong>',
                                        buttons: [
                                            {
                                                text: 'Aceptar',
                                                handler: () => {
                                                    this.navCtrl.navigateRoot('page-cliente-dashboard');
                                                }
                                            }
                                        ]
                                    });
                                    yield alert.present();
                                }
                            }), Error => {
                                console.log('POST call in Agregar', Error);
                                if (Error != undefined) {
                                    console.warn(Error);
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openOtherPage() {
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
tslib_1.__decorate([
    ViewChild('tipoSeleccionado', { static: true }),
    tslib_1.__metadata("design:type", Object)
], PagosEfectivoComponent.prototype, "tipoSeleccionado", void 0);
PagosEfectivoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pagos-efectivo',
        templateUrl: './pagos-efectivo.component.html',
        styleUrls: ['./pagos-efectivo.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PagosControllerProvider, SuscripcionesControllerProvider,
        NavController,
        UsuarioProvider,
        ModalController,
        ActivatedRoute,
        ChangeDetectorRef,
        AlertController])
], PagosEfectivoComponent);
export { PagosEfectivoComponent };
//# sourceMappingURL=pagos-efectivo.component.js.map
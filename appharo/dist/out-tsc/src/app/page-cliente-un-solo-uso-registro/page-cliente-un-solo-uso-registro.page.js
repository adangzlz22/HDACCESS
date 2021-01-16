import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { VisitaProvider } from '../providers/Visitas/visitaProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
let PageClienteUnSoloUsoRegistroPage = class PageClienteUnSoloUsoRegistroPage {
    constructor(route, VisPro, alertCtrl, navCtrl, _UsuPro, loadCtrl) {
        this.route = route;
        this.VisPro = VisPro;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this._UsuPro = _UsuPro;
        this.loadCtrl = loadCtrl;
        this.DatosVisitas = [];
        this.evento = {
            NombreCompleto: '',
            Descripcion: '',
            TelefonoOCorreo: '',
        };
        this.verBtnEliminar = false;
    }
    ionViewWillEnter() {
        this.PKVisita = this.route.snapshot.paramMap.get('PKVisita');
        this.TipoVisita = this.route.snapshot.paramMap.get('TipoVisita');
        this.WhatCorreo = this._UsuPro.WhatsappCorreo;
        if (parseInt(this.TipoVisita) === 1) {
            if (parseInt(this.PKVisita) >= 1) {
                this.NombrePagina = 'Modificar visita un solo uso';
            }
            else {
                this.NombrePagina = 'Agregar visita un solo uso';
            }
        }
        if (parseInt(this.TipoVisita) === 2) {
            if (parseInt(this.PKVisita) >= 1) {
                this.NombrePagina = 'Modificar visita frecuentes';
            }
            else {
                this.NombrePagina = 'Agregar visita frecuentes';
            }
        }
        if (this.PKVisita >= 1) {
            this.ObtenerVisitas();
            this.verBtnEliminar = true;
        }
        else {
            this.verBtnEliminar = false;
        }
    }
    ngOnInit() {
    }
    Eliminar() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.VisPro.EliminarVisita(parseInt(this.PKVisita)).then(result => {
            });
        });
    }
    ObtenerVisitas() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.VisPro.ObtenerVisitas(parseInt(this.TipoVisita), this._UsuPro.PKUsuario, parseInt(this.PKVisita)).then(result => {
                this.DatosVisitas = JSON.parse(result['Model']);
                this.evento.NombreCompleto = this.DatosVisitas[0]['NombreCompleto'];
                this.evento.Descripcion = this.DatosVisitas[0]['Descripcion'];
                this.evento.TelefonoOCorreo = this.DatosVisitas[0]['TelefonoOCorreo'];
            }).catch(Error => {
                console.log(Error);
            });
        });
    }
    Mensajes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Eliminar!',
                message: '<strong>Esta seguro de Eliminar?</strong>!!!',
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
                            this.Eliminar();
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Guardar() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.evento.NombreCompleto != "" && this.evento.TelefonoOCorreo != "") {
                const loading = yield this.loadCtrl.create({
                    message: 'Espere unos momentos para guardar...',
                    duration: 2000
                });
                yield loading.present();
                if (this.PKVisita >= 1) {
                    yield this.VisPro.ActualizarVisita(this.PKVisita, this.evento.NombreCompleto, this.evento.TelefonoOCorreo, this.evento.Descripcion, this.WhatCorreo).then(result => {
                        loading.onDidDismiss();
                        this.navCtrl.pop();
                        console.log(result);
                    }).catch(Error => {
                        console.log(Error);
                    });
                }
                else {
                    yield this.VisPro.CrearVisita(this._UsuPro.PKUsuario, parseInt(this.TipoVisita), this.evento.NombreCompleto, this.evento.TelefonoOCorreo, this.evento.Descripcion, this.WhatCorreo).then(result => {
                        loading.onDidDismiss();
                        this.navCtrl.pop();
                        console.log(result);
                    }).catch(Error => {
                        console.log(Error);
                    });
                }
            }
            else {
                this.Mensaje();
            }
        });
    }
    Mensaje() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Datos',
                message: 'Necesario Introducir telefono y nombre completo',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
PageClienteUnSoloUsoRegistroPage = tslib_1.__decorate([
    Component({
        selector: 'app-page-cliente-un-solo-uso-registro',
        templateUrl: './page-cliente-un-solo-uso-registro.page.html',
        styleUrls: ['./page-cliente-un-solo-uso-registro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        VisitaProvider,
        AlertController,
        NavController,
        UsuarioProvider,
        LoadingController])
], PageClienteUnSoloUsoRegistroPage);
export { PageClienteUnSoloUsoRegistroPage };
//# sourceMappingURL=page-cliente-un-solo-uso-registro.page.js.map
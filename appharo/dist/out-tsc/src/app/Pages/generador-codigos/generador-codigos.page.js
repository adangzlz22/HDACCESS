import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { ActivatedRoute } from '@angular/router';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';
import { GeneradorProvider } from 'src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider';
let GeneradorCodigosPage = class GeneradorCodigosPage {
    constructor(alertCtrl, usuProv, navCtrl, route, residenciaPriv, generadorProvider) {
        this.alertCtrl = alertCtrl;
        this.usuProv = usuProv;
        this.navCtrl = navCtrl;
        this.route = route;
        this.residenciaPriv = residenciaPriv;
        this.generadorProvider = generadorProvider;
    }
    ngOnInit() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.ObtenerResidencias();
        this.Nivel = this.usuProv.PKNivel;
    }
    ObtenerResidencias() {
        this.residenciaPriv.ObtenerResidencias('').then(result => {
            this.lstResidencias = JSON.parse(result['Model']);
        }).catch(error => {
            console.log(error);
        });
    }
    GenerarCodigoDeBarras() {
        if (this.Nivel == 0) {
            this.generadorProvider.GenerarCodigosDeBarra(this.FKResidencia).then(result => {
            }).catch(erro => {
                console.log(erro);
            });
        }
        if (this.Nivel == 2) {
            if (this.PKResidencia == 0 || this.PKResidencia == undefined) {
                this.Mensaje();
            }
            else {
                this.generadorProvider.GenerarCodigosDeBarra(this.PKResidencia).then(result => {
                }).catch(erro => {
                    console.log(erro);
                });
            }
        }
    }
    Mensaje() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Generador de codigos',
                subHeader: 'Atencion',
                message: 'Favor de seleccionar una residencia.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
GeneradorCodigosPage = tslib_1.__decorate([
    Component({
        selector: 'app-generador-codigos',
        templateUrl: './generador-codigos.page.html',
        styleUrls: ['./generador-codigos.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        UsuarioProvider,
        NavController,
        ActivatedRoute,
        ResidenciasProvider,
        GeneradorProvider])
], GeneradorCodigosPage);
export { GeneradorCodigosPage };
//# sourceMappingURL=generador-codigos.page.js.map
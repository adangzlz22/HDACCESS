import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';
let MisQuejasPage = class MisQuejasPage {
    constructor(route, buzonProviders, navCtrl) {
        this.route = route;
        this.buzonProviders = buzonProviders;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.FKUsuario = this.route.snapshot.paramMap.get('FKUsuario');
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.ObtenerBuzonDeQuejas();
    }
    ObtenerBuzonDeQuejas() {
        this.buzonProviders.ObtenerBuzonDeQueja(this.FKUsuario, this.FKResidencia, -1).then(result => {
            this.lstMisQuejas = JSON.parse(result['Model']);
            console.log(this.lstMisQuejas);
        }).catch(err => {
            console.log(err);
        });
    }
    AgregarQueja() {
        this.navCtrl.navigateForward(`buzon-de-quejas-residente/${this.FKUsuario}/${this.FKResidencia}`);
    }
    VerDetalles(item) {
        this.navCtrl.navigateForward(`detalles-buzon-de-quejas/${item.NombreCompleto}/${item.Telefono}/${item.Tipo}/${item.DescripcionArea}/${item.FechaAsignacion}`);
    }
};
MisQuejasPage = tslib_1.__decorate([
    Component({
        selector: 'app-mis-quejas',
        templateUrl: './mis-quejas.page.html',
        styleUrls: ['./mis-quejas.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        BuzonDeQuejas,
        NavController])
], MisQuejasPage);
export { MisQuejasPage };
//# sourceMappingURL=mis-quejas.page.js.map
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';
let BuzonDeQuejasResidentePage = class BuzonDeQuejasResidentePage {
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
    }
    CrearBuzonDeQuejas() {
        this.buzonProviders.CrearBuzonDeQuejas(this.FKUsuario, this.FKResidencia, this.Tipo, this.Descripcion).then(r => {
            this.navCtrl.pop();
            console.log(r);
        }).catch(err => {
            console.log(err);
        });
    }
};
BuzonDeQuejasResidentePage = tslib_1.__decorate([
    Component({
        selector: 'app-buzon-de-quejas-residente',
        templateUrl: './buzon-de-quejas-residente.page.html',
        styleUrls: ['./buzon-de-quejas-residente.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        BuzonDeQuejas,
        NavController])
], BuzonDeQuejasResidentePage);
export { BuzonDeQuejasResidentePage };
//# sourceMappingURL=buzon-de-quejas-residente.page.js.map
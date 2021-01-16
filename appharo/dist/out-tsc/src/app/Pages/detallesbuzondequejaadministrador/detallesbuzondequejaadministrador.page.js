import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
let DetallesbuzondequejaadministradorPage = class DetallesbuzondequejaadministradorPage {
    constructor(route, navCtrl, buzonPrivder) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.buzonPrivder = buzonPrivder;
    }
    ngOnInit() {
        this.PKBuzonDeQueja = this.route.snapshot.paramMap.get('PKBuzonDeQueja');
        this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
        this.Telefono = this.route.snapshot.paramMap.get('Telefono');
        this.Tipo = this.route.snapshot.paramMap.get('Tipo');
        this.DescripcionArea = this.route.snapshot.paramMap.get('DescripcionArea');
        this.DescripcionEstatus = this.route.snapshot.paramMap.get('DescripcionEstatus');
        this.Estatus = this.route.snapshot.paramMap.get('Estatus');
    }
    Guardar() {
        this.buzonPrivder.Guardar(this.PKBuzonDeQueja, this.Estatus).then(result => {
            console.log(result);
            this.navCtrl.pop();
        }).catch(err => {
            console.log(err);
        });
    }
    Cancelar() {
        this.navCtrl.pop();
    }
};
DetallesbuzondequejaadministradorPage = tslib_1.__decorate([
    Component({
        selector: 'app-detallesbuzondequejaadministrador',
        templateUrl: './detallesbuzondequejaadministrador.page.html',
        styleUrls: ['./detallesbuzondequejaadministrador.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        NavController,
        BuzonDeQuejas])
], DetallesbuzondequejaadministradorPage);
export { DetallesbuzondequejaadministradorPage };
//# sourceMappingURL=detallesbuzondequejaadministrador.page.js.map
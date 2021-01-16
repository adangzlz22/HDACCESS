import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AreaComun } from 'src/app/providers/AreaComun/AreaComun';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
let VerAreaComunResidentePage = class VerAreaComunResidentePage {
    constructor(AreaProvider, navCtrl, route) {
        this.AreaProvider = AreaProvider;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
        this.ObtenerMesAreaComun();
    }
    ObtenerMesAreaComun() {
        this.AreaProvider.ObtenerMesAreaComun().then(result => {
            this.lstMes = JSON.parse(result['Model']);
        }).catch(err => {
            console.log(err);
        });
    }
    ObtenerAreaComun(item) {
        this.navCtrl.navigateForward(`detalles-area-comun/${this.FKResidencia}/${this.FKNivel}/${item.Fecha}`);
    }
};
VerAreaComunResidentePage = tslib_1.__decorate([
    Component({
        selector: 'app-ver-area-comun-residente',
        templateUrl: './ver-area-comun-residente.page.html',
        styleUrls: ['./ver-area-comun-residente.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AreaComun,
        NavController,
        ActivatedRoute])
], VerAreaComunResidentePage);
export { VerAreaComunResidentePage };
//# sourceMappingURL=ver-area-comun-residente.page.js.map
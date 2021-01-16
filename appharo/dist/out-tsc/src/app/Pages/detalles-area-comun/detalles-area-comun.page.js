import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaComun } from 'src/app/providers/AreaComun/AreaComun';
import { NavController } from '@ionic/angular';
let DetallesAreaComunPage = class DetallesAreaComunPage {
    constructor(route, AreaProvider, navCtrl) {
        this.route = route;
        this.AreaProvider = AreaProvider;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
        this.Fecha = this.route.snapshot.paramMap.get('Fecha');
        this.ObtenerAreaComun();
    }
    ObtenerAreaComun() {
        this.AreaProvider.ObtenerAreaComun(this.FKResidencia, this.Fecha).then(result => {
            this.lstAreaComun = JSON.parse(result['Model']);
        }).catch(err => {
            console.log(err);
        });
    }
    AsignarAreaComun() {
        this.navCtrl.navigateForward(`asignar-area-comun/${this.FKResidencia}`);
    }
};
DetallesAreaComunPage = tslib_1.__decorate([
    Component({
        selector: 'app-detalles-area-comun',
        templateUrl: './detalles-area-comun.page.html',
        styleUrls: ['./detalles-area-comun.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        AreaComun,
        NavController])
], DetallesAreaComunPage);
export { DetallesAreaComunPage };
//# sourceMappingURL=detalles-area-comun.page.js.map
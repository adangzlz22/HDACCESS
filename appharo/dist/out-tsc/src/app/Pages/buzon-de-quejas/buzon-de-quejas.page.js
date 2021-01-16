import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
let BuzonDeQuejasPage = class BuzonDeQuejasPage {
    constructor(buzonProvider, navCtrl, route) {
        this.buzonProvider = buzonProvider;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.Estatus = -1;
        this.FKUsuario = -1;
        this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
        // this.ObtenerBuzonDeQuejas();
    }
    onChange(event) {
        this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario, this.FKResidencia, this.Estatus).then(result => {
            this.lstMisQuejas = JSON.parse(result['Model']);
            console.log(this.lstMisQuejas);
        }).catch(err => {
            console.log(err);
        });
    }
    // ObtenerBuzonDeQuejas(){
    //   this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario,this.FKResidencia,this.Estatus).then(result=>{
    //     this.lstMisQuejas=JSON.parse(result['Model']);
    //     console.log(this.lstMisQuejas);
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // }
    VerDetalles(item) {
        this.navCtrl.navigateForward(`detallesbuzondequejaadministrador/${item.PKBuzonDeQueja}/${item.NombreCompleto}/${item.Telefono}/${item.Tipo}/${item.DescripcionArea}/${item.FechaAsignacion}/${item.Estatus}`);
    }
};
BuzonDeQuejasPage = tslib_1.__decorate([
    Component({
        selector: 'app-buzon-de-quejas',
        templateUrl: './buzon-de-quejas.page.html',
        styleUrls: ['./buzon-de-quejas.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [BuzonDeQuejas,
        NavController,
        ActivatedRoute])
], BuzonDeQuejasPage);
export { BuzonDeQuejasPage };
//# sourceMappingURL=buzon-de-quejas.page.js.map
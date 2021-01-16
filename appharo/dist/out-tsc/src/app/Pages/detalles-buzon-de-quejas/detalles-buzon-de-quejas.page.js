import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let DetallesBuzonDeQuejasPage = class DetallesBuzonDeQuejasPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
        this.Telefono = this.route.snapshot.paramMap.get('Telefono');
        this.Tipo = this.route.snapshot.paramMap.get('Tipo');
        this.DescripcionArea = this.route.snapshot.paramMap.get('DescripcionArea');
        this.DescripcionEstatus = this.route.snapshot.paramMap.get('DescripcionEstatus');
    }
};
DetallesBuzonDeQuejasPage = tslib_1.__decorate([
    Component({
        selector: 'app-detalles-buzon-de-quejas',
        templateUrl: './detalles-buzon-de-quejas.page.html',
        styleUrls: ['./detalles-buzon-de-quejas.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], DetallesBuzonDeQuejasPage);
export { DetallesBuzonDeQuejasPage };
//# sourceMappingURL=detalles-buzon-de-quejas.page.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallesBuzonDeQuejasPage } from './detalles-buzon-de-quejas.page';
const routes = [
    {
        path: '',
        component: DetallesBuzonDeQuejasPage
    }
];
let DetallesBuzonDeQuejasPageRoutingModule = class DetallesBuzonDeQuejasPageRoutingModule {
};
DetallesBuzonDeQuejasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetallesBuzonDeQuejasPageRoutingModule);
export { DetallesBuzonDeQuejasPageRoutingModule };
//# sourceMappingURL=detalles-buzon-de-quejas-routing.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClienteUnSoloUsoRegistroPage } from './page-cliente-un-solo-uso-registro.page';
const routes = [
    {
        path: '',
        component: PageClienteUnSoloUsoRegistroPage
    }
];
let PageClienteUnSoloUsoRegistroPageRoutingModule = class PageClienteUnSoloUsoRegistroPageRoutingModule {
};
PageClienteUnSoloUsoRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClienteUnSoloUsoRegistroPageRoutingModule);
export { PageClienteUnSoloUsoRegistroPageRoutingModule };
//# sourceMappingURL=page-cliente-un-solo-uso-registro-routing.module.js.map
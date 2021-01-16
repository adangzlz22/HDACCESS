import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClienteUnSoloUsoPage } from './page-cliente-un-solo-uso.page';
const routes = [
    {
        path: '',
        component: PageClienteUnSoloUsoPage
    }
];
let PageClienteUnSoloUsoPageRoutingModule = class PageClienteUnSoloUsoPageRoutingModule {
};
PageClienteUnSoloUsoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClienteUnSoloUsoPageRoutingModule);
export { PageClienteUnSoloUsoPageRoutingModule };
//# sourceMappingURL=page-cliente-un-solo-uso-routing.module.js.map
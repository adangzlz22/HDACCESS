import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClienteFrecuentesPage } from './page-cliente-frecuentes.page';
const routes = [
    {
        path: '',
        component: PageClienteFrecuentesPage
    }
];
let PageClienteFrecuentesPageRoutingModule = class PageClienteFrecuentesPageRoutingModule {
};
PageClienteFrecuentesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClienteFrecuentesPageRoutingModule);
export { PageClienteFrecuentesPageRoutingModule };
//# sourceMappingURL=page-cliente-frecuentes-routing.module.js.map
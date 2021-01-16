import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAcercaDePage } from './page-acerca-de.page';
const routes = [
    {
        path: '',
        component: PageAcercaDePage
    }
];
let PageAcercaDePageRoutingModule = class PageAcercaDePageRoutingModule {
};
PageAcercaDePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAcercaDePageRoutingModule);
export { PageAcercaDePageRoutingModule };
//# sourceMappingURL=page-acerca-de-routing.module.js.map
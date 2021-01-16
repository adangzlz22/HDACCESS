import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClienteFrecuentesRegistroPage } from './page-cliente-frecuentes-registro.page';
const routes = [
    {
        path: '',
        component: PageClienteFrecuentesRegistroPage
    }
];
let PageClienteFrecuentesRegistroPageRoutingModule = class PageClienteFrecuentesRegistroPageRoutingModule {
};
PageClienteFrecuentesRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClienteFrecuentesRegistroPageRoutingModule);
export { PageClienteFrecuentesRegistroPageRoutingModule };
//# sourceMappingURL=page-cliente-frecuentes-registro-routing.module.js.map
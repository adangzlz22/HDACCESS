import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorGeneradorCodigoPage } from './page-administrador-generador-codigo.page';
const routes = [
    {
        path: '',
        component: PageAdministradorGeneradorCodigoPage
    }
];
let PageAdministradorGeneradorCodigoPageRoutingModule = class PageAdministradorGeneradorCodigoPageRoutingModule {
};
PageAdministradorGeneradorCodigoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorGeneradorCodigoPageRoutingModule);
export { PageAdministradorGeneradorCodigoPageRoutingModule };
//# sourceMappingURL=page-administrador-generador-codigo-routing.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorResidenciasPage } from './page-administrador-residencias.page';
const routes = [
    {
        path: '',
        component: PageAdministradorResidenciasPage
    }
];
let PageAdministradorResidenciasPageRoutingModule = class PageAdministradorResidenciasPageRoutingModule {
};
PageAdministradorResidenciasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorResidenciasPageRoutingModule);
export { PageAdministradorResidenciasPageRoutingModule };
//# sourceMappingURL=page-administrador-residencias-routing.module.js.map
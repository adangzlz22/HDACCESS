import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorResidenciasRegistroPage } from './page-administrador-residencias-registro.page';
const routes = [
    {
        path: '',
        component: PageAdministradorResidenciasRegistroPage
    }
];
let PageAdministradorResidenciasRegistroPageRoutingModule = class PageAdministradorResidenciasRegistroPageRoutingModule {
};
PageAdministradorResidenciasRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorResidenciasRegistroPageRoutingModule);
export { PageAdministradorResidenciasRegistroPageRoutingModule };
//# sourceMappingURL=page-administrador-residencias-registro-routing.module.js.map
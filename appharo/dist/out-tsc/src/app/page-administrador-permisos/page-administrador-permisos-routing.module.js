import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorPermisosPage } from './page-administrador-permisos.page';
const routes = [
    {
        path: '',
        component: PageAdministradorPermisosPage
    }
];
let PageAdministradorPermisosPageRoutingModule = class PageAdministradorPermisosPageRoutingModule {
};
PageAdministradorPermisosPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorPermisosPageRoutingModule);
export { PageAdministradorPermisosPageRoutingModule };
//# sourceMappingURL=page-administrador-permisos-routing.module.js.map
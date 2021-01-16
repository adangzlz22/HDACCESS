import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorPermisosRegistroPage } from './page-administrador-permisos-registro.page';
const routes = [
    {
        path: '',
        component: PageAdministradorPermisosRegistroPage
    }
];
let PageAdministradorPermisosRegistroPageRoutingModule = class PageAdministradorPermisosRegistroPageRoutingModule {
};
PageAdministradorPermisosRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorPermisosRegistroPageRoutingModule);
export { PageAdministradorPermisosRegistroPageRoutingModule };
//# sourceMappingURL=page-administrador-permisos-registro-routing.module.js.map
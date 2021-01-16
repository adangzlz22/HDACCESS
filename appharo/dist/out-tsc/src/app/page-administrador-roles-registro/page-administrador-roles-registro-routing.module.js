import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorRolesRegistroPage } from './page-administrador-roles-registro.page';
const routes = [
    {
        path: '',
        component: PageAdministradorRolesRegistroPage
    }
];
let PageAdministradorRolesRegistroPageRoutingModule = class PageAdministradorRolesRegistroPageRoutingModule {
};
PageAdministradorRolesRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorRolesRegistroPageRoutingModule);
export { PageAdministradorRolesRegistroPageRoutingModule };
//# sourceMappingURL=page-administrador-roles-registro-routing.module.js.map
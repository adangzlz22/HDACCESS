import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorRolesPage } from './page-administrador-roles.page';
const routes = [
    {
        path: '',
        component: PageAdministradorRolesPage
    }
];
let PageAdministradorRolesPageRoutingModule = class PageAdministradorRolesPageRoutingModule {
};
PageAdministradorRolesPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorRolesPageRoutingModule);
export { PageAdministradorRolesPageRoutingModule };
//# sourceMappingURL=page-administrador-roles-routing.module.js.map
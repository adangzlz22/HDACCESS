import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorPerfilPage } from './page-administrador-perfil.page';
const routes = [
    {
        path: '',
        component: PageAdministradorPerfilPage
    }
];
let PageAdministradorPerfilPageRoutingModule = class PageAdministradorPerfilPageRoutingModule {
};
PageAdministradorPerfilPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorPerfilPageRoutingModule);
export { PageAdministradorPerfilPageRoutingModule };
//# sourceMappingURL=page-administrador-perfil-routing.module.js.map
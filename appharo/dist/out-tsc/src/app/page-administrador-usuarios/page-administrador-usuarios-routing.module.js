import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorUsuariosPage } from './page-administrador-usuarios.page';
const routes = [
    {
        path: '',
        component: PageAdministradorUsuariosPage
    }
];
let PageAdministradorUsuariosPageRoutingModule = class PageAdministradorUsuariosPageRoutingModule {
};
PageAdministradorUsuariosPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorUsuariosPageRoutingModule);
export { PageAdministradorUsuariosPageRoutingModule };
//# sourceMappingURL=page-administrador-usuarios-routing.module.js.map
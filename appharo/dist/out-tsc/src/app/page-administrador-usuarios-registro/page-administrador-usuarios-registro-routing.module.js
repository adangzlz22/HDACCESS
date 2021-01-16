import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorUsuariosRegistroPage } from './page-administrador-usuarios-registro.page';
const routes = [
    {
        path: '',
        component: PageAdministradorUsuariosRegistroPage
    }
];
let PageAdministradorUsuariosRegistroPageRoutingModule = class PageAdministradorUsuariosRegistroPageRoutingModule {
};
PageAdministradorUsuariosRegistroPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorUsuariosRegistroPageRoutingModule);
export { PageAdministradorUsuariosRegistroPageRoutingModule };
//# sourceMappingURL=page-administrador-usuarios-registro-routing.module.js.map
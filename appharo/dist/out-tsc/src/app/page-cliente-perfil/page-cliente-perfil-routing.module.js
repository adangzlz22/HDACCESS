import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClientePerfilPage } from './page-cliente-perfil.page';
const routes = [
    {
        path: '',
        component: PageClientePerfilPage
    }
];
let PageClientePerfilPageRoutingModule = class PageClientePerfilPageRoutingModule {
};
PageClientePerfilPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClientePerfilPageRoutingModule);
export { PageClientePerfilPageRoutingModule };
//# sourceMappingURL=page-cliente-perfil-routing.module.js.map
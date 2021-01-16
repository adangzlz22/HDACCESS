import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallesbuzondequejaadministradorPage } from './detallesbuzondequejaadministrador.page';
const routes = [
    {
        path: '',
        component: DetallesbuzondequejaadministradorPage
    }
];
let DetallesbuzondequejaadministradorPageRoutingModule = class DetallesbuzondequejaadministradorPageRoutingModule {
};
DetallesbuzondequejaadministradorPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetallesbuzondequejaadministradorPageRoutingModule);
export { DetallesbuzondequejaadministradorPageRoutingModule };
//# sourceMappingURL=detallesbuzondequejaadministrador-routing.module.js.map
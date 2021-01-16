import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallesAreaComunPage } from './detalles-area-comun.page';
const routes = [
    {
        path: '',
        component: DetallesAreaComunPage
    }
];
let DetallesAreaComunPageRoutingModule = class DetallesAreaComunPageRoutingModule {
};
DetallesAreaComunPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DetallesAreaComunPageRoutingModule);
export { DetallesAreaComunPageRoutingModule };
//# sourceMappingURL=detalles-area-comun-routing.module.js.map
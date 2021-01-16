import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsignarAreaComunPage } from './asignar-area-comun.page';
const routes = [
    {
        path: '',
        component: AsignarAreaComunPage
    }
];
let AsignarAreaComunPageRoutingModule = class AsignarAreaComunPageRoutingModule {
};
AsignarAreaComunPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AsignarAreaComunPageRoutingModule);
export { AsignarAreaComunPageRoutingModule };
//# sourceMappingURL=asignar-area-comun-routing.module.js.map
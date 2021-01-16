import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerAreaComunPage } from './ver-area-comun.page';
const routes = [
    {
        path: '',
        component: VerAreaComunPage
    }
];
let VerAreaComunPageRoutingModule = class VerAreaComunPageRoutingModule {
};
VerAreaComunPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], VerAreaComunPageRoutingModule);
export { VerAreaComunPageRoutingModule };
//# sourceMappingURL=ver-area-comun-routing.module.js.map
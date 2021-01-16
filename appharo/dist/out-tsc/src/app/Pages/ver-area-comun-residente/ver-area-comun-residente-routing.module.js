import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerAreaComunResidentePage } from './ver-area-comun-residente.page';
const routes = [
    {
        path: '',
        component: VerAreaComunResidentePage
    }
];
let VerAreaComunResidentePageRoutingModule = class VerAreaComunResidentePageRoutingModule {
};
VerAreaComunResidentePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], VerAreaComunResidentePageRoutingModule);
export { VerAreaComunResidentePageRoutingModule };
//# sourceMappingURL=ver-area-comun-residente-routing.module.js.map
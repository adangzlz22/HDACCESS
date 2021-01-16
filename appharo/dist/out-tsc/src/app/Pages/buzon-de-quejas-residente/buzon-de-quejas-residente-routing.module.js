import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuzonDeQuejasResidentePage } from './buzon-de-quejas-residente.page';
const routes = [
    {
        path: '',
        component: BuzonDeQuejasResidentePage
    }
];
let BuzonDeQuejasResidentePageRoutingModule = class BuzonDeQuejasResidentePageRoutingModule {
};
BuzonDeQuejasResidentePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BuzonDeQuejasResidentePageRoutingModule);
export { BuzonDeQuejasResidentePageRoutingModule };
//# sourceMappingURL=buzon-de-quejas-residente-routing.module.js.map
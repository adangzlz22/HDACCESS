import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuzonDeQuejasPage } from './buzon-de-quejas.page';
const routes = [
    {
        path: '',
        component: BuzonDeQuejasPage
    }
];
let BuzonDeQuejasPageRoutingModule = class BuzonDeQuejasPageRoutingModule {
};
BuzonDeQuejasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BuzonDeQuejasPageRoutingModule);
export { BuzonDeQuejasPageRoutingModule };
//# sourceMappingURL=buzon-de-quejas-routing.module.js.map
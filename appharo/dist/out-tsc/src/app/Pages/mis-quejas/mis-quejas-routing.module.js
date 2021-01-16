import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MisQuejasPage } from './mis-quejas.page';
const routes = [
    {
        path: '',
        component: MisQuejasPage
    }
];
let MisQuejasPageRoutingModule = class MisQuejasPageRoutingModule {
};
MisQuejasPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MisQuejasPageRoutingModule);
export { MisQuejasPageRoutingModule };
//# sourceMappingURL=mis-quejas-routing.module.js.map
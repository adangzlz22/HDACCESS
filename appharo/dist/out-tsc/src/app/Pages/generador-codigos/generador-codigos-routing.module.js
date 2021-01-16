import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneradorCodigosPage } from './generador-codigos.page';
const routes = [
    {
        path: '',
        component: GeneradorCodigosPage
    }
];
let GeneradorCodigosPageRoutingModule = class GeneradorCodigosPageRoutingModule {
};
GeneradorCodigosPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GeneradorCodigosPageRoutingModule);
export { GeneradorCodigosPageRoutingModule };
//# sourceMappingURL=generador-codigos-routing.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopovercomponentPage } from './popovercomponent.page';
const routes = [
    {
        path: '',
        component: PopovercomponentPage
    }
];
let PopovercomponentPageRoutingModule = class PopovercomponentPageRoutingModule {
};
PopovercomponentPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PopovercomponentPageRoutingModule);
export { PopovercomponentPageRoutingModule };
//# sourceMappingURL=popovercomponent-routing.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLoginPage } from './page-login.page';
const routes = [
    {
        path: '',
        component: PageLoginPage
    }
];
let PageLoginPageRoutingModule = class PageLoginPageRoutingModule {
};
PageLoginPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageLoginPageRoutingModule);
export { PageLoginPageRoutingModule };
//# sourceMappingURL=page-login-routing.module.js.map
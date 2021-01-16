import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageClienteDashboardPage } from './page-cliente-dashboard.page';
const routes = [
    {
        path: '',
        component: PageClienteDashboardPage
    }
];
let PageClienteDashboardPageRoutingModule = class PageClienteDashboardPageRoutingModule {
};
PageClienteDashboardPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageClienteDashboardPageRoutingModule);
export { PageClienteDashboardPageRoutingModule };
//# sourceMappingURL=page-cliente-dashboard-routing.module.js.map
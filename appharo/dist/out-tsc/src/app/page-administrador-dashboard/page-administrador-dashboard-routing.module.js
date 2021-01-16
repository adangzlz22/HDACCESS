import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAdministradorDashboardPage } from './page-administrador-dashboard.page';
const routes = [
    {
        path: '',
        component: PageAdministradorDashboardPage
    }
];
let PageAdministradorDashboardPageRoutingModule = class PageAdministradorDashboardPageRoutingModule {
};
PageAdministradorDashboardPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PageAdministradorDashboardPageRoutingModule);
export { PageAdministradorDashboardPageRoutingModule };
//# sourceMappingURL=page-administrador-dashboard-routing.module.js.map
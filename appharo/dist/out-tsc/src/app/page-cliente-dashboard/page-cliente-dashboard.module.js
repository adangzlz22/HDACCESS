import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageClienteDashboardPageRoutingModule } from './page-cliente-dashboard-routing.module';
import { PageClienteDashboardPage } from './page-cliente-dashboard.page';
let PageClienteDashboardPageModule = class PageClienteDashboardPageModule {
};
PageClienteDashboardPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PageClienteDashboardPageRoutingModule
        ],
        declarations: [PageClienteDashboardPage]
    })
], PageClienteDashboardPageModule);
export { PageClienteDashboardPageModule };
//# sourceMappingURL=page-cliente-dashboard.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageLoginPageRoutingModule } from './page-login-routing.module';
import { PageLoginPage } from './page-login.page';
let PageLoginPageModule = class PageLoginPageModule {
};
PageLoginPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PageLoginPageRoutingModule
        ],
        declarations: [PageLoginPage]
    })
], PageLoginPageModule);
export { PageLoginPageModule };
//# sourceMappingURL=page-login.module.js.map
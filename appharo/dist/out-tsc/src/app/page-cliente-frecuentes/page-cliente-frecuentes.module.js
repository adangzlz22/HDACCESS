import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageClienteFrecuentesPageRoutingModule } from './page-cliente-frecuentes-routing.module';
import { PageClienteFrecuentesPage } from './page-cliente-frecuentes.page';
let PageClienteFrecuentesPageModule = class PageClienteFrecuentesPageModule {
};
PageClienteFrecuentesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PageClienteFrecuentesPageRoutingModule
        ],
        declarations: [PageClienteFrecuentesPage]
    })
], PageClienteFrecuentesPageModule);
export { PageClienteFrecuentesPageModule };
//# sourceMappingURL=page-cliente-frecuentes.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageAcercaDePageRoutingModule } from './page-acerca-de-routing.module';
import { PageAcercaDePage } from './page-acerca-de.page';
let PageAcercaDePageModule = class PageAcercaDePageModule {
};
PageAcercaDePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PageAcercaDePageRoutingModule
        ],
        declarations: [PageAcercaDePage]
    })
], PageAcercaDePageModule);
export { PageAcercaDePageModule };
//# sourceMappingURL=page-acerca-de.module.js.map
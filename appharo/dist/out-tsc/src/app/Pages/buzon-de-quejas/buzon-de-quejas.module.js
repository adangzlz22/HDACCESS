import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuzonDeQuejasPageRoutingModule } from './buzon-de-quejas-routing.module';
import { BuzonDeQuejasPage } from './buzon-de-quejas.page';
let BuzonDeQuejasPageModule = class BuzonDeQuejasPageModule {
};
BuzonDeQuejasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BuzonDeQuejasPageRoutingModule
        ],
        declarations: [BuzonDeQuejasPage]
    })
], BuzonDeQuejasPageModule);
export { BuzonDeQuejasPageModule };
//# sourceMappingURL=buzon-de-quejas.module.js.map
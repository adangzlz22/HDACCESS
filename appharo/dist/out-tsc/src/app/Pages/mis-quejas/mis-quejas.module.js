import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisQuejasPageRoutingModule } from './mis-quejas-routing.module';
import { MisQuejasPage } from './mis-quejas.page';
let MisQuejasPageModule = class MisQuejasPageModule {
};
MisQuejasPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MisQuejasPageRoutingModule
        ],
        declarations: [MisQuejasPage]
    })
], MisQuejasPageModule);
export { MisQuejasPageModule };
//# sourceMappingURL=mis-quejas.module.js.map
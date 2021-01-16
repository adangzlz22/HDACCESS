import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneradorCodigosPageRoutingModule } from './generador-codigos-routing.module';
import { GeneradorCodigosPage } from './generador-codigos.page';
let GeneradorCodigosPageModule = class GeneradorCodigosPageModule {
};
GeneradorCodigosPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GeneradorCodigosPageRoutingModule
        ],
        declarations: [GeneradorCodigosPage]
    })
], GeneradorCodigosPageModule);
export { GeneradorCodigosPageModule };
//# sourceMappingURL=generador-codigos.module.js.map
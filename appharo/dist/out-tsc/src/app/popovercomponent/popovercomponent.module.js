import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopovercomponentPageRoutingModule } from './popovercomponent-routing.module';
import { PopovercomponentPage } from './popovercomponent.page';
let PopovercomponentPageModule = class PopovercomponentPageModule {
};
PopovercomponentPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PopovercomponentPageRoutingModule
        ],
        declarations: [PopovercomponentPage]
    })
], PopovercomponentPageModule);
export { PopovercomponentPageModule };
//# sourceMappingURL=popovercomponent.module.js.map
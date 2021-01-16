import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageClientePerfilPageRoutingModule } from './page-cliente-perfil-routing.module';
import { PageClientePerfilPage } from './page-cliente-perfil.page';
let PageClientePerfilPageModule = class PageClientePerfilPageModule {
};
PageClientePerfilPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PageClientePerfilPageRoutingModule
        ],
        declarations: [PageClientePerfilPage]
    })
], PageClientePerfilPageModule);
export { PageClientePerfilPageModule };
//# sourceMappingURL=page-cliente-perfil.module.js.map
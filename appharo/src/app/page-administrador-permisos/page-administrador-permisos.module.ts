import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorPermisosPageRoutingModule } from './page-administrador-permisos-routing.module';

import { PageAdministradorPermisosPage } from './page-administrador-permisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorPermisosPageRoutingModule
  ],
  declarations: [PageAdministradorPermisosPage]
})
export class PageAdministradorPermisosPageModule {}

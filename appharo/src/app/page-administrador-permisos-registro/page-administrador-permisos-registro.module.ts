import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorPermisosRegistroPageRoutingModule } from './page-administrador-permisos-registro-routing.module';

import { PageAdministradorPermisosRegistroPage } from './page-administrador-permisos-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorPermisosRegistroPageRoutingModule
  ],
  declarations: [PageAdministradorPermisosRegistroPage]
})
export class PageAdministradorPermisosRegistroPageModule {}

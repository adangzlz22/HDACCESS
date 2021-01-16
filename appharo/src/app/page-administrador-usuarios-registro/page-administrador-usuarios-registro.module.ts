import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorUsuariosRegistroPageRoutingModule } from './page-administrador-usuarios-registro-routing.module';

import { PageAdministradorUsuariosRegistroPage } from './page-administrador-usuarios-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorUsuariosRegistroPageRoutingModule
  ],
  declarations: [PageAdministradorUsuariosRegistroPage]
})
export class PageAdministradorUsuariosRegistroPageModule {}

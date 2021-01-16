import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorUsuariosPageRoutingModule } from './page-administrador-usuarios-routing.module';

import { PageAdministradorUsuariosPage } from './page-administrador-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorUsuariosPageRoutingModule
  ],
  declarations: [PageAdministradorUsuariosPage]
})
export class PageAdministradorUsuariosPageModule {}

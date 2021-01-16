import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorPerfilPageRoutingModule } from './page-administrador-perfil-routing.module';

import { PageAdministradorPerfilPage } from './page-administrador-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorPerfilPageRoutingModule
  ],
  declarations: [PageAdministradorPerfilPage]
})
export class PageAdministradorPerfilPageModule {}

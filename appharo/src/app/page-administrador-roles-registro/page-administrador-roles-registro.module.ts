import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorRolesRegistroPageRoutingModule } from './page-administrador-roles-registro-routing.module';

import { PageAdministradorRolesRegistroPage } from './page-administrador-roles-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorRolesRegistroPageRoutingModule
  ],
  declarations: [PageAdministradorRolesRegistroPage]
})
export class PageAdministradorRolesRegistroPageModule {}

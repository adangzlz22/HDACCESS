import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorRolesPageRoutingModule } from './page-administrador-roles-routing.module';

import { PageAdministradorRolesPage } from './page-administrador-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorRolesPageRoutingModule
  ],
  declarations: [PageAdministradorRolesPage]
})
export class PageAdministradorRolesPageModule {}

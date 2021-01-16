import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorResidenciasPageRoutingModule } from './page-administrador-residencias-routing.module';

import { PageAdministradorResidenciasPage } from './page-administrador-residencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorResidenciasPageRoutingModule
  ],
  declarations: [PageAdministradorResidenciasPage]
})
export class PageAdministradorResidenciasPageModule {}

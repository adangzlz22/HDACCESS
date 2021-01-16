import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorResidenciasRegistroPageRoutingModule } from './page-administrador-residencias-registro-routing.module';

import { PageAdministradorResidenciasRegistroPage } from './page-administrador-residencias-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorResidenciasRegistroPageRoutingModule
  ],
  declarations: [PageAdministradorResidenciasRegistroPage]
})
export class PageAdministradorResidenciasRegistroPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorGeneradorCodigoPageRoutingModule } from './page-administrador-generador-codigo-routing.module';

import { PageAdministradorGeneradorCodigoPage } from './page-administrador-generador-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorGeneradorCodigoPageRoutingModule
  ],
  declarations: [PageAdministradorGeneradorCodigoPage]
})
export class PageAdministradorGeneradorCodigoPageModule {}

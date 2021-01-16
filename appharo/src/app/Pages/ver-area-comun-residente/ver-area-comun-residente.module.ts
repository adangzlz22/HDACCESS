import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAreaComunResidentePageRoutingModule } from './ver-area-comun-residente-routing.module';

import { VerAreaComunResidentePage } from './ver-area-comun-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAreaComunResidentePageRoutingModule
  ],
  declarations: [VerAreaComunResidentePage]
})
export class VerAreaComunResidentePageModule {}

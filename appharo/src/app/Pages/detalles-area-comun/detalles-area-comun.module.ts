import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAreaComunPageRoutingModule } from './detalles-area-comun-routing.module';

import { DetallesAreaComunPage } from './detalles-area-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAreaComunPageRoutingModule
  ],
  declarations: [DetallesAreaComunPage]
})
export class DetallesAreaComunPageModule {}

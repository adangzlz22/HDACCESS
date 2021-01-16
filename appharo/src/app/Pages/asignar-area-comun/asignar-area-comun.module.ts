import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarAreaComunPageRoutingModule } from './asignar-area-comun-routing.module';

import { AsignarAreaComunPage } from './asignar-area-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarAreaComunPageRoutingModule
  ],
  declarations: [AsignarAreaComunPage]
})
export class AsignarAreaComunPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAreaComunPageRoutingModule } from './ver-area-comun-routing.module';

import { VerAreaComunPage } from './ver-area-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAreaComunPageRoutingModule
  ],
  declarations: [VerAreaComunPage]
})
export class VerAreaComunPageModule {}

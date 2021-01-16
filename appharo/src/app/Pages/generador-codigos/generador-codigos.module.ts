import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorCodigosPageRoutingModule } from './generador-codigos-routing.module';

import { GeneradorCodigosPage } from './generador-codigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorCodigosPageRoutingModule
  ],
  declarations: [GeneradorCodigosPage]
})
export class GeneradorCodigosPageModule {}

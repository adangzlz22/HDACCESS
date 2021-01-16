import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesBuzonDeQuejasPageRoutingModule } from './detalles-buzon-de-quejas-routing.module';

import { DetallesBuzonDeQuejasPage } from './detalles-buzon-de-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesBuzonDeQuejasPageRoutingModule
  ],
  declarations: [DetallesBuzonDeQuejasPage]
})
export class DetallesBuzonDeQuejasPageModule {}

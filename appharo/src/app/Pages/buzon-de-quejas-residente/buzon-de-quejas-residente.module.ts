import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzonDeQuejasResidentePageRoutingModule } from './buzon-de-quejas-residente-routing.module';

import { BuzonDeQuejasResidentePage } from './buzon-de-quejas-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzonDeQuejasResidentePageRoutingModule
  ],
  declarations: [BuzonDeQuejasResidentePage]
})
export class BuzonDeQuejasResidentePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzonDeQuejasPageRoutingModule } from './buzon-de-quejas-routing.module';

import { BuzonDeQuejasPage } from './buzon-de-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzonDeQuejasPageRoutingModule
  ],
  declarations: [BuzonDeQuejasPage]
})
export class BuzonDeQuejasPageModule {}

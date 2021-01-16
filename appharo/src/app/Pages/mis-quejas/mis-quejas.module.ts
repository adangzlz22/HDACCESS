import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisQuejasPageRoutingModule } from './mis-quejas-routing.module';

import { MisQuejasPage } from './mis-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisQuejasPageRoutingModule
  ],
  declarations: [MisQuejasPage]
})
export class MisQuejasPageModule {}

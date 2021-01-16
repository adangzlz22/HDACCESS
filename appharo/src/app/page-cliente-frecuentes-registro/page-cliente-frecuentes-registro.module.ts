import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClienteFrecuentesRegistroPageRoutingModule } from './page-cliente-frecuentes-registro-routing.module';

import { PageClienteFrecuentesRegistroPage } from './page-cliente-frecuentes-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClienteFrecuentesRegistroPageRoutingModule
  ],
  declarations: [PageClienteFrecuentesRegistroPage]
})
export class PageClienteFrecuentesRegistroPageModule {}

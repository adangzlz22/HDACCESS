import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PageClienteUnSoloUsoRegistroPageRoutingModule } from './page-cliente-un-solo-uso-registro-routing.module';

import { PageClienteUnSoloUsoRegistroPage } from './page-cliente-un-solo-uso-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClienteUnSoloUsoRegistroPageRoutingModule,
    
  ],
  declarations: [PageClienteUnSoloUsoRegistroPage]
})
export class PageClienteUnSoloUsoRegistroPageModule {}

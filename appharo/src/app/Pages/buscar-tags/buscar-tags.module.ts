import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarTAGSPageRoutingModule } from './buscar-tags-routing.module';

import { BuscadorTAGSComponent } from './buscar-tags.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarTAGSPageRoutingModule
  ],
  declarations: [BuscadorTAGSComponent]
})
export class BuscarTAGSPageModule {}

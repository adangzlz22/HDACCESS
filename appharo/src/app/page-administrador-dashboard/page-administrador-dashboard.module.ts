import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAdministradorDashboardPageRoutingModule } from './page-administrador-dashboard-routing.module';

import { PageAdministradorDashboardPage } from './page-administrador-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAdministradorDashboardPageRoutingModule
  ],
  declarations: [PageAdministradorDashboardPage]
})
export class PageAdministradorDashboardPageModule {}

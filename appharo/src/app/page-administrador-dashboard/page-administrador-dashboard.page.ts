import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-page-administrador-dashboard',
  templateUrl: './page-administrador-dashboard.page.html',
  styleUrls: ['./page-administrador-dashboard.page.scss'],
})
export class PageAdministradorDashboardPage implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {
  }
  CreatePopOver(evento){
    this.popover.create({component:PopovercomponentPage,
    showBackdrop:false,
    event:evento,
    backdropDismiss:false}).then((popoverelement=>{
      popoverelement.present();
    }))
  }
  
}

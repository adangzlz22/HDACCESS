import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  constructor(private popover:PopoverController
              ,private navCtrl: NavController
              ,private _usuPriv: UsuarioProvider
              ) { }

  ngOnInit() {
    if (this._usuPriv.PKUsuario == 0 || this._usuPriv.PKUsuario == undefined) {
      this.navCtrl.navigateRoot('page-login');
      
    }
  }

  ClosePopover(){
    this.popover.dismiss();
  }

  Perfil(){
      this.navCtrl.navigateForward(`page-cliente-perfil/${ this._usuPriv.NombreCompleto}+'/'+${ this._usuPriv.Correo}+'/'+${ this._usuPriv.Telefono }`);
      this.popover.dismiss();
    }
  CerrarCesion(){
    this._usuPriv.PKUsuario = 0;
      this.navCtrl.navigateRoot('page-login');
      this.popover.dismiss();
    
  }
}

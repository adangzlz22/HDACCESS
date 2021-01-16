import { Component, OnInit } from '@angular/core';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-page-cliente-perfil',
  templateUrl: './page-cliente-perfil.page.html',
  styleUrls: ['./page-cliente-perfil.page.scss'],
})
export class PageClientePerfilPage implements OnInit {
  NombreCompleto:string = '';
  Correo:string = '';
  Telefono:string = '';
  constructor( private _UsuProv: UsuarioProvider
              ,private navCtrl: NavController) { }

  ngOnInit() {

    this.NombreCompleto=this._UsuProv.NombreCompleto;
    this.Correo=this._UsuProv.Correo;
    this.Telefono=this._UsuProv.Telefono;
    if (this._UsuProv.PKUsuario == 0 || this._UsuProv.PKUsuario == undefined ) {
      this.navCtrl.navigateRoot('page-login');
    }
  }

  ActualizarPerfil(){
    console.log('HOLA');
    this._UsuProv.ActualizarPerfil(this.NombreCompleto,this.Correo,this.Telefono).then(result=>{
      console.log(result);
      this._UsuProv.NombreCompleto=this.NombreCompleto;
      this._UsuProv.Correo=this.Correo;
      this._UsuProv.Telefono=this.Telefono;
      this.navCtrl.pop();
    }).catch(Error=>{
      console.log(Error);
    });
  }
  navEstadoCuenta() {
    const obj = {
      PKUsuario: this._UsuProv.PKUsuario,
      NombreCompleto: this.NombreCompleto
    };
    const navigationExtras: NavigationExtras = {
      queryParams: {
          usuario: JSON.stringify(obj),
      }
    };
    this.navCtrl.navigateForward('EstadoCuenta', navigationExtras);
  }

}

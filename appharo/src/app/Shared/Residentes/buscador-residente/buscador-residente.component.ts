import { Component, OnInit } from '@angular/core';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-buscador-residente',
  templateUrl: './buscador-residente.component.html',
  styleUrls: ['./buscador-residente.component.scss'],
})
export class BuscadorResidenteComponent {

  pago;
  DatosUsuarios: any;
  NombreCompleto = '';
  PKUsuario: any;
  constructor(private _usuProv: UsuarioProvider,
              private navCtrl: NavController,
              private route: ActivatedRoute
              ) {
  }
  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.pago = JSON.parse(params['pago']);
     });
    this.PKUsuario = this.route.snapshot.paramMap.get('PKUsuario');
    this.ObtenerUsuarios();
  }

  ObtenerUsuarios() {
    console.log(this.NombreCompleto,parseInt(this.PKUsuario), 1, this._usuProv.FKResidencia);
    this._usuProv.ObtenerUsuarios(this.NombreCompleto, parseInt(this.PKUsuario), 1, this._usuProv.FKResidencia)
    .then( (result: any) => {
      this.DatosUsuarios = JSON.parse(result.Model);
    }).catch(
        error => {
          console.log(error);
        });
  }


  retornarUsuario(item) {
    this.pago.FKUsuario = item.PKUsuario;
    this.pago.userObj = item;
    const variableNav = this.pago.origen ? this.pago.origen : 'pagoEfectivo';
    console.log(variableNav);
    if(variableNav!='pagoEfectivo')
  {
    this.navCtrl.navigateRoot(``+variableNav+`/${ this.PKUsuario }`,{
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    });
  }else{
    
    this.navCtrl.navigateRoot(variableNav, {
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    });
  }
  }

}

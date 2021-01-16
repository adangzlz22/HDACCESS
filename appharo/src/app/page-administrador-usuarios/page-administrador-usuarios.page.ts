import { Component, OnInit } from '@angular/core';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-administrador-usuarios',
  templateUrl: './page-administrador-usuarios.page.html',
  styleUrls: ['./page-administrador-usuarios.page.scss'],
})
export class PageAdministradorUsuariosPage implements OnInit {

  DatosUsuarios:any;
  NombreCompleto:string = '';
  PKUsuario:any;
  NombrePagina:string='';
  Tipo:any;
  FKNivel:any;
  FKMenuBandera:any;
  FKResidencia:any;

  constructor(private _usuProv:UsuarioProvider
              ,private navCtrl: NavController
              ,private route: ActivatedRoute
              ) { 


  }
  ionViewWillEnter(){
    this.PKUsuario=this.route.snapshot.paramMap.get('PKUsuario');
    this.Tipo=this.route.snapshot.paramMap.get('Tipo');
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
  console.log('Ando aqui',this.FKResidencia)
  


    if(this.Tipo==1){
      this.NombrePagina='Residentes';
      this.FKNivel=1;
      this.FKMenuBandera=1;
    }else if(this.Tipo==0){
      this.NombrePagina='Adm Residentes';
      this.FKNivel=0;
      this.FKMenuBandera=0;
    }
    this.ObtenerUsuarios();
  }
  ngOnInit() {
  }


  ObtenerUsuarios(){
      this._usuProv.ObtenerUsuarios(this.NombreCompleto, this.PKUsuario, this.FKNivel,this.FKResidencia).then( result => {
        this.DatosUsuarios = JSON.parse(result['Model']);
      }).catch(
          error=>{
            console.log(error);
          });
  }

 
  ActualizarUsuarios(item){
    this.navCtrl.navigateForward(`page-administrador-usuarios-registro/${item.PKUsuario}/${item.NombreCompleto}/${item.Correo}/${item.Telefono}/${this.FKNivel}/${this.FKMenuBandera}/${this.FKResidencia}`);
  }

  MoverAgregarUsuario(){
    this.navCtrl.navigateForward(`page-administrador-usuarios-registro/${0}/${0}/${0}/${0}/${this.FKNivel}/${this.FKMenuBandera}/${this.FKResidencia}`);
  }


}

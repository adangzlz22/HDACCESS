import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  
  pago = {
    total: 0,
    tipo: 0,
    FKUsuario: 0,
    origen:'tags',
    PersonID:''
  };
userName = 'No seleccionado';
tags ='No seleccionado';
  constructor(private navCtrl:NavController,
              private usuario:UsuarioProvider,
              private route:ActivatedRoute,
              private _resi:ResidenciasProvider,
              private alertCtrl:AlertController) {



               }
 
  ngOnInit() {
    console.log(this.usuario.PKUsuario)
    this.route.queryParams.subscribe(params => {
      if (params['pago']) {
        this.pago = JSON.parse(params['pago']);
        console.log('------------------->',this.pago);
        console.log(this.pago);
       this.userName =this.pago['userObj'].NombreCompleto;
       this.tags =this.pago.PersonID;
      }
     });
 
    }


  buscarResidente() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    };
    // this.modalCtrl.create(BuscadorResidenteComponent ).present();
    this.navCtrl.navigateForward(`buscarResidente/${ this.usuario.PKUsuario }`, navigationExtras).then((response) => {
      console.log(response);
    });
  }

  BuscarTAGS(){
    const navigationExtras: NavigationExtras = {
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    };
    // this.modalCtrl.create(BuscadorResidenteComponent ).present();
    this.navCtrl.navigateForward(`buscarTAGS`, navigationExtras).then((response) => {
      console.log(response);
    });
  }
  AsignarTAGS(){
    if (this.validarVacios()==false) {
      this.Mensaje();
    }else{
    let person=this.pago.PersonID;
    let PKUsuario=this.pago['userObj'].PKUsuario;
    let nombre=this.pago['userObj'].NombreCompleto;
    this._resi.CrearTAGS(PKUsuario,person,nombre).then( (result: any) => {
      console.log(result);
        this.pago = {
          total: 0,
          tipo: 0,
          FKUsuario: 0,
          origen:'tags',
          PersonID:''
        };
        this.userName = 'No seleccionado';
        this.tags = 'No seleccionado';

    }).catch(
        error => {
          console.log(error);
        });}
  }


  validarVacios(){
    let retu=false;
    if( this.pago.PersonID ==""){
      retu=false;
    }  else{
      retu=true;
    }
    return retu;
  }
  async Mensaje(){
    const alert = await this.alertCtrl.create({
      header: 'Aviso',
      message: 'No ha seleccionado ningun tag ni persona favor de seleeccionar',
      buttons: ['OK']
    });

    await alert.present();
  }
}

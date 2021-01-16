import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { VisitaProvider } from '../providers/Visitas/visitaProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-page-cliente-un-solo-uso-registro',
  templateUrl: './page-cliente-un-solo-uso-registro.page.html',
  styleUrls: ['./page-cliente-un-solo-uso-registro.page.scss'],
})
export class PageClienteUnSoloUsoRegistroPage implements OnInit {

  DatosVisitas:any=[];

  evento={
    NombreCompleto:'',
    Descripcion:'',
    TelefonoOCorreo:'',
  }
  verBtnEliminar:Boolean=false;
  PKVisita;
  TipoVisita:any;
  NombrePagina:string;

 WhatCorreo:any;

  constructor(private route:ActivatedRoute,
              private VisPro:VisitaProvider,
              private alertCtrl:AlertController,
              private navCtrl:NavController,
              private _UsuPro:UsuarioProvider,
              private loadCtrl:LoadingController,
             ) {


   }

  



   ionViewWillEnter(){
    this.PKVisita=this.route.snapshot.paramMap.get('PKVisita');
    this.TipoVisita=this.route.snapshot.paramMap.get('TipoVisita');
    this.WhatCorreo=this._UsuPro.WhatsappCorreo;
    if (parseInt(this.TipoVisita)===1) {
      if (parseInt(this.PKVisita) >= 1) {
        this.NombrePagina='Modificar visita un solo uso';
        
      }  else{
        this.NombrePagina='Agregar visita un solo uso';

      }
    
    }  if (parseInt(this.TipoVisita)===2) {

      if (parseInt(this.PKVisita) >= 1) {
        this.NombrePagina='Modificar visita frecuentes';
        
      }  else{
        this.NombrePagina='Agregar visita frecuentes';

      }
    }

    if (this.PKVisita >= 1) {
      this.ObtenerVisitas();
      this.verBtnEliminar=true;
    }else{
      this.verBtnEliminar=false;
    }
  }
  ngOnInit() {

  }

  async Eliminar(){
   await this.VisPro.EliminarVisita( parseInt(this.PKVisita) ).then(result=>{
      
    });
  }

  async ObtenerVisitas(){
    this.VisPro.ObtenerVisitas( parseInt(this.TipoVisita) ,this._UsuPro.PKUsuario,parseInt(this.PKVisita)).then(result=>{
      this.DatosVisitas=JSON.parse(result['Model']);
      this.evento.NombreCompleto=this.DatosVisitas[0]['NombreCompleto'];
      this.evento.Descripcion=this.DatosVisitas[0]['Descripcion'];
      this.evento.TelefonoOCorreo=this.DatosVisitas[0]['TelefonoOCorreo'];


    }).catch(Error=>{
      console.log(Error);
    });
}



  async Mensajes() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar!',
      message: '<strong>Esta seguro de Eliminar?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.Eliminar();
            this.navCtrl.pop();
          }
        }
      ]
    });

    await alert.present();
  }

  async Guardar(){
    if (this.evento.NombreCompleto != "" && this.evento.TelefonoOCorreo != "" ) {

    const loading = await this.loadCtrl.create({
      message: 'Espere unos momentos para guardar...',
      duration: 2000
    });
    await loading.present();

    if (this.PKVisita >= 1) {
      await this.VisPro.ActualizarVisita(this.PKVisita,this.evento.NombreCompleto,this.evento.TelefonoOCorreo,this.evento.Descripcion,this.WhatCorreo).then(result=>{
        loading.onDidDismiss();
        this.navCtrl.pop();
        console.log(result);
      }).catch(Error=>{
        console.log(Error);
      });
  
    }else{
    await this.VisPro.CrearVisita(this._UsuPro.PKUsuario, parseInt(this.TipoVisita) ,this.evento.NombreCompleto,this.evento.TelefonoOCorreo,this.evento.Descripcion,this.WhatCorreo).then(result=>{
      loading.onDidDismiss();
      this.navCtrl.pop();
      console.log(result);
    }).catch(Error=>{
      console.log(Error);
    });
  }

  }else{
    this.Mensaje();
  }

}

async Mensaje(){
  const alert = await this.alertCtrl.create({
    header: 'Datos',
    message: 'Necesario Introducir telefono y nombre completo',
    buttons: ['OK']
  });

  await alert.present();
}




}

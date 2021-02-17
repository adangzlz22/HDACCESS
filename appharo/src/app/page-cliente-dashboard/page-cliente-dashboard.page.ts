import { Component, OnInit } from '@angular/core';
import {PopoverController, NavController, AlertController, Platform} from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { MenuProvider } from '../providers/Menu/menuProvider';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { ConfigProvider } from '../Config/config';
import { SuscripcionesControllerProvider } from '../providers/Suscripciones/suscripcionesProvider';



@Component({
  selector: 'app-page-cliente-dashboard',
  templateUrl: './page-cliente-dashboard.page.html',
  styleUrls: ['./page-cliente-dashboard.page.scss'],
})
export class PageClienteDashboardPage implements OnInit {
  DatosImagen:any;
  img:any;
  ApareceImagen:Boolean = true;
    DatosMenu=[];
    FKResidencia:any;
    NombreResidencia:any;
    Total:any=100;
    tiposSuscripciones:any;
    DesparecerTextoDirecciones:any;

    suscribe:any;
  constructor(private popover:PopoverController,
              private _MenuPro:MenuProvider,
              private _UsuPro:UsuarioProvider,
              private navCtrl:NavController,
              private iap:InAppBrowser,
              private config:ConfigProvider,
              private alertCtrl:AlertController,
              private TiposSus:SuscripcionesControllerProvider,
              private platform:Platform) {



// this.suscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
//   if(this.constructor.name == "PageClienteDashboardPage"){
//       navigator["app"].exitApp();
//   }
// })

                console.log(this._UsuPro.PKNivel);
                if (this._UsuPro.PKUsuario == 0|| this._UsuPro.PKUsuario == undefined) {
                  this.navCtrl.navigateRoot('page-login');
              }
              if (this._UsuPro.PKNivel == 0 || this._UsuPro.PKNivel == undefined || this._UsuPro.PKNivel == 2 ) {
                this.ApareceImagen=false;
              }
                    }

  ngOnInit() {

    this.CargarTotal();

    if (this._UsuPro.Expiracion <= 0) {
      this._UsuPro.EliminarDispositivo(this._UsuPro.PKUsuario);
    }

    this.NombreResidencia= this._UsuPro.NombreResidencia;
    if (this._UsuPro.PKNivel == 1 || this._UsuPro.PKNivel != undefined) {
      this.ObtenerImagen();

    }
    this.ObtenerMenu();
  }

CreatePopOver(evento){
  this.popover.create({component:PopovercomponentPage,
  showBackdrop:false,
  event:evento,
  }).then((popoverelement=>{
    popoverelement.present();
  }))
}

ObtenerMenu(){

    this._MenuPro.ObtenerMenu(this._UsuPro.PKMenuBandera).then(result=>{

          let item =JSON.parse(result['Model']);

          for (let index = 0; index < item.length; index++) {
            if(this._UsuPro.GeneradorCodigos ==false ){

              const item1 = {
              Orden:item[index].Orden,
              Opcion1:item[index].Opcion1,
              Icono:item[index].Icono
            };
            if(item[index].Opcion1 !='Generador de codigos de barra')
            {
              this.DatosMenu.push(item1);
            }
          }else{
            const item1 = {
              Orden:item[index].Orden,
              Opcion1:item[index].Opcion1,
              Icono:item[index].Icono
            };
            this.DatosMenu.push(item1);

          }
          }

          console.log(this.DatosMenu);
    }).catch(Error=>{

      console.log(Error);
    });

}

CargarTotal(){
  this.TiposSus.cargarTipos(this._UsuPro.FKResidencia).subscribe(
    (response: any) => {
     // console.log(val);
      if (response.mensajeError) {
        console.warn(response.mensajeError);
      }
      this.tiposSuscripciones = response.resultado;
      console.log(this.tiposSuscripciones);
      // this.Total=this.tiposSuscripciones[0].costo;
    },
    Error => {
      console.log('POST call in Agregar', Error);
      if (Error != undefined) {
          console.warn(Error);
      }
    });

}


Direccion(item){
if(this._UsuPro.FKResidencia == 0){
  this.FKResidencia = -1;
}else{
  this.FKResidencia = this._UsuPro.FKResidencia;
}

  if (item.Opcion1=="Visitas de un solo uso") {
      if (this._UsuPro.Expiracion > 0 ) {
        this.navCtrl.navigateForward(`page-cliente-un-solo-uso/${ 1 }`);
      }else{
        this.presentAlertConfirm();
      }
  }
  if (item.Opcion1=="Visitas frecuentes") {
    if (this._UsuPro.Expiracion > 0 ) {
      this.navCtrl.navigateForward(`page-cliente-un-solo-uso/${ 2 }`);
    }else{
      this.presentAlertConfirm();
    }
  }
if (item.Opcion1=="Acerca de") {
  this.navCtrl.navigateRoot('page-acerca-de');

}
if (item.Opcion1=="Residencias") {
  this.navCtrl.navigateRoot('page-administrador-residencias');

}
if (item.Opcion1=="Administrador") {
  this.navCtrl.navigateForward(`page-administrador-usuarios/${ this._UsuPro.PKUsuario }/${ 0 }/${this.FKResidencia}`);

}
if (item.Opcion1=="Residentes") {
  this.navCtrl.navigateForward(`page-administrador-usuarios/${ this._UsuPro.PKUsuario }/${ 1 }/${this.FKResidencia}`);

}
if (item.Opcion1=="Roles") {
  this.navCtrl.navigateRoot('page-administrador-roles');

}
if (item.Opcion1=="Asignar Tags") {
  this.navCtrl.navigateRoot('tags');

}
if (item.Opcion1=="Cuotas") {
  this.navCtrl.navigateRoot('cuotas');

}
if (item.Opcion1 == 'Pagos') {
  let page = '', msgError = 'no hay pagina de pagos para este tipo de usuario';

 if( this._UsuPro.PKMenuBandera == 0) 
 {
  page = 'pagoEfectivo'
  page ? this.navCtrl.navigateRoot(page) : console.warn(msgError);

}else{
  //AQUI VA
  let url = "https://apiharodoor.harodoor.eu/MP/Index?PKUsuario="+this._UsuPro.PKUsuario+"&Total="+this.Total+"";
  // this.iap.window(url);
  this.iap.create(url);
  // this.route.params();
} 
// this._UsuPro.PKMenuBandera == 1 ? page = 'pagoMP' : console.warn(msgError);
    // this._UsuPro.PKMenuBandera == 1 ? page = 'pago-mercado-p' : console.warn(msgError);
}

if (item.Opcion1 == 'Reportes') {
  this.navCtrl.navigateRoot('reporte');
}

if (item.Opcion1 == 'EstadoCuenta') {
  this.navCtrl.navigateRoot('EstadoCuenta');
}

if(item.Opcion1=='Buzon de queja' &&  this._UsuPro.PKNivel==1){
  this.navCtrl.navigateForward(`mis-quejas/${ this._UsuPro.PKUsuario }/${ this.FKResidencia }`);
}
if(item.Opcion1=='Buzon de queja' &&  this._UsuPro.PKNivel==0){
  this.navCtrl.navigateForward(`buzon-de-quejas/${ this.FKResidencia }`);
}
if(item.Opcion1=='Area Comun' &&  this._UsuPro.PKNivel==1){
  this.navCtrl.navigateForward(`ver-area-comun-residente/${ this.FKResidencia }/${ this._UsuPro.PKNivel }`);
}

if(item.Opcion1=='Asignar Area Comun' &&  this._UsuPro.PKNivel==0){
  this.navCtrl.navigateForward(`ver-area-comun-residente/${ this.FKResidencia }/${ this._UsuPro.PKNivel }`);
}

if(item.Opcion1=='Generador de codigos QR' &&  this._UsuPro.PKNivel==0){
  this.navCtrl.navigateForward(`generador-codigos/${ this.FKResidencia }`);
}
if(item.Opcion1=='Generador de codigos QR' &&  this._UsuPro.PKNivel==2){
  this.navCtrl.navigateForward(`generador-codigos/${ 0 }`);
}
}
async presentAlertConfirm() {
  const alert = await this.alertCtrl.create({
    header: 'Confirm!',
    message: ' <strong>no tienes suscripcion activa fabor de pasar a pagar</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

ObtenerImagen(){
    return this.config.APIURLCODIGOS + "Codigos/ObtenerImagen?PKUsuario=" + this._UsuPro.PKUsuario;
}

}

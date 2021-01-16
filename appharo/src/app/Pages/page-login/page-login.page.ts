import { Component, OnInit } from '@angular/core';
import {UsuarioProvider} from '../../providers/usuarios/usuariosProviders';
import { NavController,NavParams, LoadingController, AlertController } from '@ionic/angular';
import { PageClienteDashboardPage } from 'src/app/page-cliente-dashboard/page-cliente-dashboard.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {

Correo:string;
Contrasena:string;
DatosUsuarios=[];
Recordar:boolean=false;
objLogin:any={
  Correo:'',
  Contrasena:''
};
valido:any;
texto:any;
  constructor(private _login:UsuarioProvider,
            private navCtrl:NavController,
            private loadCtrl:LoadingController,
            private alertCtrl:AlertController
          , private storage:Storage
            ) {

    console.log('Hola Soy page login')
  }

  ngOnInit() {
  }

  ionViewWillEnter (){
    this.Recordar=false;
    this.storage.get('objLogin').then(r=>{
      console.log("======>ionwill",r);
      if (this.Recordar==false) {
        this.Correo=r.Correo;
        this.Contrasena=r.Contrasena;

      }
    });
      
  }

  onSubmit(value){
    console.log(value);
    console.log('AQUI ANMDAMOS');
  }

  async Login(){

  
    const loading = await this.loadCtrl.create({
      message: 'Iniciando sesion',
      duration: 2000
    });
    await loading.present();
    this.objLogin.Correo=this.Correo;
    this.objLogin.Contrasena=this.Contrasena;
    
    this._login.Login(this.Correo,this.Contrasena).then(result=>{
        if (result['Model'] !="[]") {
          
          loading.onDidDismiss();

          this.StorageDatos(this.Recordar);

          this.DatosUsuarios=JSON.parse(result['Model']);
          console.log(this.DatosUsuarios);
          this._login.PKUsuario = this.DatosUsuarios[0]['PKUsuario'];
          this._login.PKNivel = this.DatosUsuarios[0]['FKNivel'];
          this._login.PKMenuBandera = this.DatosUsuarios[0]['FKMenuBandera'];
          
          this._login.NombreCompleto = this.DatosUsuarios[0]['NombreCompleto'];
          this._login.Correo = this.DatosUsuarios[0]['Correo'];
          this._login.Telefono = this.DatosUsuarios[0]['Telefono'];
          
          this._login.FKResidencia = this.DatosUsuarios[0]['FKResidencia'];
          this._login.NombreResidencia = this.DatosUsuarios[0]['NombreResidencia'];
          this._login.GeneradorCodigos = this.DatosUsuarios[0]['GeneradorCodigos'];
          this._login.WhatsappCorreo = this.DatosUsuarios[0]['WhatsappCorreo'];
      
          this._login.TokenMercado = this.DatosUsuarios[0]['TokenMercado'];
          this._login.KeyMercado = this.DatosUsuarios[0]['KeyMercado'];
          this._login.IDNivelDispotivo = this.DatosUsuarios[0]['IDNivelDispotivo'];
          this._login.Expiracion = this.DatosUsuarios[0]['Expiracion'];
          
          

          console.log('Te has logeado');
        this.navCtrl.navigateRoot('page-cliente-dashboard');
        
    }else{
      this.Mensaje();

      console.log('no te has logeado');
    }


    }).catch(Error=>{console.log(Error)});
 



  }


  async Mensaje(){
      const alert = await this.alertCtrl.create({
        header: 'Inicio de sesion',
        message: 'Tus datos son incorrectos',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    CheckBox(item){

      this.Recordar=item.detail.checked;
      if (this.Recordar==false) {
        this.storage.set('objLogin',{}).then(r=>{
          console.log("======>",r);
          this.Correo='';
          this.Contrasena='';
        });
      }
    }

    StorageDatos(Recordando){
      if (Recordando==true) {
        
        this.storage.set('objLogin',this.objLogin).then(r=>{
          console.log("======>",r);
        });
        this.storage.get('objLogin').then(r=>{
          console.log("======>GET",r);
        });

      }else{
        this.Correo = "";
        this.Contrasena="";
      }
    }

}

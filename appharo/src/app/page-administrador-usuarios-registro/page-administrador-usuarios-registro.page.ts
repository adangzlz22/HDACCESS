import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';
import { NavController, AlertController } from '@ionic/angular';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';


@Component({
  selector: 'app-page-administrador-usuarios-registro',
  templateUrl: './page-administrador-usuarios-registro.page.html',
  styleUrls: ['./page-administrador-usuarios-registro.page.scss'],
})
export class PageAdministradorUsuariosRegistroPage implements OnInit {
  PKUsuario: string;
  NombreCompleto: string;
  Correo: string;
  Telefono: string;
  NombreBotonModificar:string;
  Desaparecer:Boolean=false;
  Contrasena:string;
  ContrasenaVerif:string;
  DatosResidencias:any;
  PKResidencia:number;
  item2:any;
  
  FKNivel:any;
  FKMenuBandera:any;
  FKResidencia:any;
  AparecerResidencias:any;
  lstExiste:any;
valido:any;
texto:any;
  constructor(private route: ActivatedRoute
              ,private _usuProv: UsuarioProvider
              ,private navCtrl: NavController
              ,private alertCtrl: AlertController
              ,private _resiProv: ResidenciasProvider) { }

  ngOnInit() {
  }
  ionViewWillEnter(){


    this.ObtenerResidencias();
    this.PKUsuario = this.route.snapshot.paramMap.get('PKUsuario');
    this.NombreCompleto = this.route.snapshot.paramMap.get('NombreCompleto');
    this.Correo = this.route.snapshot.paramMap.get('Correo');
    this.Telefono = this.route.snapshot.paramMap.get('Telefono');
    this.FKMenuBandera = this.route.snapshot.paramMap.get('FKMenuBandera');
    this.FKNivel = this.route.snapshot.paramMap.get('FKNivel');
    this.FKResidencia = this.route.snapshot.paramMap.get('FKResidencia');
    if(this.FKResidencia==0 || this.FKResidencia==-1){
        this.AparecerResidencias=true;
    }else{
      this.AparecerResidencias=false;
      this.PKResidencia=this.FKResidencia;
    }

    if (this.PKUsuario != '0') {
      this.NombreBotonModificar = 'Modificar';
      this.Desaparecer = true;
    }else{
      this.NombreBotonModificar = 'Agregar';
      this.Desaparecer = false;
      this.NombreCompleto='';
      this.Correo='';
      this.Telefono='';
      this.Contrasena='';
    }
  }

  CrearUsuarios(){
    if (this.Contrasena != '' || this.ContrasenaVerif !='') {
      
      if (this.Contrasena == this.ContrasenaVerif ) {
        
      
          if (this.Desaparecer==true) {
                //Modificar Usuario
                this._usuProv.ActualizarUsuarios(this.PKUsuario,this.NombreCompleto,this.Correo,this.Telefono,this.Contrasena,this.PKResidencia).then(result=>{
            this.navCtrl.pop();
            console.log(result);
              }).catch(error=>{
                  console.log(error);
              });
          }else{
              //Agregar Usuario
          this.ExisteUsuario();    
        }
      }
      else{
        this.Mensaje();
      }
      }else{
        this.MensajeFalta();
      }
      

}
  EliminarUsuarios(){
    this._usuProv.EliminarUsuarios(this.PKUsuario).then(result=>{
      console.log(result);
      this.navCtrl.pop();
    }).catch(error=>{
      console.log(error);
  });
  }

  async Mensaje(){
    const alert = await this.alertCtrl.create({
      header: 'Contraseña',
      message: 'Las contraseña no coinciden',
      buttons: ['OK']
    });

    await alert.present();
  }
  async MensajeExiste(){
    const alert = await this.alertCtrl.create({
      header: 'Usuario',
      message: 'Ya existe un usuario admin en esta privada',
      buttons: ['OK']
    });

    await alert.present();
  }


  async MensajeFalta(){
    const alert = await this.alertCtrl.create({
      header: 'Contraseña',
      message: 'Favor de escribir una contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }
  ObtenerResidencias(){
    this._resiProv.ObtenerResidencias('').then(result=>{
      this.DatosResidencias = JSON.parse(result['Model']);
    }).catch(error=>{
      console.log(error);
    });
  }
  Elejir(){
  }

  ExisteUsuario(){
   
    if (this.FKNivel==1) {
      this._usuProv.CrearUsuarios(this.NombreCompleto,this.Correo,this.Telefono,this.Contrasena,this.PKResidencia,this.FKNivel,this.FKMenuBandera).then(result=>{
        console.log(result);
        this.lstExiste=[];
  this.navCtrl.pop();
}).catch(error=>{
        console.log(error);
    });
    }else{

      this._resiProv.ExisteUsuario(this.PKResidencia,this.FKNivel).then(result=>{
        this.lstExiste=JSON.parse(result['Model'])
        console.log(this.lstExiste);
        if (this.lstExiste.length!=0) {
          this.MensajeExiste();
        }else{

        this._usuProv.CrearUsuarios(this.NombreCompleto,this.Correo,this.Telefono,this.Contrasena,this.PKResidencia,this.FKNivel,this.FKMenuBandera).then(result=>{
            console.log(result);
            this.lstExiste=[];
      this.navCtrl.pop();
    }).catch(error=>{
            console.log(error);
        });
    }
      }).catch(error=>{
        console.log(error);
      });
      

    }

        
      }

      onSubmit(){
        console.log('AQUI ANMDAMOS');
      }
    

}

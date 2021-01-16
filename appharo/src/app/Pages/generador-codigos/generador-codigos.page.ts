import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { ActivatedRoute } from '@angular/router';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';
import { GeneradorProvider } from 'src/app/providers/GeneradorCodigosDeBarra/GeneradorProvider';

@Component({
  selector: 'app-generador-codigos',
  templateUrl: './generador-codigos.page.html',
  styleUrls: ['./generador-codigos.page.scss'],
})
export class GeneradorCodigosPage implements OnInit {


  FKResidencia:any;
  lstResidencias:any;
  PKResidencia:any;
  Nivel:any;
  constructor(private alertCtrl:AlertController
              ,private usuProv:UsuarioProvider
              ,private navCtrl:NavController
              ,private route:ActivatedRoute
              ,private residenciaPriv:ResidenciasProvider
              ,private generadorProvider:GeneradorProvider) { }

  ngOnInit() {
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
    this.ObtenerResidencias();
    this.Nivel=this.usuProv.PKNivel;
  }
  ObtenerResidencias(){
    this.residenciaPriv.ObtenerResidencias('').then(result=>{
      this.lstResidencias = JSON.parse(result['Model']);
    }).catch(error=>{
      console.log(error);
    });
  }

  GenerarCodigoDeBarras(){
    if (this.Nivel==0) {
      this.generadorProvider.GenerarCodigosDeBarra(this.FKResidencia).then( result => {
          this.navCtrl.pop();
      }).catch( erro => {
        console.log(erro);
      });
    }

    if (this.Nivel==2) {
      if(this.PKResidencia == 0 || this.PKResidencia == undefined){
          this.Mensaje();
      }else{
      this.generadorProvider.GenerarCodigosDeBarra(this.PKResidencia).then( result => {
        this.navCtrl.pop();
      }).catch( erro => {
        console.log(erro);
      });
    }
    }
  }

  async Mensaje() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Generador de codigos',
      subHeader: 'Atencion',
      message: 'Favor de seleccionar una residencia.',
      buttons: ['OK']
    });

    await alert.present();
    }


    async presentAlertConfirm() {
      const alert = await this.alertCtrl.create({
        header: '¡Confirmar!',
        message: ' <strong>¿Seguro desea generar códigos nuevos?</strong>!!!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Confirmar',
            handler: () => {
              console.log('Confirm Okay');
              this.GenerarCodigoDeBarras();
            }
          }
        ]
      });
  
      await alert.present();
    }
  
}

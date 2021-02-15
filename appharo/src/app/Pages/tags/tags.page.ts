import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    origen:'tags'
  };
userName = 'No seleccionado';

  constructor(private navCtrl:NavController,
              private usuario:UsuarioProvider,
              private route:ActivatedRoute) {



               }
 
  ngOnInit() {
    console.log(this.usuario.PKUsuario)
    this.route.queryParams.subscribe(params => {
      if (params['pago']) {
        this.pago = JSON.parse(params['pago']);
        console.log('------------------->',this.pago);
        console.log(this.pago);
       this.userName =this.pago['userObj'].NombreCompleto;
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


}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-cuotas',
  templateUrl: './cuotas.page.html',
  styleUrls: ['./cuotas.page.scss'],
})
export class CuotasPage implements OnInit {

  lstCuotas=[];
  constructor(private _usu:UsuarioProvider,
              private _resi:ResidenciasProvider,
              private navCtrl:NavController
              ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.ObtenerCuotasTipo();
  }

  ObtenerCuotasTipo(){
    this._resi.ObtenerCuotasTipo(1015).then( (result: any) => {
      this.lstCuotas = JSON.parse(result.Model);
      console.log(this.lstCuotas)

    }).catch(
        error => {
          console.log(error);
        });
  }

  DirigirCuotas(item){
    this.navCtrl.navigateForward(`editar-cuotas/${ item.IdCatTipoSuscripcion }/${ item.TipoSuscripcion }/${item.Costo}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-administrador-residencias',
  templateUrl: './page-administrador-residencias.page.html',
  styleUrls: ['./page-administrador-residencias.page.scss'],
})
export class PageAdministradorResidenciasPage implements OnInit {

  DatosResidencias=[];
  NombreResidencia:any;
  constructor(private _resiProv: ResidenciasProvider
              ,private navCtrl: NavController) { }

ngOnInit() {
  }

  ionViewWillEnter(){
    this.NombreResidencia='';
    this.ObtenerResidencias();

  }
  ObtenerResidencias(){
    this._resiProv.ObtenerResidencias(this.NombreResidencia).then(result=>{
      this.DatosResidencias = JSON.parse(result['Model']);
    }).catch(error=>{
      console.log(error);
    });
  }
  Actualizar(item){
    this.navCtrl.navigateForward(`page-administrador-residencias-registro/${item.PKResidencia}/${item.NombreResidencia}/${item.LimVisitasFrecuentes}/${item.LimVisitasUnSoloUso}/${item.FKDiasActivados}`);

  }
  AgregarNuevo(){
    this.navCtrl.navigateForward(`page-administrador-residencias-registro/${0}/${0}/${0}/${0}/${0}`);
  }
}

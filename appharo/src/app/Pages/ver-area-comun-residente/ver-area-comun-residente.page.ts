import { Component, OnInit } from '@angular/core';
import { AreaComun } from 'src/app/providers/AreaComun/AreaComun';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-area-comun-residente',
  templateUrl: './ver-area-comun-residente.page.html',
  styleUrls: ['./ver-area-comun-residente.page.scss'],
})
export class VerAreaComunResidentePage implements OnInit {

  FKResidencia:any;
  FKNivel:any;
  constructor(private AreaProvider:AreaComun
              ,private navCtrl:NavController
              ,private route:ActivatedRoute) { }

  lstMes:any;
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
    this.FKNivel=this.route.snapshot.paramMap.get('FKNivel');
    this.ObtenerMesAreaComun();
  }
  ObtenerMesAreaComun(){
      this.AreaProvider.ObtenerMesAreaComun().then(result=>{
          this.lstMes=JSON.parse(result['Model']);
      }).catch(err=>{
        console.log(err);
      })
  }

  ObtenerAreaComun(item){
  this.navCtrl.navigateForward(`detalles-area-comun/${ this.FKResidencia }/${ this.FKNivel }/${ item.Fecha }`);
  }
}

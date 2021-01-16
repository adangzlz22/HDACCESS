import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaComun } from 'src/app/providers/AreaComun/AreaComun';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-area-comun',
  templateUrl: './detalles-area-comun.page.html',
  styleUrls: ['./detalles-area-comun.page.scss'],
})
export class DetallesAreaComunPage implements OnInit {
  FKResidencia:any;
  Fecha:any;
  lstAreaComun:any;
  FKNivel:any;
  constructor(private route:ActivatedRoute
              ,private AreaProvider:AreaComun
              ,private navCtrl:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
    this.FKNivel=this.route.snapshot.paramMap.get('FKNivel');
    this.Fecha=this.route.snapshot.paramMap.get('Fecha');
    this.ObtenerAreaComun();
  }
  ObtenerAreaComun(){
      this.AreaProvider.ObtenerAreaComun(this.FKResidencia,this.Fecha).then(result=>{
          this.lstAreaComun=JSON.parse(result['Model']);
      }).catch(err=>{
        console.log(err);
      })
  }
  AsignarAreaComun(){
  this.navCtrl.navigateForward(`asignar-area-comun/${ this.FKResidencia }`);
  }
}

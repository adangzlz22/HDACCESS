import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-quejas',
  templateUrl: './mis-quejas.page.html',
  styleUrls: ['./mis-quejas.page.scss'],
})
export class MisQuejasPage implements OnInit {

  FKUsuario:any;
  FKResidencia:any;
  lstMisQuejas:any;
  constructor(private route:ActivatedRoute
            ,private buzonProviders:BuzonDeQuejas
            ,private navCtrl:NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.FKUsuario=this.route.snapshot.paramMap.get('FKUsuario');
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
    this.ObtenerBuzonDeQuejas();
  }


  ObtenerBuzonDeQuejas(){
    this.buzonProviders.ObtenerBuzonDeQueja(this.FKUsuario,this.FKResidencia,-1).then(result=>{
      this.lstMisQuejas=JSON.parse(result['Model']);
      console.log( this.lstMisQuejas);
    }).catch(err=>{
      console.log(err);
    })
  }
  AgregarQueja(){
  this.navCtrl.navigateForward(`buzon-de-quejas-residente/${ this.FKUsuario }/${ this.FKResidencia }`);

  }
  VerDetalles(item){
    this.navCtrl.navigateForward(`detalles-buzon-de-quejas/${ item.NombreCompleto }/${ item.Telefono }/${ item.Tipo }/${ item.DescripcionArea }/${ item.FechaAsignacion }`);
  }
}

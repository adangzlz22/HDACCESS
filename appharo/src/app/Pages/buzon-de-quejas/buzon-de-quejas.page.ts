import { Component, OnInit } from '@angular/core';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buzon-de-quejas',
  templateUrl: './buzon-de-quejas.page.html',
  styleUrls: ['./buzon-de-quejas.page.scss'],
})
export class BuzonDeQuejasPage implements OnInit {

  FKUsuario:any;
  FKResidencia:any;
  lstMisQuejas:any;
  Estatus:any;
  constructor(private buzonProvider:BuzonDeQuejas
              ,private navCtrl:NavController
              ,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.Estatus=-1;
    this.FKUsuario=-1;
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
    // this.ObtenerBuzonDeQuejas();
  }
  onChange(event){
    this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario,this.FKResidencia,this.Estatus).then(result=>{
      this.lstMisQuejas=JSON.parse(result['Model']);
      console.log(this.lstMisQuejas);
    }).catch(err=>{
      console.log(err);
    })
  }

  // ObtenerBuzonDeQuejas(){
  //   this.buzonProvider.ObtenerBuzonDeQueja(this.FKUsuario,this.FKResidencia,this.Estatus).then(result=>{
  //     this.lstMisQuejas=JSON.parse(result['Model']);
  //     console.log(this.lstMisQuejas);
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // }

  VerDetalles(item){
    this.navCtrl.navigateForward(`detallesbuzondequejaadministrador/${item.PKBuzonDeQueja}/${ item.NombreCompleto }/${ item.Telefono }/${ item.Tipo }/${ item.DescripcionArea }/${ item.FechaAsignacion }/${ item.Estatus }`);
  }

}

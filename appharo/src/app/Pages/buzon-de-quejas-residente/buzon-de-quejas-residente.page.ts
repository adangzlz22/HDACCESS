import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buzon-de-quejas-residente',
  templateUrl: './buzon-de-quejas-residente.page.html',
  styleUrls: ['./buzon-de-quejas-residente.page.scss'],
})
export class BuzonDeQuejasResidentePage implements OnInit {

  FKUsuario:any;
  FKResidencia:any;
  Tipo:any;
  Descripcion:any;
  constructor(private route:ActivatedRoute
              ,private buzonProviders:BuzonDeQuejas
              ,private navCtrl:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.FKUsuario=this.route.snapshot.paramMap.get('FKUsuario');
    this.FKResidencia=this.route.snapshot.paramMap.get('FKResidencia');
  }

    CrearBuzonDeQuejas(){
      this.buzonProviders.CrearBuzonDeQuejas(this.FKUsuario,this.FKResidencia,this.Tipo,this.Descripcion).then( r =>{
        this.navCtrl.pop();
        console.log(r);
      }).catch(err=>{
          console.log(err);
      });
    }

}

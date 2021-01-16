import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BuzonDeQuejas } from 'src/app/providers/BuzonDeQuejas/BuzonDeQuejas';

@Component({
  selector: 'app-detallesbuzondequejaadministrador',
  templateUrl: './detallesbuzondequejaadministrador.page.html',
  styleUrls: ['./detallesbuzondequejaadministrador.page.scss'],
})
export class DetallesbuzondequejaadministradorPage implements OnInit {
  NombreCompleto:any;
  Telefono:any;
  Tipo:any;
  DescripcionArea:any;
  DescripcionEstatus:any;
  Estatus:any;
  PKBuzonDeQueja:any;
  constructor(private route:ActivatedRoute
              ,private navCtrl:NavController 
              ,private buzonPrivder:BuzonDeQuejas) { }

  ngOnInit() {
    this.PKBuzonDeQueja=this.route.snapshot.paramMap.get('PKBuzonDeQueja');
    this.NombreCompleto=this.route.snapshot.paramMap.get('NombreCompleto');
    this.Telefono=this.route.snapshot.paramMap.get('Telefono');
    this.Tipo=this.route.snapshot.paramMap.get('Tipo');
    this.DescripcionArea=this.route.snapshot.paramMap.get('DescripcionArea');
    this.DescripcionEstatus=this.route.snapshot.paramMap.get('DescripcionEstatus');
    this.Estatus=this.route.snapshot.paramMap.get('Estatus');
  }


  Guardar(){
      this.buzonPrivder.Guardar(this.PKBuzonDeQueja,this.Estatus).then(result=>{
        console.log(result);
          this.navCtrl.pop();
      }).catch(err=>{
      console.log(err);
    });
  }

  Cancelar(){
    this.navCtrl.pop();
  }
}

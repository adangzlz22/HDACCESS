import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';

@Component({
  selector: 'app-editar-cuotas',
  templateUrl: './editar-cuotas.page.html',
  styleUrls: ['./editar-cuotas.page.scss'],
})
export class EditarCuotasPage implements OnInit {

  IdCatTipoSuscripcion;
  TipoSuscripcion;
  Costo;
  constructor(private resi:ResidenciasProvider,
              private route:ActivatedRoute,
              private navCtrl:NavController) { }

  ngOnInit() {
    this.IdCatTipoSuscripcion=this.route.snapshot.paramMap.get('IdCatTipoSuscripcion');
    this.TipoSuscripcion=this.route.snapshot.paramMap.get('TipoSuscripcion');
    this.Costo=this.route.snapshot.paramMap.get('Costo');
    
  }


  Actualizar(){
    this.resi.Actualizar(this.IdCatTipoSuscripcion,this.Costo).then( (result: any) => {
      this.navCtrl.pop();
    }).catch(
        error => {
          console.log(error);
        });
  }
}

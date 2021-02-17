import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ResidenciasProvider } from 'src/app/providers/Residencias/residenciasProvider';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-buscar-tags',
  templateUrl: './buscar-tags.page.html',
  styleUrls: ['./buscar-tags.page.scss'],
})
export class BuscadorTAGSComponent {

  lstTAGSv=[];
  pago:any;
  constructor(private navCtrl:NavController,
              private _usuProv:UsuarioProvider,
              private _resi:ResidenciasProvider,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pago = JSON.parse(params['pago']);
     });
    console.log(this._usuProv.IDDepartamento)
    this.BuscarTags();
  }


  BuscarTags(){
    this._resi.ObtenerTAGS(this._usuProv.IDDepartamento).then( (result: any) => {
      this.lstTAGSv = JSON.parse(result.Model);
      console.log(this.lstTAGSv[0].name)
    }).catch(
        error => {
          console.log(error);
        });
  }


  retonarTAG(item) {
    console.log(item)
    this.pago.PersonID = item.IDPERSON;
    const variableNav = this.pago.origen;
    console.log(this.pago)
    console.log(variableNav);
  
    if(variableNav=='tags'){
    this.navCtrl.navigateRoot(variableNav, {
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    });
  }
  }




}

import { Component, OnInit } from '@angular/core';
import { VisitaProvider } from '../providers/Visitas/visitaProvider';
import { UsuarioProvider } from '../providers/usuarios/usuariosProviders';

@Component({
  selector: 'app-page-cliente-frecuentes',
  templateUrl: './page-cliente-frecuentes.page.html',
  styleUrls: ['./page-cliente-frecuentes.page.scss'],
})
export class PageClienteFrecuentesPage implements OnInit {


  DatosVisitas=[];
  numeroDeVisitas:number;
  constructor(private _VisPro:VisitaProvider,
              private _UsuPro:UsuarioProvider) { }

  ngOnInit() {
    this.ObtenerVisitas();
  }


  ObtenerVisitas(){
    console.log('HOLA');
    this._VisPro.ObtenerVisitas( 2 ,this._UsuPro.PKUsuario,-1).then(result=>{
      this.DatosVisitas=JSON.parse(result['Model']);
      console.log(this.DatosVisitas);
      this.numeroDeVisitas=this.DatosVisitas[0]['LimVisitasFrecuentes']-this.DatosVisitas[0]['SumaVisitasFrecuentes'];

    }).catch(Error=>{

      console.log(Error);
    });
}

 
}

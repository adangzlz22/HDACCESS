import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenciasProvider } from '../providers/Residencias/residenciasProvider';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-administrador-residencias-registro',
  templateUrl: './page-administrador-residencias-registro.page.html',
  styleUrls: ['./page-administrador-residencias-registro.page.scss'],
})
export class PageAdministradorResidenciasRegistroPage implements OnInit {

  ModificTexto:string;
  PKResidencia:string;
  NombreResidencia:string;
  LimVisitasFrecuentes:string;
  LimVisitasUnSoloUso:string;
  Desaparecer:Boolean;
  Dispositivo:any;
Dias:any; 
FechaExpiracion:any;

lstNivelDispositivos:any;
lst=[];

IdNivelDispositivo:any;
lstDiasActivados:any=[];
WhatsappCorreo:any=false;
TokenMercado:any;
KeyMercado:any


lstDias:any=[
  {
    Id:1,
    Dia:"Lunes"
  },
  {
    Id:2,
    Dia:"Martes"
  },
  {
    Id:3,
    Dia:"Miercoles"
  },
  {
    Id:4,
    Dia:"Jueves"
  },
  {
    Id:5,
    Dia:"Viernes"
  },
  {
    Id:6,
    Dia:"Sabado"
  },
  {
    Id:7,
    Dia:"Domingo"
  },
  ]
  selectedCodeValue:any;
  constructor(private route: ActivatedRoute
            ,private ResiProvi: ResidenciasProvider
            ,private navCtrl:NavController ) { }

  ngOnInit() { 
    this.ObtenerNivel();
    this.lstDiasActivados=[];
   
  }

  ionViewWillEnter(){
    this.WhatsappCorreo=false;
    this.PKResidencia = this.route.snapshot.paramMap.get('PKResidencia');
    console.log(this.PKResidencia);
    this.NombreResidencia = this.route.snapshot.paramMap.get('NombreResidencia');
    this.LimVisitasFrecuentes = this.route.snapshot.paramMap.get('LimVisitasFrecuentes');
    this.LimVisitasUnSoloUso = this.route.snapshot.paramMap.get('LimVisitasUnSoloUso');
    if (this.NombreResidencia != '0') {
      this.ModificTexto = 'Modificar';
      this.Desaparecer = true;
    }else{
      this.ModificTexto = 'Agregar';
      this.Desaparecer = false;
      this.NombreResidencia='';
      this.LimVisitasFrecuentes='';
      this.LimVisitasUnSoloUso='';
    }
  }


  ObtenerNivel(){
    this.ResiProvi.ObtenerNivel().then(result=>{
          this.lstNivelDispositivos=JSON.parse(result['Model']);

          for (let i = 0; i < this.lstNivelDispositivos.length; i++) {
            const element = {
              IdDispositivo:this.lstNivelDispositivos[i].IdNivel,
              NombreDispositivo:this.lstNivelDispositivos[i].NombreNivel
            };
            this.lst.push(element);
          }
          console.log(this.lst);
    }).catch(error=>{
      console.log(error);
    });
  }

  Guardar(){
    console.log(this.WhatsappCorreo);
    if (this.Desaparecer==false) {
      console.log(this.Dispositivo);
      this.ResiProvi.CrearResidencias(this.NombreResidencia,this.LimVisitasFrecuentes,this.LimVisitasUnSoloUso,this.WhatsappCorreo,this.lstDiasActivados,this.Dispositivo).then(result=>{
        console.log(result);
        this.navCtrl.pop();
      }).catch(error=>{
        console.log(error);
      });
    }else{
      this.ResiProvi.ActualizarResidencias(this.PKResidencia,this.NombreResidencia,this.LimVisitasFrecuentes,this.LimVisitasUnSoloUso,this.WhatsappCorreo,this.lstDiasActivados,this.Dispositivo , this.TokenMercado, this.KeyMercado,this.FechaExpiracion).then(result=>{
        console.log(result);
        this.navCtrl.pop();
      }).catch(error=>{
        console.log(error);
      });
    }
  }
  Eliminar(){
      this.ResiProvi.EliminarResidencias(this.PKResidencia).then(result=>{
        console.log(result);
        this.navCtrl.pop();
      }).catch(error=>{
        console.log(error);
      });
  }


  funciones(){
    console.log(this.lstDias);
    console.log(this.selectedCodeValue);
    for (let index = 0; index < this.selectedCodeValue.length; index++) {
      switch(this.selectedCodeValue[index])
      {
        case "1": 
        let item1 ={Dia:'Lunes',Checked:true}
        this.lstDiasActivados.push(item1);
        break;
        case "2": 
        let item2 ={Dia:'Martes',Checked:true}
        this.lstDiasActivados.push(item2);
        break;
        case "3": 
        let item3 ={Dia:'Miercoles',Checked:true}
        this.lstDiasActivados.push(item3);
        break;
        case "4": 
        let item4 ={Dia:'Jueves',Checked:true}
        this.lstDiasActivados.push(item4);
        break;
        case "5": 
        let item5 ={Dia:'Viernes',Checked:true}
        this.lstDiasActivados.push(item5);
        break;
        case "6": 
        let item6 ={Dia:'Sabado',Checked:true}
        this.lstDiasActivados.push(item6);
        break;
        case "7": 
        let item7 ={Dia:'Domingo',Checked:true}
        this.lstDiasActivados.push(item7);
        break;
      }

    }
    console.log(this.lstDiasActivados);
  }
  

 
}

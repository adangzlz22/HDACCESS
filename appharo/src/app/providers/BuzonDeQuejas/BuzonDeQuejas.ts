import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';

@Injectable()
export class BuzonDeQuejas {
    url_principal: string;


    constructor(
      public http: HttpClient,
      private config: ConfigProvider,
      private _TipoPeticion: TipoPeticionControllerProvider,
      ) {
       console.log('Hello Menu Provider');
      this.url_principal = this.config.APIURL + "BuzonDeQuejas/";
    }
  
    CrearBuzonDeQuejas(FKUsuario,FKResidencia,Tipo,Descripcion) {
      let Menu = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "CrearBuzonDeQueja";
  
      let Model = {
        FKUsuario: FKUsuario,
        FKResidencia: FKResidencia,
        Tipo: Tipo,
        Descripcion: Descripcion,
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Permisos,
        Formato: 2
      };
      this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(
        val => {
         // console.log(val);
          if (val != undefined) {
            resolve(val);
          }
        },
        Error => {
          console.log("POST call in error", Error);
          if (Error != undefined) {
            reject(Error);
          }
        }
      );
    });
    return Menu;
    }


    ObtenerBuzonDeQueja(FKUsuario,FKResidencia,Estatus) {
        let Menu = new Promise((resolve,reject) => {
    
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type": "application/json"
          })
        };
    
        let url = this.url_principal + "ObtenerBuzonDeQuejas";
    
        let Model = {
          FKUsuario: FKUsuario,
          FKResidencia: FKResidencia,
          Estatus: Estatus
        };
        let Peticion = {
          Model: JSON.stringify(Model),
          TipoPeticion: this._TipoPeticion.TipoPeticionController.Permisos,
          Formato: 2
        };
        this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(
          val => {
           // console.log(val);
            if (val != undefined) {
              resolve(val);
            }
          },
          Error => {
            console.log("POST call in error", Error);
            if (Error != undefined) {
              reject(Error);
            }
          }
        );
      });
      return Menu;
      }

      Guardar(PKBuzonDeQueja,Estatus) {
        let Menu = new Promise((resolve,reject) => {
    
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type": "application/json"
          })
        };
    
        let url = this.url_principal + "CambiarEstatusBuzonDeQueja";
    
        let Model = {
          PKBuzonDeQueja: PKBuzonDeQueja,
          Estatus: Estatus,
        };
        let Peticion = {
          Model: JSON.stringify(Model),
          TipoPeticion: this._TipoPeticion.TipoPeticionController.Permisos,
          Formato: 2
        };
        this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(
          val => {
           // console.log(val);
            if (val != undefined) {
              resolve(val);
            }
          },
          Error => {
            console.log("POST call in error", Error);
            if (Error != undefined) {
              reject(Error);
            }
          }
        );
      });
      return Menu;
      }
  
  

}
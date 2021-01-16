import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';
import { ConfigProvider } from 'src/app/Config/config';


@Injectable()
export class PagosControllerProvider {
  url_principal: string;
  url_principal2:string;
  constructor(
      public http: HttpClient,
      private config: ConfigProvider,
      private _TipoPeticion:TipoPeticionControllerProvider
      ) {
        console.log('Hello Menu Provider');
        this.url_principal = this.config.ApiPagos + 'Pagos/';
        this.url_principal2 =this.config.APIURL + 'MercadoPago/';
    }
    Agregar(parametros: EncPagoModel) {
      const url = this.url_principal + 'Agregar';
      return this.http.post(url, parametros);
    }

    // parametros = Ano,IdUsuario
    estadoCuenta(parametros: any) {
      const url = this.url_principal + 'ObtenerEstadoDeCuenta';
      return this.http.post(url, parametros);
    }

    totalXResidencia(params) {
      const url = this.url_principal + 'ObtenerTotalXResidencia';
      return this.http.post(url, params);
    }

    obtenerReporteResidentes(params) {
      const url = this.url_principal + 'ObtenerReporteResidentes';
      return this.http.post(url, params);
    }

    obtenerAnos() {
      const url = this.url_principal + 'ObtenerAnos';
      return this.http.get(url);
    }
    agregarPagoMP(objPagoMP) {
      const url = this.url_principal + 'AgregarMP';
      return this.http.post(url, objPagoMP);
    }


    CreaPago(MPToken,Total,Token,Description,PaymentMethodId,Email,cuotaseleccionada) {
      let Menu = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal2 + "CrearPago";
  
      let Model = {
        MPToken:MPToken,
        Total:Total,
        Token: Token,
        Description: Description,
        PaymentMethodId: PaymentMethodId,
        Email:Email,
        cuotaseleccionada:cuotaseleccionada
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

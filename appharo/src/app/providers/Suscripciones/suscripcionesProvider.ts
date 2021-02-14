import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigProvider } from 'src/app/Config/config';
import { UsuarioProvider } from '../usuarios/usuariosProviders';

@Injectable()
export class SuscripcionesControllerProvider {

  urlPrincipal: string;
  constructor(
      public http: HttpClient,
      private config: ConfigProvider
      ) {
        console.log('Hello Menu Provider');
        this.urlPrincipal = this.config.ApiPagos + 'Suscripciones/';
    }
    cargarTipos(PKResidencia) {
      // const httpOptions = {
      const url = this.urlPrincipal + 'cargarTipos?PKResidencia='+PKResidencia+'';
      return this.http.get(url);
    }
}

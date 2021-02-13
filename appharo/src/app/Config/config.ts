import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {


    public static APIURL:string;

APIURL ='http://apiharodoor.harodoor.eu/Api/';
// APIURL ='http://localhost:50739/Api/';
APIURLCODIGOS = 'https://apicodigos.harodoor.eu/Api/';
ApiPagos = 'https://apipagos.harodoor.eu/Api/';

 constructor() {
    console.log('Hello ConfigProvider Provider');
  }
}
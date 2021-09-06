import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {


    public static APIURL:string;

APIURL ='http://apiharodoor.harodoors.eu/Api/';
// APIURL ='http://localhost:50739/Api/';
APIURLCODIGOS = 'http://apicodigos.harodoors.eu/Api/';

ApiPagos = 'http://apipagos.harodoors.eu/Api/';
// ApiPagos = 'https://localhost:44318/Api/';

 constructor() {
    console.log('Hello ConfigProvider Provider');
  }
}
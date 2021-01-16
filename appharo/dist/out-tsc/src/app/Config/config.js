import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ConfigProvider = class ConfigProvider {
    // ApiPagos = 'http://apipagos.harodoor.eu/Api/';
    // APIURL='http://adangonzalez-001-site1.ctempurl.com/Api/';
    // APIURL='http://192.168.43.215:7010/Api/';
    // APIURLCODIGOS='http://192.168.43.215:9009/Api/';
    //  APIURL = 'https://localhost:44362/Api/';
    //  ApiPagos = 'https://localhost:44318/Api/';
    // APIURLCODIGOS='http://192.168.43.215:9009/Api/';
    //CARLOS
    //APIURL='';
    //APIURL='';
    constructor() {
        //OMAR
        //APIURL='';
        //APIURL='';
        //ADAN
        //APIURL='http://192.168.0.24:7010/Api/';
        this.APIURL = 'https://localhost:44362/Api/';
        //  APIURLCODIGOS = 'http://localhost:61235/Api/';
        // //APIURL = 'http://192.168.0.11:9090/Api/';
        this.ApiPagos = 'https://localhost:44318/Api/';
        // APIURL ='http://apiharodoor.harodoor.eu/Api/';
        this.APIURLCODIGOS = 'http://apicodigos.harodoor.eu/Api/';
        console.log('Hello ConfigProvider Provider');
    }
};
ConfigProvider = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], ConfigProvider);
export { ConfigProvider };
//# sourceMappingURL=config.js.map
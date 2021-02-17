import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';

@Injectable()
export class ResidenciasProvider {
    url_principal: string;


    constructor(
      public http: HttpClient,
      private config: ConfigProvider,
      private _TipoPeticion: TipoPeticionControllerProvider,
      ) {
       console.log('Hello Menu Provider');
      this.url_principal = this.config.APIURL + "Residencias/";
    }
  
    ObtenerResidencias(NombreResidencia) {
      let Menu = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerResidencias";
  
      let Model = {NombreResidencia:NombreResidencia};
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


    CrearResidencias(NombreResidencia:string,LimVisitasFrecuentes:string,LimVisitasUnSoloUso:string,WhatsappCorreo:any,Dias:any,Dispositivo:any,Departamentos:any) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "CrearResidencias";
   
      let Model = {
        NombreResidencia: NombreResidencia, 
        LimVisitasFrecuentes: LimVisitasFrecuentes, 
        LimVisitasUnSoloUso: LimVisitasUnSoloUso, 
        WhatsAppCorreo:WhatsappCorreo,
        Dias:Dias,
        Dispositivo:Dispositivo,
        Departamento:Departamentos
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }

    ActualizarResidencias(PKResidencia:any,NombreResidencia:string,LimVisitasFrecuentes:string,LimVisitasUnSoloUso:string,WhatsappCorreo:any,Dias:any,Dispositivo:any,TokenMercado,KeyMercado,FechaExpiracion,Departamentos) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ActualizarResidencias";
   
      let Model = {
        PKResidencia: PKResidencia,
        NombreResidencia: NombreResidencia, 
        LimVisitasFrecuentes: LimVisitasFrecuentes, 
        LimVisitasUnSoloUso: LimVisitasUnSoloUso, 
        WhatsAppCorreo:WhatsappCorreo,
        Dias:Dias,
        Dispositivo:Dispositivo,
        TokenMercado:TokenMercado,
        KeyMercado:KeyMercado,
        FechaExpiracion:FechaExpiracion,
        Departamento:Departamentos
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }

    EliminarResidencias(PKResidencia) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "EliminarResidencias";
   
      let Model = {
        PKResidencia: PKResidencia
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }

    ObtenerNivel() {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerNivel";
   
      let Model = {};
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }
    
    ObtenerDepartamento() {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerDepartamento";
   
      let Model = {};
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }
    
    ExisteUsuario(PKResidencia,FKNivel) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ExisteUsuario";
   
      let Model = {
        PKResidencia: PKResidencia,
        FKNivel:FKNivel
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }

    ObtenerTAGS(IDDepartamento) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerTAGS";
   
      let Model = {
        IDDepartamento: IDDepartamento
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }
    
    CrearTAGS(PKUsuario,person_pin,nombre) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "CrearTAGS";
   
      let Model = {
        PKUsuario: PKUsuario,
        person_pin:person_pin,
        nombre:nombre
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }
    
    ObtenerCuotasTipo(PKResidencia) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerCuotasTipo";
   
      let Model = {
        PKResidencia: PKResidencia,
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }

        
    Actualizar(IdCatTipoSuscripcion,Costo) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "CuotasTipoSuscripcion";
   
      let Model = {
        IdCatTipoSuscripcion: IdCatTipoSuscripcion,
        Costo: Costo
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
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
    return usuario;
    }
}
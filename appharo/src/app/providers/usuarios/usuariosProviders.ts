import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../Config/config';
import { TipoPeticionControllerProvider } from '../TipoPeticion/TipoPeticion';


@Injectable()
export class  UsuarioProvider {
    url_principal: string;
  

    PKMenuBandera:number;
    PKUsuario:number;
    PKNivel:number;

    NombreCompleto:string;
    Correo:string;
    Telefono:string;
    FKResidencia:any;
    GeneradorCodigos:any;
    WhatsappCorreo:any;
    NombreResidencia:any;
    
    KeyMercado:any;
    TokenMercado:any;
    
    IDNivelDispotivo:any;
    Expiracion:any;
    IDDepartamento:any;

    constructor(
      public http: HttpClient,
      private config: ConfigProvider,
      private _TipoPeticion: TipoPeticionControllerProvider,
      ) {
       console.log('Hello Usuario Provider');
      this.url_principal = this.config.APIURL + "Usuarios/";
    }
  
    Login(Correo:string,Contrasena:string) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "Login";
   
      let Model = {
        Correo: Correo,
        Contrasena: Contrasena,
      };
      let Peticion = {
        Model: JSON.stringify(Model),
        TipoPeticion: this._TipoPeticion.TipoPeticionController.Usuarios,
        Formato: 2
      };
      this.http.post(url, JSON.stringify(Peticion), httpOptions).subscribe(
        val => {
            resolve(val);
        },
        Error => {
          console.log("POST call in error", Error);
            reject(Error);
        }
      );
    });
    return usuario;
    }
    
    EliminarDispositivo(PKUsuario) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "EliminarDispositivo";
   
      let Model = {
        PKUsuario: this.PKUsuario, 
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
    ActualizarPerfil(NombreCompleto:string,Correo:string,Telefono:string) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ActualizarPerfil";
   
      let Model = {
        PKUsuario: this.PKUsuario, 
        NombreCompleto: NombreCompleto, 
        Correo: Correo, 
        Telefono: Telefono
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


    ObtenerUsuarios(NombreCompleto:string,PKUsuario:number,FKNivel:number,FKResidencia:number) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ObtenerUsuarios";
   
      let Model = {
        NombreCompleto: NombreCompleto, 
        PKUsuario: PKUsuario,
        FKNivel: FKNivel,
        FKResidencia: FKResidencia
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
    
    CrearUsuarios(NombreCompleto:string,Correo:string,Telefono:string,Contrasena:string,FKResidencia:number,FKNivel:number,FKMenuBandera:number) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "CrearUsuario";
   
      let Model = {
        NombreCompleto: NombreCompleto, 
        Correo: Correo, 
        Telefono: Telefono, 
        Contrasena: Contrasena, 
        FKResidencia:FKResidencia,
        FKMenuBandera: FKMenuBandera,
        FKNivel: FKNivel
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

    ActualizarUsuarios(PKUsuario:any,NombreCompleto:string,Correo:string,Telefono:string,Contrasena:string,FKResidencia:number) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "ActualizarUsuario";
   
      let Model = {
        PKUsuario: PKUsuario,
        NombreCompleto: NombreCompleto, 
        Correo: Correo, 
        Telefono: Telefono, 
        Contrasena: Contrasena, 
        FKResidencia:FKResidencia
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

    EliminarUsuarios(PKUsuario) {
      let usuario = new Promise((resolve,reject) => {
  
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
  
      let url = this.url_principal + "EliminarUsuario";
   
      let Model = {
        PKUsuario: PKUsuario
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
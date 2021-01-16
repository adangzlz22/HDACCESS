import { Injectable } from '@angular/core';

@Injectable()
export class TipoPeticionControllerProvider {

  public TipoPeticionController = {
    Usuarios : 1,
    Permisos:2,
    Visitas:3,
  };
}

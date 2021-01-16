import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { SuscripcionesControllerProvider } from 'src/app/providers/Suscripciones/suscripcionesProvider';
import { Router } from '@angular/router';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent implements OnInit {
  anoSelected;
  estatus = null;
  data = [];
  modo = 0;
  titulo = '';
  datosResidencias = [];
  fkResidencia = '';
  total = 0;
  searchBarUser;
  time;
  constructor(private navCtrl: NavController,
              private cdRef: ChangeDetectorRef,
              private userService: UsuarioProvider,
              private suscripcionService: SuscripcionesControllerProvider,
              private pagosService: PagosControllerProvider,
              private router: Router
    ) {
      this.modo = this.userService.PKNivel ;
      this.titulo = this.modo == 0 ? 'Reportes de residentes' : 'Reportes de residencias';
      console.log('modooo',this.modo);
    }
  ngOnInit() {
    this.fkResidencia = this.userService.FKResidencia ? this.userService.FKResidencia.toString() : null;
  }

  obtenerReporte() {
    console.log('estas aqui');
    const params = {
      Ano : this.anoSelected,
      Estatus : this.estatus == '3' ? null :  this.estatus,
      FKResidencia : this.fkResidencia,
      text: this.searchBarUser ? this.searchBarUser : ''
    };
    this.pagosService.obtenerReporteResidentes(params).subscribe( (response: any) => {
      if (response.mensajeError) {
        console.warn('obtenerReporteResidentes', response.mensajeError );
      } else {
        this.data = response.resultado.data;
        this.total = response.resultado.total[0].TOTAL;
        console.log(this.data);
      }
    });
  }

  validar() {
    if (this.anoSelected && this.estatus && this.modo == 0) {
      this.obtenerReporte();
    }
    if (this.anoSelected && this.modo == 2) {
      const params = {
        anoSelected : this.anoSelected,
        text : this.searchBarUser ? this.searchBarUser : ''
      };
      this.pagosService.totalXResidencia(params).subscribe((response: any) => {
        if (response.resultado) {
          this.datosResidencias = response.resultado;
        } else {
          console.warn('totalXResidencia()',response.mensajeError);
        }
      });
    }
  }

  goToEstadoCuenta(usuario) {
    this.router.navigateByUrl('/EstadoCuenta', { state: { data: {PKUSUARIO: usuario.PKUSUARIO, Ano: this.anoSelected }}});
  }

  goToReporteXResidencia(residencia) {
    this.estatus = '3';
    this.fkResidencia = residencia.PKResidencia.toString();
    this.modo = 0;
    this.obtenerReporte();
  }

  llenarText() {
    if (this.time != undefined) {
      clearTimeout(this.time);
    }
    this.time = setTimeout(() => {
      this.validar();
    }, 1500);
  }
  // reporte global
}

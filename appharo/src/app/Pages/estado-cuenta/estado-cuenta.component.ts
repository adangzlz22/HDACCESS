import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss'],
})
export class EstadoCuentaComponent implements OnInit {

  anos;
  anoSeleccionado;
  usuario;
  registros = [];

  // Origen
  origen = 0;
  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef,
              private alertCtrl: AlertController,
              private pagoProvider: PagosControllerProvider
    ) { }

  ngOnInit() {
    this.pagoProvider.obtenerAnos().toPromise().then( (res: any) => {
      if (res.resultado) {
        this.anos = res.resultado;
        this.anoSeleccionado = this.anos[0];
      } else {
        console.error('obtenerAnos()', res.mensajeError);
      }
    }).finally(() => {
      this.route.queryParams.subscribe(params => {
        if (params.usuario) {
          this.usuario = JSON.parse(params.usuario);
        }
       });
      if (history.state.data) {
        this.origen = 2;
        this.anoSeleccionado = history.state.data.Ano;
        this.usuario = {PKUsuario: history.state.data.PKUSUARIO};
      }
      this.obtener(null);
    });
  }
  obtener(e) {

    /*
    usuario
    residencia
    fechacreacion
    fechaExpiracion
    fechaPago
    total
    */
    if (this.origen == 0) {
     this.anoSeleccionado = e.detail.value;
    }

    console.log('estoy en obtener', {
      // tslint:disable-next-line: radix
      Ano: this.anoSeleccionado,
      // tslint:disable-next-line: radix
      IdUsuario: this.usuario.PKUsuario,
    });

    this.pagoProvider.estadoCuenta({
      // tslint:disable-next-line: radix
      Ano: this.anoSeleccionado,
      // tslint:disable-next-line: radix
      IdUsuario: this.usuario.PKUsuario.toString(),
    }).subscribe((obj: any) => {
      if (obj.mensajeError) {
        console.warn(obj.mensajeError);
      }
      console.log('', obj);
      this.registros = obj.resultado;
    });
  }
}

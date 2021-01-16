import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';
import { SuscripcionesControllerProvider } from 'src/app/providers/Suscripciones/suscripcionesProvider';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { BuscadorResidenteComponent } from 'src/app/Shared/Residentes/buscador-residente/buscador-residente.component';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagos-efectivo',
  templateUrl: './pagos-efectivo.component.html',
  styleUrls: ['./pagos-efectivo.component.scss'],
})
export class PagosEfectivoComponent implements OnInit, AfterViewChecked {

  @ViewChild('tipoSeleccionado', {static: true}) tipoSeleccionado;

  tiposSuscripciones: []

  pago = {
    total: 0,
    tipo: 0,
    FKUsuario: 0
  };
  userName = 'No seleccionado';
  constructor(private pagosProvider: PagosControllerProvider, private suscripciones: SuscripcionesControllerProvider,
              private navCtrl: NavController,
              private usuario: UsuarioProvider,
              public modalCtrl: ModalController,
              private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef,
              private alertCtrl: AlertController
              ) { }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
   this.route.queryParams.subscribe(params => {
     if (params['pago']) {
       const objTmp = JSON.parse(params['pago']);
       this.pago.FKUsuario = objTmp.FKUsuario;
       this.pago.tipo = objTmp.tipo;
       this.pago.total = objTmp.total;

       // Nombre
       const nameUser: string[] = objTmp.userObj.NombreCompleto.split(' ');
       this.userName = nameUser[0];
     }
    });
   this.obtenesTipos();
  }

  obtenesTipos() {
    this.suscripciones.cargarTipos().subscribe(
      (response: any) => {
       // console.log(val);
        if (response.mensajeError) {
          console.warn(response.mensajeError);
        }
        console.log(response);
        this.tiposSuscripciones = response.resultado;
      },
      Error => {
        console.log('POST call in Agregar', Error);
        if (Error != undefined) {
            console.warn(Error);
        }
      });
  }
  setTotal() {
    this.pago.tipo = this.tipoSeleccionado.value.idCatTipoSuscripcion;
    this.pago.total = this.tipoSeleccionado.value.costo;
  }
  async pagar() {
    if (!this.pago.FKUsuario) {
      return null;
    }
    const pagos: EncPagoModel = {
      FKUsuario: this.pago.FKUsuario,
      IdCatTipoPago: 1,
      IdCatTipoSuscripcion: this.pago.tipo,
      IdUsuarioCreacion: this.usuario.PKUsuario,
      Total: this.pago.total
    };

    const alert = await this.alertCtrl.create({
      header: 'Pagar!',
      message: '<strong>Confirmar pago</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.pagosProvider.Agregar(pagos).subscribe(
              async (response: ResultadoModel) => {
               // console.log(val);
                if (response.mensajeError) {
                  console.warn(response.mensajeError);
                } else {
                  const alert = await this.alertCtrl.create({
                    header: 'Éxito!',
                    message: '<strong>Se realizó su pago con éxito</strong>',
                    buttons: [
                       {
                        text: 'Aceptar',
                        handler: () => {
                          this.navCtrl.navigateRoot('page-cliente-dashboard');
                        }
                      }
                    ]
                  });

                  await alert.present();
                }
              },
              Error => {
                console.log('POST call in Agregar', Error);
                if (Error != undefined) {
                    console.warn(Error);
                }
              }
            );
          }
        }
      ]
    });

    await alert.present();

  }


  openOtherPage() {
  }

  buscarResidente() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          pago: JSON.stringify(this.pago),
      }
    };
    // this.modalCtrl.create(BuscadorResidenteComponent ).present();
    this.navCtrl.navigateForward(`buscarResidente/${ this.usuario.PKUsuario }`, navigationExtras).then((response) => {
      console.log(response);
    });
  }
}




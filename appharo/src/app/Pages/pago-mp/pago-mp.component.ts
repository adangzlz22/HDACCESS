import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagoMPModel } from 'src/app/models/pagoMPModel';
import { Subject } from 'rxjs';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { SuscripcionesControllerProvider } from 'src/app/providers/Suscripciones/suscripcionesProvider';
import * as signalR from '@aspnet/signalr';
import { HubConnection } from '@aspnet/signalr';


declare var Mercadopago: any;

@Component({
  selector: 'app-pago-mp',
  templateUrl: './pago-mp.component.html',
  styleUrls: ['./pago-mp.component.scss'],
})
export class PagoMPComponent implements OnInit {
  // html values
  tiposeleccionado: any = {};
  cuotaseleccionada: any = {};
  @ViewChild('selectCuotas', null) selectCuotas;
  paymentMethodId = '';
  cardNumberRef = '';
  emailClientes:string='';
  // prod
  // key = 'APP_USR-f32a39d9-ad0d-4737-a724-893ea3d9741a';
  // token = 'APP_USR-2611793785083909-061103-4717a41f4006ab065632e60c40fd6449-582833018';

  key:any;
  Token:any;
  // key = 'TEST-53427bd3-9322-4f0a-ba85-b4f7deaeb170';
  // token = 'TEST-810562374130211-050202-55985e3ae4a09c9d817a6b73e9a58384-545481437';
  pagoMP: PagoMPModel = new PagoMPModel();
  Cuotas = [];
  step = 1;
  tipoNumberCard = 'text';
  // pago normal
  tiposSuscripciones;
  pago = { IdCatTipoSuscripcion: 0, Total : 0};

  // hub
  private _hubConnection: HubConnection;
  conexionIniciada = false;
  urlConexionHub = '';
  constructor(private pagoService: PagosControllerProvider,
              private http: HttpClient,
              private alertCtrl: AlertController,
              private usuario: UsuarioProvider,
              private navCtrl: NavController,
              private suscripciones: SuscripcionesControllerProvider,
              ) { }

  ngOnInit() {
    this.key=this.usuario.KeyMercado;
    this.Token=this.usuario.TokenMercado;
    console.log(this.Token);
    console.log(this.key);

    Mercadopago.setPublishableKey(this.key);
    console.log(Mercadopago);
    // this.obtenesTipos();
    this.emailClientes = this.usuario.Correo;
    // Mercadopago.getIdentificationTypes(test);
    // function test(a, b) {
    //   console.log('a', a);
    //   console.log('b', b);
    // }
    // console.log('mercadoPago', Mercadopago);

    // document.getElementById('cardNumber').addEventListener('keyup', guessPaymentMethod);
    // document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);
  }
  // conectarHub() {
  //   this._hubConnection = new signalR.HubConnectionBuilder()
  //   .withUrl(this.urlConexionHub)
  //   .build();
  //   this.iniciarHub();
  // }
  // iniciarHub() {
  //   this._hubConnection.start().then(prom => {
  //     console.log('se inicio la conexion');
  //     // localStorage.setItem('hubConnection',JSON.stringify(this._hubConnection));
  //     // Marca la bandera de que ya esta iniciada la conexion
  //     this.conexionIniciada = true;
  //     /// Realiza el registro del usuario al conectarse al hub
  //   }).catch(err => {
  //     console.error(err.toString());
  //     /// Si falla el intento de conexion manda a reconectar
  //     this.reconectar();
  //   });
  // }
  // onStatusDispositivos() {
  //   this._hubConnection.on('OnConnected', (idDispositivo: string) => {
  //     // if(idDispositivo)
  //     // if (listDispositivosRealTime.getDispositivoById(idDispositivo) != null) {
  //     //   listDispositivosRealTime.actualizarStatus(idDispositivo, 'connected');
  //     // } else {
  //     //   // listDispositivosRealTime.addDispositivo('');
  //     //   console.log('no se encontro dispositivo');
  //     // }
  //     // console.log('OnConnected() Response =>>', idDispositivo);
  //   });
  //   this._hubConnection.on('OnDisconnected', (idDispositivo: string) => {
  //     // if (listDispositivosRealTime.getDispositivoById(idDispositivo) != null) {
  //     //   listDispositivosRealTime.actualizarStatus(idDispositivo, 'disconnected');
  //     // } else {
  //     //   console.log('no se encontro dispositivo');
  //     //   // listDispositivosRealTime.addDispositivo('');
  //     // }
  //     // console.log('OnDisconnected() Response =>>', idDispositivo);
  //   });
  // }
  // reconectar(): void {
  //   console.error('se reinicio la reconexion');
  //   setTimeout(() => {
  //     this.iniciarHub();
  //   }, 5000);
  // }

  guessPaymentMethod(event) {
    this.tipoNumberCard = 'password';
    let a =  this.pago.Total.toString();
    const setPaymentMethod = (status, response) => {
      console.log('setPaymentMethod', status);
      if (status == 200) {
          const element = document.getElementById('payment_method_id');
          element['value'] = response[0].id;
          changePayment.next(response[0].id);
          console.log('element', element);
          // const element = document.getElementById('payment_method_id');
          // element.value = paymentMethodId;
          // getInstallments funcion
          Mercadopago.getInstallments({
            payment_method_id: response[0].id,
            amount: parseFloat(a)
            // 'amount': parseFloat(document.getElementById('transaction_amount').value)
          }, (status, response) => {
              if (status == 200) {
                  // document.getElementById('installments')['options'].length = 0;
                  console.log('getInstallments', response[0].payer_costs);
                  setCuotasEvent.next(response[0].payer_costs);
                  // forEach( installment => {
                  //     const opt = document.createElement('option');
                  //     opt.text = installment.recommended_message;
                  //     opt.value = installment.installments;
                  //     document.getElementById('installments').appendChild(opt);
                  // });
              } else {
                  console.warn(`installments method info error: ${response}`);
              }
          });
      } else {
          console.warn(`payment method info error: ${response}`);
      }
    };

    const changePayment = new Subject();
    changePayment.subscribe((value: string) => {
      this.pagoMP.IdMetodoPago = value;
      console.log('objMP', this.pagoMP);
    });

    let setCuotasEvent = new Subject();
    setCuotasEvent.subscribe((value:any) => {
      this.Cuotas = value;
    });
    console.log('guessPaymentMethod', event);
    if (this.cardNumberRef) {
      console.log('guessPaymentMethod', event);
      const cardnumber = this.cardNumberRef;
      if (cardnumber.length >= 6) {
        const bin = cardnumber.substring(0, 6);
        Mercadopago.getPaymentMethod({
          bin: bin
        }, setPaymentMethod);
      }
    }
  }

  async pagar() {
    // callback
    let sdkResponseHandler = async (status, response) => {
      if (status != 200 && status != 201) {
        console.log('err',{status:status,response:response});
        const alert = await this.alertCtrl.create({
          header: 'No se pudo completar el pago',
          message: `<strong>intentelo mas tarde</strong>`
        });
        await alert.present();
      } else {
        const form = document.querySelector('#pay');
        const card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        doSubmit = true;
        changeToken.next(response.id);
        console.log('token0','cambiado');
      }
    };

    const pagos: EncPagoModel = {
      FKUsuario: 1,
      IdCatTipoPago: 2,
      IdCatTipoSuscripcion: this.pago.IdCatTipoSuscripcion,
      IdUsuarioCreacion: 1,
      Total: this.pago.Total
    };

    let doSubmit = false;
    const changeToken = new Subject();
    changeToken.subscribe((value: string) => {
      this.pagoMP.Token = value;
      this.pagoMP.ClienteCorreo = this.usuario.Correo; //this.usuario.Correo;
      this.pagoMP.Total = this.pago.Total;
      this.pagoMP.Description = 'Suscripcion ' + this.tiposeleccionado.tipoSuscripcion;
      // this.pagoMP.Cuotas = parseInt(this.selectCuotas.nativeElement.value);
      this.pagoMP.Cuotas = 1;
      console.log('pagar', this.pagoMP);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
      // this.pagoService.agregarPagoMP(
      this.pagoService.CreaPago(this.pagoMP.Token,this.pagoMP.Total,this.Token,this.pagoMP.Description,this.pagoMP.IdMetodoPago,this.emailClientes,this.cuotaseleccionada).
      then(async (res: any) => {
        console.log('res', res);
        if (res.status == 'approved') {
          this.pagoService.Agregar(pagos).subscribe(
            async (response: ResultadoModel) => {
             // console.log(val);
              if (response.mensajeError) {
                console.warn(response.mensajeError);
              } else {
                const alert = await this.alertCtrl.create({
                  header: 'Exito!',
                  message: '<strong>Se realizado su pago con exito</strong>',
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
        }else{
          const alert = await this.alertCtrl.create({
            header: 'Algo a ocurrido mal',
            message: '<strong>Status '+ 'Rechazado' + '</strong>',
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
      });
      // this.pagoService.agregarPagoMP(this.pagoMP).subscribe((response) => {
      //   console.log('response',response);
      // });
    });

    if (!doSubmit) {
      const alert = await this.alertCtrl.create({
        header: 'Pagar!',
        message: '<strong>¿Estas seguro?</strong>',
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
              const $form = document.querySelector('#pay');
              Mercadopago.createToken($form, sdkResponseHandler);
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async selectCuota(e) {
    this.cuotaseleccionada = e.target.value;
    let message = 'Selecciona alguna cuota';
    this.Cuotas.find((a)=>{
      if (a.installments == e.target.value) {
        message = 'Se ha seleccionado ' + a.recommended_message;
        return true;
      } else {
        return false;
      }
    });
    const alert = await this.alertCtrl.create({
      header: 'Cuota',
      message: `<strong>${message}</strong>`,
      buttons: [
         {
          text: 'Aceptar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  // obtenesTipos() {
  //   this.suscripciones.cargarTipos(this.FKResidencia).subscribe(
  //     (response: any) => {
  //      // console.log(val);
  //       if (response.mensajeError) {
  //         console.warn(response.mensajeError);
  //       }
  //       console.log(response);
  //       this.tiposSuscripciones = response.resultado;
  //     },
  //     Error => {
  //       console.log('POST call in Agregar', Error);
  //       if (Error != undefined) {
  //           console.warn(Error);
  //       }
  //     });
  // }

  setTotal(e) {
    this.tiposeleccionado = e.target.value;
    this.pago.IdCatTipoSuscripcion = e.target.value.idCatTipoSuscripcion;
    this.pago.Total = e.target.value.costo;
  }

  // validarCardNumber(event) {
  //   let a = parseInt(event.key);
  //   if (a !== NaN) {
  //     const cardTmp = this.cardNumberRef.replace(' ', '');
  //     const leng = cardTmp.length / 4 ;
  //     if (cardTmp.length % 4 == 0 && cardTmp.length > 0) {
  //       this.cardNumberRef += ' ';
  //     }
  //   }
  // }
}
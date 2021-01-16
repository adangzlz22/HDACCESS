import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { PagoMPModel } from 'src/app/models/pagoMPModel';
import { Subject } from 'rxjs';
import { PagosControllerProvider } from 'src/app/providers/Pagos/pagosProvider';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioProvider } from 'src/app/providers/usuarios/usuariosProviders';
import { SuscripcionesControllerProvider } from 'src/app/providers/Suscripciones/suscripcionesProvider';
let PagoMPComponent = class PagoMPComponent {
    constructor(pagoService, http, alertCtrl, usuario, navCtrl, suscripciones) {
        this.pagoService = pagoService;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.usuario = usuario;
        this.navCtrl = navCtrl;
        this.suscripciones = suscripciones;
        // html values
        this.tiposeleccionado = {};
        this.cuotaseleccionada = {};
        this.paymentMethodId = '';
        this.cardNumberRef = '';
        // prod
        // key = 'APP_USR-e1544555-cd5c-4973-8b08-16eba97ae5d0';
        // token = 'APP_USR-810562374130211-050202-c30685b7ab79da8b68f4b7cebd304b44-545481437';
        this.key = 'TEST-53427bd3-9322-4f0a-ba85-b4f7deaeb170';
        this.token = 'TEST-810562374130211-050202-55985e3ae4a09c9d817a6b73e9a58384-545481437';
        this.pagoMP = new PagoMPModel();
        this.Cuotas = [];
        this.step = 1;
        this.tipoNumberCard = 'text';
        this.pago = { IdCatTipoSuscripcion: 0, Total: 0 };
        this.conexionIniciada = false;
        this.urlConexionHub = '';
    }
    ngOnInit() {
        Mercadopago.setPublishableKey(this.key);
        this.obtenesTipos();
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
        let a = this.pago.Total.toString();
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
                    }
                    else {
                        console.warn(`installments method info error: ${response}`);
                    }
                });
            }
            else {
                console.warn(`payment method info error: ${response}`);
            }
        };
        const changePayment = new Subject();
        changePayment.subscribe((value) => {
            this.pagoMP.IdMetodoPago = value;
            console.log('objMP', this.pagoMP);
        });
        let setCuotasEvent = new Subject();
        setCuotasEvent.subscribe((value) => {
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
    pagar() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // callback
            let sdkResponseHandler = (status, response) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (status != 200 && status != 201) {
                    console.log('err', { status: status, response: response });
                    const alert = yield this.alertCtrl.create({
                        header: 'No se pudo completar el pago',
                        message: `<strong>intentelo mas tarde</strong>`
                    });
                    yield alert.present();
                }
                else {
                    const form = document.querySelector('#pay');
                    const card = document.createElement('input');
                    card.setAttribute('name', 'token');
                    card.setAttribute('type', 'hidden');
                    card.setAttribute('value', response.id);
                    form.appendChild(card);
                    doSubmit = true;
                    changeToken.next(response.id);
                }
            });
            const pagos = {
                FKUsuario: this.usuario.PKUsuario,
                IdCatTipoPago: 2,
                IdCatTipoSuscripcion: this.pago.IdCatTipoSuscripcion,
                IdUsuarioCreacion: this.usuario.PKUsuario,
                Total: this.pago.Total
            };
            let doSubmit = false;
            const changeToken = new Subject();
            changeToken.subscribe((value) => {
                this.pagoMP.Token = value;
                this.pagoMP.ClienteCorreo = this.usuario.Correo; //this.usuario.Correo;
                this.pagoMP.Total = this.pago.Total;
                this.pagoMP.Description = 'Suscripcion ' + this.tiposeleccionado.tipoSuscripcion;
                // this.pagoMP.Cuotas = parseInt(this.selectCuotas.nativeElement.value);
                this.pagoMP.Cuotas = 1;
                console.log('pagar', this.pagoMP);
                this.http.post('https://api.mercadopago.com/v1/payments?access_token=' + this.token, {
                    transaction_amount: this.pagoMP.Total,
                    token: this.pagoMP.Token,
                    description: this.pagoMP.Description,
                    installments: this.cuotaseleccionada,
                    payment_method_id: this.pagoMP.IdMetodoPago,
                    payer: {
                        email: this.pagoMP.ClienteCorreo
                    }
                }).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    console.log('res', res);
                    if (res.status == 'approved') {
                        this.pagoService.Agregar(pagos).subscribe((response) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            // console.log(val);
                            if (response.mensajeError) {
                                console.warn(response.mensajeError);
                            }
                            else {
                                const alert = yield this.alertCtrl.create({
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
                                yield alert.present();
                            }
                        }), Error => {
                            console.log('POST call in Agregar', Error);
                            if (Error != undefined) {
                                console.warn(Error);
                            }
                        });
                    }
                    else {
                        const alert = yield this.alertCtrl.create({
                            header: 'Algo ha salido mal',
                            message: '<strong>Status ' + res.status + '</strong>',
                            buttons: [
                                {
                                    text: 'Aceptar',
                                    handler: () => {
                                        this.navCtrl.navigateRoot('page-cliente-dashboard');
                                    }
                                }
                            ]
                        });
                        yield alert.present();
                    }
                }));
                // this.pagoService.agregarPagoMP(this.pagoMP).subscribe((response) => {
                //   console.log('response',response);
                // });
            });
            if (!doSubmit) {
                const alert = yield this.alertCtrl.create({
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
                yield alert.present();
            }
        });
    }
    selectCuota(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.cuotaseleccionada = e.target.value;
            let message = 'Selecciona alguna cuota';
            this.Cuotas.find((a) => {
                if (a.installments == e.target.value) {
                    message = 'Se ha seleccionado ' + a.recommended_message;
                    return true;
                }
                else {
                    return false;
                }
            });
            const alert = yield this.alertCtrl.create({
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
            yield alert.present();
        });
    }
    obtenesTipos() {
        this.suscripciones.cargarTipos().subscribe((response) => {
            // console.log(val);
            if (response.mensajeError) {
                console.warn(response.mensajeError);
            }
            console.log(response);
            this.tiposSuscripciones = response.resultado;
        }, Error => {
            console.log('POST call in Agregar', Error);
            if (Error != undefined) {
                console.warn(Error);
            }
        });
    }
    setTotal(e) {
        this.tiposeleccionado = e.target.value;
        this.pago.IdCatTipoSuscripcion = e.target.value.idCatTipoSuscripcion;
        this.pago.Total = e.target.value.costo;
    }
};
tslib_1.__decorate([
    ViewChild('selectCuotas', null),
    tslib_1.__metadata("design:type", Object)
], PagoMPComponent.prototype, "selectCuotas", void 0);
PagoMPComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pago-mp',
        templateUrl: './pago-mp.component.html',
        styleUrls: ['./pago-mp.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PagosControllerProvider,
        HttpClient,
        AlertController,
        UsuarioProvider,
        NavController,
        SuscripcionesControllerProvider])
], PagoMPComponent);
export { PagoMPComponent };
//# sourceMappingURL=pago-mp.component.js.map
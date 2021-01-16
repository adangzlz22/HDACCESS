var MPController = function () {




    var payment = '';
    var TipoPago = '';
    var ObtenerToken = '';
    

    var Inicializar = function () {
        console.log(document.getElementById("TokenMercadoPago").value);
        console.log(document.getElementById("email").value);
        window.Mercadopago.setPublishableKey(document.getElementById("TokenMercadoPago").value);
        

        document.getElementById('cardNumber').addEventListener('keyup', guessPaymentMethod);
        document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);



        //$('#btnsend').click(function () {
        //    btnClick(ObtenerToken);
        //});

    }




    function guessPaymentMethod(event) {
        let cardnumber = document.getElementById("cardNumber").value;
        console.log(cardnumber);

        if (cardnumber.length >= 6) {
            let bin = cardnumber.substring(0, 6);
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethod);
        }
    };

    function setPaymentMethod(status, response) {
        if (status == 200) {
            let paymentMethodId = response[0].id;
            let element = document.getElementById('payment_method_id');
            payment = document.getElementById('payment_method_id');

            console.log(payment);
            console.log(element);
            payment.value = paymentMethodId;
            console.log(payment.value)
            element.value = paymentMethodId;
            getInstallments();
        } else {
            alert(`payment method info error: ${response}`);
        }
    }

    function getInstallments() {
        window.Mercadopago.getInstallments({
            "payment_method_id": document.getElementById('payment_method_id').value,
            "amount": parseFloat(document.getElementById('transaction_amount').value)

        }, function (status, response) {
            if (status == 200) {
                document.getElementById('installments').options.length = 0;
                response[0].payer_costs.forEach(installment => {
                    let opt = document.createElement('option');
                    opt.text = installment.recommended_message;
                    opt.value = installment.installments;
                    TipoPago = installment.installments;
                    console.log(TipoPago);
                    document.getElementById('installments').appendChild(opt);
                });
            } else {
                alert(`installments method info error: ${response}`);
            }
        });
    }

    doSubmit = false;
    document.querySelector('#pay').addEventListener('submit', doPay);
    console.log(document.querySelector('#pay').addEventListener('submit', doPay));
    function doPay(event) {
        event.preventDefault();
        if (!doSubmit) {
            var $form = document.querySelector('#pay');

            MPToken = window.Mercadopago.createToken($form, sdkResponseHandler);
            console.log(MPToken);
            return false;
        }
    };

    function sdkResponseHandler(status, response) {
        if (status != 200 && status != 201) {
            console.log(status);
            alert("verify filled data");
        } else {
            var form = document.querySelector('#pay');
            var card = document.createElement('input');
            card.setAttribute('name', 'token');
            card.setAttribute('type', 'hidden');
            card.setAttribute('value', response.id);
            form.appendChild(card);
            console.log('HOLA SOY REPONSE ID', response.id);
            console.log(card);
            doSubmit = true;
            console.log(doSubmit);
            form.submit();
            console.log(form);
        }
    };



    var btnClick = function (MPToken) {
        console.log('BTN ENVIAR');
        var objParametros = {
            MPToken: MPToken,
            Total: 300,
            Token: document.getElementById('Token').value,
            Description: 'Suscripcion Mensual',
            PaymentMethodId: payment.value,
            Email: document.getElementById('email').value,
            cuotaseleccionada: TipoPago
        }
        //var formContainer = $('#car-form');
        console.log(objParametros);
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            type: 'POST',
            url: '/MP/GenerarPago',
            data: JSON.stringify(objParametros),
            success: function (result) {
                console.log(result);
                //var modelStatus = $('.model-status');
                //if (result) modelStatus.text('«Estado: Enviado con éxito»');
                //else modelStatus.text('«Estado: Enviado con error. Compruebe que ha rellenado todos los campos»');
            },
            error: function (jqXHR, textStatus, error) {
                //$('.model--status').text('«Estado: Error inesperado»');
            }
        });
    }

    return {
        Inicializar: Inicializar
    }
};

var Service = function () {

    var GetNoAsynk = function (url) {
        var result = undefined;
        $.ajax({
            url: url,
            error: function (ex) {
                $('#TablaLoad').hide();
            },
            dataType: 'json',
            success: function (data) {
                result = data;
            },
            async: false,
            type: 'GET'
        });
        return result;
    }

    var Get = function (url, funCalBack) {
        $.get(url, function (result) {
            funCalBack(result);
        }).fail(function (xhr, status, error) {
            $('#TablaLoad').hide();
        });
    }

    var GetCookie = function (url, funCalBack) {

        $.ajax({
            url: url,
            type: 'GET',
            error: function (ex) {

            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", getAuthCookie());
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (data) {
                funCalBack(data);
            },
            async: true
        });
    };

    var Cargar = function (action, funSucces) {
        $.get(action, null, function (data) {
            funSucces(data);
        }).fail(function (xhr, status, error) {
            $('#TablaLoad').hide();
        });
    }

    var Post = function (url, data, funcallback, funError) {
        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", getAuthCookie());
            },
            success: function (result) {

                if (result.Model != undefined && result.Model != null && result.Model != "") {
                    result.Model = JSON.parse(result.Model);
                }

                funcallback(result)
            },
            error: function (err) {
                console.log(err);
                //if (XMLHttpRequest.status == 401) {
                //    errorThrown = "No autorizado";
                //}

                //objMensajeController.MostrarMensajeError(
                //    "Error en la solicitud: " + textStatus + ", " + errorThrown
                //);

                //funcallback({ ObjModResultado: { MsgError: "Error en la solicitud: " + textStatus + ", " + errorThrown } });

            }
        });
    }
    var PostToken = function (Url, objModel, funcallback) {
        //var xhr = $.post(Url, objModel, function (result) {
        //    Callback(result);
        //}).fail(function (xhr, status, error) {
        //    console.log(error);
        //    //if (funError != undefined) funError(xhr, status, error);
        //    //else $('#TablaLoad').hide();
        //});
        $.ajax({
            url: Url,
            type: 'POST',
            //data: JSON.stringify(objModel),
            data: JSON.stringify(objModel),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", getAuthCookie());
            },
            //  data: objModel,
            //success: function (data) {
            //    Callback(data);
            //},
            success: function (result) {

                //if (result.Model != undefined && result.Model != null && result.Model != "") {
                //    result.Model = JSON.parse(result.Model);
                //}

                funcallback(result)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                if (XMLHttpRequest.status == 401) {
                    errorThrown = "No autorizado";
                }

                //objMensajeController.MostrarMensajeError(
                //    "Error en la solicitud: " + textStatus + ", " + errorThrown
                //);
                console.log(errorThrown);
                funcallback({ ObjModResultado: { MsgError: "Error en la solicitud: " + textStatus + ", " + errorThrown } });

            }
            //error: function (err) {

            //    console.log(err);

            //}
        });
    }
    var PostAlt = function (url, data, funCallback, funError) {

        var url2 = "http://localhost:21285/api/Transacciones/Cargar";

        //$.ajax({
        //    type: "POST",
        //    url: url2,
        //    data: data,
        //headers: {
        //    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imx1aXMiLCJuYmYiOjE1MjU4MTAzODMsImV4cCI6MTUyNTgxMDQ0MywiaWF0IjoxNTI1ODEwMzgzfQ.JV4X2j37qPdkRqIJWOvpFcRUBUlnN_NjqWJ6ungtf6A'// + localStorage.getItem("jwt_token")
        //}
        //})
        //    .done(function (result) {
        //        result.Model = JSON.parse(result.Model);
        //        funCallback(result);
        //    })
        //    .fail(funError || function (XMLHttpRequest, textStatus, errorThrown) {
        //        objMensajeController.MostrarMensajeError("Error en la solicitud.");
        //        console.log(url2, textStatus, errorThrown);
        //    });

        $.ajax({
            type: 'POST',
            url: url, // Location of the service
            data: JSON.stringify(data), //Data sent to server
            contentType: "application/json; charset=utf-8", // content type sent to server
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imx1aXMiLCJuYmYiOjE1MjU4MTIzNzcsImV4cCI6MTUyNTgxMjQzNywiaWF0IjoxNTI1ODEyMzc3fQ._tj4yAZO_Ra9u2tSY5jHjozXO5aBe_zDmrcsK8dEkvg'// + localStorage.getItem("jwt_token")
            },
            dataType: 'json', //Expected data format from server
            success: function (result) {
                //result = JSON.parse(result);
                if (result.Model != undefined && result.Model != null && result.Model != "") {
                    result.Model = JSON.parse(result.Model);
                }

                funCallback(result);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                objMensajeController.MostrarMensajeError(
                    "Error en la solicitud: " + textStatus + ", " + errorThrown
                );
            }
        })

    }

    /**
     * Obtiene la cookie de autorización, si no está presente, muestra un error
     * @returns {string}
     */
    var getAuthCookie = function () {
        var cn = "Authorization=";
        var idx = document.cookie.indexOf(cn)

        if (idx != -1) {
            var end = document.cookie.indexOf(";", idx + 1);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(idx + cn.length, end));
        } else {
            objMensajeController.MostrarMensajeError("La sesión ha caducado.");

            setTimeout(function () {
                location.reload(true);
            }, 3000);

            //throw Error("El token de autorización no existe");
        }
    }

    async function AsyncCall(Url, Type, objModel) {
        let result;
        console.log("haciendo peticion async");
        try {
            result = await $.ajax({
                url: Url,
                type: Type,
                data: JSON.stringify(objModel),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", getAuthCookie());
                },
            });
            return result;
        } catch (err) {
            console.log(err.statusText)
        }
    }

    return {
        Get: Get,
        GetNoAsynk: GetNoAsynk,
        Post: Post,
        Cargar: Cargar,
        getAuthCookie: getAuthCookie,
        GetCookie: GetCookie
        , PostToken: PostToken,
        AsyncCall: AsyncCall
    }
}
///Se crea la instancia desde que se agrega el archivo para que este global
var objService = new Service();
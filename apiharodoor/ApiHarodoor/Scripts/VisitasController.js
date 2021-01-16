var VisitasController = function () {

    //var urlApi = 'https://localhost:44362/api/Visitas/SPActualizarVisitasDeUnSoloUso';
    //var urlApi2 = 'https://localhost:44362/api/Codigos/GenerarCodigosDeBarraAuto';
    var urlApi = 'https://apiharodoor.harodoor.eu/Api/Visitas/SPActualizarVisitasDeUnSoloUso';
    var urlApi2 = 'https://apiharodoor.harodoor.eu/Api/Codigos/GenerarCodigosDeBarraAuto';
    
    var Inicializar = function () {

        EjecutarSP();
    }

    var Inicializar2 = function () {

        EjecutarSP2();
    }
    var EjecutarSP = function () {
        objService.Get(urlApi, function (result) {
            console.log(result);
        });
    }
    var EjecutarSP2 = function () {
        objService.Get(urlApi2, function (result) {
            console.log(result);
        });
    }

    return {
        Inicializar: Inicializar,
        Inicializar2: Inicializar2
    }
};
using ClsModHarodoor.Common;
using ClsModHarodoor.GeneradorDeCodigos;
using ClsNegHarodoor.ClsNegGenerador;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class GeneradorDeCodigosController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        [ActionName("GenerarCodigosDeBarra")]

        public ClsModResponse GenerarCodigosDeBarra([FromBody] ClsModRequest objModRequest)
        {
            ClsModGenerador objModConteoFisico = ClsObjectTransformation.Deserialize<ClsModGenerador>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModGenerador> lstConteoFisico = new ClsNegGenerador(null).GenerarCodigosDeBarra(objModConteoFisico, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstConteoFisico, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
    }
}

using ClsModHarodoor.BuzonDeQueja;
using ClsModHarodoor.Common;
using ClsNegHarodoor.BuzonDeQueja;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class BuzonDeQuejasController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerBuzonDeQuejas")]
        public ClsModResponse ObtenerBuzonDeQuejas([FromBody] ClsModRequest objModRequest)
        {
            ClsModBuzonDeQuejaFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModBuzonDeQuejaFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModBuzonDeQueja> lstMenu = new ClsNegBuzonDeQueja(null).ObtenerBuzonDeQuejas(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearBuzonDeQueja")]
        public ClsModResponse CrearBuzonDeQueja([FromBody] ClsModRequest objModRequest)
        {
            ClsModBuzonDeQuejaFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModBuzonDeQuejaFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModBuzonDeQueja> lstUsuarios = new ClsNegBuzonDeQueja(null).CrearBuzonDeQueja(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("CambiarEstatusBuzonDeQueja")]
        public ClsModResponse CambiarEstatusBuzonDeQueja([FromBody] ClsModRequest objModRequest)
        {
            ClsModBuzonDeQuejaFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModBuzonDeQuejaFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModBuzonDeQueja> lstUsuarios = new ClsNegBuzonDeQueja(null).CambiarEstatusBuzonDeQueja(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
    }
}

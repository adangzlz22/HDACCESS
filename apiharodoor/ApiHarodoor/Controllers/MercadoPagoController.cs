using ClsModHarodoor.Common;
using ClsModHarodoor.MercadoPago;
using ClsNegHarodoor.MercadoPago;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace ApiHarodoor.Controllers
{
    public class MercadoPagoController : ApiController
    {

        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearPago")]
        public ClsModResponse CrearPago([FromBody] ClsModParametrosMP Parametros)
        {
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = new ClsModResultado();

            ClsModMP lstMenu = new ClsNegMP(null).CrearPago(Parametros, out objModResultado);
            objModResultado.MsgExito = lstMenu.status;
            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        
    }
}
using ClsModHarodoor.Common;
using ClsModHarodoor.Menu;
using ClsNegHarodoor.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class PermisosController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]   
        [ActionName("ObtenerMenu")]
        public ClsModResponse ObtenerMenu([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosMenu objModMenu = ClsObjectTransformation.Deserialize<ClsModParametrosMenu>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModMenu> lstMenu = new ClsNegMenu(null).ObtenerMenu(objModMenu, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

    }
}
using ClsModHarodoor.AreaComun;
using ClsModHarodoor.Common;
using ClsNegHarodoor.AreaComun;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class AreaComunController : ApiController
    {

        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerMesAreaComun")]
        public ClsModResponse ObtenerMesAreaComun([FromBody] ClsModRequest objModRequest)
        {
            ClsModAreaComunFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModAreaComunFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModAreaComun> lstMenu = new ClsNegAreaComun(null).ObtenerMesAreaComun(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerAreaComun")]
        public ClsModResponse ObtenerAreaComun([FromBody] ClsModRequest objModRequest)
        {
            ClsModAreaComunFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModAreaComunFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModAreaComun> lstMenu = new ClsNegAreaComun(null).ObtenerAreaComun(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearAreaComun")]
        public ClsModResponse CrearAreaComun([FromBody] ClsModRequest objModRequest)
        {
            ClsModAreaComunFiltros objModUsuario = ClsObjectTransformation.Deserialize<ClsModAreaComunFiltros>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModAreaComun> lstUsuarios = new ClsNegAreaComun(null).CrearAreaComun(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }




    }
}

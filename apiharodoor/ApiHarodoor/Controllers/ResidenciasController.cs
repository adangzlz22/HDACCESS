using ClsModHarodoor.Common;
using ClsModHarodoor.Residencias;
using ClsModHarodoor.Usuarios;
using ClsNegHarodoor.Residencias;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class ResidenciasController : ApiController
    {



        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerResidencias")]
        public ClsModResponse ObtenerResidencias([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosResidencias objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosResidencias>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModResidencias> lstMenu = new ClsNegResidencias(null).ObtenerResidencias(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearResidencias")]
        public ClsModResponse CrearResidencias([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosResidencias objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosResidencias>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModResidencias> lstUsuarios = new ClsNegResidencias(null).CrearResidencias(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("ActualizarResidencias")]
        public ClsModResponse ActualizarResidencias([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosResidencias objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosResidencias>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModResidencias> lstUsuarios = new ClsNegResidencias(null).ActualizarResidencias(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("EliminarResidencias")]
        public ClsModResponse EliminarResidencias([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosResidencias objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosResidencias>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModResidencias> lstUsuarios = new ClsNegResidencias(null).EliminarResidencias(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerNivel")]
        public ClsModResponse ObtenerNivel([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosResidencias objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosResidencias>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModResidencias> lstUsuarios = new ClsNegResidencias(null).ObtenerNivel(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }



        [HttpPost]
        [AllowAnonymous]
        [ActionName("ExisteUsuario")]
        public ClsModResponse ExisteUsuario([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosExiste objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosExiste>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstUsuarios = new ClsNegResidencias(null).ExisteUsuario(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


        [HttpGet]
        [AllowAnonymous]
        [ActionName("FechaExpiracion")]

        public ClsModResponse FechaExpiracion()
        {
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModPeticiones> lstConteoFisico = new ClsNegResidencias(null).FechaExpiracion();

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


    }
}

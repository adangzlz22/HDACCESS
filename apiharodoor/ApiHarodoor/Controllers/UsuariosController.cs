using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ClsModHarodoor.Common;
using ClsModHarodoor.Usuarios;
using ClsNegHarodoor.Usuarios;

namespace ApiHarodoor.Controllers
{
    public class UsuariosController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]   
        [ActionName("Login")]

        public ClsModResponse Login([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModConteoFisico = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstConteoFisico = new ClsNegUsuarios(null).Login(objModConteoFisico, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstConteoFisico, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("ActualizarPerfil")]
        public ClsModResponse ActualizarPerfil([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstUsuarios = new ClsNegUsuarios(null).ActualizarPerfil(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("ObtenerUsuarios")]
        public ClsModResponse ObtenerUsuarios([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstMenu = new ClsNegUsuarios(null).ObtenerUsuarios(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstMenu, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearUsuario")]
        public ClsModResponse CrearUsuario([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            ClsModUsuarios lstUsuarios = new ClsNegUsuarios(null).CrearUsuario(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("ActualizarUsuario")]
        public ClsModResponse ActualizarUsuario([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstUsuarios = new ClsNegUsuarios(null).ActualizarUsuario(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("EliminarUsuario")]
        public ClsModResponse EliminarUsuario([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstUsuarios = new ClsNegUsuarios(null).EliminarUsuario(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        
        [HttpPost]
        [AllowAnonymous]
        [ActionName("EliminarDispositivo")]
        public ClsModResponse EliminarDispositivo([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosUsuarios objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosUsuarios>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModUsuarios> lstUsuarios = new ClsNegUsuarios(null).EliminarDispositivo(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


        [HttpPost]
        [AllowAnonymous]
        [ActionName("CrearTAGS")]
        public ClsModResponse CrearTAGS([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosTAGS objModUsuario = ClsObjectTransformation.Deserialize<ClsModParametrosTAGS>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            ClsModUsuarios lstUsuarios = new ClsNegUsuarios(null).CrearTAGS(objModUsuario, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstUsuarios, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }


    }
}

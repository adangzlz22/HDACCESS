using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ClsModHarodoor.Common;
using ClsModHarodoor.Visitas;
using ClsNegHarodoor.Visitas;

namespace ApiHarodoor.Controllers
{
    public class VisitasController : ApiController
    {
        [HttpPost]
        [AllowAnonymous] 
        [ActionName("ObtenerVisitas")]

        public ClsModResponse ObtenerVisitas([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosVisitas objModVisitas = ClsObjectTransformation.Deserialize<ClsModParametrosVisitas>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModVisitas> lstVisitas = new ClsNegVisitas(null).ObtenerVisitas(objModVisitas, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstVisitas, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        [HttpPost]
        [AllowAnonymous] 
        [ActionName("CrearVisita")]
        public ClsModResponse CrearVisita([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosVisitas objModVisitas = ClsObjectTransformation.Deserialize<ClsModParametrosVisitas>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            ClsModVisitas lstVisitas = new ClsNegVisitas(null).CrearVisita(objModVisitas, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstVisitas, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("EliminarVisita")]
        public ClsModResponse EliminarVisita([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosVisitas objModVisitas = ClsObjectTransformation.Deserialize<ClsModParametrosVisitas>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModVisitas> lstVisitas = new ClsNegVisitas(null).EliminarVisita(objModVisitas, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstVisitas, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("ActualizarVisita")]
        public ClsModResponse ActualizarVisita([FromBody] ClsModRequest objModRequest)
        {
            ClsModParametrosVisitas objModVisitas = ClsObjectTransformation.Deserialize<ClsModParametrosVisitas>(objModRequest.Model, objModRequest.Formato);
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModVisitas> lstVisitas = new ClsNegVisitas(null).ActualizarVisita(objModVisitas, out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstVisitas, objModRequest.Formato);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        [HttpGet]
        [AllowAnonymous]
        [ActionName("SPActualizarVisitasDeUnSoloUso")]
        public ClsModResponse SPActualizarVisitasDeUnSoloUso()
        {
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModVisitas> lstVisitas = new ClsNegVisitas(null).SPActualizarVisitasDeUnSoloUso(out objModResultado);
            objModResponse.Model = ClsObjectTransformation.SerializeObjectToString<object>(lstVisitas, FormatoRespuesta.JSON);

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;

        }


    }
}

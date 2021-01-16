using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClbModPago;
using ClbNegPago;
using ClbUtileria;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ApiPagos.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class PagosController : Controller
    {
        private readonly AppSettings appSettings;
        public PagosController(IOptions<AppSettings> AppSettings)
        {
            this.appSettings = AppSettings.Value;
        }

        [HttpPost("Agregar")]
        public async Task<JsonResult> Agregar([FromBody] ClsModEncPago clsModPago)
        {
            return Json(await new ClsNegPago(appSettings).Agregar(clsModPago));
        }
        //año, IdUsuario
        [HttpPost("ObtenerEstadoDeCuenta")]
        public async Task<JsonResult> ObtenerEstadoDeCuenta([FromBody] Dictionary<string, string> Params)
        {
            return Json(await new ClsNegPago(appSettings).ObtenerEstadoDeCuenta(Params));
        }
        [HttpPost("ObtenerTotalXResidencia")]
        public async Task<JsonResult> ObtenerTotalXResidencia([FromBody] Dictionary<string, string> Params)
        {
            return Json(await new ClsNegPago(appSettings).ObtenerTotalXResidencia(Params));
        }

        //[HttpPost("ObtenerPagosXUsuario")]
        //public async Task<JsonResult> ObtenerPagosXUsuario([FromBody] Dictionary<string, string> Params)
        //{
        //    Params.TryGetValue("FKUsuario", out string FKUsuario);
        //    return Json(await new ClsNegPago(appSettings).ObtenerPagosXUsuario(int.Parse(FKUsuario)));
        //}

        [HttpPost("ObtenerReporteResidentes")]
        public async Task<JsonResult> ObtenerReporteResidentes([FromBody] Dictionary<string, string> Params)
        {
            return Json(await new ClsNegPago(appSettings).ObtenerReporteResidentes(Params));
        }

        [HttpGet("ObtenerAnos")]
        public async Task<JsonResult> ObtenerAnos()
        {
            return Json(await new ClsNegPago(appSettings).ObtenerAnos());
        }

        [HttpPost("AgregarMP")]
        public async Task<JsonResult> AgregarMP([FromBody] ClsModPagoMP ObjModPagoMP)
        {
            return Json(await new ClsNegPago(appSettings).AgregarMP(ObjModPagoMP));
        }
    }
}

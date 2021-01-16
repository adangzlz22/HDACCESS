using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClbNegPago;
using ClbUtileria;
using Microsoft.Extensions.Options;

namespace ApiPagos.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class SuscripcionesController : Controller
    {
        private readonly AppSettings appSettings;
        public SuscripcionesController(IOptions<AppSettings> AppSettings)
        {
            this.appSettings = AppSettings.Value;
        }
        [HttpGet("CargarTipos")]
        public async Task<JsonResult> CargarTipos()
        {
            return Json(await new ClsNegSuscripcion(appSettings).CargarTipos());
        }
       
    }
}

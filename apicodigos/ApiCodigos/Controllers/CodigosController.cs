using ApiCodigos.Mod;
using ApiCodigos.Neg;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ApiCodigos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodigosController : ControllerBase
    {


        private readonly AppSettings appSettings;

        private ClsNegCodigos objNegArchivos;
        public CodigosController(IOptions<AppSettings> AppSettings)
        {

            this.appSettings = AppSettings.Value;

            objNegArchivos = new ClsNegCodigos(appSettings);
        }
        [HttpGet("ObtenerImagen")]
        public IActionResult ObtenerImagen(int PKUsuario)
        {
            ClsModCodigos objModDocumento = new ClsNegCodigos(appSettings).Cargar(PKUsuario, appSettings);
            //if (objModDocumento != null)
            //{
            //    string tipoArchivo = objModDocumento.DocumentContent;
            //    if (tipoArchivo == String.Empty) tipoArchivo = "text/plain";
            //}
            if (objModDocumento != null)
            {
                if (objModDocumento.DocumentoContent == null) objModDocumento.DocumentoContent = "text/plain";

                if (objModDocumento.ArchivoBytes == null) return NotFound(new { Error = "No se Encontro el archivo de bytes" });
                else return File(objModDocumento.ArchivoBytes, objModDocumento.DocumentoContent);
            }
            else
            {
                return NotFound();
            }
        }

    }
}
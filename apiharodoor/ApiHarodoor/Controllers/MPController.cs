using ClsModHarodoor.Common;
using ClsModHarodoor.MercadoPago;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Mvc;

namespace ApiHarodoor.Controllers
{
    public class MPController : Controller
    {
        // GET: MP
        public ActionResult Index(int PKUsuario,int Total)
        {
            ViewBag.Total = Total;
            ViewBag.TokenMercadoPago = "APP_USR-f32a39d9-ad0d-4737-a724-893ea3d9741a";
            ViewBag.PKUsuario = PKUsuario;
            return View();
        }


        [HttpPost]
        public JsonResult GenerarPago(ClsModParametrosMP Parametros)
        {
            MercadoPagoController Pagos = new MercadoPagoController();
            ClsModResponse objModResponse = new ClsModResponse();


            try
            {
                objModResponse = Pagos.CrearPago(Parametros);
                return Json(true);
            }
            catch
            {
                return Json(false);
            }
        }


    }
}

using ClsModHarodoor.Codigos;
using ClsModHarodoor.Common;
using ClsModHarodoor.GeneradorDeCodigos;
using ClsNegHarodoor.ClsNegGenerador;
using ClsNegHarodoor.Codigos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Timers;
using System.Web.Http;

namespace ApiHarodoor.Controllers
{
    public class CodigosController : ApiController
    {
        private static System.Timers.Timer aTimer;


        [HttpGet]
        [AllowAnonymous]
        [ActionName("GenerarCodigosDeBarraAuto")]

        public ClsModResponse GenerarCodigosDeBarraAuto()
        {
            ClsModResponse objModResponse = new ClsModResponse();
            ClsModResultado objModResultado = null;

            List<ClsModGenerador> lstConteoFisico = new ClsNegGenerador(null).GenerarCodigosDeBarraAuto();

            objModResponse.ObjModResultado = objModResultado;

            return objModResponse;
        }

        //public bool GenerarCodigosAutomaticos()
        //{
        //    bool devolver;
        //    devolver = false;
        //    SetTimer();
        //    aTimer.Start();

        //    if (aTimer.Interval==2000)
        //    {
        //        aTimer.Stop();
        //    }

        //    return devolver = true;
        //}

        //private static void SetTimer()
        //{
        //    aTimer = new System.Timers.Timer(5000);
        //    aTimer.Elapsed += OnTimedEvent;
        //    aTimer.AutoReset = true;
        //    aTimer.Enabled = true;
        //}
        //private static void OnTimedEvent(Object source, ElapsedEventArgs e)
        //{
        //    Console.WriteLine("The Elapsed event was raised at {0:HH:mm:ss.fff}",
        //                      e.SignalTime);
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago.Common
{
    public class ClsModResultado
    {
        public string mensaje { get; set; }
        public string mensajeError { get; set; }
        public dynamic resultado { get; set; }
    }
}
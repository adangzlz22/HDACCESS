using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago.Views
{
    public class EstadoCuentaViewModel
    {
        public string Usuario { get; set; }
        public string Residencia { get; set; }
        public string FechaCreacion { get; set; }
        public string FechaExpiracion { get; set; }
        public string FechaPago { get; set; }
        public string Total { get; set; }
        public string TipoPago { get; set; }
    }
}

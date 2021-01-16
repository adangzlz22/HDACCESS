using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago.Views
{
    public class ReporteResidentesViewModel
    {
        public int PKUsuario { get; set; }
        public string Usuario { get; set; }
        public string Residencia { get; set; }
        public bool Pagado { get; set; }
    }
}

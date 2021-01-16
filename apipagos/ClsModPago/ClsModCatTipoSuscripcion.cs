using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago
{
    public class ClsModCatTipoSuscripcion
    {
        public int IdCatTipoSuscripcion { get; set; }
        public string TipoSuscripcion { get; set; }
        public int Costo { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}

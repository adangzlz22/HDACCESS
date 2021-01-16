using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.GeneradorDeCodigos
{
    public class ClsModVisitasGenerador
    {
        public int PKVisita { get; set; }
		public string NombreCompleto { get; set; }
        public string TelefonoOCorreo { get; set; }
        public int FKResidencia { get; set; }
    }
}

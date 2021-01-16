using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.BuzonDeQueja
{
    public class ClsModBuzonDeQueja
    {
		
		public int PKBuzonDeQueja { get; set; }
		public int FKResidencia { get; set; }
		public string NombreCompleto { get; set; }
		public string Telefono { get; set; }
		public string Tipo { get; set; }
		public string DescripcionArea { get; set; }
		public int Estatus { get; set; }
		public string DescripcionEstatus { get; set; }
		public DateTime FechaAsignacion { get; set; }
		public DateTime FechaSeguimiento { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.GeneradorDeCodigos
{
    public class ClsModGenerador
    {  

        public int FKResidencia { get; set; }


		public int PKResidencia { get; set; }
		public string NombreResidencia { get; set; }
		public bool Lunes { get; set; }
		public bool Martes { get; set; }
		public bool Miercoles { get; set; }
		public bool Jueves { get; set; }
		public bool Viernes { get; set; }
		public bool Sabado { get; set; }
		public bool Domingo { get; set; }


	}
}

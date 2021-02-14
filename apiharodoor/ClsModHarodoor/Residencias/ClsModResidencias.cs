using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.Residencias
{
    public class ClsModResidencias
    {

        public int PKResidencia { get; set; }
        public string NombreResidencia { get; set; }
        public int LimVisitasFrecuentes { get; set; }
        public int LimVisitasUnSoloUso { get; set; }
        public int FKDiasActivados { get; set; }
        public string UsuarioCreacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public string FechaCreacion { get; set; }
        public string FechaModificacion { get; set; }
        public Boolean Estatus { get; set; }
        public Boolean WhatsappCorreo { get; set; }
        public DateTime FechaExpiracion { get; set; }

        public string IdNivel { get;set;}
        public string NombreNivel { get;set;}
        public string id { get; set; }
        public string nombreDepartamento { get; set; }
    }
}

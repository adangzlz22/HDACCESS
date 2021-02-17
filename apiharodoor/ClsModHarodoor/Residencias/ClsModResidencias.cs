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


        public int PKUsuarioTAG { get; set; }
        public int PKUsuario { get; set; }
        public string NombreCompleto { get; set; }


        public string IDPERSON { get; set; }
        public string CARDID { get; set; }
        public string card_no { get; set; }
        public string name { get; set; }
        public string last_name { get; set; }
        public string name_spell { get; set; }

        public int IdCatTipoSuscripcion { get; set; }
        public string TipoSuscripcion{ get; set; }
        public int Costo { get; set; }
    }
}

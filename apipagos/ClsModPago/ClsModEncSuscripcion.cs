using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago
{
    public class ClsModEncSuscripcion
    {
        public int IdEncSuscripcion { get; set; }
        public int IdCatTipoSuscripcion { get; set; }
        public int FKUsuario { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaExpiracion { get; set; }
        public int IdUsuarioCreacion { get; set; }
        public bool Activo { get; set; }
    }
}

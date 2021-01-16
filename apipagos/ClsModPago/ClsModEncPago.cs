using System;

namespace ClbModPago
{
    public class ClsModEncPago
    {
        public int IdEncPago { get; set; }
        public int FKUsuario { get; set; }
        public int IdCatTipoPago { get; set; }
        public int IdCatTipoSuscripcion { get; set; }
        public string CatTipoPago { get; set; }
        public int Total { get; set; }
        public int IdUsuarioCreacion { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}

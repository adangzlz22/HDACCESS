using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.MercadoPago
{
    public class ClsModParametrosMP
    {
        public string TokenMercadoPago { get; set; }
        public float transaction_amount { get;set;}
        public string token { get; set; }
        public string description { get; set; }
        public string payment_method_id { get; set; }
        public string email { get; set; }
        public int installments { get; set; }
        public int FKUsuario { get; set; }
    }
}

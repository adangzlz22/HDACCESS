using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago
{
    public class ClsModPagoMP
    {
      
        public float transaction_amount { get; set; }
        public string token { get; set; }
        public string description { get; set; }
        public string payment_method_id { get; set; }
        public int installments { get; set; }
        public Payer payer { get; set; }
    }

    public class Payer
    {
        public string email { get; set; }

    }
}

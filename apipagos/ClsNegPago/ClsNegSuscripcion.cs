using ClbDatPago;
using ClbModPago.Common;
using ClbUtileria;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ClbNegPago
{
    public class ClsNegSuscripcion
    {
        private readonly AppSettings appSettings;
        public ClsNegSuscripcion(AppSettings appSettings)
        {
            this.appSettings = appSettings;
        }

        public async Task<ClsModResultado> CargarTipos()
        {
            return await new ClsDatSuscripcion(appSettings).CargarTipos();
        }
      
    }
}

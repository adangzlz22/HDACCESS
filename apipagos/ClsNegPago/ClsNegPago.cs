using ClbModPago;
using ClbModPago.Common;
using ClbDatPago;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using ClbUtileria;

namespace ClbNegPago
{
    public class ClsNegPago
    {
        private readonly AppSettings appSettings;
        public ClsNegPago(AppSettings appSettings)
        {
            this.appSettings = appSettings;
        }

        public async Task<ClsModResultado> Agregar(ClsModEncPago clsModPago)
        {
            return await new ClsDatPago(appSettings).Agregar(clsModPago);
        }

        public async Task<ClsModResultado> ObtenerEstadoDeCuenta(Dictionary<string, string> Params)
        {
            return await new ClsDatPago(appSettings).ObtenerEstadoDeCuenta(Params);
        }

        public async Task<ClsModResultado> ObtenerTotalXResidencia(Dictionary<string, string> Params)
        {
            return await new ClsDatPago(appSettings).ObtenerTotalXResidencia(Params);
        }

        public async Task<ClsModResultado> ObtenerReporteResidentes(Dictionary<string, string> Params)
        {
            ClsModResultado result = new ClsModResultado();
            Params.TryGetValue("FKResidencia", out string FKResidencia);
            try
            {
                var resultA = await new ClsDatPago(appSettings).ObtenerReporteResidentes(Params);
                if (resultA.mensajeError != null)
                    throw new Exception(resultA.mensajeError);

                var resultB = await new ClsDatPago(appSettings).ObtenerTotalPagoResidencia(int.Parse(FKResidencia));
                if (resultB.mensajeError != null)
                    throw new Exception(resultB.mensajeError);

                result.resultado = new {
                    data = resultA.resultado,
                    total = resultB.resultado
                };
             
            }
            catch (Exception ex)
            {
                result.mensajeError = ex.Message;
            }

            return result;

        }

        public async Task<ClsModResultado> ObtenerAnos()
        {
            return await new ClsDatPago(appSettings).ObtenerAnos();
        }

        public async Task<ClsModResultado> AgregarMP(ClsModPagoMP objModPagoMP)
        {
            return await new ClsDatPago(appSettings).AgregarMP(objModPagoMP);
        }

        //public async Task<ClsModResultado> ObtenerPagosXUsuario(int FKUsuario)
        //{
        //    return await new ClsDatPago(appSettings).ObtenerPagosXUsuario(FKUsuario);
        //}
    }
}

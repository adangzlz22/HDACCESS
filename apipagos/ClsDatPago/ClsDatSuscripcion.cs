using ClbModPago;
using ClbModPago.Common;
using ClbModPago.Views;
using ClbUtileria;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClbDatPago
{
    public class ClsDatSuscripcion : Common.DataBaseConnection
    {
        private string TAG = typeof(ClsDatSuscripcion).ToString();
        private readonly AppSettings appSettings;

        public ClsDatSuscripcion(AppSettings AppSettings)
        {
            this.appSettings = AppSettings;

        }
        public async Task<ClsModResultado> CargarTipos()
        {
            ClsModResultado modResultado = new ClsModResultado();

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    var Query = await conexion.QueryAsync<ClsModCatTipoSuscripcion>("SPObtenerTiposSuscripciones", commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Query.ToArray<ClsModCatTipoSuscripcion>();
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - CargarTipos() : {ex.ToString()}";
            }
            return modResultado;
        }

        
    }
}

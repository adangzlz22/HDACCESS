using ApiCodigos.Mod;
using Dapper;
using System;
using System.Data;
using System.Data.SqlClient;

namespace ApiCodigos.Dat
{
    public class ClsDatCodigos
    {

        private readonly AppSettings appSettings;

        public ClsDatCodigos(AppSettings AppSettings)
        {
            this.appSettings = AppSettings;

        }

        public ClsModCodigos Cargar(int PKCodigo)
        {
            ClsModCodigos objModDocumento = null;
            try
            {
                var lstParameters = new DynamicParameters();
                lstParameters.Add("@PKUsuario", PKCodigo);
                using (var connection = new SqlConnection(appSettings.Conexion))
                {
                    connection.Open();

                    objModDocumento = connection.QuerySingleOrDefault<ClsModCodigos>("SPObtenerCodigosPorPKUsuario",
                                    lstParameters,
                                    commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error, " + ex.Message);
            }
            return objModDocumento;
        }


    }
}

using ClsModHarodoor.Common;
using ClsModHarodoor.GeneradorDeCodigos;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.DiasActivos
{
    public class ClsDatDiasActivos
    {

        string Error = "ClsDatLogin.";

        public List<ClsModGenerador> ObtenerResidenciasDias(SqlConnection Con, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModGenerador> lstConteoFisico = new List<ClsModGenerador>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();



            ClsModGenerador objModUsuarios = new ClsModGenerador();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerDiasResidencias", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModGenerador();

                        objModUsuarios.FKResidencia = (int)(sqlLeer["PKResidencia"] != DBNull.Value ? sqlLeer["PKResidencia"] : 0);
                        objModUsuarios.NombreResidencia = (string)(sqlLeer["NombreResidencia"] != DBNull.Value ? sqlLeer["NombreResidencia"] : string.Empty);
                        objModUsuarios.Lunes = (bool)(sqlLeer["Lunes"] != DBNull.Value ? sqlLeer["Lunes"] : false);
                        objModUsuarios.Martes = (bool)(sqlLeer["Martes"] != DBNull.Value ? sqlLeer["Martes"] : false);
                        objModUsuarios.Miercoles = (bool)(sqlLeer["Miercoles"] != DBNull.Value ? sqlLeer["Miercoles"] : false);
                        objModUsuarios.Jueves = (bool)(sqlLeer["Jueves"] != DBNull.Value ? sqlLeer["Jueves"] : false);
                        objModUsuarios.Viernes = (bool)(sqlLeer["Viernes"] != DBNull.Value ? sqlLeer["Viernes"] : false);
                        objModUsuarios.Sabado = (bool)(sqlLeer["Sabado"] != DBNull.Value ? sqlLeer["Sabado"] : false);
                        objModUsuarios.Domingo = (bool)(sqlLeer["Domingo"] != DBNull.Value ? sqlLeer["Domingo"] : false);


                        lstConteoFisico.Add(objModUsuarios);
                    }
                }
                else
                {
                    objModUsuarios = null;
                }
            }
            catch (Exception ex)
            {
                objClsModResultado.MsgError = Error + "CargarXID(): " + ex.Message;
            }
            finally
            {
                if (sqlLeer != null) sqlLeer.Close();
            }
            return lstConteoFisico;
        }

    }
}

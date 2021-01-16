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

namespace ClsDatHarodoor.GeneradorDeCodigos
{
    public class ClsDatGenerador
    {

        string Error = "ClsDatLogin.";


        public List<ClsModUsuariosGenerador> listaDeUsuarios(SqlConnection Con, ClsModGenerador objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuariosGenerador> lstConteoFisico = new List<ClsModUsuariosGenerador>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });


            ClsModUsuariosGenerador objModUsuarios = new ClsModUsuariosGenerador();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerListaDeVisitasGeneradorRESIDENTE", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModUsuariosGenerador();

                        objModUsuarios.PKUsuario = (int)(sqlLeer["PKUsuario"] != DBNull.Value ? sqlLeer["PKUsuario"] : 0);
                        objModUsuarios.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);


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

        public List<ClsModVisitasGenerador> listaDeVisitas(SqlConnection Con, ClsModGenerador objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitasGenerador> lstConteoFisico = new List<ClsModVisitasGenerador>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });


            ClsModVisitasGenerador objModVisitas = new ClsModVisitasGenerador();
            try
            {
                
                   sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerListaDeVisitasGenerador", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModVisitas = new ClsModVisitasGenerador();


                        objModVisitas.PKVisita = (int)(sqlLeer["PKVisita"] != DBNull.Value ? sqlLeer["PKVisita"] : 0);
                        objModVisitas.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objModVisitas.TelefonoOCorreo = (string)(sqlLeer["TelefonoOCorreo"] != DBNull.Value ? sqlLeer["TelefonoOCorreo"] : string.Empty);
                        objModVisitas.FKResidencia = (int)(sqlLeer["FKResidencia"] != DBNull.Value ? sqlLeer["FKResidencia"] : 0);


                        lstConteoFisico.Add(objModVisitas);
                    }
                }
                else
                {
                    objModVisitas = null;
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

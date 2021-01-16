using ClsModHarodoor.BuzonDeQueja;
using ClsModHarodoor.Common;
using ClsModHarodoor.Residencias;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.BuzonDeQueja
{
    public class ClsDatBuzonDeQueja
    {

        string Error = "ClsDatLogin.";
        public List<ClsModBuzonDeQueja> ObtenerBuzonDeQuejas(SqlConnection Con, ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });
            arrPar.Add(new SqlParameter("@FKUsuario", SqlDbType.Int) { Value = objModel.FKUsuario });
            arrPar.Add(new SqlParameter("@Estatus", SqlDbType.Int) { Value = objModel.Estatus });
            
            ClsModBuzonDeQueja objModUsuarios = new ClsModBuzonDeQueja();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerBuzonDeQueja", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModBuzonDeQueja();

                        objModUsuarios.PKBuzonDeQueja = (int)(sqlLeer["PKBuzonDeQueja"] != DBNull.Value ? sqlLeer["PKBuzonDeQueja"] : 0);
                        objModUsuarios.FKResidencia = (int)(sqlLeer["FKResidencia"] != DBNull.Value ? sqlLeer["FKResidencia"] : 0);
                        objModUsuarios.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objModUsuarios.Telefono = (string)(sqlLeer["Telefono"] != DBNull.Value ? sqlLeer["Telefono"] : string.Empty);
                        objModUsuarios.Tipo = (string)(sqlLeer["Tipo"] != DBNull.Value ? sqlLeer["Tipo"] : string.Empty);
                        objModUsuarios.DescripcionArea = (string)(sqlLeer["DescripcionArea"] != DBNull.Value ? sqlLeer["DescripcionArea"] : string.Empty);
                        objModUsuarios.Estatus = (int)(sqlLeer["Estatus"] != DBNull.Value ? sqlLeer["Estatus"] : 0);
                        objModUsuarios.DescripcionEstatus = (string)(sqlLeer["DescripcionEstatus"] != DBNull.Value ? sqlLeer["DescripcionEstatus"] : string.Empty);
                        objModUsuarios.FechaAsignacion = (DateTime)(sqlLeer["FechaAsignacion"] != DBNull.Value ? sqlLeer["FechaAsignacion"] : new DateTime(1900));
                        objModUsuarios.FechaSeguimiento = (DateTime)(sqlLeer["FechaSeguimiento"] != DBNull.Value ? sqlLeer["FechaSeguimiento"] : new DateTime(1900));
                        
                            

                        lstUsuarios.Add(objModUsuarios);
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
            return lstUsuarios;
        }

        public List<ClsModBuzonDeQueja> CrearBuzonDeQueja(SqlConnection Con, ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@Tipo", SqlDbType.VarChar) { Value = objModel.Tipo });
            arrPar.Add(new SqlParameter("@Descripcion", SqlDbType.VarChar) { Value = objModel.Descripcion });
            arrPar.Add(new SqlParameter("@FKUsuario", SqlDbType.Int) { Value = objModel.FKUsuario });
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });


            ClsModBuzonDeQueja objUsuario = new ClsModBuzonDeQueja();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearBuzonDeQueja", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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
            return lstUsuarios;
        }

        
        public List<ClsModBuzonDeQueja> CambiarEstatusBuzonDeQueja(SqlConnection Con, ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            arrPar.Add(new SqlParameter("@PKBuzonDeQueja", SqlDbType.Int) { Value = objModel.PKBuzonDeQueja });
            arrPar.Add(new SqlParameter("@Estatus", SqlDbType.Int) { Value = objModel.Estatus });

            ClsModBuzonDeQueja objUsuario = new ClsModBuzonDeQueja();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPModificarEstatusBuzonDeQueja", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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
            return lstUsuarios;
        }

    }
}

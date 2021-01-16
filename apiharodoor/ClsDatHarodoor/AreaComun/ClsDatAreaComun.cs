
using ClsModHarodoor.AreaComun;
using ClsModHarodoor.Common;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.AreaComun
{
    public class ClsDatAreaComun
    {
        string Error = "ClsDatLogin.";

        public List<ClsModAreaComun> ObtenerMesAreaComun(SqlConnection Con, ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            ClsModAreaComun objModUsuarios = new ClsModAreaComun();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerMesAreaComun", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModAreaComun();

                        objModUsuarios.Fecha = (string)(sqlLeer["Fecha"] != DBNull.Value ? sqlLeer["Fecha"] : string.Empty);

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
        public List<ClsModAreaComun> ObtenerAreaComun(SqlConnection Con, ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });
            arrPar.Add(new SqlParameter("@Fecha", SqlDbType.VarChar) { Value = objModel.Fecha });

            ClsModAreaComun objModUsuarios = new ClsModAreaComun();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerAreaComun", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModAreaComun();

                        objModUsuarios.FKResidencia = (int)(sqlLeer["FKResidencia"] != DBNull.Value ? sqlLeer["FKResidencia"] : 0);
                        objModUsuarios.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objModUsuarios.Telefono = (string)(sqlLeer["Telefono"] != DBNull.Value ? sqlLeer["Telefono"] : string.Empty);
                        objModUsuarios.Descripcion = (string)(sqlLeer["Descripcion"] != DBNull.Value ? sqlLeer["Descripcion"] : string.Empty);
                        objModUsuarios.FechaAsignacion = (DateTime)(sqlLeer["FechaAsignacion"] != DBNull.Value ? sqlLeer["FechaAsignacion"] : new DateTime(1900));
                        objModUsuarios.Horario = (string)(sqlLeer["Horario"] != DBNull.Value ? sqlLeer["Horario"] : string.Empty);


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


        public List<ClsModAreaComun> CrearAreaComun(SqlConnection Con, ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@FechaAsignacion", SqlDbType.VarChar) { Value = objModel.FechaAsignacion });
            arrPar.Add(new SqlParameter("@Horario", SqlDbType.VarChar) { Value = objModel.Horario });
            arrPar.Add(new SqlParameter("@Descripcion", SqlDbType.VarChar) { Value = objModel.Descripcion });
            arrPar.Add(new SqlParameter("@FKUsuario", SqlDbType.Int) { Value = objModel.FKUsuario });
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });


            ClsModAreaComun objUsuario = new ClsModAreaComun();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearAreaComun", arrPar.ToArray());
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

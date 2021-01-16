using ClsModHarodoor.Common;
using ClsModHarodoor.Menu;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.Menu
{
    public class ClsDatMenu
    {
        string Error = "ClsDatLogin.";


        public List<ClsModMenu> ObtenerMenu(SqlConnection Con, ClsModParametrosMenu objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModMenu> lstConteoFisico = new List<ClsModMenu>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKMenuBandera", SqlDbType.VarChar) { Value = objModel.PKMenuBandera });


            ClsModMenu objModUsuarios = new ClsModMenu();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerMenu", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModMenu();


                        objModUsuarios.Opcion1 = (string)(sqlLeer["Opcion1"] != DBNull.Value ? sqlLeer["Opcion1"] : string.Empty);
                        objModUsuarios.Icono = (string)(sqlLeer["Icono"] != DBNull.Value ? sqlLeer["Icono"] : string.Empty);

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

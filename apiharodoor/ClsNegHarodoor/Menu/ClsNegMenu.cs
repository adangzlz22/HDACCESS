using ClsDatHarodoor.Menu;
using ClsModHarodoor.Common;
using ClsModHarodoor.Menu;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.Menu
{
    public class ClsNegMenu : ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegMenu(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


        public List<ClsModMenu> ObtenerMenu(ClsModParametrosMenu objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModMenu> lstMenu = new List<ClsModMenu>();
            ClsModMenu objModMenu = new ClsModMenu();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstMenu = new ClsDatMenu().ObtenerMenu(Con, objModel, out objClsModResultado);
                            Con.Close();
                            Con.Dispose();
                        }
                    }
                    catch (Exception ex)
                    {
                        objClsModResultado.MsgError = ex.Message;
                    }
                    break;
                case TipoConexion.WCF:

                    break;
            }
            return lstMenu;
        }

    }
}

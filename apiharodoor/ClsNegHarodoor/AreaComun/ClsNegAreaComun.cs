using ClsDatHarodoor.AreaComun;
using ClsModHarodoor.AreaComun;
using ClsModHarodoor.Common;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.AreaComun
{
    public class ClsNegAreaComun : ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegAreaComun(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }
    

        public List<ClsModAreaComun> ObtenerMesAreaComun(ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            ClsModAreaComun objModMenu = new ClsModAreaComun();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatAreaComun().ObtenerMesAreaComun(Con, objModel, out objClsModResultado);
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
            return lstUsuarios;
        }

        public List<ClsModAreaComun> ObtenerAreaComun(ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            ClsModAreaComun objModMenu = new ClsModAreaComun();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatAreaComun().ObtenerAreaComun(Con, objModel, out objClsModResultado);
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
            return lstUsuarios;
        }

        public List<ClsModAreaComun> CrearAreaComun(ClsModAreaComunFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModAreaComun> lstUsuarios = new List<ClsModAreaComun>();
            ClsModAreaComun objUsuario = new ClsModAreaComun();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatAreaComun().CrearAreaComun(Con, objModel, out objClsModResultado);
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
            return lstUsuarios;
        }

    }
}

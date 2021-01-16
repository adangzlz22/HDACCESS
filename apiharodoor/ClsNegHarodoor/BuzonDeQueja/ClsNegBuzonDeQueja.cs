using ClsDatHarodoor.BuzonDeQueja;
using ClsModHarodoor.BuzonDeQueja;
using ClsModHarodoor.Common;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.BuzonDeQueja
{
    public class ClsNegBuzonDeQueja:ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegBuzonDeQueja(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }

        public List<ClsModBuzonDeQueja> ObtenerBuzonDeQuejas(ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            ClsModBuzonDeQueja objModMenu = new ClsModBuzonDeQueja();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatBuzonDeQueja().ObtenerBuzonDeQuejas(Con, objModel, out objClsModResultado);
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
        public List<ClsModBuzonDeQueja> CrearBuzonDeQueja(ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            ClsModBuzonDeQueja objUsuario = new ClsModBuzonDeQueja();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatBuzonDeQueja().CrearBuzonDeQueja(Con, objModel, out objClsModResultado);
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
        public List<ClsModBuzonDeQueja> CambiarEstatusBuzonDeQueja(ClsModBuzonDeQuejaFiltros objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModBuzonDeQueja> lstUsuarios = new List<ClsModBuzonDeQueja>();
            ClsModBuzonDeQueja objUsuario = new ClsModBuzonDeQueja();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatBuzonDeQueja().CambiarEstatusBuzonDeQueja(Con, objModel, out objClsModResultado);
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

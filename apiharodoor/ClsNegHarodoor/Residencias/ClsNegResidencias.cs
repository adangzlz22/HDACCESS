using ClsDatHarodoor.Residencias;
using ClsModHarodoor.Common;
using ClsModHarodoor.Residencias;
using ClsModHarodoor.Usuarios;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.Residencias
{
    public class ClsNegResidencias : ClsModConexion
    {

        SqlConnection Con = null;
        public ClsNegResidencias(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


        public List<ClsModResidencias> ObtenerResidencias(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            ClsModResidencias objModMenu = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().ObtenerResidencias(Con, objModel, out objClsModResultado);
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
        public List<ClsModResidencias> CrearResidencias(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().CrearResidencias(Con, objModel, out objClsModResultado);
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


        public List<ClsModResidencias> ActualizarResidencias(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().ActualizarResidencias(Con, objModel, out objClsModResultado);
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

        public List<ClsModResidencias> EliminarResidencias(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().EliminarResidencias(Con, objModel, out objClsModResultado);
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

        public List<ClsModResidencias> ObtenerNivel(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().ObtenerNivel(Con, objModel, out objClsModResultado);
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

        public List<ClsModUsuarios> ExisteUsuario(ClsModParametrosExiste objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatResidencias().ExisteUsuario(Con, objModel, out objClsModResultado);
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

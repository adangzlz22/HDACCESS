using ClsDatHarodoor.Residencias;
using ClsModHarodoor.Common;
using ClsModHarodoor.Residencias;
using ClsModHarodoor.Usuarios;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Globalization;
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

        public List<ClsModPeticiones> FechaExpiracion()
        {
            DateTime dt = DateTime.Now;
            List<ClsModPeticiones> lstPeticion = new List<ClsModPeticiones>();

            //OBTENER LISTA DE RESIDENCIAS
            ClsModResultado objClsModResultado = new ClsModResultado();

            var a = dt.ToString("dddd", new CultureInfo("es-ES"));


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            ClsModParametrosResidencias objParametroResidencia = new ClsModParametrosResidencias();
                            objParametroResidencia.NombreResidencia = "";

                            List<ClsModResidencias> lstResidencias = new ClsDatResidencias().ObtenerResidencias(Con, objParametroResidencia, out objClsModResultado);
                            foreach (var item in lstResidencias)
                            {
                                if (item.FechaExpiracion == DateTime.Now)
                                {
                                    lstPeticion = new ClsDatResidencias().FechaExpiracion(Con, item.PKResidencia, out objClsModResultado);
                                }
                            }


                            Con.Close();
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
            return lstPeticion;
        }
        public List<ClsModResidencias> ObtenerDepartamento(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
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
                            lstUsuarios = new ClsDatResidencias().ObtenerDepartamento(Con, objModel, out objClsModResultado);
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


        public ClsModResidencias CuotasTipoSuscripcion(ClsModParametrosCuotas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModResidencias objUsuario = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            objUsuario = new ClsDatResidencias().CuotasTipoSuscripcion(Con, objModel, out objClsModResultado);
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
            return objUsuario;
        }


        public List<ClsModResidencias> ObtenerTAGSxResidencia(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
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
                            lstUsuarios = new ClsDatResidencias().ObtenerTAGSxResidencia(Con, objModel, out objClsModResultado);
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


        public List<ClsModResidencias> ObtenerTAGS(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
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
                            lstUsuarios = new ClsDatResidencias().ObtenerTAGS(Con, objModel, out objClsModResultado);
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



        public ClsModResidencias CrearTAGS(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModResidencias objResidencia = new ClsModResidencias();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            objResidencia = new ClsDatResidencias().CrearTAGS(Con, objModel, out objClsModResultado);
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
            return objResidencia;
        }

        public List<ClsModResidencias> ObtenerCuotasTipo(ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
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
                            lstUsuarios = new ClsDatResidencias().ObtenerCuotasTipo(Con, objModel, out objClsModResultado);
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

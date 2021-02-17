using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClsModHarodoor.Common;
using ClsModHarodoor.Usuarios;
using ClsDatHarodoor.Usuarios;
using ClsModHarodoor.Codigos;
using ClsDatHarodoor.Codigos;

namespace ClsNegHarodoor.Usuarios
{
    public class ClsNegUsuarios : ClsModConexion
    {

        SqlConnection Con = null;
        public ClsNegUsuarios(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


        public List<ClsModUsuarios> Login(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstConteoFisicos = new List<ClsModUsuarios>();
            ClsModUsuarios objModReacomodo = new ClsModUsuarios();
            WhatsAppA.ClsNegWhatsApp clsWha = new WhatsAppA.ClsNegWhatsApp();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstConteoFisicos = new ClsDatUsuarios().Login(Con, objModel, out objClsModResultado);
                            //  520123456789
                            
                           // clsWha.EnviarMensajePorWhatsApp("5216625173235", objModel.Telefono , "https://www.google.com.mx/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png");

                            //clsWha.EnviarMensajePorWhatsAppTwillio();
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
            return lstConteoFisicos;
        }

        public List<ClsModUsuarios> ActualizarPerfil(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModUsuarios objUsuario = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().ActualizarPerfil(Con, objModel, out objClsModResultado);
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

        public List<ClsModUsuarios> ObtenerUsuarios(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModUsuarios objModMenu = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().ObtenerUsuarios(Con, objModel, out objClsModResultado);
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
        public ClsModUsuarios CrearUsuario(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            ClsModUsuarios objUsuario = new ClsModUsuarios();
            ClsModCodigos objCodigos = new ClsModCodigos();
            ClsModUsuarios objCrearDBZK = new ClsModUsuarios();
            ClsModUsuarios AIPERSON = new ClsModUsuarios();
            ClsModUsuarios PERSCARD = new ClsModUsuarios();
            ClsModUsuarios ATT_PERSON = new ClsModUsuarios();
            

            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().CrearUsuario(Con, objModel, out objClsModResultado);

                            objCrearDBZK = new ClsDatUsuarios().CrearUsuarioDBZK(Con,lstUsuarios.Id , objModel,out objClsModResultado);
                            AIPERSON = new ClsDatUsuarios().CrearUsuarioDBZKAIPERSON(Con,lstUsuarios.Id , objCrearDBZK.IdDev , objModel,out objClsModResultado);

                            if (objModel.FKNivel == 1)
                            {
                                objCodigos = new ClsDatCodigos().CrearCodigos(Con, "RS", lstUsuarios.Id, out objClsModResultado);
                                PERSCARD = new ClsDatUsuarios().CrearUsuarioDBZKPERSCARD(Con, lstUsuarios.Id, objCrearDBZK.IdDev,objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioDBZKatt_person(Con, lstUsuarios.Id, objCrearDBZK.IdDev,objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioDBZKins_Person(Con, lstUsuarios.Id, objCrearDBZK.IdDev,objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioDBZKpers_Certificate(Con, lstUsuarios.Id, objCrearDBZK.IdDev,objCodigos.FOLIO, objModel, out objClsModResultado);

                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioBASEZKpers_issuecard(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioBASEZKacc_person(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioBASEZKele_person(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearUsuarioBASEZKpers_attribute_ext(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearVisitaBASEZK(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                ATT_PERSON = new ClsDatUsuarios().CrearVisitaBASEZKacc_level_person(Con, lstUsuarios.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);


                            }
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


        public List<ClsModUsuarios> ActualizarUsuario(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModUsuarios objUsuario = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().ActualizarUsuario(Con, objModel, out objClsModResultado);
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

        public List<ClsModUsuarios> EliminarUsuario(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModUsuarios objUsuario = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().EliminarUsuario(Con, objModel, out objClsModResultado);
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




        

public List<ClsModUsuarios> EliminarDispositivo(ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            ClsModUsuarios objUsuario = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatUsuarios().EliminarDispositivo(Con, objModel, out objClsModResultado);
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

        public ClsModUsuarios CrearTAGS(ClsModParametrosTAGS objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios objUsuario = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            objUsuario = new ClsDatUsuarios().CrearTAGS(Con, objModel, out objClsModResultado);

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


    }
}

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClsModHarodoor.Common;
using ClsDatHarodoor.Visitas;
using ClsModHarodoor.Visitas;
using ClsModHarodoor.Codigos;
using ClsDatHarodoor.Codigos;
using ClsDatHarodoor.Usuarios;
using ClsModHarodoor.Usuarios;

namespace ClsNegHarodoor.Visitas
{
    public class ClsNegVisitas : ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegVisitas(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


        public List<ClsModVisitas> ObtenerVisitas(ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            ClsModVisitas objVisitas = new ClsModVisitas();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstVisitas = new ClsDatVisitas().ObtenerVisitas(Con, objModel, out objClsModResultado);
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
            return lstVisitas;
        }

        public ClsModVisitas CrearVisita(ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModVisitas lstVisitas = new ClsModVisitas();
            ClsModVisitas objVisitas = new ClsModVisitas();
            ClsModCodigos objCodigos = new ClsModCodigos();
            WhatsAppA.ClsNegWhatsApp clsWha = new WhatsAppA.ClsNegWhatsApp();
            Correo.ClsCorreo clsCorreos = new Correo.ClsCorreo();
            ClsModUsuarios objCrearDBZK = new ClsModUsuarios();
            ClsModUsuarios AIPERSON = new ClsModUsuarios();
            ClsModUsuarios PERSCARD = new ClsModUsuarios();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstVisitas = new ClsDatVisitas().CrearVisita(Con, objModel, out objClsModResultado);
                            objCodigos = new ClsDatCodigos().CrearCodigos(Con, "VS", lstVisitas.Id, out objClsModResultado);

                            objCrearDBZK = new ClsDatVisitas().CrearUsuarioDBZK(Con, lstVisitas.Id, objModel, out objClsModResultado);
                            AIPERSON = new ClsDatVisitas().CrearUsuarioDBZKAIPERSON(Con, lstVisitas.Id, objCrearDBZK.IdDev, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioDBZKPERSCARD(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKpers_issuecard(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioDBZKatt_person(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKins_person(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKpers_certificate(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKacc_person(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKele_person(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearUsuarioBASEZKpers_attribute_ext(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearVisitaBASEZK(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                            PERSCARD = new ClsDatVisitas().CrearVisitaBASEZKacc_level_person(Con, lstVisitas.Id, objCrearDBZK.IdDev, objCodigos.FOLIO, objModel, out objClsModResultado);
                                



                            if (objModel.WhatCorreo == true)
                            {
                                clsWha.EnviarMensajePorWhatsAppTwillio("+14155238886", objModel.TelefonoOCorreo, objCodigos.PathUrl);
                 
                            }
                            else
                            {
                                clsCorreos.EnviarCorreo(objModel.TelefonoOCorreo, objCodigos.PathUrl);
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
            return lstVisitas;
        }

        public List<ClsModVisitas> EliminarVisita(ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            ClsModVisitas objVisitas = new ClsModVisitas();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstVisitas = new ClsDatVisitas().EliminarVisita(Con, objModel, out objClsModResultado);
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
            return lstVisitas;
        }
        public List<ClsModVisitas> ActualizarVisita(ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            ClsModVisitas objVisitas = new ClsModVisitas();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstVisitas = new ClsDatVisitas().ActualizarVisita(Con, objModel, out objClsModResultado);
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
            return lstVisitas;
        }

        public List<ClsModVisitas> SPActualizarVisitasDeUnSoloUso(out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            ClsModVisitas objVisitas = new ClsModVisitas();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstVisitas = new ClsDatVisitas().SPActualizarVisitasDeUnSoloUso(Con, out objClsModResultado);
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
            return lstVisitas;
        }


    }
}
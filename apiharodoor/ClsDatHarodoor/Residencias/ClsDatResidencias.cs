using ClsModHarodoor.Common;
using ClsModHarodoor.Residencias;
using ClsModHarodoor.Usuarios;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.Residencias
{
    public class ClsDatResidencias
    {

        string Error = "ClsDatLogin.";


        public List<ClsModResidencias> ObtenerResidencias(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@NombreResidencia", SqlDbType.VarChar) { Value = objModel.NombreResidencia });

            ClsModResidencias objModUsuarios = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerResidencias", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModResidencias();

                        objModUsuarios.PKResidencia = (int)(sqlLeer["PKResidencia"] != DBNull.Value ? sqlLeer["PKResidencia"] : 0);
                        objModUsuarios.NombreResidencia = (string)(sqlLeer["NombreResidencia"] != DBNull.Value ? sqlLeer["NombreResidencia"] : string.Empty);
                        objModUsuarios.LimVisitasFrecuentes = (int)(sqlLeer["LimVisitasFrecuentes"] != DBNull.Value ? sqlLeer["LimVisitasFrecuentes"] : 0);
                        objModUsuarios.LimVisitasUnSoloUso = (int)(sqlLeer["LimVisitasUnSoloUso"] != DBNull.Value ? sqlLeer["LimVisitasUnSoloUso"] : 0);
                        objModUsuarios.FKDiasActivados = (int)(sqlLeer["FKDiasActivados"] != DBNull.Value ? sqlLeer["FKDiasActivados"] : 0);
                        objModUsuarios.WhatsappCorreo = (bool)(sqlLeer["WhatsappCorreo"] != DBNull.Value ? sqlLeer["WhatsappCorreo"] : false);
                        objModUsuarios.FechaExpiracion = (DateTime)(sqlLeer["FechaExpiracion"] != DBNull.Value ? sqlLeer["FechaExpiracion"] : null);
                        

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

        public List<ClsModResidencias> CrearResidencias(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            bool Lunes = false;
            bool Martes = false;
            bool Miercoles = false;
            bool Jueves = false;
            bool Viernes = false;
            bool Sabado = false; 
            bool Domingo = false;

            for (int i = 0; i < objModel.Dias.Count; i++)
            {
                if (objModel.Dias[i].Dia == "Lunes")
                {
                    Lunes = true;
                }
                if (objModel.Dias[i].Dia == "Martes")
                {
                    Martes = true;
                }
                if (objModel.Dias[i].Dia == "Miercoles")
                {
                    Miercoles = true;
                }
                if (objModel.Dias[i].Dia == "Jueves")
                {
                    Jueves = true;
                }
                if (objModel.Dias[i].Dia == "Viernes")
                {
                    Viernes = true;
                }
                if (objModel.Dias[i].Dia == "Sabado")
                {
                    Sabado = true;
                }
                if (objModel.Dias[i].Dia == "Domingo")
                {
                    Domingo = true;
                }
            }

            arrPar.Add(new SqlParameter("@NombreResidencia", SqlDbType.VarChar) { Value = objModel.NombreResidencia });
            arrPar.Add(new SqlParameter("@LimVisitasFrecuentes", SqlDbType.Int) { Value = objModel.LimVisitasFrecuentes });
            arrPar.Add(new SqlParameter("@LimVisitasUnSoloUso", SqlDbType.Int) { Value = objModel.LimVisitasUnSoloUso });
            arrPar.Add(new SqlParameter("@FKDiasActivados", SqlDbType.VarChar) { Value = objModel.FKDiasActivados });
            arrPar.Add(new SqlParameter("@WhatsAppCorreo", SqlDbType.VarChar) { Value = objModel.WhatsAppCorreo });
            arrPar.Add(new SqlParameter("@UsuarioCreacion", SqlDbType.VarChar) { Value = objModel.UsuarioCreacion });
            arrPar.Add(new SqlParameter("@IdNivelDispositivo", SqlDbType.VarChar) { Value = objModel.Dispositivo.IdDispositivo });
            arrPar.Add(new SqlParameter("@IDDepartamento", SqlDbType.VarChar) { Value = objModel.Departamento.IDDepartamento });
            arrPar.Add(new SqlParameter("@Lunes", SqlDbType.Bit) { Value = Lunes });
            arrPar.Add(new SqlParameter("@Martes", SqlDbType.Bit) { Value = Martes });
            arrPar.Add(new SqlParameter("@Miercoles", SqlDbType.Bit) { Value = Miercoles });
            arrPar.Add(new SqlParameter("@Jueves", SqlDbType.Bit) { Value = Jueves });
            arrPar.Add(new SqlParameter("@Viernes", SqlDbType.Bit) { Value = Viernes });
            arrPar.Add(new SqlParameter("@Sabado", SqlDbType.Bit) { Value = Sabado });
            arrPar.Add(new SqlParameter("@Domingo", SqlDbType.Bit) { Value = Domingo });


            ClsModResidencias objUsuario = new ClsModResidencias();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearResidencia", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objUsuario.PKResidencia = Ident;
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

        public List<ClsModResidencias> ActualizarResidencias(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();



            bool Lunes = false;
            bool Martes = false;
            bool Miercoles = false;
            bool Jueves = false;
            bool Viernes = false;
            bool Sabado = false;
            bool Domingo = false;

            for (int i = 0; i < objModel.Dias.Count; i++)
            {
                if (objModel.Dias[i].Dia == "Lunes")
                {
                    Lunes = true;
                }
                if (objModel.Dias[i].Dia == "Martes")
                {
                    Martes = true;
                }
                if (objModel.Dias[i].Dia == "Miercoles")
                {
                    Miercoles = true;
                }
                if (objModel.Dias[i].Dia == "Jueves")
                {
                    Jueves = true;
                }
                if (objModel.Dias[i].Dia == "Viernes")
                {
                    Viernes = true;
                }
                if (objModel.Dias[i].Dia == "Sabado")
                {
                    Sabado = true;
                }
                if (objModel.Dias[i].Dia == "Domingo")
                {
                    Domingo = true;
                }
            }



            arrPar.Add(new SqlParameter("@PKResidencia", SqlDbType.Int) { Value = objModel.PKResidencia });
            arrPar.Add(new SqlParameter("@NombreResidencia", SqlDbType.VarChar) { Value = objModel.NombreResidencia });
            arrPar.Add(new SqlParameter("@LimVisitasFrecuentes", SqlDbType.Int) { Value = objModel.LimVisitasFrecuentes });
            arrPar.Add(new SqlParameter("@LimVisitasUnSoloUso", SqlDbType.Int) { Value = objModel.LimVisitasUnSoloUso });
            arrPar.Add(new SqlParameter("@FKDiasActivados", SqlDbType.VarChar) { Value = objModel.FKDiasActivados });
            arrPar.Add(new SqlParameter("@WhatsAppCorreo", SqlDbType.VarChar) { Value = objModel.WhatsAppCorreo });
            arrPar.Add(new SqlParameter("@UsuarioModificacion", SqlDbType.VarChar) { Value = objModel.UsuarioModificacion });
            arrPar.Add(new SqlParameter("@TokenMercado", SqlDbType.VarChar) { Value = objModel.TokenMercado });
            arrPar.Add(new SqlParameter("@KeyMercado", SqlDbType.VarChar) { Value = objModel.KeyMercado });
            if (objModel.Dispositivo!=null)
            {
                arrPar.Add(new SqlParameter("@IdNivelDispositivo", SqlDbType.VarChar) { Value = objModel.Dispositivo.IdDispositivo });
            }
            if (objModel.Departamento != null)
            {
                arrPar.Add(new SqlParameter("@IDDepartamento", SqlDbType.VarChar) { Value = objModel.Departamento.IDDepartamento });
            }
            arrPar.Add(new SqlParameter("@FechaExpiracion", SqlDbType.VarChar) { Value = objModel.FechaExpiracion });
            


            arrPar.Add(new SqlParameter("@Lunes", SqlDbType.Bit) { Value = Lunes });
            arrPar.Add(new SqlParameter("@Martes", SqlDbType.Bit) { Value = Martes });
            arrPar.Add(new SqlParameter("@Miercoles", SqlDbType.Bit) { Value = Miercoles });
            arrPar.Add(new SqlParameter("@Jueves", SqlDbType.Bit) { Value = Jueves });
            arrPar.Add(new SqlParameter("@Viernes", SqlDbType.Bit) { Value = Viernes });
            arrPar.Add(new SqlParameter("@Sabado", SqlDbType.Bit) { Value = Sabado });
            arrPar.Add(new SqlParameter("@Domingo", SqlDbType.Bit) { Value = Domingo });



            ClsModResidencias objUsuario = new ClsModResidencias();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarResidencia", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objUsuario.PKResidencia = Ident;
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


        public List<ClsModResidencias> EliminarResidencias(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKResidencia", SqlDbType.Int) { Value = objModel.PKResidencia });

            ClsModResidencias objUsuario = new ClsModResidencias();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPEliminarResidencia", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objUsuario.PKResidencia = Ident;
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


        public List<ClsModResidencias> ObtenerNivel(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            ClsModResidencias objModUsuarios = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerNivelDispositivo", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModResidencias();

                        objModUsuarios.IdNivel = (string)(sqlLeer["IdNivel"] != DBNull.Value ? sqlLeer["IdNivel"] : string.Empty);
                        objModUsuarios.NombreNivel = (string)(sqlLeer["NombreNivel"] != DBNull.Value ? sqlLeer["NombreNivel"] : string.Empty);


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

        public List<ClsModUsuarios> ExisteUsuario(SqlConnection Con, ClsModParametrosExiste objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.PKResidencia });
            arrPar.Add(new SqlParameter("@FKnivel", SqlDbType.Int) { Value = objModel.FKNivel });

            ClsModUsuarios objModUsuarios = new ClsModUsuarios();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPExisteUsuario", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModUsuarios();

                        objModUsuarios.PKUsuario = (int)(sqlLeer["PKUsuario"] != DBNull.Value ? sqlLeer["PKUsuario"] : 0);


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

        public List<ClsModPeticiones> FechaExpiracion(SqlConnection Con, int PKResidencia,out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModPeticiones> lstPeticiones = new List<ClsModPeticiones>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            arrPar.Add(new SqlParameter("@PKResidencia", SqlDbType.Int) { Value = PKResidencia });



            ClsModPeticiones objModUsuarios = new ClsModPeticiones();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "spFechaExpiracion", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModPeticiones();

                        objModUsuarios.Exito = (string)(sqlLeer["Exito"] != DBNull.Value ? sqlLeer["Exito"] : string.Empty);

                        lstPeticiones.Add(objModUsuarios);
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
            return lstPeticiones;
        }


        public List<ClsModResidencias> ObtenerDepartamento(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            ClsModResidencias objModResidencia = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerDepartamento", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModResidencia = new ClsModResidencias();

                        objModResidencia.id = (string)(sqlLeer["id"] != DBNull.Value ? sqlLeer["id"] : string.Empty);
                        objModResidencia.nombreDepartamento = (string)(sqlLeer["nombreDepartamento"] != DBNull.Value ? sqlLeer["nombreDepartamento"] : string.Empty);


                        lstUsuarios.Add(objModResidencia);
                    }
                }
                else
                {
                    objModResidencia = null;
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

        public ClsModResidencias CuotasTipoSuscripcion(SqlConnection Con, ClsModParametrosCuotas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModResidencias objResidencia = new ClsModResidencias();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@id", SqlDbType.Int) { Value = objModel.IdCatTipoSuscripcion });
            arrPar.Add(new SqlParameter("@costo", SqlDbType.VarChar) { Value = objModel.costo });


            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarCuotas", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objResidencia.PKResidencia = Ident;
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
            return objResidencia;
        }


        public List<ClsModResidencias> ObtenerTAGSxResidencia(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.PKResidencia });


            ClsModResidencias objModResidencia = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerTAGSxResidencia", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModResidencia = new ClsModResidencias();

                        objModResidencia.PKUsuarioTAG = (int)(sqlLeer["PKUsuarioTAG"] != DBNull.Value ? sqlLeer["PKUsuarioTAG"] : 0);
                        objModResidencia.PKUsuario = (int)(sqlLeer["PKUsuario"] != DBNull.Value ? sqlLeer["PKUsuario"] : 0);
                        objModResidencia.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);


                        lstUsuarios.Add(objModResidencia);
                    }
                }
                else
                {
                    objModResidencia = null;
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

        public List<ClsModResidencias> ObtenerTAGS(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            arrPar.Add(new SqlParameter("@DEPARTAMENTO", SqlDbType.VarChar) { Value = objModel.IDDepartamento });


            ClsModResidencias objModResidencia = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerTAGS", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModResidencia = new ClsModResidencias();

                        objModResidencia.IDPERSON = (string)(sqlLeer["IDPERSON"] != DBNull.Value ? sqlLeer["IDPERSON"] : string.Empty);
                        objModResidencia.CARDID = (string)(sqlLeer["CARDID"] != DBNull.Value ? sqlLeer["CARDID"] : string.Empty);
                        objModResidencia.card_no = (string)(sqlLeer["card_no"] != DBNull.Value ? sqlLeer["card_no"] : string.Empty);
                        objModResidencia.name = (string)(sqlLeer["name"] != DBNull.Value ? sqlLeer["name"] : string.Empty);
                        objModResidencia.last_name = (string)(sqlLeer["last_name"] != DBNull.Value ? sqlLeer["last_name"] : string.Empty);
                        objModResidencia.name_spell = (string)(sqlLeer["name_spell"] != DBNull.Value ? sqlLeer["name_spell"] : string.Empty);

                        lstUsuarios.Add(objModResidencia);
                    }
                }
                else
                {
                    objModResidencia = null;
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

        public ClsModResidencias CrearTAGS(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModResidencias objUsuario = new ClsModResidencias();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@person_pin", SqlDbType.VarChar) { Value = objModel.person_pin });
            arrPar.Add(new SqlParameter("@nombre", SqlDbType.VarChar) { Value = objModel.nombre });


            ClsModResidencias objModResidencia = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPCrearTAGS", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModResidencia = new ClsModResidencias();
                    }
                }
                else
                {
                    objModResidencia = null;
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
            return objUsuario;
        }

        public List<ClsModResidencias> ObtenerCuotasTipo(SqlConnection Con, ClsModParametrosResidencias objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModResidencias> lstUsuarios = new List<ClsModResidencias>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            arrPar.Add(new SqlParameter("@PKResidencia", SqlDbType.VarChar) { Value = objModel.PKResidencia });


            ClsModResidencias objModResidencia = new ClsModResidencias();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerTiposSuscripciones", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModResidencia = new ClsModResidencias();

                        objModResidencia.IdCatTipoSuscripcion = (int)(sqlLeer["IdCatTipoSuscripcion"] != DBNull.Value ? sqlLeer["IdCatTipoSuscripcion"] : 0);
                        objModResidencia.PKResidencia = (int)(sqlLeer["PKResidencia"] != DBNull.Value ? sqlLeer["PKResidencia"] :0);
                        objModResidencia.TipoSuscripcion = (string)(sqlLeer["TipoSuscripcion"] != DBNull.Value ? sqlLeer["TipoSuscripcion"] : string.Empty);
                        objModResidencia.Costo = (int)(sqlLeer["Costo"] != DBNull.Value ? sqlLeer["Costo"] : 0);

                        lstUsuarios.Add(objModResidencia);
                    }
                }
                else
                {
                    objModResidencia = null;
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

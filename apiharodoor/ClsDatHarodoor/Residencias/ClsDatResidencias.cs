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



    }
}

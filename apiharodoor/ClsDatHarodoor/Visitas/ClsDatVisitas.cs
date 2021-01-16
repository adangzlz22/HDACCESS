using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClsModHarodoor.Common;
using ClsModHarodoor.Usuarios;
using ClsModHarodoor.Visitas;
using Microsoft.ApplicationBlocks.Data;

namespace ClsDatHarodoor.Visitas
{
    public class ClsDatVisitas
    {
        string Error = "ClsDatObtenerVisitas.";

        public List<ClsModVisitas> ObtenerVisitas(SqlConnection Con, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@TipoVisita", SqlDbType.Int) { Value = objModel.TipoVisita });
            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@PKVisita", SqlDbType.Int) { Value = objModel.PKVisita });

            ClsModVisitas objVisita = new ClsModVisitas();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerVisitas", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objVisita = new ClsModVisitas();

                        objVisita.Registros = (int)(sqlLeer["Registros"] != DBNull.Value ? sqlLeer["Registros"] : 0);
                        objVisita.PKVisita = (int)(sqlLeer["PKVisita"] != DBNull.Value ? sqlLeer["PKVisita"] : 0);
                        objVisita.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objVisita.Descripcion = (string)(sqlLeer["Descripcion"] != DBNull.Value ? sqlLeer["Descripcion"] : string.Empty);
                        objVisita.TelefonoOCorreo = (string)(sqlLeer["TelefonoOCorreo"] != DBNull.Value ? sqlLeer["TelefonoOCorreo"] : string.Empty);
                        objVisita.LimVisitasFrecuentes = (int)(sqlLeer["LimVisitasFrecuentes"] != DBNull.Value ? sqlLeer["LimVisitasFrecuentes"] : 0);
                        objVisita.LimVisitasUnSoloUso = (int)(sqlLeer["LimVisitasUnSoloUso"] != DBNull.Value ? sqlLeer["LimVisitasUnSoloUso"] : 0);

                        lstVisitas.Add(objVisita);
                    }
                }
                else
                {
                    objVisita = null;
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
            return lstVisitas;
        }

        public ClsModVisitas CrearVisita(SqlConnection Con, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModVisitas lstVisitas = new ClsModVisitas();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();
            
            long i = 0;
            var checar= long.TryParse(objModel.TelefonoOCorreo, out i);
            if (checar == true)
            {
                objModel.TelefonoOCorreo = "521" + objModel.TelefonoOCorreo;
            }
            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@TipoVisita", SqlDbType.Int) { Value = objModel.TipoVisita });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@TelefonoOCorreo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Descripcion", SqlDbType.VarChar) { Value = objModel.Descripcion });
            
            ClsModVisitas objVisita = new ClsModVisitas();
            try
            {
                lstVisitas.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearVisita", arrPar.ToArray());
                if (lstVisitas.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstVisitas.Id.ToString(), out Ident);
                    objVisita.PKVisita = Ident;
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
            return lstVisitas;
        }

        public List<ClsModVisitas> EliminarVisita(SqlConnection Con, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKVisita", SqlDbType.Int) { Value = objModel.PKVisita });

            ClsModVisitas objVisita = new ClsModVisitas();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPEliminarVisita", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objVisita.PKVisita = Ident;
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
            return lstVisitas;
        }


        public List<ClsModVisitas> ActualizarVisita(SqlConnection Con, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKVisita", SqlDbType.Int) { Value = objModel.PKVisita });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Descripcion", SqlDbType.VarChar) { Value = objModel.Descripcion });
            arrPar.Add(new SqlParameter("@TelefonoOCorreo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });

            ClsModVisitas objVisita = new ClsModVisitas();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarVisita", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objVisita.PKVisita = Ident;
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
            return lstVisitas;
        }

        public List<ClsModVisitas> SPActualizarVisitasDeUnSoloUso(SqlConnection Con, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModVisitas> lstVisitas = new List<ClsModVisitas>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            ClsModVisitas objVisita = new ClsModVisitas();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarVisitasDeUnSoloUso", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                    objVisita.PKVisita = Ident;
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
            return lstVisitas;
        }

        public ClsModUsuarios CrearUsuarioDBZK(SqlConnection Con, object ID, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZK", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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


        public ClsModUsuarios CrearUsuarioDBZKAIPERSON(SqlConnection Con, object ID, Guid PERS_PERSON_ID, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKAIPERSON", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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
        public ClsModUsuarios CrearUsuarioDBZKPERSCARD(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKPERSCARD", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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


        public ClsModUsuarios CrearUsuarioBASEZKpers_issuecard(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKpers_issuecard", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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



        public ClsModUsuarios CrearUsuarioDBZKatt_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKatt_person", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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

        public ClsModUsuarios CrearUsuarioBASEZKins_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKins_person", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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

        public ClsModUsuarios CrearUsuarioBASEZKpers_certificate(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKpers_certificate", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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


        
        public ClsModUsuarios CrearUsuarioBASEZKacc_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKacc_person", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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


        public ClsModUsuarios CrearUsuarioBASEZKele_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKele_person", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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

        
            public ClsModUsuarios CrearUsuarioBASEZKpers_attribute_ext(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.TelefonoOCorreo });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });
            arrPar.Add(new SqlParameter("@NUMERODETARJETA", SqlDbType.VarChar) { Value = NUMERODETARJETA });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuarioBASEZKpers_attribute_ext", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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


        public ClsModUsuarios CrearVisitaBASEZK(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearVisitaBASEZK", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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
        public ClsModUsuarios CrearVisitaBASEZKacc_level_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosVisitas objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@PERS_PERSON_ID", SqlDbType.VarChar) { Value = PERS_PERSON_ID.ToString() });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearVisitaBASEZKacc_level_person", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
                    objUsuario.PKUsuario = Ident;
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

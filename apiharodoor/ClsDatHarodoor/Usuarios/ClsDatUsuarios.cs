using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Deployment.Internal;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClsModHarodoor.Common;
using ClsModHarodoor.Usuarios;
using Microsoft.ApplicationBlocks.Data;

namespace ClsDatHarodoor.Usuarios
{
    public class ClsDatUsuarios
    {

        string Error = "ClsDatLogin.";


        public List<ClsModUsuarios> Login(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstConteoFisico = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });


            ClsModUsuarios objModUsuarios = new ClsModUsuarios();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPLogin", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModUsuarios();

                        objModUsuarios.PKUsuario = (int)(sqlLeer["PKUsuario"] != DBNull.Value ? sqlLeer["PKUsuario"] : 0);
                        objModUsuarios.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objModUsuarios.Correo = (string)(sqlLeer["Correo"] != DBNull.Value ? sqlLeer["Correo"] : string.Empty);
                        objModUsuarios.Contrasena = (string)(sqlLeer["Contrasena"] != DBNull.Value ? sqlLeer["Contrasena"] : string.Empty);
                        objModUsuarios.Telefono = (string)(sqlLeer["Telefono"] != DBNull.Value ? sqlLeer["Telefono"] : string.Empty);
                        objModUsuarios.FKResidencia = (int)(sqlLeer["FKResidencia"] != DBNull.Value ? sqlLeer["FKResidencia"] : 0);
                        objModUsuarios.NombreResidencia = (string)(sqlLeer["NombreResidencia"] != DBNull.Value ? sqlLeer["NombreResidencia"] : string.Empty);
                        objModUsuarios.FKNivel = (int)(sqlLeer["FKNivel"] != DBNull.Value ? sqlLeer["FKNivel"] : 0); 
                        objModUsuarios.Estatus = (Boolean)(sqlLeer["Estatus"] != DBNull.Value ? sqlLeer["Estatus"] : false);
                        objModUsuarios.FKMenuBandera = (int)(sqlLeer["FKMenuBandera"] != DBNull.Value ? sqlLeer["FKMenuBandera"] : 0);
                        objModUsuarios.GeneradorCodigos = (Boolean)(sqlLeer["GeneradorCodigos"] != DBNull.Value ? sqlLeer["GeneradorCodigos"] : false);
                        objModUsuarios.WhatsappCorreo = (Boolean)(sqlLeer["WhatsappCorreo"] != DBNull.Value ? sqlLeer["WhatsappCorreo"] : false);
                        objModUsuarios.TokenMercado = (string)(sqlLeer["TokenMercado"] != DBNull.Value ? sqlLeer["TokenMercado"] : string.Empty);
                        objModUsuarios.KeyMercado = (string)(sqlLeer["KeyMercado"] != DBNull.Value ? sqlLeer["KeyMercado"] : string.Empty);
                        objModUsuarios.IDNivelDispotivo = (string)(sqlLeer["IDNivelDispotivo"] != DBNull.Value ? sqlLeer["IDNivelDispotivo"] : string.Empty);
                        objModUsuarios.Expiracion = (int)(sqlLeer["Expiracion"] != DBNull.Value ? sqlLeer["Expiracion"] : 0);
                        objModUsuarios.IDDepartamento = (string)(sqlLeer["IDDepartamento"] != DBNull.Value ? sqlLeer["IDDepartamento"] : string.Empty);
                        

                        lstConteoFisico.Add(objModUsuarios);
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
            return lstConteoFisico;
        }

        public List<ClsModUsuarios> ActualizarPerfil(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });

            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarPerfil", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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


        public List<ClsModUsuarios> ObtenerUsuarios(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@FKNivel", SqlDbType.Int) { Value = objModel.FKNivel });
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });


            ClsModUsuarios objModUsuarios = new ClsModUsuarios();
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerUsuario", arrPar.ToArray());
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        objModUsuarios = new ClsModUsuarios();


                        objModUsuarios.PKUsuario = (int)(sqlLeer["PKUsuario"] != DBNull.Value ? sqlLeer["PKUsuario"] : 0);
                        objModUsuarios.NombreCompleto = (string)(sqlLeer["NombreCompleto"] != DBNull.Value ? sqlLeer["NombreCompleto"] : string.Empty);
                        objModUsuarios.Correo = (string)(sqlLeer["Correo"] != DBNull.Value ? sqlLeer["Correo"] : string.Empty);
                        objModUsuarios.Telefono = (string)(sqlLeer["Telefono"] != DBNull.Value ? sqlLeer["Telefono"] : string.Empty);

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

        public ClsModUsuarios CrearUsuario(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@UsuarioCreacion", SqlDbType.VarChar) { Value = objModel.UsuarioCreacion });
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value = objModel.FKResidencia });
            arrPar.Add(new SqlParameter("@FKNivel", SqlDbType.Int) { Value = objModel.FKNivel });
            arrPar.Add(new SqlParameter("@FKMenuBandera", SqlDbType.Int) { Value = objModel.FKMenuBandera });


            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearUsuario", arrPar.ToArray());
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


        public ClsModUsuarios CrearUsuarioDBZK(SqlConnection Con,object ID, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID});
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });


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

      
        public ClsModUsuarios CrearUsuarioDBZKAIPERSON(SqlConnection Con, object ID,Guid PERS_PERSON_ID, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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
        public ClsModUsuarios CrearUsuarioDBZKPERSCARD(SqlConnection Con, object ID, Guid PERS_PERSON_ID,string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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

        public List<ClsModUsuarios> ActualizarUsuario(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.Int) { Value =objModel.FKResidencia });

            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPActualizarUsuario", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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


        public List<ClsModUsuarios> EliminarUsuario(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });

            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPEliminarUsuario", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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
        

        public List<ClsModUsuarios> EliminarDispositivo(SqlConnection Con, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            List<ClsModUsuarios> lstUsuarios = new List<ClsModUsuarios>();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.Int) { Value = objModel.PKUsuario });

            ClsModUsuarios objUsuario = new ClsModUsuarios();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPEliminarDispositivo", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
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

        public ClsModUsuarios CrearUsuarioDBZKatt_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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

        public ClsModUsuarios CrearUsuarioDBZKins_Person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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
        public ClsModUsuarios CrearUsuarioBASEZKpers_issuecard(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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

        public ClsModUsuarios CrearUsuarioDBZKpers_Certificate(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Correo });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = objModel.Contrasena });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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

        public ClsModUsuarios CrearUsuarioBASEZKacc_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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


        public ClsModUsuarios CrearUsuarioBASEZKele_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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


        public ClsModUsuarios CrearUsuarioBASEZKpers_attribute_ext(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios lstUsuarios = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();


            lstUsuarios.IdDev = Guid.NewGuid();
            arrPar.Add(new SqlParameter("@IDdevv", SqlDbType.VarChar) { Value = lstUsuarios.IdDev.ToString() });
            arrPar.Add(new SqlParameter("@ID", SqlDbType.Int) { Value = ID });
            arrPar.Add(new SqlParameter("@NombreCompleto", SqlDbType.VarChar) { Value = objModel.NombreCompleto });
            arrPar.Add(new SqlParameter("@Correo", SqlDbType.VarChar) { Value = objModel.Telefono });
            arrPar.Add(new SqlParameter("@Contrasena", SqlDbType.VarChar) { Value = "123" });
            arrPar.Add(new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = objModel.Telefono });
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


        public ClsModUsuarios CrearVisitaBASEZK(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
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
        public ClsModUsuarios CrearVisitaBASEZKacc_level_person(SqlConnection Con, object ID, Guid PERS_PERSON_ID, string NUMERODETARJETA, ClsModParametrosUsuarios objModel, out ClsModResultado objClsModResultado)
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

        public ClsModUsuarios CrearTAGS(SqlConnection Con, ClsModParametrosTAGS objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModUsuarios objUsuario = new ClsModUsuarios();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@PKUsuario", SqlDbType.VarChar) { Value = objModel.PKUsuario });
            arrPar.Add(new SqlParameter("@person_pin", SqlDbType.VarChar) { Value = objModel.person_pin });
            arrPar.Add(new SqlParameter("@nombre", SqlDbType.VarChar) { Value = objModel.nombre });


            try
            {
                objUsuario.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearTAGS", arrPar.ToArray());
                if (objUsuario.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(objUsuario.Id.ToString(), out Ident);
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
            return objUsuario;
        }



    }
}

using ClsModHarodoor.Common;
using ClsModHarodoor.MercadoPago;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Common;
using System.Security.Cryptography.X509Certificates;
using System.Data;
using Microsoft.ApplicationBlocks.Data;

namespace ClsDatHarodoor.Mercado
{
    public class ClsDatMP
    {
        string Error = "ClsDatLogin.";


        public ClsModMP CrearPago(SqlConnection Con,ClsModParametrosMP objModel, out ClsModResultado objClsModResultado)
        {
            ClsModMP objMP = new ClsModMP();
            objClsModResultado = null;

            try
            {
                //TokenMercadoPago
                SDK.SetAccessToken("APP_USR-2611793785083909-061103-4717a41f4006ab065632e60c40fd6449-582833018");

                Payment payment = new Payment
                {
                    TransactionAmount = objModel.transaction_amount,
                    Token = objModel.token,
                    Description = objModel.description,
                    PaymentMethodId = objModel.payment_method_id,
                    Installments = objModel.installments,
                    Payer = new Payer
                    {
                        Email = objModel.email
                    }
                };

                payment.Save();

                var a = payment.Status;
                objMP.status = Convert.ToString(payment.Status);
            }
            catch (Exception ex)
            {
                objMP.Error = ex.Message;
            }
            return objMP;
        }
        public ClsModMP CrearPagoBD(SqlConnection Con, ClsModParametrosMP objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModMP lstUsuarios = new ClsModMP();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            arrPar.Add(new SqlParameter("@IdCatTipoPago", SqlDbType.VarChar) { Value = 2 });
            arrPar.Add(new SqlParameter("@FKUsuario", SqlDbType.VarChar) { Value = objModel.FKUsuario });
            arrPar.Add(new SqlParameter("@PKTipoSuscripcion", SqlDbType.VarChar) { Value = 1 });
            arrPar.Add(new SqlParameter("@IdUsuarioCreacion", SqlDbType.VarChar) { Value = objModel.FKUsuario });
            arrPar.Add(new SqlParameter("@Total", SqlDbType.VarChar) { Value = objModel.transaction_amount });


        ClsModMP objUsuario = new ClsModMP();
            try
            {
                lstUsuarios.Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPAgregarPago", arrPar.ToArray());
                if (lstUsuarios.Id != null)
                {
                    int Ident = 0;
                    int.TryParse(lstUsuarios.Id.ToString(), out Ident);
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

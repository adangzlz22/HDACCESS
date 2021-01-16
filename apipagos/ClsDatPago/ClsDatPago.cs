using ClbModPago;
using ClbModPago.Common;
using ClbModPago.Views;
using ClbUtileria;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
using System.Net.Http;
using System.Net;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using System.IO;

namespace ClbDatPago
{
    public class ClsDatPago : Common.DataBaseConnection
    {
        private string TAG = typeof(ClsDatPago).ToString();
        private readonly AppSettings appSettings;
        private static readonly HttpClient HttpClient;
        public ClsDatPago(AppSettings AppSettings)
        {
            this.appSettings = AppSettings;

        }
        public async Task<ClsModResultado> Agregar(ClsModEncPago clsModPago)
        {
            ClsModResultado modResultado = new ClsModResultado();
            DynamicParameters lstParametros = new DynamicParameters();
            lstParametros.Add("@IdCatTipoPago", clsModPago.IdCatTipoPago);
            lstParametros.Add("@PKTipoSuscripcion", clsModPago.IdCatTipoSuscripcion);
            lstParametros.Add("@FKUsuario", clsModPago.FKUsuario);
            lstParametros.Add("@IdUsuarioCreacion", clsModPago.IdUsuarioCreacion);
            lstParametros.Add("@Total", clsModPago.Total);

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    await conexion.ExecuteAsync("SPAgregarPago", lstParametros, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = "Ok";
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - Agregar() : {ex.ToString()}";
            }
            return modResultado;
        }
       
        public async Task<ClsModResultado> ObtenerEstadoDeCuenta(Dictionary<string, string> Params)
        {
            Params.TryGetValue("Ano", out string Ano);
            Params.TryGetValue("IdUsuario", out string IdUsuario);
            ClsModResultado modResultado = new ClsModResultado();
            DynamicParameters lstParametros = new DynamicParameters();
            lstParametros.Add("@Ano", int.Parse(Ano) );
            lstParametros.Add("@IdUsuario", int.Parse(IdUsuario));

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                { 
                    var Response = await conexion.QueryAsync<EstadoCuentaViewModel>("SPObtenerEstadoCuenta", lstParametros, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Response.AsList<EstadoCuentaViewModel>();
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - ObtenerEstadoDeCuenta() : {ex.ToString()}";
            }
            return modResultado;
        }

        public async Task<ClsModResultado> ObtenerTotalXResidencia(Dictionary<string, string> Params)
        {
            ClsModResultado modResultado = new ClsModResultado();
            DynamicParameters lstParametros = new DynamicParameters();
            Params.TryGetValue("anoSelected", out string ano);
            Params.TryGetValue("text", out string txt);

            lstParametros.Add("@Ano", ano);
            lstParametros.Add("@text", txt);

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    var Response = await conexion.QueryAsync("SPObtenerTotalXResidencia", lstParametros, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Response;
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - ObtenerTotalXResidencia() : {ex.ToString()}";
            }
            return modResultado;
        }
      
        public async Task<ClsModResultado> ObtenerTotalPagoResidencia(int PKResidencia)
        {
            ClsModResultado modResultado = new ClsModResultado();
            DynamicParameters lstParametros = new DynamicParameters();
            lstParametros.Add("@PKResidencia", PKResidencia);

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    var Response = await conexion.QueryAsync("SPObtenerTotalPagoResidencia", lstParametros, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Response;
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - ObtenerTotalPagoResidencia() : {ex.ToString()}";
            }
            return modResultado;
        }
        public async Task<ClsModResultado> ObtenerReporteResidentes(Dictionary<string, string> Params)
        {
            ClsModResultado modResultado = new ClsModResultado();
            DynamicParameters lstParametros = new DynamicParameters();
            Params.TryGetValue("Ano", out string Ano);
            Params.TryGetValue("Estatus", out string Estatus);
            Params.TryGetValue("FKResidencia", out string FKResidencia);
            Params.TryGetValue("text", out string text);

            lstParametros.Add("@Ano", int.Parse(Ano));
            lstParametros.Add("@Estatus", Estatus != null ? int.Parse(Estatus) : 3);
            lstParametros.Add("@PKResidencia", int.Parse(FKResidencia));
            lstParametros.Add("@text", text);
            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    var Query = await conexion.QueryAsync("[SPObtenerReporteResidentes]", lstParametros, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Query;
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - ObtenerReporteResidentes() : {ex.ToString()}";
            }
            return modResultado;
        }

        public async Task<ClsModResultado> ObtenerAnos()
        {
            ClsModResultado modResultado = new ClsModResultado();

            try
            {
                using (var conexion = new SqlConnection(appSettings.Conexion))
                {
                    var Response = await conexion.QueryAsync<string>("SPObtenerAnosEstadoCuenta", null, commandType: CommandType.StoredProcedure);
                    modResultado.resultado = Response.AsList<string>();
                }
            }
            catch (Exception ex)
            {
                modResultado.mensajeError = $"{TAG} - ObtenerEstadoDeCuenta() : {ex.ToString()}";
            }
            return modResultado;
        }
        public async Task<ClsModResultado> AgregarMP(ClsModPagoMP objModPagoMP)
        {
            var result = new ClsModResultado();
            try
            {
                string token = "APP_USR-810562374130211-050202-c30685b7ab79da8b68f4b7cebd304b44-545481437";
                //string token = "TEST-810562374130211-050202-55985e3ae4a09c9d817a6b73e9a58384-545481437";

                var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://api.mercadopago.com/v1/payments?access_token=" + token);
                httpWebRequest.ContentType = "application/json";
                httpWebRequest.Method = "POST";

                string json = JsonConvert.SerializeObject(objModPagoMP);
                using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
                {
                    

                    streamWriter.Write(json);
                }

                var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    dynamic status = JsonConvert.DeserializeObject(streamReader.ReadToEnd());
                    if(status.status == "approved")
                        result.mensaje = "Ok";
                    else
                        result.mensaje = "Error al intentar procesar pago";
                }

                //Payment payment = new Payment()
                //{
                //    TransactionAmount = objModPagoMP.Total,
                //    Token = objModPagoMP.Token,
                //    Description = objModPagoMP.Description,
                //    Installments = objModPagoMP.Cuotas,
                //    PaymentMethodId = objModPagoMP.IdMetodoPago,
                //    Payer = new Payer()
                //    {
                //        Email = objModPagoMP.ClienteCorreo
                //    }
                //};
                //payment.Save();

                //if (payment.Errors.Value.Status != 200)
                //{
                //    throw new Exception(payment.Errors.Value.Message);
                //}
                //result.mensaje = payment.Status.ToString() + payment.StatusDetail;
                return result;
            }
            catch (Exception ex)
            {
                result.mensajeError = ex.Message;
                return result;
            }
        }
    }
}

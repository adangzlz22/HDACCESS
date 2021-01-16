using ClsDatHarodoor.Codigos;
using ClsDatHarodoor.DiasActivos;
using ClsDatHarodoor.GeneradorDeCodigos;
using ClsModHarodoor.Codigos;
using ClsModHarodoor.Common;
using ClsModHarodoor.GeneradorDeCodigos;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.ClsNegGenerador
{
    public class ClsNegGenerador : ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegGenerador(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


        public List<ClsModGenerador> GenerarCodigosDeBarra(ClsModGenerador objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();

            List<ClsModGenerador> lstConteoFisicos = new List<ClsModGenerador>();

            List<ClsModUsuariosGenerador> lstUsuarios = new List<ClsModUsuariosGenerador>();
            List<ClsModVisitasGenerador> lstVisitas = new List<ClsModVisitasGenerador>();
            WhatsAppA.ClsNegWhatsApp clsWha = new WhatsAppA.ClsNegWhatsApp();
            Correo.ClsCorreo clsCorreos = new Correo.ClsCorreo();

            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();

                            lstUsuarios = new ClsDatGenerador().listaDeUsuarios(Con, objModel, out objClsModResultado);
                            lstVisitas = new ClsDatGenerador().listaDeVisitas(Con, objModel, out objClsModResultado);

                            foreach (var item in lstUsuarios)
                            {
                                ClsModCodigos lst = new ClsDatCodigos().GenerarNuevosCodigos(Con, "", item.PKUsuario, "SPActualizarCodigosDeBarraUsuarios", objModel.FKResidencia, out objClsModResultado);
                            }
                            foreach (var item in lstVisitas)
                            {
                                ClsModCodigos lst = new ClsDatCodigos().GenerarNuevosCodigos(Con, "", item.PKVisita, "SPActualizarCodigosDeBarraVisitas", objModel.FKResidencia, out objClsModResultado);

                                long i = 0;
                                var checar = long.TryParse(item.TelefonoOCorreo, out i);
                                if (checar == true)
                                {
                                    clsWha.EnviarMensajePorWhatsAppTwillio("+14155238886", item.TelefonoOCorreo, lst.PathUrl);
                                }
                                else
                                {
                                    clsCorreos.EnviarCorreo(item.TelefonoOCorreo, lst.PathUrl);
                                }

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
            return lstConteoFisicos;
        }

        public List<ClsModGenerador> GenerarCodigosDeBarraAuto()
        {
            DateTime dt = DateTime.Now;
            List<ClsModGenerador> lstConteoFisicos = new List<ClsModGenerador>();

            //OBTENER LISTA DE RESIDENCIAS
            ClsModResultado objClsModResultado = new ClsModResultado();

            var a = dt.ToString("dddd", new CultureInfo("es-ES"));
            //bool Lunes = false, Martes = false, Miercoles = false, Jueves = false, Viernes = false, Sabado = false, Domingo = false;
            //switch (a)
            //{
            //    case "lunes":
            //        Lunes = true;
            //        break;
            //    case "martes":
            //        Martes = true;
            //        break;
            //    case "miércoles":
            //        Miercoles = true;
            //        break;
            //    case "jueves":
            //        Jueves = true;
            //        break;
            //    case "viernes":
            //        Viernes = true;
            //        break;
            //    case "sábado":
            //        Sabado = true;
            //        break;
            //    case "domingo":
            //        Domingo = true;
            //        break;
            //}

            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();

                            lstConteoFisicos = new ClsDatDiasActivos().ObtenerResidenciasDias(Con, out objClsModResultado);

                            foreach (var recorrerlista in lstConteoFisicos)
                            {

                                switch (a)
                                {
                                    case "lunes":
                                        if (recorrerlista.Lunes == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "martes":
                                        if (recorrerlista.Martes == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "miércoles":
                                        if (recorrerlista.Miercoles == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "jueves":
                                        if (recorrerlista.Jueves == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "viernes":
                                        if (recorrerlista.Viernes == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "sábado":
                                        if (recorrerlista.Sabado == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                    case "domingo":
                                        if (recorrerlista.Domingo == true)
                                        {
                                            generate(Con, recorrerlista, objClsModResultado);
                                        }
                                        break;
                                }





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
            return lstConteoFisicos;
        }


        public static void generate(SqlConnection Con, ClsModGenerador recorrerlista, ClsModResultado objClsModResultado)
        {
            List<ClsModUsuariosGenerador> lstUsuarios = new List<ClsModUsuariosGenerador>();
            List<ClsModVisitasGenerador> lstVisitas = new List<ClsModVisitasGenerador>();
            WhatsAppA.ClsNegWhatsApp clsWha = new WhatsAppA.ClsNegWhatsApp();
            Correo.ClsCorreo clsCorreos = new Correo.ClsCorreo();

            lstUsuarios = new ClsDatGenerador().listaDeUsuarios(Con, recorrerlista, out objClsModResultado);
            lstVisitas = new ClsDatGenerador().listaDeVisitas(Con, recorrerlista, out objClsModResultado);

            foreach (var item in lstUsuarios)
            {
                ClsModCodigos lst = new ClsDatCodigos().GenerarNuevosCodigos(Con, "", item.PKUsuario, "SPActualizarCodigosDeBarraUsuarios", recorrerlista.FKResidencia, out objClsModResultado);
            }
            foreach (var item in lstVisitas)
            {
                ClsModCodigos lst = new ClsDatCodigos().GenerarNuevosCodigos(Con, "", item.PKVisita, "SPActualizarCodigosDeBarraVisitas", recorrerlista.FKResidencia, out objClsModResultado);

                long i = 0;
                var checar = long.TryParse(item.TelefonoOCorreo, out i);
                if (checar == true)
                {
                    clsWha.EnviarMensajePorWhatsAppTwillio("+14155238886", item.TelefonoOCorreo, lst.PathUrl);
                }
                else
                {
                    clsCorreos.EnviarCorreo(item.TelefonoOCorreo, lst.PathUrl);
                }
            }
        }

    }
}

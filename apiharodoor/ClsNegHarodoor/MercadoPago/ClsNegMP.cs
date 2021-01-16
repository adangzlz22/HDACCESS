using ClsDatHarodoor.Mercado;
using ClsModHarodoor.Common;
using ClsModHarodoor.MercadoPago;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.MercadoPago
{
    public class ClsNegMP: ClsModConexion
    {
        SqlConnection Con = null;
        public ClsNegMP(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }

        public ClsModMP CrearPago(ClsModParametrosMP objModel, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            ClsModMP lstUsuarios = new ClsModMP();


            switch (ClsReadSettings.GetTipoConexion())
            {
                case TipoConexion.Local:
                    try
                    {
                        using (Con)
                        {
                            Con.Open();
                            lstUsuarios = new ClsDatMP().CrearPago(Con, objModel, out objClsModResultado);
                            if (lstUsuarios.status == "approved")
                            {
                                lstUsuarios = new ClsDatMP().CrearPagoBD(Con,objModel,out objClsModResultado);
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

    }
}

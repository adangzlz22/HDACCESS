using ClsDatHarodoor.Codigos;
using ClsModHarodoor.Codigos;
using ClsModHarodoor.Common;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.Codigos
{
    public class ClsNegCodigos : ClsModConexion
    {

        SqlConnection Con = null;
        public ClsNegCodigos(SqlConnection Conexion) : base(Conexion)
        {
            Con = base.SqlConexionAdmin;
        }


    

    }
}

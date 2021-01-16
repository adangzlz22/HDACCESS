using System;
using System.Collections.Generic;
using System.Text;

namespace ClbDatPago.Common
{
    using System.Configuration;
    /// <summary>
    /// Clase para las operaciones de obtención de cadena de conexión a base de datos.
    /// </summary>
    public class DataBaseConnection
    {
        public string GetConnectionString()
        {
            var varConec = ConfigurationManager.AppSettings.Get("conexion");

            if (varConec != null)
            {
                return varConec.ToString();
            }

            return string.Empty;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.Visitas
{
    public class ClsModParametrosVisitas
    {
        public int PKVisita { get; set; }
        public int PKUsuario { get; set; }
        public int TipoVisita { get; set; }
        public string NombreCompleto { get; set; }
        public string TelefonoOCorreo { get; set; }
        public string Descripcion { get; set; }
        public string UsuarioCreacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaModificacion { get; set; }
        public Boolean Estatus { get; set; }
        public Boolean WhatCorreo { get; set; }
    }
}

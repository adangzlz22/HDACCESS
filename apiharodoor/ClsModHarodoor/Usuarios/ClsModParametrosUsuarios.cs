using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.Usuarios
{
    public class ClsModParametrosUsuarios
    {
        public int PKUsuario { get; set; }
        public string NombreCompleto { get; set; }
        public string Correo { get; set; }
        public string Contrasena { get; set; }
        public string Telefono { get; set; }
        public int FKCodigoBarra { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaModicacion { get; set; }
        public string UsuarioCreacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public int FKResidencia { get; set; }
        public int FKNivel { get; set; }
        public int FKMenuBandera { get; set; }
        public Boolean Estatus { get; set; }
    }
}

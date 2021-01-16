using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClsModHarodoor.BuzonDeQueja
{
    public class ClsModBuzonDeQuejaFiltros
    {
        public int PKBuzonDeQueja { get; set; }
        public int Estatus { get; set; }
        public string Tipo {get;set;}
        public string Descripcion {get;set; }
        public int FKUsuario {get;set;}
        public int FKResidencia {get;set;}
    }
}

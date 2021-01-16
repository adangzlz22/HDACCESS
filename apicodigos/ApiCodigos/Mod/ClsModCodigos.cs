using System.IO;

namespace ApiCodigos.Mod
{
    public class ClsModCodigos
    {


        public int PKCodigo { get; set; }
        public string NombreCompleto { get; set; }
        public string Path { get; set; }
        public string DocumentoContent { get; set; }


        public Stream ArchivoStream { get; set; }
        public byte[] ArchivoBytes { get; set; }


        public string ObtenerExtension(string nombreArchivo)
        {
            string ext = "";
            try
            {
                string[] arrStr = nombreArchivo.Split('.');
                ///Asigna el ultimo elemento
                ext = arrStr[arrStr.Length - 1];
            }
            catch { }
            return ext;
        }

    }
}

using ApiCodigos.Dat;
using ApiCodigos.Mod;
using System;
using System.IO;
using System.Net;

namespace ApiCodigos.Neg
{
    public class ClsNegCodigos
    {
        
        private readonly AppSettings appSettings;
        private ClsDatCodigos objDatEncArchivo;

        public ClsNegCodigos(AppSettings AppSettings)
        {
            appSettings = AppSettings;
            objDatEncArchivo = new ClsDatCodigos(appSettings);
        }



        public ClsModCodigos Cargar(int PKCodigo, AppSettings appSettings)
        {

            ClsModCodigos objModDocumento = new ClsDatCodigos(appSettings).Cargar(PKCodigo);
            if (objModDocumento != null)
            {

                try
                {


                    objModDocumento.ArchivoBytes = getFileSize(objModDocumento.Path);

                    //FileStream imagen = File.OpenRead(objModDocumento.Path);
                    //byte[] buffer = new byte[imagen.Length];
                    //imagen.Read(buffer, 0, buffer.Length);
                    //imagen.Close();

                    //Stream reqStream = request.GetRequestStream();
                    //reqStream.Write(buffer, 0, buffer.Length);
                    //reqStream.Flush();
                    //reqStream.Close();

                    /////Si existe carga el archivo
                    //if (File.Exists(objModDocumento.Path))
                    //{
                    //    ///Carga el archivo a un byte[]
                    //    objModDocumento.ArchivoBytes = DiskToBytes(objModDocumento.Path);
                    //}


                }
                catch (Exception ex)
                {
                    return null;
                }

            }

            return objModDocumento;
        }


        public static byte[] getFileSize(string path)
        {
             byte[] buffer = new byte[10240];
            using(WebClient cliente = new WebClient())
            {
                buffer = cliente.DownloadData(path);
            }
            return buffer;
        }

        public static byte[] imagetoFileStream(MemoryStream imageIn)
        {
            byte[] devolver;
            devolver = imageIn.ToArray();
            return devolver;
        }




        public static string StreamToDisk(string strRuta, Stream stmarchivo)
        {

            string strMsgError = "";
            try
            {
                if (stmarchivo != null) stmarchivo.Position = 0;
                using (System.IO.FileStream output = new System.IO.FileStream(strRuta, FileMode.Create))
                {
                    stmarchivo.CopyTo(output);
                }

            }
            catch (Exception ex)
            {
                strMsgError = ex.Message;
            }

            return strMsgError;
        }


        public static byte[] DiskToBytes(string strRutaArchivo)
        {
            FileStream objFIle = File.OpenRead(strRutaArchivo);
            byte[] bytFile = new byte[objFIle.Length];
            objFIle.Read(bytFile, 0, bytFile.Length);
            objFIle.Close();
            return bytFile;
        }


    }
}

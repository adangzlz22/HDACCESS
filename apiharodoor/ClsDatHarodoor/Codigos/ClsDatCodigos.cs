using ClsModHarodoor.Codigos;
using ClsModHarodoor.Common;
using Gma.QrCodeNet.Encoding;
using Gma.QrCodeNet.Encoding.Windows.Render;
using Grpc.Core;
using Microsoft.ApplicationBlocks.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.DirectoryServices.AccountManagement;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ClsDatHarodoor.Codigos
{
    public class ClsDatCodigos
    {
        private readonly object padView;
        string Error = "ClsDatLogin.";





        public ClsModCodigos CrearCodigos(SqlConnection Con, string TipoCodigo, object id, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            var Folio = ExtraerFolio(Con);
            ClsModCodigosDeBarra objCodigos = GenerarCodigosQR("", id, Folio);

            if (TipoCodigo=="RS")
            {
                arrPar.Add(new SqlParameter("@FKUsuario", SqlDbType.Int) { Value = objCodigos.FKUsuario });
            }
            if (TipoCodigo == "VS")
            {
                arrPar.Add(new SqlParameter("@FKVisitas", SqlDbType.Int) { Value = objCodigos.FKUsuario });
            }
            arrPar.Add(new SqlParameter("@CodigoPorResidencia", SqlDbType.VarChar) { Value = objCodigos.CodigoPorResidencia });
            arrPar.Add(new SqlParameter("@CodigoNum", SqlDbType.VarChar) { Value = objCodigos.CodigoNum });
            arrPar.Add(new SqlParameter("@CodigoBarras", SqlDbType.VarChar) { Value = Folio });
            arrPar.Add(new SqlParameter("@Path", SqlDbType.VarChar) { Value = objCodigos.Path });
            arrPar.Add(new SqlParameter("@UrlPath", SqlDbType.VarChar) { Value = objCodigos.UrlPath });
            arrPar.Add(new SqlParameter("@DocumentoContent", SqlDbType.VarChar) { Value = objCodigos.DocumentoContent });
            arrPar.Add(new SqlParameter("@Folio", SqlDbType.VarChar) { Value = Folio });

            ClsModCodigos objModCodigoos = new ClsModCodigos();
            objModCodigoos.FOLIO = Folio.ToString();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, "SPCrearCodigoBarra", arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                }
            }
            catch (Exception ex)
            {
                objClsModResultado.MsgError = Error + "CargarXID(): " + ex.Message;
            }
            finally
            {
                if (sqlLeer != null) sqlLeer.Close();
            }
            objModCodigoos.PathUrl = objCodigos.UrlPath;
            return objModCodigoos;
        }
       
        public int ExtraerFolio(SqlConnection Con)
        {
            int Folio = 0;
            SqlDataReader sqlLeer = null;
            try
            {
                sqlLeer = SqlHelper.ExecuteReader(Con, CommandType.StoredProcedure, "SPObtenerFolio");
                if (sqlLeer.HasRows)
                {
                    while (sqlLeer.Read())
                    {
                        Folio = (int)(sqlLeer["FolioCodigo"] != DBNull.Value ? sqlLeer["FolioCodigo"] : 0);
                    }
                    Folio = Folio + 1;
                }
                return Folio;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                if (sqlLeer != null) sqlLeer.Close();
            }
        }



        public ClsModCodigosDeBarra GenerarCodigosDeBarra(string TipoCodigo, object id, int Folio)
        {
            ClsModCodigosDeBarra objModCodigos = new ClsModCodigosDeBarra();
            try
            {
                string RutaFTP = "http://apiharodoor.harodoor.eu/CodigosDeBarra/" + TipoCodigo + Folio.ToString() + ".png";
                string Ruta = "http://apiharodoor.harodoor.eu/CodigosDeBarra/";
                string RutaUrl = "http://apiharodoor.harodoor.eu/CodigosDeBarra/" + TipoCodigo + Folio.ToString() + ".png";
                string FileName = @"\" + TipoCodigo + Folio.ToString() + ".png";
                string nRuta = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "CodigosDeBarra");
                //FtpWebRequest request = (FtpWebRequest)FtpWebRequest.Create(RutaFTP);
                //request.Method = WebRequestMethods.Ftp.UploadFile;
                //request.Credentials = new NetworkCredential("adangonzalez-001", "tuj3f4ak0n");
                //request.UsePassive = true;
                //request.UseBinary = true;
                //request.KeepAlive = true;

                BarcodeLib.Barcode Codigo = new BarcodeLib.Barcode();
                Codigo.IncludeLabel = true;
                Image image = Codigo.Encode(BarcodeLib.TYPE.CODE128, TipoCodigo + Folio.ToString(), Color.Black, Color.White, 400, 100);

                byte[] imagen = imagetoFileStream(image);

                //var archivo = TransformarByteAMemoryStream(imagen);


                //CrearArchivoYDirectorio(Directory.GetCurrentDirectory()+ @"\Codigos", @"\" + TipoCodigo+id.ToString() + ".png", archivo,imagen);

                //var s = SendFile(Ruta, imagen);
                CrearArchivoYDirectorio(nRuta, FileName, imagen);
                //System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                //using (WebClient webClient = new WebClient())
                //{
                //    webClient.Credentials = new NetworkCredential("adangonzalez-001", "tuj3f4adanjr");
                //    byte[] newFileData = webClient.UploadData(new Uri(Ruta),"POST",imagen);

                objModCodigos.UrlPath = RutaUrl;
                objModCodigos.Path = RutaFTP;
                objModCodigos.DocumentoContent = "image/png";
                objModCodigos.FKUsuario = Convert.ToInt32(id);

                //}

                //MemoryStream a = new MemoryStream();
                //a.Read(imagen, 0, imagen.Length);
                //a.Close();

                //Stream reqStream = reques.GetRequestStream();
                //reqStream.Write(imagen, 0, imagen.Length);
                //reqStream.Flush();
                //reqStream.Close();


                ////image.Save(Ruta, ImageFormat.Png);
                //objModCodigos.UrlPath = RutaUrl;
                //objModCodigos.Path = RutaFTP;
                //objModCodigos.DocumentoContent = "image/png";
                //objModCodigos.FKUsuario = Convert.ToInt32(id);

            }
            catch (Exception ex)
            {
                var fileName = Directory.GetCurrentDirectory() + @"\errorlogRespponse.txt";
                FileStream fs = File.Create(fileName);
                var sr = new StreamWriter(fs);
                sr.WriteLine(ex.Message + "SI TRONE EN EL RESPONSE");
            }
            return objModCodigos;
        }
        public byte[] imagetoFileStream(System.Drawing.Image imageIn)
        {

            string sTemp = Path.GetTempFileName();
            FileStream fs = new FileStream(sTemp, FileMode.OpenOrCreate, FileAccess.ReadWrite);
            imageIn.Save(fs, System.Drawing.Imaging.ImageFormat.Png);
            fs.Position = 0;

            int imgLength = Convert.ToInt32(fs.Length);
            byte[] bytes = new byte[imgLength];
            fs.Read(bytes, 0, imgLength);
            fs.Close();
            return bytes;

        }

        public MemoryStream TransformarByteAMemoryStream(byte[] imagen)
        {
            MemoryStream stream = new MemoryStream(imagen);
            return stream;
        }

        public void CrearArchivoYDirectorio(string ruta, string filename, byte[] Arreglo)
        {

            try
            {
                Stream stream = new MemoryStream(Arreglo);
                if (!Directory.Exists(ruta))
                {
                    Directory.CreateDirectory(ruta);
                }
                using (var fileStream = File.Create(ruta + filename))
                {
                    stream.Seek(0, SeekOrigin.Begin);
                    stream.CopyTo(fileStream);
                }

            }
            catch (Exception ex)
            {
                var fileName = Directory.GetCurrentDirectory() + @"/errorlogRespponse.txt";
                FileStream fs = File.Create(fileName);
                var sr = new StreamWriter(fs);
                sr.WriteLine(ex.Message + "SI TRONE EN EL RESPONSE");
            }

            //if (!Directory.Exists(ruta))
            //{
            //    Directory.CreateDirectory(ruta);
            //}

            //stream.CopyTo(archivo);

            //stream.Write(Arreglo, 0, Arreglo.Length);
            //stream.Flush();
            //stream.Close();

        }


        public string SendFile(string FTPRuta, byte[] ArregloImagen)
        {
            WebResponse response = null;
            try
            {
                string sWebAddress = FTPRuta;

                string boundary = "---------------------------" + DateTime.Now.Ticks.ToString("x");
                byte[] boundarybytes = System.Text.Encoding.ASCII.GetBytes("\r\n--" + boundary + "\r\n");
                HttpWebRequest wr = (HttpWebRequest)WebRequest.Create(sWebAddress);
                wr.ContentType = "multipart/form-data; boundary=" + boundary;
                wr.Method = "POST";
                wr.KeepAlive = true;
                wr.Credentials = new NetworkCredential("adangonzalez-001", "tuj3f4adanjr");
                Stream stream = wr.GetRequestStream();
                string formdataTemplate = "Content-Disposition: form-data; name=\"{0}\"\r\n\r\n{1}";

                stream.Write(boundarybytes, 0, boundarybytes.Length);
                string headerTemplate = "Content-Disposition: form-data; name=\"{0}\"; filename=\"{1}\"\r\nContent-Type: {2}\r\n\r\n";

                MemoryStream fileStream = new MemoryStream(ArregloImagen);
                byte[] buffer = ArregloImagen;
                int bytesRead = 0;
                while ((bytesRead = fileStream.Read(buffer, 0, buffer.Length)) != 0)
                    stream.Write(buffer, 0, bytesRead);
                fileStream.Close();

                byte[] trailer = System.Text.Encoding.ASCII.GetBytes("\r\n--" + boundary + "--\r\n");
                stream.Write(trailer, 0, trailer.Length);
                stream.Close();

                response = wr.GetResponse();
                Stream responseStream = response.GetResponseStream();
                StreamReader streamReader = new StreamReader(responseStream);
                string responseData = streamReader.ReadToEnd();
                return responseData;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            finally
            {
                if (response != null)
                    response.Close();
            }
        }

        public ClsModCodigos GenerarNuevosCodigos(SqlConnection Con, string TipoCodigo, object id,string EleccionSP,int FKResidencia, out ClsModResultado objClsModResultado)
        {
            objClsModResultado = new ClsModResultado();
            SqlDataReader sqlLeer = null;
            List<SqlParameter> arrPar = new List<SqlParameter>();

            var Folio = ExtraerFolio(Con);
            ClsModCodigosDeBarra objCodigos = GenerarCodigosQR(TipoCodigo, id, Folio);

            if (EleccionSP== "SPActualizarCodigosDeBarraVisitas")
            {
                arrPar.Add(new SqlParameter("@FKVisita", SqlDbType.Int) { Value = id });
                arrPar.Add(new SqlParameter("@Folio", SqlDbType.VarChar) { Value = Folio });
                arrPar.Add(new SqlParameter("@Path", SqlDbType.VarChar) { Value = objCodigos.Path });
                arrPar.Add(new SqlParameter("@FKResidencia", SqlDbType.VarChar) { Value = FKResidencia });

            }
            if (EleccionSP == "SPActualizarCodigosDeBarraUsuarios")
            {
                arrPar.Add(new SqlParameter("@FKUsuarios", SqlDbType.Int) { Value = id });
                arrPar.Add(new SqlParameter("@Folio", SqlDbType.VarChar) { Value = Folio});
                arrPar.Add(new SqlParameter("@Path", SqlDbType.VarChar) { Value = objCodigos.Path });
            }


            ClsModCodigos objModCodigoos = new ClsModCodigos();
            try
            {
                object Id = SqlHelper.ExecuteScalar(Con, CommandType.StoredProcedure, EleccionSP, arrPar.ToArray());
                if (Id != null)
                {
                    int Ident = 0;
                    int.TryParse(Id.ToString(), out Ident);
                }
            }
            catch (Exception ex)
            {
                objClsModResultado.MsgError = Error + "CargarXID(): " + ex.Message;
            }
            finally
            {
                if (sqlLeer != null) sqlLeer.Close();
            }
            objModCodigoos.PathUrl = objCodigos.UrlPath;
            return objModCodigoos;
        }


        public ClsModCodigosDeBarra GenerarCodigosQR(string TipoCodigo, object id, int Folio)
        {
            ClsModCodigosDeBarra objModCodigos = new ClsModCodigosDeBarra();
            try
            {
                string RutaFTP = "http://apiharodoor.harodoor.eu/CodigosDeBarra/" + TipoCodigo + Folio.ToString() + ".png";
                string Ruta = "http://apiharodoor.harodoor.eu/CodigosDeBarra/";
                string RutaUrl = "http://apiharodoor.harodoor.eu/CodigosDeBarra/" + TipoCodigo + Folio.ToString() + ".png";
                string FileName = @"\" + TipoCodigo + Folio.ToString() + ".png";
                string nRuta = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "CodigosDeBarra");

                QrEncoder qrEncoder = new QrEncoder(ErrorCorrectionLevel.H);
                QrCode qrCode = new QrCode();
                qrEncoder.TryEncode( Folio.ToString(), out qrCode);
                GraphicsRenderer reenderer = new GraphicsRenderer(new FixedCodeSize(400,QuietZoneModules.Zero),Brushes.Black,Brushes.Orange);

                MemoryStream ms = new MemoryStream();

                reenderer.WriteToStream(qrCode.Matrix, ImageFormat.Png, ms);
                var imagetemporal = new Bitmap(ms);
                var imagen1 = new Bitmap(imagetemporal, new Size(new Point(200, 200)));
                //Image image 

                //BarcodeLib.Barcode Codigo = new BarcodeLib.Barcode();
                //Codigo.IncludeLabel = true;
                //Image image = Codigo.Encode(BarcodeLib.TYPE.CODE128, TipoCodigo + Folio.ToString(), Color.Black, Color.White, 400, 100);

                byte[] imagen = imagetoFileStream(imagen1);

                CrearArchivoYDirectorio(nRuta, FileName, imagen);

                objModCodigos.UrlPath = RutaUrl;
                objModCodigos.Path = RutaFTP;
                objModCodigos.DocumentoContent = "image/png";
                objModCodigos.FKUsuario = Convert.ToInt32(id);


            }
            catch (Exception ex)
            {
                var fileName = Directory.GetCurrentDirectory() + @"\errorlogRespponse.txt";
                FileStream fs = File.Create(fileName);
                var sr = new StreamWriter(fs);
                sr.WriteLine(ex.Message + "SI TRONE EN EL RESPONSE");
            }
            return objModCodigos;
        }


    }
}

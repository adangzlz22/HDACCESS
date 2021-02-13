using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.Correo
{
    public class ClsCorreo
    {
        public bool EnviarCorreo(string Remitente, string linkCodigo)
        {
            bool Enviado;
            try
            {
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("adangzlz22@gmail.com", "goujjdrmxdotuqbl");
                smtp.EnableSsl = true;
                //smtp.Credentials = new NetworkCredential("hdaccess20@gmail.com", "puertas2");
                // Parte 2
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

                MailMessage mm = new MailMessage();
                mm.IsBodyHtml = true;
                mm.Priority = MailPriority.Normal;
                mm.From = new MailAddress(Remitente);
                mm.Sender = new MailAddress(Remitente);
                mm.Subject = "Mensaje de Harodoor";
                mm.Body = GenerarCorreito(linkCodigo);
                mm.To.Add(new MailAddress(Remitente));
                smtp.Send(mm); // Enviar el mensaje
                Enviado = true;
            }
            catch (Exception ex)
            {
                string fileName = AppDomain.CurrentDomain.BaseDirectory + "/error3.txt";
                StreamWriter sr = new StreamWriter(fileName, true);
                sr.WriteLine(ex.Message + "    SI TRONE EN EL RESPONSE");
                sr.WriteLine(ex.Message + "    SI TRONE EN EL RESPONSE");
                sr.WriteLine(ex.Message + "    SI TRONE EN EL RESPONSE");
                sr.WriteLine(ex.Message + "    SI TRONE EN EL RESPONSE");
                sr.WriteLine(ex.Message + "    SI TRONE EN EL RESPONSE");
                sr.Close();
                Enviado = false;
            }
            return Enviado;
        }

        public string GenerarCorreito(string link)
        {
            string html = "";

            html += "<!doctype html>";
            html += "<html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>";
            html += "<head> <title></title>";
            html += "<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
            html += "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
            html += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
            html += "<style type='text/css'>#outlook a {padding: 0;}body {margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}";
            html += "table,td {border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;}";
            html += "img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;}";
            html += "p {display: block;margin: 13px 0;}</style>";
            html += "<style type='text/css'>@media only screen and (min-width:480px) {.mj-column-per-100 {width: 100% !important;max-width: 100%;}.mj-column-per-50 ";
            html += "{width: 50% !important;max-width: 50%;}}</style><style type='text/css'>@media only screen and (max-width:480px) {table.mj-full-width-mobile {";
            html += "width: 100% !important;}td.mj-full-width-mobile {width: auto !important;}}</style></head>";
            html += "<body style='background-color:#F4F4F4;'>";
            html += "<div style='background-color:#F4F4F4;'>";
            html += "<div style='background:#e46b26;background-color:#e46b26;margin:0px auto;max-width:600px;border-bottom:5px solid #494949;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#e46b26;background-color:#e46b26;width:100%;'>";
            html += "<tbody>";
            html += "<tr><td style='direction:ltr;font-size:0px;padding:10px 0;padding-bottom:0px;padding-top:5px;text-align:center;'>";
            html += "<div class='mj-column-per-100 mj-outlook-group-fix' style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>";
            html += "<tr><td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>";
            html += "<tbody><tr><td style='width:150px;'><img height='auto' src='http://apiharodoor.harodoor.eu/CodigosDeBarra/img/icon-BLANCO.png' ";
            html += "style='border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px; padding-bottom:2% ;' width='150' /> </td>";
            html += "</tr><tr><br><br></tr></tbody></table></td></tr></table></div></td></tr></tbody></table></div><div style='margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'><tbody>";
            html += "<tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;'>";
            html += "</td></tr></tbody></table></div>";
            html += "<div style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>";
            html += "<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:30px;text-align:center;'>";
            html += "<div class='mj-column-per-100 mj-outlook-group-fix' style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>";
            html += "<tr><td align='left' style='font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;word-break:break-word;'>";
            html += "<div style='font-family:Arial, sans-serif;font-size:30px;line-height:22px;text-align:left;color:#55575d;'>";
            html += "<p style='line-height: 30px; margin: 10px 0; text-align: center; color:#494949; font-size:30p; font-family:Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,";
            html += "Helvetica Neue, Arial, sans-serif; font-weight: 700;'> ¡Buen Dia! <br>ha recibido un correo de HARODOOR</p>";
            html += "</div></td></tr><tr class='text-center'><td style='width:200px; text-align: center;'><br>";
            html += "<div class='text-center'><br><br><img alt='Código' height='auto' src='"+link+"'";
            html += "style='border:0;outline:none;text-decoration:none;height:auto;font-size:13px; padding-top: 5%;' width='200' />";
            html += "</td></div></tr></table></div></td></tr></tbody></table></div>   ";
            html += "<div style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>";
            html += "<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;'>";
            html += "<div class='mj-column-per-100 mj-outlook-group-fix' style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>";
            html += "<tr><td align='center' style='font-size:0px;padding:0px 25px 0px 25px;word-break:break-word;'>";
            html += "<a style='font-family:Arial, sans-serif;font-size:14px;line-height:28px;text-align:center;color:#55575d;'";
            html += "href='" + link+"'>"+ link + "</a></td></tr><tr></tr><tr></tr><tr>";
            html += "<td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>";
            html += "<tbody><tr><td style='width:142px;'> <img alt='HARODOOR' height='auto' src='http://apiharodoor.harodoor.eu/CodigosDeBarra/img/icon.png' ";
            html += "style='border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;' width='142'/></td></tr></tbody></table></td></tr></table>";
            html += "</div></td></tr></tbody></table></div><div style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>";
            html += "<tbody><tr><td style='direction:rtl;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;'>";
            html += "</td></tr></tbody></table></div><div style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>";
            html += "<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;'>";
            html += "</td></tr></tbody></table></div><div style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#ffffff;background-color:#ffffff;width:100%;'>";
            html += "<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;'></td></tr></tbody></table></div>   ";
            html += "<div style='background:#e46b26;background-color:#e46b26;margin:0px auto;max-width:600px;border-top: 5px solid #494949;'>";
            html += "<table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#e46b26;background-color:#e46b26;width:100%;'>";
            html += "<tbody><tr><td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;'>";
            html += "<div class='mj-column-per-100 mj-outlook-group-fix' style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'>";
            html += "<table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>";
            html += "<tr><td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>";
            html += "<div style='font-family:Arial, sans-serif;font-size:13px;line-height:22px;text-align:center;color:#ffffff;'>";
            html += "¡Comprometidos con tu seguridad!<br> <a style='color:#ffffff' href='http://www.harodoor.com.mx'><b>www.harodoor.com.mx</b></a></div>";
            html += "</td></tr></table></div></td></tr></tbody></table></div></tr></table></div></td></tr></tbody></table></div></div></body></html>";

            return html;

        }


    }
}

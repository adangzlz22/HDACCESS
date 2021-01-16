using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace ClsNegHarodoor.Correo
{
    public class ClsCorreo
    {
        public bool EnviarCorreo(string Remitente,string linkCodigo)
        {
            bool Enviado;
			try
			{
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("hdaccess20@gmail.com", "puertas2");
                // Parte 2
                MailMessage mm = new MailMessage();
                mm.IsBodyHtml = true;
                mm.Priority = MailPriority.Normal;
                mm.From = new MailAddress(Remitente);
                mm.Subject = "Mensaje de Harodoor";
                mm.Body = "<h1>buenas tardes has recivido un correo de harodoor</h1>";
                mm.Body += "<p>Este es un mensaje de prueba para ver como quedara el mensaje</p><br>" + linkCodigo+"";
                mm.To.Add(new MailAddress(Remitente));
                smtp.Send(mm); // Enviar el mensaje
                Enviado = true;
            }
			catch (Exception ex)
			{
                Enviado = false;
                throw ex;
			}
            return Enviado;
        }
    }
}

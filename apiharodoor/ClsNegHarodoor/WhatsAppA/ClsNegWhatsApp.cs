using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using WhatsAppApi;

namespace ClsNegHarodoor.WhatsAppA
{
    public class ClsNegWhatsApp
    {

        public string EnviarMensajePorWhatsApp(string Emisor,string Remitente,string Mensaje)
        {

                var client = new RestClient("https://whatsmsapi.com/api/send_sms");
                var request = new RestRequest(Method.POST);
                request.AddHeader("cache-control", "no-cache");
                request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
                request.AddHeader("x-api-key", "5e8e2b66ed66f");
                request.AddParameter("undefined", "phone="+ Remitente + "&text="+ Mensaje + "", ParameterType.RequestBody);
                IRestResponse response = client.Execute(request);

            return response.Content;
        }

        public void EnviarMensajePorWhatsAppTwillio(string Emisor,string Remitente,string Mensaje)
        {
            // Find your Account Sid and Token at twilio.com/console
            // DANGER! This is insecure. See http://twil.io/secure
            const string accountSid = "ACb22557cc1290e5ec18880e2e4cff4bb0";
            const string authToken = "46e418874b58ca3b6f7502b2274d59b6";


            TwilioClient.Init(accountSid, authToken);

            var messageOptions = new CreateMessageOptions(
                                  new PhoneNumber("whatsapp:+" + Remitente));
            messageOptions.From = new PhoneNumber("whatsapp:" + Emisor);
            messageOptions.Body = "su codigo " + Mensaje + "";

            var message = MessageResource.Create(messageOptions);
            Console.WriteLine(message.Body);

        }


    }
}

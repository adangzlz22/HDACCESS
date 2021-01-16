using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClbModPago.Common;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace ApiPagos.Hubs
{
    public class PagoHub : Microsoft.AspNetCore.SignalR.Hub
    {
        private readonly ILogger<PagoHub> logger;
        private readonly IHubContext<PagoHub> hub;
        private ConnectionMapping<string> connections;

        public PagoHub(ILogger<PagoHub> logger, IHubContext<PagoHub> hub,
          ConnectionMapping<string> connections)
        {
            this.logger = logger;
            this.hub = hub;
            this.connections = connections;
        }
        public override Task OnConnectedAsync()
        {
            var _context = Context.GetHttpContext();
            string key = _context.Request.Headers["id"];
            string tipo = _context.Request.Headers["tipo"];
            if (key != null && tipo != null)
            {
                DateTime fechaConexion = DateTime.Now;
                connections.Add(key, new Conexiones()
                {
                    connectionId = Context.ConnectionId,
                    connect = true,
                    disconect = false,
                    lastTimeConnected = fechaConexion
                });

                hub.Clients.All.SendAsync("OnConnected", key);
            }
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            var _context = Context.GetHttpContext();
            string key = _context.Request.Headers["id"];
            string tipo = _context.Request.Headers["tipo"];
            if (key != null && tipo != null)
            {
                    DateTime fechaConexion = DateTime.Now;
                connections.Add(key, new Conexiones()
                {
                    connectionId = Context.ConnectionId,
                    connect = false,
                    disconect = true,
                    lastTimeDisconnected = fechaConexion
                });

                hub.Clients.All.SendAsync("OnDisconnected", key);
            }
            return base.OnDisconnectedAsync(exception);
        }
    }
}

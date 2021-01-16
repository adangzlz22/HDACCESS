using System.Collections.Generic;
using ClbModPago.Common;
using System;
namespace ApiPagos.Hubs
{
    public class ConnectionMapping<T>
    {
        private readonly Dictionary<T, Conexiones> _connections = new Dictionary<T, Conexiones>();

        public ConnectionMapping()
        {
        }

        public int Count
        {
            get
            {
                return _connections.Count;
            }
        }

        public void Add(T key, Conexiones newConexion)
        {
            lock (_connections)
            {
                Conexiones conexion;
                if (!_connections.TryGetValue(key, out conexion))
                {
                    _connections.Add(key, newConexion);
                }
                else
                {
                    _connections[key].connectionId = newConexion.connectionId;
                    _connections[key].connect = newConexion.connect;
                    _connections[key].disconect = newConexion.disconect;
                    _connections[key].lastTimeConnected = newConexion.lastTimeConnected;
                }
            }
        }

        public Dictionary<T, Conexiones> GetConnections()
        {
            return _connections;
        }


        public Conexiones GetConnection(T key)
        {
            Conexiones connection;
            if (_connections.TryGetValue(key, out connection))
            {
                return connection;
            }

            return connection;
        }

        public void Remove(T key)
        {
            lock (_connections)
            {
                Conexiones connection;
                if (!_connections.TryGetValue(key, out connection))
                {
                    return;
                }

                if (_connections.Count == 0)
                {
                    _connections.Remove(key);
                }
            }
        }
    }
}

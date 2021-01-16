using System;
using System.Collections.Generic;
using System.Text;

namespace ClbModPago.Common
{

    public class Conexiones
    {
        public int IdUser { get; set; }
        public string connectionId { get; set; }
        private bool? _connect { get; set; }
        private bool? _disconect { get; set; }

        public bool? connect
        {
            get
            {
                if (_connect == null)
                    this._connect = false;

                return this._connect;
            }
            set
            {
                this._connect = value;
            }
        }
        public bool? disconect
        {
            get
            {
                if (_disconect == null)
                    this._disconect = false;

                return this._disconect;
            }
            set
            {
                this._disconect = value;
            }
        }

        public DateTime lastTimeConnected { get; set; }
        private DateTime? _lastTimeDisconnected { get; set; }

        public DateTime? lastTimeDisconnected
        {
            get
            {
                if (this.connect == true)
                    _lastTimeDisconnected = null;
                return _lastTimeDisconnected;
            }
            set
            {


            }
        }
    }
}

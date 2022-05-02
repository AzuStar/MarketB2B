using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarketB2B.Services
{
    public interface IEmailService
    {
        void SendEmail(string reciever, string subject, string message);
    }
}

using MailKit.Net.Smtp;
using MarketB2B.Config;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarketB2B.Services.Implementation
{
    public class EmailService : IEmailService
    {
        private MailSettings _mailSettings;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IOptions<MailSettings> mailSettings, ILogger<EmailService> logger)
        {
            _logger = logger;
            _mailSettings = mailSettings.Value;
        }

        public void SendEmail(string reciever, string subject, string message)
        {
            MimeMessage mm = new MimeMessage();
            mm.From.Add(new MailboxAddress("Admin", _mailSettings.MailLogin));
            mm.To.Add(new MailboxAddress("", reciever));
            mm.Subject = subject;
            mm.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                client.Connect(_mailSettings.MailSMTP, 465, true);
                client.Authenticate(_mailSettings.MailLogin, _mailSettings.MailPsw);
                client.Send(mm);
                client.Disconnect(true);
            }
        }
    }
}

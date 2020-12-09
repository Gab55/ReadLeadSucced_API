using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReadLeadSucced_Data.Models;

namespace ReadLeadSucced_API.Models
{
    public class AuthenticateResponse
    {
        public int idClient { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(Client client, string token)
        {
            idClient = client.idClient;
            Token = token;
        }
    }
}

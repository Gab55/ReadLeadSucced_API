using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReadLeadSucced_Data.Models;
using ReadLeadSucced_API.Controllers;
using ReadLeadSucced_Data;

namespace ReadLeadSucced_API.Models
{


    public class AuthenticateResponse
    {

        private readonly AppDbContext _context;

        public int idClient { get; set; }
        public int idPanier { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(Client client, string token,Panier panier)
        {
            idClient = client.idClient;
            idPanier = panier.idPanier;
            Token = token;
        }

    }
}

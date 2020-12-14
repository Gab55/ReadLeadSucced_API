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


    public class AuthenticateResponseLibraire
    {

        private readonly AppDbContext _context;

        public int idLibraire { get; set; }
        public string TokenLibraire { get; set; }

        public AuthenticateResponseLibraire(Libraire libraire, string token)
        {
            idLibraire = libraire.idLibraire;
            TokenLibraire = token;
        }

    }
}

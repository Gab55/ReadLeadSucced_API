﻿
using ReadLeadSucced_API.Helpers;
using ReadLeadSucced_Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReadLeadSucced_API.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using ReadLeadSucced_API.Models;
using ReadLeadSucced_Data.Models.Associations;
using ReadLeadSucced_Data;

namespace ReadLeadSucced_API.Services
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
        IEnumerable<Client> GetAll();
        Task<Client> GetByIdAsync(int id);
    }

    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly AppSettings _appSettings;
        private List<Client> _Clients;
        private List<Panier> _Paniers;

        public UserService(AppDbContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
            List<Client> Clients = await _context.Clients.ToListAsync();
            _Clients = Clients;
            var Client = _Clients.SingleOrDefault(x => x.loginClient == model.Username && x.motDePasseClient == model.Password);

            // return null if user not found
            if (Client == null) return null;

            List<Panier> Paniers = await _context.Paniers.ToListAsync();
            _Paniers = Paniers;
            var Panier = _Paniers.SingleOrDefault(x => x.idClient == Client.idClient);

            // authentication successful so generate jwt token
            var token = generateJwtToken(Client);

            return new AuthenticateResponse(Client, token, Panier);
        }

        public IEnumerable<Client> GetAll()
        {

            return _Clients;
        }

        public async Task<Client> GetByIdAsync(int id)
        {
            List<Client> Clients = await _context.Clients.ToListAsync();
            _Clients = Clients;
            var Client = _Clients.SingleOrDefault(x => x.idClient == id);

            return Client;
        }

        // helper methods

        private string generateJwtToken(Client Client)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var id = Client.idClient.ToString();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("idClient", id) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
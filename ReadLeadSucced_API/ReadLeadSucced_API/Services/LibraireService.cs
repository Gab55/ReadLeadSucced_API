
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
    public interface ILibraireService
    {
        Task<AuthenticateResponseLibraire> Authenticate(AuthenticateRequest model);
        IEnumerable<Libraire> GetAll();
        Task<Libraire> GetByIdAsync(int id);
    }

    public class LibraireService : ILibraireService
    {
        private readonly AppDbContext _context;
        private readonly AppSettings _appSettings;
        private List<Libraire> _Libraires;

        public LibraireService(AppDbContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public async Task<AuthenticateResponseLibraire> Authenticate(AuthenticateRequest model)
        {
            List<Libraire> Libraires = await _context.Libraires.ToListAsync();
            _Libraires = Libraires;
            var Libraire = _Libraires.SingleOrDefault(x => x.emailLibraire == model.Username && x.motDePasse == model.Password);

            // return null if user not found
            if (Libraire == null) return null;

            // authentication successful so generate jwt token
            var tokenLibraire = generateJwtToken(Libraire);

            return new AuthenticateResponseLibraire(Libraire, tokenLibraire);
        }

        public IEnumerable<Libraire> GetAll()
        {

            return _Libraires;
        }

        public async Task<Libraire> GetByIdAsync(int id)
        {
            List<Libraire> Libraires = await _context.Libraires.ToListAsync();
            _Libraires = Libraires;
            var Libraire = _Libraires.SingleOrDefault(x => x.idLibraire == id);

            return Libraire;
        }

        // helper methods

        private string generateJwtToken(Libraire Libraire)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var id = Libraire.idLibraire.ToString();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("idLibraire", id) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
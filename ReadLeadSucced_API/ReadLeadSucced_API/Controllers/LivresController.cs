using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadLeadSucced_Data;
using ReadLeadSucced_Data.Models;
using ReadLeadSucced_Data.Models.Associations;

namespace ReadLeadSucced_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LivresController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Livres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetLivre>>> GetLivres()
        {
            return await _context.Livres.Select(l => new GetLivre()
            {
                idLivre = l.idLivre,
                titreLivre = l.titreLivre,
                stockInvLivre = l.stockInvLivre,
                urlPhoto = l.urlImageLivre

            }).ToListAsync();
        }


        // GET: api/Livres
        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<Livre>>> SearchLivres(SearchLivre search)
        {
            var req = _context.Livres.Select(l => l);

            if (search.idCategorie.GetValueOrDefault() != 0)
                req = req.Where(l => l.LivreCategories.Any(c => c.idCategorie == search.idCategorie.Value));

            if (!string.IsNullOrWhiteSpace(search.titre))
                req = req.Where(l => l.titreLivre.ToLower().Contains(search.titre.ToLower()));


            return await req.ToListAsync();
        }


        // GET: api/Livres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Livre>> GetLivre(int id)
        {
            var livre = await _context.Livres.FindAsync(id);

            if (livre == null)
            {
                return NotFound();
            }

            return livre;
        }

        // PUT: api/Livres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("edit")]
        public async Task<ActionResult<Livre>> EditLivre(EditLivre livre)
        {
            _context.Entry(livre).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            if (livre.idCategorie.GetValueOrDefault() != 0)
            {
                var categ = await _context.Categories.Where(c => c.idCategorie == livre.idCategorie.Value).FirstOrDefaultAsync();
                if (livre.LivreCategories == null)
                    livre.LivreCategories = new List<LivreCategorie>();

                livre.LivreCategories.Add(new LivreCategorie()
                {
                    Livre = (Livre)livre,
                    Categorie = categ
                });
                await _context.SaveChangesAsync();
            }
            return NoContent();
        }

        // POST: api/Livres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Livre>> PostLivre(EditLivre livre)
        {
            _context.Livres.Add((Livre)livre);
            await _context.SaveChangesAsync();

            if (livre.idCategorie.GetValueOrDefault() != 0)
            {
                var categ = await _context.Categories.Where(c => c.idCategorie == livre.idCategorie.Value).FirstOrDefaultAsync();
                if (livre.LivreCategories == null)
                    livre.LivreCategories = new List<LivreCategorie>();

                livre.LivreCategories.Add(new LivreCategorie()
                {
                    Livre = (Livre)livre,
                    Categorie = categ
                });
            await _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetLivre", new { id = livre.idLivre }, livre);
        }

        // DELETE: api/Livres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLivre(int id)
        {
            var livre = await _context.Livres.FindAsync(id);
            if (livre == null)
            {
                return NotFound();  
            }

            livre.LivreAuteurs.Clear();
            livre.LivreCategories.Clear();
            livre.LivreCommandes.Clear();
            livre.LivreCommentaires.Clear();
            livre.LivrePaniers.Clear();

            _context.Livres.Remove(livre);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool LivreExists(int id)
        {
            return _context.Livres.Any(e => e.idLivre == id);
        }



    }
}

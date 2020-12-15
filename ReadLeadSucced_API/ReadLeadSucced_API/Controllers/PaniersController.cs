using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadLeadSucced_API.Helpers;
using ReadLeadSucced_Data;
using ReadLeadSucced_Data.Models;
using ReadLeadSucced_Data.Models.Associations;

namespace ReadLeadSucced_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaniersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PaniersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Paniers
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Panier>>> GetPaniers()
        {
            return await _context.Paniers.ToListAsync();
        }

        // GET: api/Paniers/5
        [Authorize]
        [HttpGet("livres/{id}")]
        public async Task<List<LivrePanier>> GetPanierLivres(string id)
        {
            var listePanier = _context.LivrePaniers.Select(p => p);

            if (!string.IsNullOrWhiteSpace(id))
            {
                var idInt = Int32.Parse(id);
                listePanier = listePanier.Where(p => p.Panier.idClient == idInt);
            }

          

            return await listePanier.ToListAsync();
        }

        // GET: api/Paniers/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<List<Panier>> GetPanier(string id)
        {
            var panier = _context.Paniers.Select(p => p);

            if (!string.IsNullOrWhiteSpace(id))
            {
                var idInt = Int32.Parse(id);
                panier = panier.Where(p => p.idClient == idInt);
            }



            return await panier.ToListAsync();
        }

        [Authorize]
        [HttpPost("delete")]
        public async Task<IActionResult> DeletePanier([FromBody] LivrePanier livrePanier)
        {
            var LivrePaniers = await _context.LivrePaniers
                                                    .Where(p => p.idLivre == livrePanier.idLivre && p.idPanier == livrePanier.idPanier)
                                                    .ToListAsync();
            if (LivrePaniers.Count > 0)
            {
                _context.LivrePaniers.RemoveRange(LivrePaniers);
                await _context.SaveChangesAsync();

                var panier = _context.Paniers.FirstOrDefault(item => item.idPanier == livrePanier.idPanier);

                var prixHt = _context.LivrePaniers.Where(p => p.idPanier == livrePanier.idPanier).Sum(p => p.prixHt);
                var prixTtc = _context.LivrePaniers.Where(p => p.idPanier == livrePanier.idPanier).Sum(p => p.prixTtc);

                panier.prixHtPanier = Convert.ToDouble(prixHt);
                panier.prixTtcPanier = Convert.ToDouble(prixTtc);

                await _context.SaveChangesAsync();
                return Ok();
            }

            return NotFound();
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddPanier([FromBody] LivrePanier livrePanier)
        {
            var idPanier = livrePanier.idPanier;
            var idLivre = livrePanier.idLivre;

            var livre = _context.Livres.FirstOrDefault(item => item.idLivre == idLivre);

            livrePanier.prixHt = livre.prixLivreHt * livrePanier.quantite;
            livrePanier.prixTtc = livre.prixLivreTtc * livrePanier.quantite;

            _context.LivrePaniers.Add(livrePanier);

            await _context.SaveChangesAsync();

            var panier = _context.Paniers.FirstOrDefault(item => item.idPanier == idPanier);

            var prixHt = _context.LivrePaniers.Where(p => p.idPanier == idPanier).Sum(p => p.prixHt);
            var prixTtc = _context.LivrePaniers.Where(p => p.idPanier == idPanier).Sum(p => p.prixTtc);

            panier.prixHtPanier = Convert.ToDouble(prixHt);
            panier.prixTtcPanier = Convert.ToDouble(prixTtc);

            await _context.SaveChangesAsync();
            return Ok();
        }

        // PUT: api/Paniers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut]
        public async Task<IActionResult> PutPanier([FromBody] LivrePanier livrePanier)
        {
            var idLivre = livrePanier.idLivre;
            var idPanier = livrePanier.idPanier;
            var livre = _context.Livres.FirstOrDefault(item => item.idLivre == idLivre);

            livrePanier.prixHt = livre.prixLivreHt * livrePanier.quantite;
            livrePanier.prixTtc = livre.prixLivreTtc * livrePanier.quantite;


            _context.Entry(livrePanier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();

                var panier = _context.Paniers.FirstOrDefault(item => item.idPanier == idPanier);

                var prixHt = _context.LivrePaniers.Where(p => p.idPanier == idPanier).Sum(p => p.prixHt);
                var prixTtc = _context.LivrePaniers.Where(p => p.idPanier == idPanier).Sum(p => p.prixTtc);

                panier.prixHtPanier = Convert.ToDouble(prixHt);
                panier.prixTtcPanier = Convert.ToDouble(prixTtc);

                await _context.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                
            }

            return NoContent();
        }

        //// POST: api/Paniers
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Panier>> PostPanier(Panier panier)
        //{
        //    _context.Paniers.Add(panier);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetPanier", new { id = panier.idPanier }, panier);
        //}

        // DELETE: api/Paniers/5
            [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePanier(int id)
        {
            var panier = await _context.Paniers.FindAsync(id);
            if (panier == null)
            {
                return NotFound();
            }

            _context.Paniers.Remove(panier);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PanierExists(int id)
        {
            return _context.Paniers.Any(e => e.idPanier == id);
        }
    }
}

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

namespace ReadLeadSucced_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LivraisonsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LivraisonsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Livraisons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Livraison>>> GetLivraisons()
        {
            return await _context.Livraisons.ToListAsync();
        }

        // GET: api/Livraisons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Livraison>> GetLivraison(int id)
        {
            var livraison = await _context.Livraisons.FindAsync(id);

            if (livraison == null)
            {
                return NotFound();
            }

            return livraison;
        }

        // PUT: api/Livraisons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLivraison(int id, Livraison livraison)
        {
            if (id != livraison.IdLivraison)
            {
                return BadRequest();
            }

            _context.Entry(livraison).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LivraisonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Livraisons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Livraison>> PostLivraison(Livraison livraison)
        {
            _context.Livraisons.Add(livraison);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLivraison", new { id = livraison.IdLivraison }, livraison);
        }

        // DELETE: api/Livraisons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLivraison(int id)
        {
            var livraison = await _context.Livraisons.FindAsync(id);
            if (livraison == null)
            {
                return NotFound();
            }

            _context.Livraisons.Remove(livraison);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LivraisonExists(int id)
        {
            return _context.Livraisons.Any(e => e.IdLivraison == id);
        }
    }
}

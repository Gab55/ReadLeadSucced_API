using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadLeadSucced_Data;
using ReadLeadSucced_Data.Models;

namespace ReadLeadSucced_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EditeursController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EditeursController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Editeurs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Editeur>>> GetEditeurs()
        {
            return await _context.Editeurs.ToListAsync();
        }

        // GET: api/Editeurs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Editeur>> GetEditeur(int id)
        {
            var editeur = await _context.Editeurs.FindAsync(id);

            if (editeur == null)
            {
                return NotFound();
            }

            return editeur;
        }

        // PUT: api/Editeurs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEditeur(int id, Editeur editeur)
        {
            if (id != editeur.idEditeur)
            {
                return BadRequest();
            }

            _context.Entry(editeur).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EditeurExists(id))
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

        // POST: api/Editeurs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Editeur>> PostEditeur(Editeur editeur)
        {
            _context.Editeurs.Add(editeur);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEditeur", new { id = editeur.idEditeur }, editeur);
        }

        // DELETE: api/Editeurs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEditeur(int id)
        {
            var editeur = await _context.Editeurs.FindAsync(id);
            if (editeur == null)
            {
                return NotFound();
            }

            _context.Editeurs.Remove(editeur);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EditeurExists(int id)
        {
            return _context.Editeurs.Any(e => e.idEditeur == id);
        }
    }
}

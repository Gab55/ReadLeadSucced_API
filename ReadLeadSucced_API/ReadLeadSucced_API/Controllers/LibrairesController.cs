using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadLeadSucced_API.Models;
using ReadLeadSucced_API.Services;
using ReadLeadSucced_Data;
using ReadLeadSucced_Data.Models;

namespace ReadLeadSucced_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrairesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private ILibraireService _libraireService;

        public LibrairesController(AppDbContext context, ILibraireService libraireService)
        {
            _context = context;
            _libraireService = libraireService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _libraireService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }


        // GET: api/Libraires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libraire>>> GetLibraires()
        {
            return await _context.Libraires.ToListAsync();
        }

        // GET: api/Libraires/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Libraire>> GetLibraire(int id)
        {
            var libraire = await _context.Libraires.FindAsync(id);

            if (libraire == null)
            {
                return NotFound();
            }

            return libraire;
        }

        // PUT: api/Libraires/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLibraire(int id, Libraire libraire)
        {
            if (id != libraire.idLibraire)
            {
                return BadRequest();
            }

            _context.Entry(libraire).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LibraireExists(id))
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

        // POST: api/Libraires
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Libraire>> PostLibraire(Libraire libraire)
        {
            _context.Libraires.Add(libraire);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLibraire", new { id = libraire.idLibraire }, libraire);
        }

        // DELETE: api/Libraires/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibraire(int id)
        {
            var libraire = await _context.Libraires.FindAsync(id);
            if (libraire == null)
            {
                return NotFound();
            }

            _context.Libraires.Remove(libraire);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LibraireExists(int id)
        {
            return _context.Libraires.Any(e => e.idLibraire == id);
        }
    }
}

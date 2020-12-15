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
    public class CommentairesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommentairesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Commentaires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Commentaire>>> GetCommentaires()
        {
            return await _context.Commentaires.ToListAsync();
        }

        // GET: api/Commentaires/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Commentaire>>> GetCommentaire(int id)
        {
            var Commentaires =  _context.Commentaires.Join(_context.LivreCommentaires,
                                                                c => c.idCommentaire,
                                                                lc => lc.idCommentaire,
                                                                (c, lc) => new {commentaire = c, livrecommentaire = lc })
                                                          .Where(clc => clc.livrecommentaire.idLivre == id)
                                                          .Select(clc => clc.commentaire);

            //.Where(c => c.LivreCommentaires.idLivre == id);

            if (Commentaires == null)
            {
                return NotFound();
            }

            return await Commentaires.ToListAsync();
        }

        // PUT: api/Commentaires/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommentaire(int id, Commentaire commentaire)
        {
            if (id != commentaire.idCommentaire)
            {
                return BadRequest();
            }

            _context.Entry(commentaire).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentaireExists(id))
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

        // POST: api/Commentaires
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CommentaireId>> PostCommentaire(CommentaireId commentaire)
        {
            _context.Commentaires.Add(commentaire);

            await _context.SaveChangesAsync();

            CreatedAtAction("GetCommentaire", new { id = commentaire.idCommentaire }, commentaire);
            _context.LivreCommentaires.Add(new LivreCommentaire
                                            {
                                                idCommentaire = commentaire.idCommentaire,
                                                idLivre = commentaire.idLivre
                                            });

            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Commentaires/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommentaire(int id)
        {
            var commentaire = await _context.Commentaires.FindAsync(id);
            if (commentaire == null)
            {
                return NotFound();
            }

            _context.Commentaires.Remove(commentaire);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommentaireExists(int id)
        {
            return _context.Commentaires.Any(e => e.idCommentaire == id);
        }
    }
}

﻿using System;
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
    [Route("api/[controller]")]
    [ApiController]
    public class CommandesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommandesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Commandes
        [AuthorizeLibraire]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SearchCommande>>> GetCommandes()
        {
            return await _context.Commandes.Select(c => new SearchCommande()
            {
                idCommande = c.idCommande,
                dateCommande = c.dateCommande,
                prixTotalHt = c.prixTotalHt,
                prixTotalTtc = c.prixTotalTtc,
                etatCommande = c.etatCommande,
                idClient = c.idClient


            }).ToListAsync();
        }

        // GET: api/Commandes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Commande>> GetCommande(int id)
        {
            var commande = await _context.Commandes.FindAsync(id);

            if (commande == null)
            {
                return NotFound();
            }

            return commande;
        }

        // PUT: api/Commandes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //update
        [HttpPost("edit")]
        public async Task<IActionResult> EditLivre(Commande commande)
        {
            _context.Entry(commande).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommandeExists(commande.idCommande))
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

        // POST: api/Commandes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Commande>> PostCommande(Commande commande)
        {
            _context.Commandes.Add(commande);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommande", new { id = commande.idCommande }, commande);
        }

        // DELETE: api/Commandes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommande(int id)
        {
            var commande = await _context.Commandes.FindAsync(id);
            if (commande == null)
            {
                return NotFound();
            }

            _context.Commandes.Remove(commande);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommandeExists(int id)
        {
            return _context.Commandes.Any(e => e.idCommande == id);
        }
    }
}

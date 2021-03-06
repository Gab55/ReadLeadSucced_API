﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadLeadSucced_API.Helpers;
using ReadLeadSucced_API.Models;
using ReadLeadSucced_API.Services;
using ReadLeadSucced_Data;
using ReadLeadSucced_Data.Models;



namespace ReadLeadSucced_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private IUserService _userService;

        public ClientsController(AppDbContext context, IUserService userService)
        {
            _context = context;
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            _context.Paniers.Add(new Panier()
            {
                idClient = client.idClient,
            });
            await _context.SaveChangesAsync();


            return Ok();
        }

        // GET: api/Clients
        [HttpGet]
        [AuthorizeLibraire]
        public async Task<ActionResult<IEnumerable<SearchClient>>> GetClients()
        {
            return await _context.Clients.Select(c => new SearchClient()
            {
                idClient = c.idClient,
                nomClient = c.nomClient,
                prenomClient = c.prenomClient,
                adresseClient = c.adresseClient,
                villeClient = c.villeClient,
                codePostalClient = c.codePostalClient,
                telephoneClient = c.telephoneClient,
                emailClient = c.emailClient,
                dateNaissanceClient = c.dateNaissanceClient,
                motDePasseClient = c.motDePasseClient,
                loginClient = c.loginClient


            }).ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Client>>> GetLoginCommercials()
        {
            return await _context.Clients.ToListAsync();
        }

        // GET: api/Clients/5
        [Authorize]
        [HttpGet("{id}")]
      
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id, Client client)
        {
            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(client.idClient))
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

        // DELETE: api/Clients/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.idClient == id);
        }
    }
}

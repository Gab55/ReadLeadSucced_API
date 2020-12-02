using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Proxies;
using Microsoft.Extensions.Configuration;
using ReadLeadSucced_Data.Models;
using ReadLeadSucced_Data.Models.Associations;

namespace ReadLeadSucced_Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration)
            : base(options)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        public DbSet<Auteur> Auteurs { get; set; }
        public DbSet<Categorie> Categories { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Commande> Commandes { get; set; }
        public DbSet<Commentaire> Commentaires { get; set; }
        public DbSet<Editeur> Editeurs { get; set; }
        public DbSet<Libraire> Libraires { get; set; }
        public DbSet<Livraison> Livraisons { get; set; }
        public DbSet<Livre> Livres { get; set; }
        public DbSet<Panier> Paniers { get; set; }

        public DbSet<LivrePanier> LivrePaniers { get; set; }
        public DbSet<LivreCommande> LivreCommandes { get; set; }
        public DbSet<LivreAuteur> LivreAuteurs { get; set; }
        public DbSet<CommandeLivraison> CommandeLivraisons { get; set; }
        public DbSet<CommandeLibraire> CommandeLibraires { get; set; }
        public DbSet<LivreCommentaire> LivreCommentaires { get; set; }
        public DbSet<LivreCategorie> LivreCategories { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>().ToTable("Client");
            modelBuilder.Entity<Auteur>().ToTable("Auteur");
            modelBuilder.Entity<Categorie>().ToTable("Categorie");
            modelBuilder.Entity<Commande>().ToTable("Commande");
            modelBuilder.Entity<Commentaire>().ToTable("Commentaire");
            modelBuilder.Entity<Editeur>().ToTable("Editeur");
            modelBuilder.Entity<Libraire>().ToTable("Libraire");
            modelBuilder.Entity<Livraison>().ToTable("Livraison");
            modelBuilder.Entity<Livre>().ToTable("Livre");
            modelBuilder.Entity<Panier>().ToTable("Panier");


            modelBuilder.Entity<LivrePanier>()
            .HasKey(mc => new { mc.idLivre, mc.idPanier });
            modelBuilder.Entity<LivrePanier>()
                .HasOne(mc => mc.Panier)
                .WithMany(m => m.LivrePaniers)
                .HasForeignKey(mc => mc.idPanier)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<LivrePanier>()
                .HasOne(mc => mc.Livre)
                .WithMany(c => c.LivrePaniers)
                .HasForeignKey(mc => mc.idLivre)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LivreCommande>()
            .HasKey(mc => new { mc.idLivre, mc.idCommande });
            modelBuilder.Entity<LivreCommande>()
                .HasOne(mc => mc.Livre)
                .WithMany(m => m.LivreCommandes)
                .HasForeignKey(mc => mc.idLivre)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<LivreCommande>()
                .HasOne(mc => mc.Commande)
                .WithMany(c => c.LivreCommandes)
                .HasForeignKey(mc => mc.idCommande)
                .OnDelete(DeleteBehavior.NoAction);


            modelBuilder.Entity<LivreAuteur>()
            .HasKey(mc => new { mc.idLivre, mc.idAuteur });
            modelBuilder.Entity<LivreAuteur>()
                .HasOne(mc => mc.Livre)
                .WithMany(m => m.LivreAuteurs)
                .HasForeignKey(mc => mc.idLivre)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<LivreAuteur>()
                .HasOne(mc => mc.Auteur)
                .WithMany(c => c.LivreAuteurs)
                .HasForeignKey(mc => mc.idAuteur)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LivreCommentaire>()
        .HasKey(ms => new { ms.idLivre, ms.idCommentaire });
            modelBuilder.Entity<LivreCommentaire>()
                .HasOne(ms => ms.Livre)
                .WithMany(m => m.LivreCommentaires)
                .HasForeignKey(ms => ms.idLivre)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<LivreCommentaire>()
                .HasOne(ms => ms.Commentaire)
                .WithMany(s => s.LivreCommentaires)
                .HasForeignKey(ms => ms.idCommentaire)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<LivreCategorie>()
                .HasKey(ms => new { ms.idLivre, ms.idCategorie });
            modelBuilder.Entity<LivreCategorie>()
                .HasOne(ms => ms.Livre)
                .WithMany(m => m.LivreCategories)
                .HasForeignKey(ms => ms.idLivre)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<LivreCategorie>()
                .HasOne(ms => ms.Categorie)
                .WithMany(s => s.LivreCategories)
                .HasForeignKey(ms => ms.idCategorie)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<CommandeLivraison>()
                .HasKey(mc => new { mc.idCommande, mc.idLivraison });
            modelBuilder.Entity<CommandeLivraison>()
                .HasOne(mc => mc.Commande)
                .WithMany(m => m.CommandeLivraisons)
                .HasForeignKey(mc => mc.idCommande)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<CommandeLivraison>()
                .HasOne(mc => mc.Livraison)
                .WithMany(c => c.CommandeLivraisons)
                .HasForeignKey(mc => mc.idLivraison)
                .OnDelete(DeleteBehavior.NoAction);



            modelBuilder.Entity<CommandeLibraire>()
                .HasKey(ms => new { ms.idCommande, ms.idLibraire });
            modelBuilder.Entity<CommandeLibraire>()
                .HasOne(ms => ms.Commande)
                .WithMany(m => m.CommandeLibraires)
                .HasForeignKey(ms => ms.idCommande)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<CommandeLibraire>()
                .HasOne(ms => ms.Libraire)
                .WithMany(s => s.CommandeLibraires)
                .HasForeignKey(ms => ms.idLibraire)
                .OnDelete(DeleteBehavior.NoAction);
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=kaktux.com;Database=RLS;User Id=sa;Password=Password7757;",
                builder => builder.EnableRetryOnFailure());

            optionsBuilder.UseLazyLoadingProxies();
        }

    }
}

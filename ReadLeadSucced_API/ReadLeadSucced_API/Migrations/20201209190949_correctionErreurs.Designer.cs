﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ReadLeadSucced_Data;

namespace ReadLeadSucced_API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20201209190949_correctionErreurs")]
    partial class correctionErreurs
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.CommandeLibraire", b =>
                {
                    b.Property<int>("idCommande")
                        .HasColumnType("int");

                    b.Property<int>("idLibraire")
                        .HasColumnType("int");

                    b.HasKey("idCommande", "idLibraire");

                    b.HasIndex("idLibraire");

                    b.ToTable("CommandeLibraires");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.CommandeLivraison", b =>
                {
                    b.Property<int>("idCommande")
                        .HasColumnType("int");

                    b.Property<int>("idLivraison")
                        .HasColumnType("int");

                    b.HasKey("idCommande", "idLivraison");

                    b.HasIndex("idLivraison");

                    b.ToTable("CommandeLivraisons");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreAuteur", b =>
                {
                    b.Property<int>("idLivre")
                        .HasColumnType("int");

                    b.Property<int>("idAuteur")
                        .HasColumnType("int");

                    b.Property<int>("nbChapitreAuteur")
                        .HasColumnType("int");

                    b.HasKey("idLivre", "idAuteur");

                    b.HasIndex("idAuteur");

                    b.ToTable("LivreAuteurs");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCategorie", b =>
                {
                    b.Property<int>("idLivre")
                        .HasColumnType("int");

                    b.Property<int>("idCategorie")
                        .HasColumnType("int");

                    b.HasKey("idLivre", "idCategorie");

                    b.HasIndex("idCategorie");

                    b.ToTable("LivreCategories");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCommande", b =>
                {
                    b.Property<int>("idLivre")
                        .HasColumnType("int");

                    b.Property<int>("idCommande")
                        .HasColumnType("int");

                    b.Property<int>("quantite")
                        .HasColumnType("int");

                    b.HasKey("idLivre", "idCommande");

                    b.HasIndex("idCommande");

                    b.ToTable("LivreCommandes");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCommentaire", b =>
                {
                    b.Property<int>("idLivre")
                        .HasColumnType("int");

                    b.Property<int>("idCommentaire")
                        .HasColumnType("int");

                    b.HasKey("idLivre", "idCommentaire");

                    b.HasIndex("idCommentaire");

                    b.ToTable("LivreCommentaires");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivrePanier", b =>
                {
                    b.Property<int>("idLivre")
                        .HasColumnType("int");

                    b.Property<int>("idPanier")
                        .HasColumnType("int");

                    b.Property<decimal>("prixHt")
                        .HasColumnType("decimal(10,2)");

                    b.Property<decimal>("prixTtc")
                        .HasColumnType("decimal(10,2)");

                    b.Property<int>("quantite")
                        .HasColumnType("int");

                    b.HasKey("idLivre", "idPanier");

                    b.HasIndex("idPanier");

                    b.ToTable("LivrePaniers");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Auteur", b =>
                {
                    b.Property<int>("idAuteur")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("dateNaissanceAuteur")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomAuteur")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prenomAuteur")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idAuteur");

                    b.ToTable("Auteur");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Categorie", b =>
                {
                    b.Property<int>("idCategorie")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("LibelleCategorie")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idCategorie");

                    b.ToTable("Categorie");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Client", b =>
                {
                    b.Property<int>("idClient")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("adresseClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("codePostalClient")
                        .HasColumnType("int");

                    b.Property<DateTime>("dateNaissanceClient")
                        .HasColumnType("datetime2");

                    b.Property<string>("emailClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("loginClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("motDePasseClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prenomClient")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("telephoneClient")
                        .HasColumnType("int");

                    b.Property<string>("villeClient")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idClient");

                    b.ToTable("Client");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commande", b =>
                {
                    b.Property<int>("idCommande")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("dateCommande")
                        .HasColumnType("datetime2");

                    b.Property<string>("etatCommande")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idClient")
                        .HasColumnType("int");

                    b.Property<decimal>("prixTotalHt")
                        .HasColumnType("decimal(10,2)");

                    b.Property<decimal>("prixTotalTtc")
                        .HasColumnType("decimal(10,2)");

                    b.HasKey("idCommande");

                    b.HasIndex("idClient");

                    b.ToTable("Commande");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commentaire", b =>
                {
                    b.Property<int>("idCommentaire")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("contenuCommentaire")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<int?>("idClient")
                        .HasColumnType("int");

                    b.HasKey("idCommentaire");

                    b.HasIndex("idClient");

                    b.ToTable("Commentaire");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Editeur", b =>
                {
                    b.Property<int>("idEditeur")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("cpEditeur")
                        .HasMaxLength(5)
                        .HasColumnType("int");

                    b.Property<string>("emailEditeur")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomEditeur")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("rueEditeur")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("telephoneEditeur")
                        .HasMaxLength(10)
                        .HasColumnType("int");

                    b.HasKey("idEditeur");

                    b.ToTable("Editeur");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Libraire", b =>
                {
                    b.Property<int>("idLibraire")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("adresseLbraire")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("cpLibraire")
                        .HasMaxLength(5)
                        .HasColumnType("int");

                    b.Property<string>("emailLibraire")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("motDePasse")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomLibraire")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prenomLibraire")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idLibraire");

                    b.ToTable("Libraire");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Livraison", b =>
                {
                    b.Property<int>("IdLivraison")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("dateLivraison")
                        .HasColumnType("datetime2");

                    b.Property<string>("typeLivraison")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdLivraison");

                    b.ToTable("Livraison");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Livre", b =>
                {
                    b.Property<int>("idLivre")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("etatLivre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("idEditeur")
                        .HasColumnType("int");

                    b.Property<decimal>("prixLivreHt")
                        .HasColumnType("decimal(10,2)");

                    b.Property<decimal>("prixLivreTtc")
                        .HasColumnType("decimal(10,2)");

                    b.Property<string>("resumeLivre")
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<int>("stockCmdLivre")
                        .HasColumnType("int");

                    b.Property<int>("stockInvLivre")
                        .HasColumnType("int");

                    b.Property<string>("titreLivre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("urlImageLivre")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idLivre");

                    b.HasIndex("idEditeur");

                    b.ToTable("Livre");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Panier", b =>
                {
                    b.Property<int>("idPanier")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("idClient")
                        .HasMaxLength(500)
                        .HasColumnType("int");

                    b.HasKey("idPanier");

                    b.HasIndex("idClient");

                    b.ToTable("Panier");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.CommandeLibraire", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Commande", "Commande")
                        .WithMany("CommandeLibraires")
                        .HasForeignKey("idCommande")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Libraire", "Libraire")
                        .WithMany("CommandeLibraires")
                        .HasForeignKey("idLibraire")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Commande");

                    b.Navigation("Libraire");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.CommandeLivraison", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Commande", "Commande")
                        .WithMany("CommandeLivraisons")
                        .HasForeignKey("idCommande")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Livraison", "Livraison")
                        .WithMany("CommandeLivraisons")
                        .HasForeignKey("idLivraison")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Commande");

                    b.Navigation("Livraison");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreAuteur", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Auteur", "Auteur")
                        .WithMany("LivreAuteurs")
                        .HasForeignKey("idAuteur")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Livre", "Livre")
                        .WithMany("LivreAuteurs")
                        .HasForeignKey("idLivre")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Auteur");

                    b.Navigation("Livre");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCategorie", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Categorie", "Categorie")
                        .WithMany("LivreCategories")
                        .HasForeignKey("idCategorie")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Livre", "Livre")
                        .WithMany("LivreCategories")
                        .HasForeignKey("idLivre")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Categorie");

                    b.Navigation("Livre");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCommande", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Commande", "Commande")
                        .WithMany("LivreCommandes")
                        .HasForeignKey("idCommande")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Livre", "Livre")
                        .WithMany("LivreCommandes")
                        .HasForeignKey("idLivre")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Commande");

                    b.Navigation("Livre");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivreCommentaire", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Commentaire", "Commentaire")
                        .WithMany("LivreCommentaires")
                        .HasForeignKey("idCommentaire")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Livre", "Livre")
                        .WithMany("LivreCommentaires")
                        .HasForeignKey("idLivre")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Commentaire");

                    b.Navigation("Livre");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Associations.LivrePanier", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Livre", "Livre")
                        .WithMany("LivrePaniers")
                        .HasForeignKey("idLivre")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ReadLeadSucced_Data.Models.Panier", "Panier")
                        .WithMany("LivrePaniers")
                        .HasForeignKey("idPanier")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Livre");

                    b.Navigation("Panier");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commande", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Client", "Client")
                        .WithMany("Commandes")
                        .HasForeignKey("idClient")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commentaire", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Client", null)
                        .WithMany("Commentaires")
                        .HasForeignKey("idClient");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Livre", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Editeur", "Editeur")
                        .WithMany()
                        .HasForeignKey("idEditeur");

                    b.Navigation("Editeur");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Panier", b =>
                {
                    b.HasOne("ReadLeadSucced_Data.Models.Client", "Client")
                        .WithMany("Paniers")
                        .HasForeignKey("idClient")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Auteur", b =>
                {
                    b.Navigation("LivreAuteurs");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Categorie", b =>
                {
                    b.Navigation("LivreCategories");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Client", b =>
                {
                    b.Navigation("Commandes");

                    b.Navigation("Commentaires");

                    b.Navigation("Paniers");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commande", b =>
                {
                    b.Navigation("CommandeLibraires");

                    b.Navigation("CommandeLivraisons");

                    b.Navigation("LivreCommandes");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Commentaire", b =>
                {
                    b.Navigation("LivreCommentaires");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Libraire", b =>
                {
                    b.Navigation("CommandeLibraires");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Livraison", b =>
                {
                    b.Navigation("CommandeLivraisons");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Livre", b =>
                {
                    b.Navigation("LivreAuteurs");

                    b.Navigation("LivreCategories");

                    b.Navigation("LivreCommandes");

                    b.Navigation("LivreCommentaires");

                    b.Navigation("LivrePaniers");
                });

            modelBuilder.Entity("ReadLeadSucced_Data.Models.Panier", b =>
                {
                    b.Navigation("LivrePaniers");
                });
#pragma warning restore 612, 618
        }
    }
}

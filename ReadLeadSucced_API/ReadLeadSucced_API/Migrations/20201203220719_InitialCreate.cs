 using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Auteur",
                columns: table => new
                {
                    idAuteur = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomAuteur = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prenomAuteur = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateNaissanceAuteur = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Auteur", x => x.idAuteur);
                });

            migrationBuilder.CreateTable(
                name: "Categorie",
                columns: table => new
                {
                    idCategorie = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LibelleCategorie = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorie", x => x.idCategorie);
                });

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    idClient = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prenomClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    adresseClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    villeClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codePostalClient = table.Column<int>(type: "int", maxLength: 5, nullable: false),
                    telephoneClient = table.Column<int>(type: "int", maxLength: 12, nullable: false),
                    emailClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateNaissanceClient = table.Column<DateTime>(type: "datetime2", nullable: false),
                    motDePasseClient = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.idClient);
                });

            migrationBuilder.CreateTable(
                name: "Editeur",
                columns: table => new
                {
                    idEditeur = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    rueEditeur = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cpEditeur = table.Column<int>(type: "int", maxLength: 5, nullable: false),
                    emailEditeur = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    telephoneEditeur = table.Column<int>(type: "int", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Editeur", x => x.idEditeur);
                });

            migrationBuilder.CreateTable(
                name: "Libraire",
                columns: table => new
                {
                    idLibraire = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomLibraire = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prenomLibraire = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    adresseLbraire = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cpLibraire = table.Column<int>(type: "int", maxLength: 5, nullable: false),
                    emailLibraire = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    motDePasse = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Libraire", x => x.idLibraire);
                });

            migrationBuilder.CreateTable(
                name: "Livraison",
                columns: table => new
                {
                    IdLivraison = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    typeLivraison = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateLivraison = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livraison", x => x.IdLivraison);
                });

            migrationBuilder.CreateTable(
                name: "Commande",
                columns: table => new
                {
                    idCommande = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dateCommande = table.Column<DateTime>(type: "datetime2", nullable: false),
                    prixTotalHt = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    prixTotalTtc = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    etatCommande = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    idClient = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commande", x => x.idCommande);
                    table.ForeignKey(
                        name: "FK_Commande_Client_idClient",
                        column: x => x.idClient,
                        principalTable: "Client",
                        principalColumn: "idClient",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Commentaire",
                columns: table => new
                {
                    idCommentaire = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    contenuCommentaire = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    idClient = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Commentaire", x => x.idCommentaire);
                    table.ForeignKey(
                        name: "FK_Commentaire_Client_idClient",
                        column: x => x.idClient,
                        principalTable: "Client",
                        principalColumn: "idClient",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Panier",
                columns: table => new
                {
                    idPanier = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    contenuCommentaire = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    idClient = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Panier", x => x.idPanier);
                    table.ForeignKey(
                        name: "FK_Panier_Client_idClient",
                        column: x => x.idClient,
                        principalTable: "Client",
                        principalColumn: "idClient",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Livre",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    titreLivre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    resumeLivre = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    prixLivreHt = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    prixLivreTtc = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    stockInvLivre = table.Column<int>(type: "int", nullable: false),
                    stockCmdLivre = table.Column<int>(type: "int", nullable: false),
                    idEditeur = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livre", x => x.idLivre);
                    table.ForeignKey(
                        name: "FK_Livre_Editeur_idEditeur",
                        column: x => x.idEditeur,
                        principalTable: "Editeur",
                        principalColumn: "idEditeur",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CommandeLibraires",
                columns: table => new
                {
                    idCommande = table.Column<int>(type: "int", nullable: false),
                    idLibraire = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommandeLibraires", x => new { x.idCommande, x.idLibraire });
                    table.ForeignKey(
                        name: "FK_CommandeLibraires_Commande_idCommande",
                        column: x => x.idCommande,
                        principalTable: "Commande",
                        principalColumn: "idCommande");
                    table.ForeignKey(
                        name: "FK_CommandeLibraires_Libraire_idLibraire",
                        column: x => x.idLibraire,
                        principalTable: "Libraire",
                        principalColumn: "idLibraire");
                });

            migrationBuilder.CreateTable(
                name: "CommandeLivraisons",
                columns: table => new
                {
                    idCommande = table.Column<int>(type: "int", nullable: false),
                    idLivraison = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommandeLivraisons", x => new { x.idCommande, x.idLivraison });
                    table.ForeignKey(
                        name: "FK_CommandeLivraisons_Commande_idCommande",
                        column: x => x.idCommande,
                        principalTable: "Commande",
                        principalColumn: "idCommande");
                    table.ForeignKey(
                        name: "FK_CommandeLivraisons_Livraison_idLivraison",
                        column: x => x.idLivraison,
                        principalTable: "Livraison",
                        principalColumn: "IdLivraison");
                });

            migrationBuilder.CreateTable(
                name: "LivreAuteurs",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false),
                    idAuteur = table.Column<int>(type: "int", nullable: false),
                    nbChapitreAuteur = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivreAuteurs", x => new { x.idLivre, x.idAuteur });
                    table.ForeignKey(
                        name: "FK_LivreAuteurs_Auteur_idAuteur",
                        column: x => x.idAuteur,
                        principalTable: "Auteur",
                        principalColumn: "idAuteur");
                    table.ForeignKey(
                        name: "FK_LivreAuteurs_Livre_idLivre",
                        column: x => x.idLivre,
                        principalTable: "Livre",
                        principalColumn: "idLivre");
                });

            migrationBuilder.CreateTable(
                name: "LivreCategories",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false),
                    idCategorie = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivreCategories", x => new { x.idLivre, x.idCategorie });
                    table.ForeignKey(
                        name: "FK_LivreCategories_Categorie_idCategorie",
                        column: x => x.idCategorie,
                        principalTable: "Categorie",
                        principalColumn: "idCategorie");
                    table.ForeignKey(
                        name: "FK_LivreCategories_Livre_idLivre",
                        column: x => x.idLivre,
                        principalTable: "Livre",
                        principalColumn: "idLivre");
                });

            migrationBuilder.CreateTable(
                name: "LivreCommandes",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false),
                    idCommande = table.Column<int>(type: "int", nullable: false),
                    quantite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivreCommandes", x => new { x.idLivre, x.idCommande });
                    table.ForeignKey(
                        name: "FK_LivreCommandes_Commande_idCommande",
                        column: x => x.idCommande,
                        principalTable: "Commande",
                        principalColumn: "idCommande");
                    table.ForeignKey(
                        name: "FK_LivreCommandes_Livre_idLivre",
                        column: x => x.idLivre,
                        principalTable: "Livre",
                        principalColumn: "idLivre");
                });

            migrationBuilder.CreateTable(
                name: "LivreCommentaires",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false),
                    idCommentaire = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivreCommentaires", x => new { x.idLivre, x.idCommentaire });
                    table.ForeignKey(
                        name: "FK_LivreCommentaires_Commentaire_idCommentaire",
                        column: x => x.idCommentaire,
                        principalTable: "Commentaire",
                        principalColumn: "idCommentaire");
                    table.ForeignKey(
                        name: "FK_LivreCommentaires_Livre_idLivre",
                        column: x => x.idLivre,
                        principalTable: "Livre",
                        principalColumn: "idLivre");
                });

            migrationBuilder.CreateTable(
                name: "LivrePaniers",
                columns: table => new
                {
                    idLivre = table.Column<int>(type: "int", nullable: false),
                    idPanier = table.Column<int>(type: "int", nullable: false),
                    quantite = table.Column<int>(type: "int", nullable: false),
                    prixHt = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    prixTtc = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LivrePaniers", x => new { x.idLivre, x.idPanier });
                    table.ForeignKey(
                        name: "FK_LivrePaniers_Livre_idLivre",
                        column: x => x.idLivre,
                        principalTable: "Livre",
                        principalColumn: "idLivre");
                    table.ForeignKey(
                        name: "FK_LivrePaniers_Panier_idPanier",
                        column: x => x.idPanier,
                        principalTable: "Panier",
                        principalColumn: "idPanier");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Commande_idClient",
                table: "Commande",
                column: "idClient");

            migrationBuilder.CreateIndex(
                name: "IX_CommandeLibraires_idLibraire",
                table: "CommandeLibraires",
                column: "idLibraire");

            migrationBuilder.CreateIndex(
                name: "IX_CommandeLivraisons_idLivraison",
                table: "CommandeLivraisons",
                column: "idLivraison");

            migrationBuilder.CreateIndex(
                name: "IX_Commentaire_idClient",
                table: "Commentaire",
                column: "idClient");

            migrationBuilder.CreateIndex(
                name: "IX_Livre_idEditeur",
                table: "Livre",
                column: "idEditeur");

            migrationBuilder.CreateIndex(
                name: "IX_LivreAuteurs_idAuteur",
                table: "LivreAuteurs",
                column: "idAuteur");

            migrationBuilder.CreateIndex(
                name: "IX_LivreCategories_idCategorie",
                table: "LivreCategories",
                column: "idCategorie");

            migrationBuilder.CreateIndex(
                name: "IX_LivreCommandes_idCommande",
                table: "LivreCommandes",
                column: "idCommande");

            migrationBuilder.CreateIndex(
                name: "IX_LivreCommentaires_idCommentaire",
                table: "LivreCommentaires",
                column: "idCommentaire");

            migrationBuilder.CreateIndex(
                name: "IX_LivrePaniers_idPanier",
                table: "LivrePaniers",
                column: "idPanier");

            migrationBuilder.CreateIndex(
                name: "IX_Panier_idClient",
                table: "Panier",
                column: "idClient");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CommandeLibraires");

            migrationBuilder.DropTable(
                name: "CommandeLivraisons");

            migrationBuilder.DropTable(
                name: "LivreAuteurs");

            migrationBuilder.DropTable(
                name: "LivreCategories");

            migrationBuilder.DropTable(
                name: "LivreCommandes");

            migrationBuilder.DropTable(
                name: "LivreCommentaires");

            migrationBuilder.DropTable(
                name: "LivrePaniers");

            migrationBuilder.DropTable(
                name: "Libraire");

            migrationBuilder.DropTable(
                name: "Livraison");

            migrationBuilder.DropTable(
                name: "Auteur");

            migrationBuilder.DropTable(
                name: "Categorie");

            migrationBuilder.DropTable(
                name: "Commande");

            migrationBuilder.DropTable(
                name: "Commentaire");

            migrationBuilder.DropTable(
                name: "Livre");

            migrationBuilder.DropTable(
                name: "Panier");

            migrationBuilder.DropTable(
                name: "Editeur");

            migrationBuilder.DropTable(
                name: "Client");
        }
    }
}

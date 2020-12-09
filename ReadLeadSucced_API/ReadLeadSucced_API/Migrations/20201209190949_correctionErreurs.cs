using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class correctionErreurs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "contenuCommentaire",
                table: "Panier");

            migrationBuilder.AddColumn<string>(
                name: "urlImageLivre",
                table: "Livre",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "nomEditeur",
                table: "Editeur",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "urlImageLivre",
                table: "Livre");

            migrationBuilder.DropColumn(
                name: "nomEditeur",
                table: "Editeur");

            migrationBuilder.AddColumn<string>(
                name: "contenuCommentaire",
                table: "Panier",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);
        }
    }
}

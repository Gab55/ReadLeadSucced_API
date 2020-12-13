using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class addFieldsPanier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "prixHtPanier",
                table: "Panier",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "prixTtcPanier",
                table: "Panier",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "quantitePanier",
                table: "Panier",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "prixHtPanier",
                table: "Panier");

            migrationBuilder.DropColumn(
                name: "prixTtcPanier",
                table: "Panier");

            migrationBuilder.DropColumn(
                name: "quantitePanier",
                table: "Panier");
        }
    }
}

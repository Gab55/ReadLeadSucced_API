using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class addetatLivre : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "etatLivre",
                table: "Livre",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "loginClient",
                table: "Client",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "etatLivre",
                table: "Livre");

            migrationBuilder.DropColumn(
                name: "loginClient",
                table: "Client");
        }
    }
}

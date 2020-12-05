using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class AddFields2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "notationCommentaire",
                table: "Commentaire",
                type: "int",
                maxLength: 5,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "loginClient",
                table: "Client",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "notationCommentaire",
                table: "Commentaire");

            migrationBuilder.DropColumn(
                name: "loginClient",
                table: "Client");
        }
    }
}

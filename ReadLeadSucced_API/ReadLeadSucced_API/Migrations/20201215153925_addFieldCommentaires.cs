using Microsoft.EntityFrameworkCore.Migrations;

namespace ReadLeadSucced_API.Migrations
{
    public partial class addFieldCommentaires : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "anonymeCommentaire",
                table: "Commentaire",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "noteCommentaire",
                table: "Commentaire",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "anonymeCommentaire",
                table: "Commentaire");

            migrationBuilder.DropColumn(
                name: "noteCommentaire",
                table: "Commentaire");
        }
    }
}

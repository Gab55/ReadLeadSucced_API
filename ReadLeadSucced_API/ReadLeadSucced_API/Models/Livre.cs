using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Livre
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idLivre { get; set; }
        public string titreLivre { get; set; }
        [MaxLength(500)]
        public string resumeLivre { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixLivreHt { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixLivreTtc { get; set; }
        public int stockInvLivre { get; set; }
        public int stockCmdLivre { get; set; }

        [ForeignKey("idEditeur")]

        public virtual Editeur Editeur { get; set; }

        public virtual ICollection<LivreCommande> LivreCommandes { get; set; }
        public virtual ICollection<LivreAuteur> LivreAuteurs { get; set; }
        public virtual ICollection<LivreCategorie> LivreCategories { get; set; }
        public virtual ICollection<LivreCommentaire> LivreCommentaires { get; set; }
        public virtual ICollection<LivrePanier> LivrePaniers { get; set; }
    }
}

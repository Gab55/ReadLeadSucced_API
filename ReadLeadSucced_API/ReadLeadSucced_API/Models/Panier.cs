using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
     public class Panier
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idPanier { get; set; }
        [MaxLength(500)]

        [ForeignKey("idClient")]
        public int idClient { get; set; }
        public int quantitePanier { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public double prixHtPanier { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public double prixTtcPanier { get; set; }

        public virtual Client Client { get; set; }

        public virtual ICollection<LivrePanier> LivrePaniers { get; set; }
    }
}

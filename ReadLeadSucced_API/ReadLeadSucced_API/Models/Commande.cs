using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ReadLeadSucced_Data.Models
{
    public class Commande
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idCommande { get; set; }
        public DateTime dateCommande { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixTotalHt { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixTotalTtc { get; set; }
        public string etatCommande { get; set; }

        [ForeignKey("idClient")]
        public int idClient { get; set; }

        public virtual Client Client { get; set; }

        public virtual ICollection<CommandeLivraison> CommandeLivraisons { get; set; }
        public virtual ICollection<CommandeLibraire> CommandeLibraires { get; set; }
        public virtual ICollection<LivreCommande> LivreCommandes { get; set; }
    }
}

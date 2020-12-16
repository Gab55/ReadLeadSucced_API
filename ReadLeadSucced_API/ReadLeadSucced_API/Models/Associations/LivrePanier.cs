using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class LivrePanier
    {
        public int idLivre { get; set; }
        public virtual Livre Livre { get; set; }
        public int idPanier { get; set; }
        public virtual Panier Panier { get; set; }

        public int quantite { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixHt { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal prixTtc { get; set; }
    }

    public class LivrePanierLight
    {
        public int idLivre { get; set; }
        public int idPanier { get; set; }
        public int quantite { get; set; }
        public decimal prixHt { get; set; }
        public decimal prixTtc { get; set; }
    }
}

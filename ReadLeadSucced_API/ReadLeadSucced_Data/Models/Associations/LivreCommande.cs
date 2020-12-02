using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class LivreCommande
    {
        public int idLivre { get; set; }
        public virtual Livre Livre { get; set; }
        public int idCommande { get; set; }
        public virtual Commande Commande { get; set; }

        public int quantite { get; set; }
    }
}

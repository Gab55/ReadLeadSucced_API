using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class CommandeLivraison
    {
        public int idCommande { get; set; }
        public virtual Commande Commande { get; set; }
        public int idLivraison { get; set; }
        public virtual Livraison Livraison { get; set; }
    }
}

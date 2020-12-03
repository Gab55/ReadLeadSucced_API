using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class LivreCategorie
    {
        public int idLivre { get; set; }
        public virtual Livre Livre { get; set; }
        public int idCategorie { get; set; }
        public virtual Categorie Categorie { get; set; }
    }
}

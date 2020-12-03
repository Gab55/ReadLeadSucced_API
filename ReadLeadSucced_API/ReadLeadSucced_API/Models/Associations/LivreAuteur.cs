using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class LivreAuteur
    {
        public int idLivre { get; set; }
        public virtual Livre Livre { get; set; }
        public int idAuteur { get; set; }
        public virtual Auteur Auteur { get; set; }

        public int nbChapitreAuteur { get; set; }
    }
}

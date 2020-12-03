using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data.Models.Associations
{
    public class LivreCommentaire
    {
        public int idLivre { get; set; }
        public virtual Livre Livre { get; set; }
        public int idCommentaire { get; set; }
        public virtual Commentaire Commentaire { get; set; }
    }
}

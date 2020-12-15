using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Commentaire
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idCommentaire { get; set; }
        [MaxLength(500)]
        public string contenuCommentaire { get; set; }
        public bool anonymeCommentaire { get; set; }
        public int noteCommentaire { get; set; }

        [ForeignKey("idClient")]
        public int idClient { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<LivreCommentaire> LivreCommentaires { get; set; }
    }

    public class CommentaireId : Commentaire
    {
        public int idLivre { get; set; }
    }
}

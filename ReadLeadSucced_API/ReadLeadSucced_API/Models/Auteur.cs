using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ReadLeadSucced_Data.Models.Associations;

namespace ReadLeadSucced_Data.Models
{
    public class Auteur
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idAuteur { get; set; }
        public string nomAuteur { get; set; }
        public string prenomAuteur { get; set; }
        public string dateNaissanceAuteur { get; set; }

        public virtual ICollection<LivreAuteur> LivreAuteurs { get; set; }
    }
}

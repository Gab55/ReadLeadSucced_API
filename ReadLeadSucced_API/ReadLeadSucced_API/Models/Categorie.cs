using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Categorie
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idCategorie { get; set; }
        public string LibelleCategorie { get; set; }


        public virtual ICollection<LivreCategorie> LivreCategories { get; set; }
    }
}

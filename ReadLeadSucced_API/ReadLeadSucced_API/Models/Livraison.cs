using ReadLeadSucced_Data.Models.Associations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Livraison
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int IdLivraison { get; set; }
        public string typeLivraison { get; set; }
        public DateTime dateLivraison { get; set; }

        public virtual ICollection<CommandeLivraison> CommandeLivraisons { get; set; }
    }
}

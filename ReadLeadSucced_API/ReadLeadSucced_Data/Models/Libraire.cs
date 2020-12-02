using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ReadLeadSucced_Data.Models.Associations;

namespace ReadLeadSucced_Data.Models
{
    public class Libraire
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idLibraire { get; set; }
        public string nomLibraire { get; set; }
        public string prenomLibraire { get; set; }
        public string adresseLbraire { get; set; }
        [MaxLength(5)]
        public int cpLibraire { get; set; }
        public string emailLibraire { get; set; }
        public string motDePasse { get; set; }

        public virtual ICollection<CommandeLibraire> CommandeLibraires { get; set; }
    }
}
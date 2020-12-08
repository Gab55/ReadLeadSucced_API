using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Editeur
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idEditeur { get; set; }
        public string rueEditeur { get; set; }
        [MaxLength(5)]
        public int cpEditeur { get; set; }
        public string emailEditeur { get; set; }
        [MaxLength(10)]
        public int telephoneEditeur { get; set; }
        public string nomEditeur { get; set; }


    }
}

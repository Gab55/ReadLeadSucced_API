using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReadLeadSucced_Data.Models
{
    public class Client
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int idClient { get; set; }
        public string nomClient { get; set; }
        public string prenomClient { get; set; }
        public string adresseClient { get; set; }
        public string villeClient { get; set; }
        //[MaxLength(5)] 
        public int codePostalClient { get; set; }
        //[MaxLength(12)] 
        public int telephoneClient { get; set; }
        public string emailClient { get; set; }
        public DateTime dateNaissanceClient { get; set; }
        public string motDePasseClient { get; set; }
        public string loginClient { get; set; }

        [ForeignKey("idClient")]
        public virtual ICollection<Commande> Commandes { get; set; }
        [ForeignKey("idClient")]
        public virtual ICollection<Commentaire> Commentaires  { get; set; }
        [ForeignKey("idClient")]
        public virtual ICollection<Panier> Paniers { get; set; }
    }

    public class SearchClient
    {
        public int idClient { get; set; }
        public string nomClient { get; set; }
        public string prenomClient { get; set; }
        public string adresseClient { get; set; }
        public string villeClient { get; set; }
        //[MaxLength(5)] 
        public int codePostalClient { get; set; }
        //[MaxLength(12)] 
        public int telephoneClient { get; set; }
        public string emailClient { get; set; }
        public DateTime dateNaissanceClient { get; set; }
        public string motDePasseClient { get; set; }
        public string loginClient { get; set; }

    }
}

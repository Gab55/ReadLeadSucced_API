export class Panier {
    idPanier: number;
    contenuCommentaire: string;  
    idClient: number;
}

export class LivrePaniers {
    idLivre: number;
    idPanier: number;
    quantite: number;
    prixHt: number;
    prixTtc: number;
}
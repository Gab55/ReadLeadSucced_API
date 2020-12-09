export class Panier {
    idPanier: number;
    idClient: number;
}

export class LivrePaniers {
    idLivre: number;
    idPanier: number;
    quantite: number;
    prixHt: number;
    prixTtc: number;
}
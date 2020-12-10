export class LivreLight {
    idLivre?: number;
    titreLivre: string;
    urlPhoto: string;
}

export class Livre extends LivreLight {
    resumerLivre: string;
    prixLivreHt: number;
    prixLivreTtc: number;
    stockInvLivre: number;
    stockCmdLivre?: number;
    idEditeur: number;
    etatLivre: string;
    idcategorie?: number;
}

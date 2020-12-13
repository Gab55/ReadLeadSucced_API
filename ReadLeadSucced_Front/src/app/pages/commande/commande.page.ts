import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/models/Client';
import { LivrePaniers } from 'src/app/models/Panier';
import { PanierWebService } from 'src/app/webServices/Panier/panier.service';
import { UtilisateurWebServiceService } from 'src/app/webServices/Utilisateur/utilisateur-web-service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss','./../../app.component.scss'],
})
export class CommandePage implements OnInit {

  client$: Observable<Client>;
  idClient: string;
  panierVide: boolean;
  panier$: Observable<LivrePaniers[]>;
  constructor(private clientWebService: UtilisateurWebServiceService,
    private pService: PanierWebService) { 

}

  ngOnInit() {
    
    if(localStorage.getItem('id') != 'null') 
    {
      this.idClient = localStorage.getItem('id');
      this.loadClient();
      this.loadPaniers();
      return localStorage.getItem('id');

    }
    
  }

  loadClient() {
    this.client$ = this.clientWebService.getClientIDString(this.idClient);
  }
  

  loadPaniers() {
    this.panier$ = this.pService.getPanier(this.idClient).pipe(
      tap(p => {
        this.panierVide = p[0] != undefined ? false : true; 
      } 
    ));
  }

}

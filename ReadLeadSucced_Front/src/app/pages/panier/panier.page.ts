import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Panier, LivrePaniers } from './../../../app/models/Panier';
import { PanierWebService } from './../../../app/webServices/Panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss','./../../app.component.scss'],
})
export class PanierPage implements OnInit {
  idClient: string = null;
  panierVide: boolean;
  panier$: Observable<LivrePaniers[]>;
  constructor(private pService: PanierWebService) { }

  ngOnInit() {

    this.idClient = localStorage.getItem('id');
    this.loadPanier();
  }

  loadPanier() {
    this.panier$ = this.pService.getPanier(this.idClient).pipe(
      tap(p => {
        this.panierVide = p[0] != undefined ? false : true; 
      } 
    ));
  }

  deletePanier(idLivre, idPanier) {
    this.pService.deletePanier(idLivre, idPanier)
    this.loadPanier();
  }
}

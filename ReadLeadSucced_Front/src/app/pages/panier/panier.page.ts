import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { pipe } from 'rxjs';
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
  constructor(private pService: PanierWebService, private toastController: ToastController) { }

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

  async showToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Suppression effectué'
    });

    await toast.present();
}

  deletePanier(idLivre, idPanier) {
    this.pService.deletePanier(idLivre, idPanier).subscribe(
      pipe(
       () => {
        this.loadPanier();
        this.showToast();
       }
      )
    );
  }
}

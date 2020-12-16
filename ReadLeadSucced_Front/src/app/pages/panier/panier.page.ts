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
  idPanier: string;
  panierVide: boolean;
  panier$: Observable<Panier>;
  panierLivres$: Observable<LivrePaniers[]>;
  constructor(private pService: PanierWebService, private toastController: ToastController) {
    this.loadPanier();
   }

  ngOnInit() {

    this.idClient = localStorage.getItem('id');
    this.idPanier = localStorage.getItem('idPanier')
    this.loadPanier();
  }

  loadPanier() {
    this.panierLivres$ = this.pService.getPanierLivres(this.idPanier).pipe(
     tap(p => {
        console.log(p);
      } 
    ));

    this.panier$ = this.pService.getPanier(this.idClient).pipe(
      tap(p => {
        console.log(p);
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

  async showToastUpdate() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Panier mit à jour'
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

  updatePanier(idLivre, idPanier, quantite){
    if(quantite > 0) {
      this.pService.updatePanier(idLivre, idPanier, quantite).subscribe(
        pipe(
         () => {
          this.loadPanier();
          this.showToastUpdate();
         }
        )
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable, pipe } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';

import { Livre } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { PanierWebService } from '../../webServices/Panier/panier.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss','./../../app.component.scss'],
})
export class LivrePage implements OnInit {
  livre$: Observable<Livre>;
  livreId: number;
  idPanier: number;
  detailsLivre : any;
  constructor(
     private livreService: LivreWebServiceService,
     private pService: PanierWebService,
     private router: Router,
     public navCtrl: NavController, 
     private toastController: ToastController,
     private avRoute: ActivatedRoute) {

      const idParam = 'id';
     



      if (this.avRoute.snapshot.params[idParam]) {
        this.livreId = this.avRoute.snapshot.params[idParam];
      }
    // this.detailsLivre = this.router.getCurrentNavigation().extras;
   }

   ngOnInit() {
    this.idPanier = localStorage.getItem('idPanier') != 'null' ? parseInt(localStorage.getItem('idPanier'), 10) : null;
    this.loadLivre();
  }

  loadLivre() {
   this.livre$ = this.livreService.getLivretID(this.livreId);
  }

  async showToast() {
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Ajouté au panier'
      });

      await toast.present();
  }

  addBasket(idLivre) {
    this.pService.addPanier(idLivre, this.idPanier).subscribe(
      pipe(
        () => {
          this.showToast();
        }
       )
    );
  }
  
}

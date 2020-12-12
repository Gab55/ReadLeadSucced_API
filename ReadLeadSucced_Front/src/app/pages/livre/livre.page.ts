import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

import { Livre } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { PanierWebService } from '../../webServices/Panier/panier.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss','./../../app.component.scss'],
})
export class LivrePage implements OnInit {
  livre$: Observable<Livre>;
  livreId: number;
  detailsLivre : any;
  constructor(
     private livreService: LivreWebServiceService,
     private pService: PanierWebService,
     private router: Router,
     public navCtrl: NavController, 
     private avRoute: ActivatedRoute) {

      const idParam = 'id';



      if (this.avRoute.snapshot.params[idParam]) {
        this.livreId = this.avRoute.snapshot.params[idParam];
      }
    // this.detailsLivre = this.router.getCurrentNavigation().extras;
   }

   ngOnInit() {
    this.loadLivre();
  }

  loadLivre() {
   this.livre$ = this.livreService.getLivretID(this.livreId);
  }

  addBasket(idLivre, idPanier) {
    this.pService.addPanier(idLivre, idPanier)
  }
  
}

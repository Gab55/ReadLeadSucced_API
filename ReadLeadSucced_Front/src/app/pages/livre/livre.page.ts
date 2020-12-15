import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable, pipe } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';

import { Livre, LivreAutheur } from 'src/app/models/Livre';
import { Commentaire } from 'src/app/models/Commentaire';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CommentaireService } from 'src/app/webServices/Commentaire/commentaire-web-service.service';
import { PanierWebService } from '../../webServices/Panier/panier.service';
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss','./../../app.component.scss'],
})
export class LivrePage implements OnInit {
  livre$: Observable<Livre>;
  commentaires$: Observable<Commentaire[]>;
  livresAutheur$: Observable<LivreAutheur[]>;
  livreId: number;
  idPanier: number;
  idEditeur: number;
  contenuCommentaire: string;
  anonymeCommentaire: boolean;
  noteCommentaire: number;
  quantite: number = 1;
  detailsLivre : any;
  form: FormGroup;
  actionType: string;
  idLivre?: any;
  titreLivre: string;
  resumerLivre: string;
  prixLivreHt: any;
  prixLivreTtc: any;
  stockInvLivre: any;
  constructor(
     private livreService: LivreWebServiceService,
     private CService: CommentaireService,
     private pService: PanierWebService,
     private router: Router,
     public navCtrl: NavController, 
     private toastController: ToastController,
     private avRoute: ActivatedRoute,
     private formBuilder: FormBuilder) {

      const idParam = 'id';

      
      this.form = this.formBuilder.group(
        {
          noteCommentaire: [3, [Validators.required]],
          anonymeCommentaire: [false, [Validators.required]],
          contenuCommentaire: ['', [Validators.required]],
        }
      )
     
      if (this.avRoute.snapshot.params[idParam]) {
        this.livreId = this.avRoute.snapshot.params[idParam];
      }
    // this.detailsLivre = this.router.getCurrentNavigation().extras;
   }

   ngOnInit() {
    this.idPanier = localStorage.getItem('idPanier') != 'null' ? parseInt(localStorage.getItem('idPanier'), 10) : null;
    this.loadLivre();
    this.loadCommentaire()
  }

  loadLivre() {
   var newObj: any;
   this.livre$ = this.livreService.getLivretID(this.livreId).pipe(
     tap(p =>  {newObj = p, this.loadLivreAutheur(newObj.editeur.idEditeur)})
     
   )
  }

  loadLivreAutheur(id) {
    var idAutheur = id.toString();
    this.livresAutheur$ = this.livreService.getLivretAutheur(idAutheur)
   }

  async showToast() {
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Ajouté au panier'
      });

      await toast.present();
  }

  async showToastCommentaire() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Commentaire ajouté'
    });

    await toast.present();
}

  addBasket(idLivre) {
    this.pService.addPanier(idLivre, this.idPanier, this.quantite).subscribe(
      pipe(
        () => {
          this.showToast();
        }
       )
    );
  }

  loadCommentaire(){
    this.commentaires$ = this.CService.getCommentaires(this.livreId).pipe(
      tap(p => console.log(p))
    )
  }

  addCommentaire(){
    var commentaire = Object.assign(new Commentaire(), this.form.getRawValue());
    commentaire.idClient = localStorage.getItem('id') != 'null' ? parseInt(localStorage.getItem('id'), 10) : null;
    commentaire.idLivre = this.livreId;
    this.CService.addCommentaire(commentaire).subscribe(
      pipe(
        () => {
          this.showToastCommentaire();
          this.loadCommentaire()
          this.form.clearAsyncValidators();
        }
       )
    );
  }
  
}

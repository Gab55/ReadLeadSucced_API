import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

import { Livre } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';
import { Categorie } from 'src/app/models/Categorie';

@Component({
  selector: 'app-gestion-livre',
  templateUrl: './gestion-livre.page.html',
  styleUrls: ['./gestion-livre.page.scss','./../../../app.component.scss'],
})
export class GestionLivrePage implements OnInit {
  form: FormGroup;
  actionType: string;
  idLivre?: any;
  titreLivre: string;
  resumerLivre: string;
  prixLivreHt: any;
  prixLivreTtc: any;
  stockInvLivre: any;
  stockCmdLivre: any;
  idEditeur: any;
  urlPhoto: string;
  categories$: Observable<Categorie[]>;
  postId: number;
  errorMessage: any;
  existingClientPost: Livre;
  livre$: Observable<Livre>;
  livreId: number;
  detailsLivre : any;
  constructor(private formBuilder: FormBuilder,
    private livreWebService: LivreWebServiceService,
    private categorieWebService: CategorieWebServiceService,
    private avRoute: ActivatedRoute, private router: Router ) { 
      const idParam = 'id';
      this.actionType = 'Add';
      this.titreLivre = 'titreLivre';
      this.resumerLivre = 'resumerLivre';
      this.prixLivreHt = '';
      this.prixLivreTtc = '';
      this.stockInvLivre = '';
      this.idEditeur = '';
      this.urlPhoto = 'urlPhoto';

      if (this.avRoute.snapshot.params[idParam]) {
        this.livreId = this.avRoute.snapshot.params[idParam];
      }
      this.form = this.formBuilder.group(
        {
          postId: 0,
          titreLivre: ['', [Validators.required]],
          resumerLivre: ['', [Validators.required]],
          prixLivreHt: ['', [Validators.required]],
          prixLivreTtc: ['', [Validators.required]],
          stockInvLivre: ['', [Validators.required]],
          idEditeur: ['', [Validators.required]],
          urlPhoto: ['', [Validators.required]]
        }
      )
   }

   ngOnInit() {
    if(this.postId >= 0){
      this.actionType = 'Add';
      this.livreWebService.getLivretID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.titreLivre].setValue(data.titreLivre),
          this.form.controls[this.resumerLivre].setValue(data.resumerLivre),
          this.form.controls[this.prixLivreHt].setValue(data.prixLivreHt),
          this.form.controls[this.prixLivreTtc].setValue(data.prixLivreTtc),
          this.form.controls[this.stockInvLivre].setValue(data.stockInvLivre),
          this.form.controls[this.idEditeur].setValue(data.idEditeur),
          this.form.controls[this.urlPhoto].setValue(data.urlPhoto)
        ));
    }

    this.loadLivre();
  }

  loadLivre() {
   this.livre$ = this.livreWebService.getLivretID(this.livreId);
  }



  save(){
    if(!this.form.valid){
      return ;
    }

    if (this.actionType === 'Add') {
     let livre: Livre = {
       idLivre : this.livreId,
       titreLivre: this.form.get(this.titreLivre).value,
       resumerLivre: this.form.get(this.resumerLivre).value,
       prixLivreHt : this.form.value.prixLivreHt,
       prixLivreTtc: this.form.value.prixLivreTtc,
       stockInvLivre: this.form.value.stockInvLivre,
       idEditeur: this.form.value.idEditeur,       
       urlPhoto: this.form.get(this.urlPhoto).value

     };

     this.livreWebService.updateClient(livre)
       .subscribe((data) => {
         this.router.navigate(['/livres']);
       });
   }
  }

  deleteLivre() {
    this.livreWebService.deleteLivres(this.livreId).subscribe();
   }
 

}

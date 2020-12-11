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
  idcategorie: any;
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
      this.idLivre ='',
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
          urlPhoto: ['', [Validators.required]],
          // etatLivre: ['', [Validators.required]],
          idcategorie: ['', [Validators.required]]
        }
      )
   }

   ngOnInit() {
    if(this.postId >= 0){
      this.actionType = 'Add';
      this.livreWebService.getLivretID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls['titreLivre'].setValue(data.titreLivre),
          this.form.controls['resumerLivre'].setValue(data.resumerLivre),
          this.form.controls['prixLivreHt'].setValue(data.prixLivreHt),
          this.form.controls['prixLivreTtc'].setValue(data.prixLivreTtc),
          this.form.controls['stockInvLivre'].setValue(data.stockInvLivre),
          this.form.controls['idEditeur'].setValue(data.idEditeur),
          this.form.controls['urlPhoto'].setValue(data.urlPhoto),
         // this.form.controls[this.etatLivre].setValue(data.etatLivre),
          this.form.controls['idcategorie'].setValue(data.idcategorie)
        ));
    }

    this.loadLivre();
    this.loadCategorie();
  }

  loadLivre() {
   this.livre$ = this.livreWebService.getLivretID(this.livreId);
  }

  loadCategorie() {
    this.categories$ = this.categorieWebService.getCategories();
  }



  save(){
    if(!this.form.valid){
      return ;
    }

    if (this.actionType === 'Add') {
     // let livre: Livre = {
     //   titreLivre: this.form.value.titreLivre,
     //   resumerLivre: this.form.value.resumerLivre,
     //   prixLivreHt: this.form.value.prixLivreHt ,
     //   prixLivreTtc :  this.form.value.prixLivreHt,
     //   urlPhoto :  '',
     //   stockInvLivre :  this.form.value.stockInvLivre,
     //   stockCmdLivre:5,
     //   idEditeur:  this.form.value.idEditeur,
     //   etatLivre: 'Nouveauté'

     // };

     
     var livre = Object.assign(new Livre(), this.form.getRawValue()); // IMPORTANT TOUT RECUP EN FORMAT JSON
     livre.idLivre = this.livreId,
     livre.etatLivre = 'Nouveauté';
     console.log(livre);
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
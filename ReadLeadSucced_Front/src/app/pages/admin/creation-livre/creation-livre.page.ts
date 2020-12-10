import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';
import { EditeurWebServiceService } from 'src/app/webServices/editeur/editeur-web-service.service';
import { Editeur } from 'src/app/models/Editeur';

import { Categorie } from 'src/app/models/Categorie';
import { Observable } from 'rxjs';
// import { data } from 'jquery';

@Component({
  selector: 'app-creation-livre',
  templateUrl: './creation-livre.page.html',
  styleUrls: ['./creation-livre.page.scss','./../../../app.component.scss'],
})
export class CreationLivrePage implements OnInit {

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
  etatLivre: any;
  urlPhoto: string;
  editeur$: Observable<Editeur[]>;
  categories$: Observable<Categorie[]>;
  postId: number;
  errorMessage: any;
  existingClientPost: Livre;
  
  constructor(private formBuilder: FormBuilder,
              private livreWebService: LivreWebServiceService,
              private categorieWebService: CategorieWebServiceService,
              private editeurWebService: EditeurWebServiceService,
              private avRoute: ActivatedRoute, 
              private router: Router ) { 

              this.etatLivre = "Nouveauté";
              
      if (this.avRoute.snapshot.params['id']) {
        this.postId = this.avRoute.snapshot.params['id'];
      }
      this.actionType = 'Add';

      this.createForm();
     }

    private createForm() {
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

     ngOnInit(){
      if(this.postId >= 0){
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
            this.form.controls[this.etatLivre].setValue(data.etatLivre),
            this.form.controls['idcategorie'].setValue(data.idcategorie)
          ));
      }
      this.loadCategorie();
      this.loadEditeur();

     }

     loadCategorie() {
      this.categories$ = this.categorieWebService.getCategories();
    }

    loadEditeur() {
      this.editeur$ = this.editeurWebService.getCategories();
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
        livre.etatLivre = 'Nouveauté';
        console.log(livre);
        this.livreWebService.saveClient(livre)
          .subscribe((data) => {
            this.router.navigate(['/livres']);
          });
      }
     }

     /***
      * save() {
    if (!this.form.valid) {
      return;
    }

    
  }
      */


  }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.page.html',
  styleUrls: ['./gestion-categorie.page.scss','./../../../app.component.scss'],
})
export class GestionCategoriePage implements OnInit {
  form: FormGroup;
  actionType: string;
  idCategorie?: any;
  LibelleCategorie: string;
  postId: number;
  errorMessage: any;
  existingClientPost: Categorie;
  categorie$: Observable<Categorie>;
  categorieId: number;
  
  detailCategorie : any;
  
  constructor(private formBuilder: FormBuilder,
    private categorieWebService: CategorieWebServiceService,
    private avRoute: ActivatedRoute, 
    private router: Router,
    public navCtrl: NavController
    ) {
      //On récupère les données de la page recherche-categorie
      this.detailCategorie = this.router.getCurrentNavigation().extras;
      const idParam = 'id';
      this.actionType = 'Add';
      this.LibelleCategorie = '';
      
      if (this.avRoute.snapshot.params[idParam]) {
        this.categorieId = this.avRoute.snapshot.params[idParam];
        console.log('id categorie : ' + this.categorieId);
      }
      this.form = this.formBuilder.group(
        {
          postId: 0,
          LibelleCategorie: ['', [Validators.required]]
        }
      )

     }

   ngOnInit() {

    const params: any = this.router.getCurrentNavigation().extras;
    //console.log('params', params);
      this.postId = params.id;
    if(this.postId >= 0){
      this.actionType = 'Add';
      this.categorieWebService.getCategorieID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.LibelleCategorie].setValue(data.LibelleCategorie)
        ));
    }

    this.loadCategorie();
  }

  loadCategorie() {
    this.categorie$ = this.categorieWebService.getCategorieID(this.categorieId);
  }



  update(){
    if(!this.form.valid){
      return ;
    }

    if (this.actionType === 'Add') {
     let categorie: Categorie = {
      idCategorie : this.categorieId,
      LibelleCategorie : this.form.value.LibelleCategorie

     };

     this.categorieWebService.updateClient(categorie)
       .subscribe((data) => {
         this.router.navigate(['/recherche-categorie']);
       });
   }
  }

  deleteCategorie(){
    this.categorieWebService.deleteCategorie(this.categorieId).subscribe();
    this.router.navigate(['/recherche-categorie']);
  }

}

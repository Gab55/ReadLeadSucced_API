import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

@Component({
  selector: 'app-creation-categorie',
  templateUrl: './creation-categorie.page.html',
  styleUrls: ['./creation-categorie.page.scss','./../../../app.component.scss'],
})
export class CreationCategoriePage implements OnInit {
  form: FormGroup;
  actionType: string;
  idCategorie?: number;
  libelleCategorie: string;
  postId: number;
  errorMessage: any;
  existingClientPost: Categorie;

  constructor(private formBuilder: FormBuilder,
    private categorieWebService: CategorieWebServiceService,
    private avRoute: ActivatedRoute,
    private router: Router) {
      const idParam = 'id';
      this.actionType = 'Add';
      this.libelleCategorie = 'libelleCategorie';

      if(this.avRoute.snapshot.params[idParam]){
        this.postId = this.avRoute.snapshot.params[idParam];
      }

      this.form = this.formBuilder.group(
        {
          postId: 0,
          libelleCategorie: ['',[Validators.required]]
        });
   }

   

  ngOnInit() {
    if(this.postId >= 0){
      this.actionType = 'Add';
      this.categorieWebService.getCategorieID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.libelleCategorie].setValue(data.LibelleCategorie)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let categorie: Categorie = {
        LibelleCategorie: this.form.get(this.libelleCategorie).value
        
      };

      this.categorieWebService.saveCategorie(categorie)
        .subscribe((data) => {
          this.router.navigate(['/recherche-categorie'])
        })
    }
  }

}

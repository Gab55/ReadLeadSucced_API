import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

@Component({
  selector: 'app-recherche-categorie',
  templateUrl: './recherche-categorie.page.html',
  styleUrls: ['./recherche-categorie.page.scss','./../../../app.component.scss'],
})
export class RechercheCategoriePage implements OnInit {

  categorieId: number;
  categorie$ : Observable<Categorie[]>; 
  constructor(private categorieService: CategorieWebServiceService,
    private cd: ChangeDetectorRef,
    private router: Router, 
    public navCtrl: NavController) {

     }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    this.categorie$ = this.categorieService.getCategories();
  }

  /*modifier(data: any){
    /*const navigationExtra : NavigationExtras = {
      state:{
        data
      }
    }
    this.router.navigate(['/gestion-categorie']);
    console.log('catégorie : ')
  }*/

  deleteCategorie(){
    this.categorieService.deleteCategorie(this.categorieId).subscribe()
    //this.livreWebService.deleteLivres(this.livreId).subscribe();
  }
  

}

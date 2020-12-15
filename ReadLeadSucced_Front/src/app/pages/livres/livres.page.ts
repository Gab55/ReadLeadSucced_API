import { ChangeDetectorRef,Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ActivatedRoute, NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Livre, LivreLight } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { tap } from 'rxjs/operators';
import { SearchLivre } from 'src/app/search/SearchLivre';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';



@Component({
  selector: 'app-livres',
  templateUrl: './livres.page.html',
  styleUrls: ['./livres.page.scss','./../../app.component.scss'],
})
export class LivresPage implements OnInit, OnDestroy {
  mySubscription: any;

  catgerorie: Categorie[];
  livres$: Observable<LivreLight[]>;
  livresGen$: Observable<LivreLight[]>;
 // livres: LivreLight[];
  categerieId : number;
  // Livres : any[];
  constructor(
    private livreService: LivreWebServiceService,
    private categorieService: CategorieWebServiceService,
    private cd: ChangeDetectorRef,
    private avRoute: ActivatedRoute,
    private router: Router) {
      
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

        const idParam = 'id';

        if (this.avRoute.snapshot.params[idParam]) {
          this.categerieId = this.avRoute.snapshot.params[idParam];
        }

      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
   }

   ngOnInit() {

    this.loadLivres();
    console.log(this.categerieId)
    if(this.categerieId > 0){
      this.searchCategorie();
    }

  }


  searchCategorie() {
    const search: SearchLivre = {
      idCategorie: this.categerieId
    };
    const searchString = JSON.stringify(search);
    this.livres$ = this.livreService.searchClient<Livre[]>(searchString);
  }

  loadLivres() {
    var bool = "0";
    this.livres$ = this.livreService.getLivreAsynRev(bool);
    var bool = "1";
    this.livresGen$ = this.livreService.getLivreAsynRev(bool);


    // this.livreService.getLivre().pipe(
    //   tap(l => this.livres = l)
    // ).subscribe();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  
}


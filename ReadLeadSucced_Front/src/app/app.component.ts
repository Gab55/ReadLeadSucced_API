import { MenuController, NavController, Platform } from '@ionic/angular';
import { ChangeDetectionStrategy, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { SearchLivre } from './search/SearchLivre';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

import { Libraire } from './models/Libraire';
import { Livre } from './models/Livre';
import { Categorie } from './models/Categorie';
import { Client } from './models/Client';
import { UtilisateurWebServiceService } from './webServices/Utilisateur/utilisateur-web-service.service';
import { LibraireWebServiceService } from './webServices/Libraire/libraire-web-service.service';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
  livre$: Observable<Livre[]>;
  categories$: Observable<Categorie[]>;
  client$: Observable<Client>;
  libraire$: Observable<Libraire>;
  idClient: string;
  idLibraire: string;
  mySubscription: any;
  changeDetection: ChangeDetectionStrategy.OnPush
  navigate: any;
  navigateAdmin: any;
  categorie: any;
  constructor(
    private platform: Platform,
    private livreWebService: LivreWebServiceService,
    private clientWebService: UtilisateurWebServiceService,
    private categorieWebService: CategorieWebServiceService,
    private libraireWebServiceService: LibraireWebServiceService,
    private formBuilder: FormBuilder,
    private splashScreen: SplashScreen,
    private router: Router,
    private zone: NgZone,
    public navCtrl: NavController,
    private statusBar: StatusBar,
    private menuCtrl: MenuController) {
      this.sideMenu();
      this.initializeApp();

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
  }




  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  

    this.loadCategorie();
    
    if(localStorage.getItem('id') != 'null') 
    {
      if(localStorage.getItem('token') != 'null')
      {
        this.idClient = localStorage.getItem('id');
        this.loadClient();
        return localStorage.getItem('id');
      }
      else if (localStorage.getItem('tokenLibraire') != 'null') {
        this.idLibraire = localStorage.getItem('id');
        this.loadLibraire();
        return localStorage.getItem('id');
      }


    }
    
  }

  loadCategorie() {
    this.categories$ = this.categorieWebService.getCategories();

  }

  loadClient() {
    this.client$ = this.clientWebService.getClientIDString(this.idClient);

  }

  loadLibraire() {
    this.libraire$ = this.libraireWebServiceService.getLibraireIDString(this.idLibraire);
  }

  
  sideMenu() {
    
      this.navigateAdmin =
      [
        {
          title: "Categories",
          url: "/admin/creation-categorie",
          icon: "contacts"
        },
        {
          title: "Commandes",
          url: "admin/recherche-commande",
        },
      ]
    

  }

  searchCategorie(idCateg: number) {
    const search: SearchLivre = {
      idCategorie: idCateg
    };
    // const searchString = JSON.stringify(search);
    // this.livreWebService.searchLivre(searchString);
    
    //this.livreWebService.get
    this.navCtrl.navigateForward('livres/'+ idCateg)
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }

  



  logOut() {
    localStorage.setItem('token', null);
    localStorage.setItem('tokenLibraire', null);
    localStorage.setItem('id', null);
    localStorage.setItem('idPanier', null);
    this.menuCtrl.close();
    this.router.navigateByUrl('/auth/connexion'); 
    }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }


}


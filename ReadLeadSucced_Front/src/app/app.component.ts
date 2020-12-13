import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { SearchLivre } from './search/SearchLivre';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

import { Livre } from './models/Livre';
import { Categorie } from './models/Categorie';
import { Client } from './models/Client';
import { UtilisateurWebServiceService } from './webServices/Utilisateur/utilisateur-web-service.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  livre$: Observable<Livre[]>;
  categories$: Observable<Categorie[]>;
  client$: Observable<Client>;
  idClient: string;

  navigate: any;
  categorie: any;
  constructor(
    private platform: Platform,
    private livreWebService: LivreWebServiceService,
    private clientWebService: UtilisateurWebServiceService,
    private categorieWebService: CategorieWebServiceService,
    private formBuilder: FormBuilder,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    this.sideMenu();
    // this.loadCategorie();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  

    this.loadCategorie();
    
    if(localStorage.getItem('id') != null) 
    {
      this.idClient = localStorage.getItem('id');
      this.loadClient();
      return localStorage.getItem('id');

    }
    
    console.log(this.idClient)
  }

  loadCategorie() {
    this.categories$ = this.categorieWebService.getCategories();
  }

  loadClient() {
    this.client$ = this.clientWebService.getClientIDString(this.idClient);
    console.log(this.idClient);
  }

  
  sideMenu() {
    
    this.navigate =
      [
        {
          title: "Catalogue",
          url: "/livres",
          icon: "contacts"
        },
        {
          title: "Nos nouveautés",
          url: "/contacts",
          icon: "contacts"
        },
      ]


  }

  searchCategorie(idCateg: number) {
    const search: SearchLivre = {
      idCategorie: idCateg
    };

    const searchString = JSON.stringify(search);
    console.log(searchString);
    this.livreWebService.searchLivre(searchString);

  }


}


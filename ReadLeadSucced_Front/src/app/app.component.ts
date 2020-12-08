import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { SearchLivre } from './search/SearchLivre';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { Livre } from './models/Livre';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  livre$: Observable<Livre[]>;
  form: FormGroup;
  navigate: any;
  categorie: any;
  constructor(
    private platform: Platform,
    private livreWebService: LivreWebServiceService,
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

    this.form = this.formBuilder.group(
      {
        reference: ['', []]
      }
    )

  }

  
  sideMenu() {
    this.navigate =
      [
        {
          title: "Accueil",
          url: "/Livres",
          icon: "home"
        },
        {
          title: "Recherche",
          url: "/chat",
        },
        {
          title: "Nos coups de coeurs",
          url: "/contacts",
          icon: "contacts"
        },
        {
          title: "Nos nouveautés",
          url: "/contacts",
          icon: "contacts"
        },
      ]
      this.categorie =
      [
        {
          title: "Science-Fiction",
          url: "/home",
        },
        {
          title: "Policier",
          //url: "/chat",
        },
        {
          title: "Humour",
          url: "/contacts",
          icon: "contacts"
        },
        {
          title: "Sport",
          url: "/contacts",
        },
      ]


  }

  searchClient() {
    const search: SearchLivre = {
      idCategorie: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.livre$ = this.livreWebService.searchClient<Livre[]>(searchString);

  }


}


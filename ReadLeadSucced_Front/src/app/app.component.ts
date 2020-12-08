import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // categories$: Observable<Categorie>;
  navigate: any;
  categorie: any;
  constructor(
    private platform: Platform,
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
          url: "/chat",
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



}


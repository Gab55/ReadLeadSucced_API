import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {

  Livres : any[];
  constructor(public navCtrl: NavController, public router: Router) {
    this .Livres = [
      { titre : 'A promised land', prix : 20, etoile: 4,
        quantite: 150, 
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url:"../assets/images/A-Promised-Land.jpg",
        star: 5,
        auteur: 'Barack Obama'
      },
      { titre : 'Mémoire rechargée', prix : 18, etoile: 3, 
        quantite: 58,
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url:"../assets/images/XIII-Memoire-rechargee.jpg",
        star: 4,
        auteur: 'François-Régis Gaudry'
      },
      { titre : 'Akira', prix : 120, etoile: 3,
        quantite: 250, 
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url:"../assets/images/Akira-noir-et-blanc-Edition-originale-Coffret.jpg",
        star: 5,
        auteur: 'Katsuhiro Ôtomo'
      },
      { titre : 'Le plus grand livre de basketball de tous les temps', prix : 38, etoile: 5,
        quantite: 250, 
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url:"../assets/images/Le-plus-grand-livre-de-basketball-de-tous-les-temps-selon-TrashTalk.jpg",
        star: 5,
        auteur: 'TrashTalk'
      },
      {titre : 'L\'Illusion', prix : 22, etoile: 4,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/L-Illusion.jpg",
      star: 5,
        auteur: 'Maxime Chattam'
      },
      {titre : 'Bleu', prix : 29, etoile: 5,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/Bleu.jpg",
      star: 5,
        auteur: 'X'
      },
      {titre : 'Fait maison - numéro 1 Par Cyril Lignac', prix : 12, etoile: 4,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/Akira-noir-et-blanc-Edition-originale-Coffret.jpg",
      star: 5,
        auteur: 'X'
      },
      {titre : 'On va déguster l\'Italie', prix : 42, etoile: 3,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/On-va-deguster-l-Italie.jpg",
      star: 5,
        auteur: 'X'
      },
      {titre : 'Un cow-boy dans le coton', prix : 12, etoile: 5,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/luckyLuke.jpg",
      star: 4,
        auteur: 'Jul - Achdé'
      },
      {titre : 'Toujours plus, + = +', prix : 19.5, etoile: 3,
      quantite: 250, 
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url:"../assets/images/Toujours-plus.jpg",
      star: 3,
        auteur: 'Lena Situations'
      }

    ]
   }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  detailsLivre(data: any) {
    const navigationExtra: NavigationExtras = {
      state: {
        data
      }
    }
    this.router.navigate(['/detail-livre'], data);
    console.log('les livres sont : ', data)
  }

}

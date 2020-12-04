import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.page.html',
  styleUrls: ['./livres.page.scss'],
})
export class LivresPage implements OnInit {

  detailsLivre : any;
  constructor(private router: Router, public navCtrl: NavController) {
    this.detailsLivre = this.router.getCurrentNavigation().extras;
   }

  ngOnInit() {
    const params: any = this.router.getCurrentNavigation().extras;
    console.log('params', params);
  }

  getColor(){
    
  }

}

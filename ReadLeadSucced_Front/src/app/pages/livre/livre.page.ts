import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.page.html',
  styleUrls: ['./detail-livre.page.scss'],
})
export class DetailLivrePage implements OnInit {

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

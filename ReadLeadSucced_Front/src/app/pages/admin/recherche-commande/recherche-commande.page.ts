import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CommandeWebServiceService } from 'src/app/webServices/Commande/commande-web-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Commande } from 'src/app/models/Commande';

@Component({
  selector: 'app-recherche-commande',
  templateUrl: './recherche-commande.page.html',
  styleUrls: ['./recherche-commande.page.scss'],
})
export class RechercheCommandePage implements OnInit{

  commandeId: number;
  commande$ : Observable<Commande[]>; 

  constructor(private commandeService: CommandeWebServiceService,
    private cd: ChangeDetectorRef,
    private router: Router, 
    public navCtrl: NavController) {

     }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    this.commande$ = this.commandeService.getCategories();
  }

}

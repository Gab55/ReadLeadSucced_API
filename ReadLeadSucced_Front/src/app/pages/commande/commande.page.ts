import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/models/Client';
import { Commande } from 'src/app/models/Commande';
import { LivrePaniers } from 'src/app/models/Panier';
import { CommandeWebServiceService } from 'src/app/webServices/Commande/commande-web-service.service';
import { PanierWebService } from 'src/app/webServices/Panier/panier.service';
import { UtilisateurWebServiceService } from 'src/app/webServices/Utilisateur/utilisateur-web-service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss','./../../app.component.scss'],
})
export class CommandePage implements OnInit {

  client$: Observable<Client>;
  idClient: string;
  dataCommande: any;
  prixTotalHt?: number;
  etatCommande: string;
  panierVide: boolean;
  panier$: Observable<LivrePaniers[]>;
  form: FormGroup;
  actionType: string;
  loading = false;
  identifiant : any;
  submitted = false;
  returnUrl: string;
  error = '';
  postId: number;
  existingClientPost: Commande;

  constructor(private clientWebService: UtilisateurWebServiceService,
    private commandeService: CommandeWebServiceService,
    private pService: PanierWebService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
      const idParam = 'id';
      this.actionType = 'Add';
      this.form = this.formBuilder.group(
        {
          postId: 0,
          codeS: ['', [Validators.required]]
          
        }
      )
     }
  


  ngOnInit() {

    if(this.postId >= 0){
      this.commandeService.getCommandeID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.dataCommande].setValue(data.dataCommande),
          this.form.controls[this.etatCommande].setValue(data.etatCommande)
        ));
    }
    
    if(localStorage.getItem('id') != 'null') 
    {
      this.idClient = localStorage.getItem('id');
      this.loadClient();
      this.loadPaniers();
      return localStorage.getItem('id');

    }
    
  }

  loadClient() {
    this.client$ = this.clientWebService.getClientIDString(this.idClient);
  }
  

  loadPaniers() {
    this.panier$ = this.pService.getPanier(this.idClient).pipe(
      tap(p => {
        this.panierVide = p[0] != undefined ? false : true; 
      } 
    ));
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let commande: Commande = {
        dataCommande: new Date,
        etatCommande:'validée' ,
        idClient: Number(this.idClient)}

      this.commandeService.saveCommande(commande)
        .subscribe((data) => {
          this.router.navigate(['/livres']);
        });
    }
  }

}

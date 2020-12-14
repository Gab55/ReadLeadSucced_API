import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Commande } from 'src/app/models/Commande';
import { CommandeWebServiceService } from 'src/app/webServices/Commande/commande-web-service.service';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.page.html',
  styleUrls: ['./gestion-commande.page.scss','./../../../app.component.scss'],
})
export class GestionCommandePage implements OnInit {

  form: FormGroup;
  actionType: string;
  idCategorie?: any;
  EtatCommande: string;
  postId: number;
  errorMessage: any;
  existingClientPost: Commande;
  commande$: Observable<Commande>;
  categorieId: number;
  
  detailCategorie : any;
  
  constructor(private formBuilder: FormBuilder,
    private categorieWebService: CommandeWebServiceService,
    private avRoute: ActivatedRoute, 
    private router: Router,
    public navCtrl: NavController
    ) {
      //On récupère les données de la page recherche-categorie
      this.detailCategorie = this.router.getCurrentNavigation().extras;
      const idParam = 'id';
      this.actionType = 'Add';
      this.EtatCommande = '';
      
      if (this.avRoute.snapshot.params[idParam]) {
        this.categorieId = this.avRoute.snapshot.params[idParam];
        console.log('id categorie : ' + this.categorieId);
      }
      this.form = this.formBuilder.group(
        {
          postId: 0,
          EtatCommande: ['', [Validators.required]]
        }
      )

     }

   ngOnInit() {

    const params: any = this.router.getCurrentNavigation().extras;
    //console.log('params', params);
      this.postId = params.id;
    if(this.postId >= 0){
      this.actionType = 'Add';
      this.categorieWebService.getCommandeID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls['EtatCommande'].setValue(data.etatCommande)
        ));
    }
    this.loadCommande();
  }

  loadCommande() {
    this.commande$ = this.categorieWebService.getCommandeID(this.categorieId);
  }

  update(){
    if(!this.form.valid){
      return ;
    }

    if (this.actionType === 'Add') {
     let commande: Commande = {
       idCommande: this.categorieId,
      dataCommande : new Date (),
      prixTotalHt : 0,
      prixTotalTtc:0,
      etatCommande: this.form.get('EtatCommande').value,
      idClient: 2003

     };

     this.categorieWebService.updateClient(commande)
       .subscribe((data) => {
         this.router.navigate(['/admin/recherche-commande']);
       });
   }
  }

}

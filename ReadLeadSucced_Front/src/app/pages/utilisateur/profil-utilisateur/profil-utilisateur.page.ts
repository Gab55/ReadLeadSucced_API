import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';
import { UtilisateurWebServiceService } from '../../../webServices/Utilisateur/utilisateur-web-service.service'; 

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.page.html',
  styleUrls: ['./profil-utilisateur.page.scss','./../../../app.component.scss'],
})
export class ProfilUtilisateurPage implements OnInit {

  client$: Observable<Client>;
  form: FormGroup;
  postId: number;
  actionType: string;
  nomClient : string;
  prenomClient: string;
  adresseClient: string;
  villeClient: string;
  cpClient: any;
  emailClient : string;
  loginClient: string;
  mdpClient : string;
  livreId: number;

  constructor(private profilService: UtilisateurWebServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
     public navCtrl: NavController, 
     private avRoute: ActivatedRoute,
     ) { 

      const idParam = 'id';
      this.actionType = 'Add';
      this.nomClient = 'nomClient';
      this.prenomClient= 'prenomClient';
      this.adresseClient='',
      this.villeClient='';
      this.cpClient='';
      this.loginClient='';
      this.mdpClient='';
      this.emailClient = 'emailClient';


      if (this.avRoute.snapshot.params[idParam]) {
        this.livreId = this.avRoute.snapshot.params[idParam];
      }

      this.form = this.formBuilder.group(
        {
          postId: 0,
          nomClient: ['', [Validators.required]],
          prenomClient: ['', [Validators.required]],
          adresseClient: ['', [Validators.required]],
         // villeClient: ['', [Validators.required]],
          cpClient: ['', [Validators.required]],
          emailClient: ['', [Validators.required]],
          loginClient: ['', [Validators.required]],
          mdpClient: ['', [Validators.required]]
        }
      )


     }

     ngOnInit() {
      this.loadLivre();
    }
  
    loadLivre() {
     this.client$ = this.profilService.getClientID(this.livreId);
     console.log(this.client$);
    }




    save() {
      if (!this.form.valid) {
        return;
      }
  
      if (this.actionType === 'Add') {
        let client: Client = {
          nomClient: this.form.get(this.nomClient).value,
          prenomClient: this.form.get(this.prenomClient).value,
          dateNaissanceClient: new Date(),
          adresseClient :  this.form.value.adresseClient,
          villeClient :  'Nancy',
          codePostalClient :  this.form.value.cpClient,
          telephoneClient:  0,
          emailClient: this.form.get(this.emailClient).value,
          loginClient : this.form.value.loginClient,
          motDePasseClient : this.form.value.mdpClient
  
        };
  
        this.profilService.saveClient(client)
          .subscribe((data) => {
            this.router.navigate(['livres/']);
          });
      }
    }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';
import { UtilisateurWebServiceService } from '../../../webServices/Utilisateur/utilisateur-web-service.service'; 

@Component({
  selector: 'app-creation-utilisateur',
  templateUrl: './creation-utilisateur.page.html',
  styleUrls: ['./creation-utilisateur.page.scss','./../../../app.component.scss'],
})
export class CreationUtilisateurPage implements OnInit {

  form: FormGroup;
  actionType: string;
  nomClient : string;
  prenomClient: string;
  adresseClient: string;
  villeClient: string;
  cpClient: any;
  emailClient : string;
  loginClient: string;
  mdpClient : string;

  postId: number;
  errorMessage: any;
  existingClientPost: Client;

  constructor(private utilWebService: UtilisateurWebServiceService, 
    private formBuilder: FormBuilder,
    private avRoute: ActivatedRoute, private router: Router) {

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
        this.postId = this.avRoute.snapshot.params[idParam];
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
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.utilWebService.getClientID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.nomClient].setValue(data.nomClient),
          this.form.controls[this.prenomClient].setValue(data.prenomClient),
         // this.form.controls[this.dateNaissance].setValue(data.dateNaissanceClient),
          this.form.controls[this.adresseClient].setValue(data.adresseClient),
          this.form.controls[this.villeClient].setValue(data.villeClient),
          this.form.controls[this.cpClient].setValue(data.codePostalClient),
         // this.form.controls[this.telephoneClient].setValue(data.Telephone),
          this.form.controls[this.emailClient].setValue(data.emailClient),
          this.form.controls[this.mdpClient].setValue(data.motDePasseClient),
          this.form.controls[this.loginClient].setValue(data.loginClient)
        ));
    }
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
        villeClient :  '',
        codePostalClient :  this.form.value.cpClient,
        telephoneClient:  0,
        emailClient: this.form.get(this.emailClient).value,
        loginClient : this.form.value.loginClient,
        motDePasseClient : this.form.value

      };

      this.utilWebService.saveClient(client)
        .subscribe((data) => {
          this.router.navigate(['livres/']);
        });
    }
  }

}

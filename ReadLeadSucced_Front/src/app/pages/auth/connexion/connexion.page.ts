import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, FormControl,FormArray,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { ConnexionService } from '../../../webServices/connexion.service'




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss', './../../../app.component.scss'],
})
export class ConnexionPage implements OnInit {
  infos = {
    result: null,
    id: null
  }
  form: FormGroup;
  loading = false;
  identifiant : any;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ConnexionService: ConnexionService,
    private menuCtrl: MenuController,
    private toastController: ToastController,
  ) {

    if (localStorage.getItem('id') != 'null') {
      this.router.navigate(['/livres']);
    }

    this.form = this.formBuilder.group({
      identifiant: ['', Validators.required],
      isLibraire: [''],
      motDePasse: ['', Validators.required]
    })

    
  }

  async showToast() {
    const toast = await this.toastController.create({
      color: 'danger',
      duration: 4000,
      message: 'Identifiant ou mot de passe incorrect'
    });

    await toast.present();
}

  ngOnInit() {
this.form.controls['identifiant']
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  login() {
    this.submitted = true;


    const identifiants = {
      
       username : this.form.value.identifiant,
       password: this.form.get("motDePasse").value

    }

    const identifiantsString = JSON.stringify(identifiants);
    this.loading = true;
    if(this.f.isLibraire) {
      this.ConnexionService.authenticateLibraire(identifiantsString)
      .pipe(first())
      .subscribe({
        next: (log) => {
          const newObj: any = log;
          if(newObj.result != null) {
            localStorage.setItem('tokenLibraire', newObj.result.tokenLibraire);
            localStorage.setItem('id', newObj.result.idLibraire);
            this.router.navigateByUrl('auth/connexion', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/livres']);
          }); 
          }
          else{
            this.showToast();
          }
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
    } 
    else {
      this.ConnexionService.authenticate(identifiantsString)
      .pipe(first())
      .subscribe({
        next: (log) => {
          const newObj: any = log;
          if(newObj.result != null) {
            localStorage.setItem('token', newObj.result.token);

            localStorage.setItem('id', newObj.result.idClient);
            localStorage.setItem('idPanier', newObj.result.idPanier);
            this.router.navigateByUrl('auth/connexion', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/livres']);
          }); 
          }
          else{
            this.showToast();
          }
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
      this.ngOnInit();


  }
}
}

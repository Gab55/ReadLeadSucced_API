import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, FormControl,FormArray,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private ConnexionService: ConnexionService

  ) {

    if (localStorage.getItem('id') != 'null') {
      this.router.navigate(['/livres']);
    }

    this.form = this.formBuilder.group({
      identifiant: ['', Validators.required],
      motDePasse: ['', Validators.required]
    })

    
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
    console.log(identifiantsString);
    this.ConnexionService.authenticate(identifiantsString)
      .pipe(first())
      .subscribe({
        next: (log) => {
          const newObj: any = log;
          if(log != undefined) {
            localStorage.setItem('token', newObj.result.token);
            localStorage.setItem('id', newObj.result.idClient);
            localStorage.setItem('idPanier', newObj.result.idPanier);
            this.router.navigate(['livres']);
          }
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

}


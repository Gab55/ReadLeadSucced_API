import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UtilisateurWebServiceService } from '../../../webServices/Utilisateur/utilisateur-web-service.service'; 
import { Observable } from 'rxjs';

import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-recherche-utilisateur',
  templateUrl: './recherche-utilisateur.page.html',
  styleUrls: ['./recherche-utilisateur.page.scss','./../../../app.component.scss'],
})
export class RechercheUtilisateurPage implements OnInit {

  client$: Observable<Client[]>;

  constructor(private clientService: UtilisateurWebServiceService, 
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.loadClient();
  }

  loadClient() {
    this.client$ = this.clientService.getClient();
  }


}

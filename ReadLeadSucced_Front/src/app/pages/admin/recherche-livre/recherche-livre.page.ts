import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/Livre';


@Component({
  selector: 'app-recherche-livre',
  templateUrl: './recherche-livre.page.html',
  styleUrls: ['./recherche-livre.page.scss','./../../../app.component.scss'],
})
export class RechercheLivrePage implements OnInit {

  livres$: Observable<Livre[]>;
  // Livres : any[];
  constructor(private livreService: LivreWebServiceService, 
    private cd: ChangeDetectorRef) {

   }

  ngOnInit() {

    this.loadLivres();
  }

  loadLivres() {
    this.livres$ = this.livreService.getLivreAsyn();
  }

}

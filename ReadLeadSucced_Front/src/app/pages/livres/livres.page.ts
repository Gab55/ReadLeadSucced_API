import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Livre, LivreLight } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-livres',
  templateUrl: './livres.page.html',
  styleUrls: ['./livres.page.scss','./../../app.component.scss'],
})
export class LivresPage implements OnInit {

  livres: Livre[];
  // Livres : any[];
  constructor(private livreService: LivreWebServiceService, 
    private cd: ChangeDetectorRef,
    private router: Router) {

   }

   ngOnInit() {
    this.loadLivres();
    this.reLoad();
  }

  loadLivres() {
    this.livreService.getLivre().pipe(
      tap(l => this.livres = l)
    ).subscribe();
    
  }

  reLoad(){
    this.router.navigate([this.router.url])
    console.log(this.router.url)
  }


}


import { ChangeDetectorRef,Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Livre, LivreLight } from 'src/app/models/Livre';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-livres',
  templateUrl: './livres.page.html',
  styleUrls: ['./livres.page.scss','./../../app.component.scss'],
})
export class LivresPage implements OnInit, OnDestroy {
  mySubscription: any;
  livres: Livre[];
  // Livres : any[];
  constructor(
    private livreService: LivreWebServiceService, 
    private cd: ChangeDetectorRef,
    private router: Router) {
      
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
   }

   ngOnInit() {

    this.loadLivres();

  }

  loadLivres() {
    this.livreService.getLivre().pipe(
      tap(l => this.livres = l)
    ).subscribe();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  
}


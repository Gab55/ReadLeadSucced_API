import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Panier, LivrePaniers } from '../../models/Panier';
import { ApiService } from '../../../Shared/api.service';


@Injectable({
  providedIn: 'root'
})

export class PanierWebService  extends ApiService {


  PanierUrl = environment.appUrl + 'api/Paniers/';
  PanierLivresUrl = environment.appUrl + 'api/Paniers/Livres/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getPanierLivres(PanierId: string): Observable<LivrePaniers[]> {
    return this.getById<LivrePaniers[]>(this.PanierLivresUrl, PanierId )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getPanier(ClientId: string): Observable<Panier> {
    return this.getById<Panier>(this.PanierUrl, ClientId )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deletePanier(idLivre: number, idPanier: number) {
    return this.post<LivrePaniers>(this.PanierUrl + 'delete', JSON.stringify({idLivre, idPanier}))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  // POST  --> AJOUT
  addPanier(idLivre: number, idPanier: number): Observable<LivrePaniers> {
    return this.post<LivrePaniers>(this.PanierUrl, JSON.stringify({idLivre, idPanier}))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

// GESTION DES ERREURS
errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get Panier-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}

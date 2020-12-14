import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '../../Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService extends ApiService {

  connexionUrl = environment.appUrl + 'api/clients/authenticate/';
  connexionLibraireUrl = environment.appUrl + 'api/libraires/authenticate/';

  constructor(private http: HttpClient) {
    super(http);
  }
    // GET POUR PRENDRE LES INFOS
  
    authenticate<T>(identifiants: string): Observable<T> {
      return this.post<T>(this.connexionUrl, identifiants)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        );
    }

    authenticateLibraire<T>(identifiants: string): Observable<T> {
      return this.post<T>(this.connexionLibraireUrl, identifiants)
        .pipe(
          retry(1),
          catchError(this.errorHandler)
        );
    }
  
  // GESTION DES ERREURS
    errorHandler(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}

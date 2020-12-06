import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Livre } from '../../models/Livre';
import { ApiService } from 'src/Shared/api.service';


@Injectable({
  providedIn: 'root'
})

export class LivreWebServiceService  extends ApiService {


  clientUrl = environment.appUrl + 'api/Livres/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getLivres(): Observable<Livre[]> {
    return this.get<Livre[]>(this.clientUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getLivretID(clientId: number): Observable<Livre> {
    return this.getById<Livre>(this.clientUrl, clientId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }





  // POST  --> AJOUT
  saveClient(client): Observable<Livre> {
    return this.post<Livre>(this.clientUrl, JSON.stringify(client))
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

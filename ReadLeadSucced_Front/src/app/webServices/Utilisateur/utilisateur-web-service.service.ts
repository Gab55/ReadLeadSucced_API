import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from '../../models/Client';
import { ApiService } from 'src/Shared/api.service';


@Injectable({
  providedIn: 'root'
})

export class UtilisateurWebServiceService  extends ApiService {


  clientUrl = environment.appUrl + 'api/Clients';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getClient(): Observable<Client[]> {
    return this.get<Client[]>(this.clientUrl, [])
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

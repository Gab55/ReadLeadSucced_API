import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Commande } from 'src/app/models/Commande';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeWebServiceService extends ApiService {

  commandeUrl = environment.appUrl + 'api/Commandes/';

    constructor(private http: HttpClient) {
      super(http);
    }

    getCategories(): Observable<Commande[]> {
      return this.get<Commande[]>(this.commandeUrl, [])
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }


getCommandeID(clientId: number): Observable<Commande> {
  return this.getById<Commande>(this.commandeUrl, clientId.toString() )
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

saveCommande(commande): Observable<Commande> {
  return this.post<Commande>(this.commandeUrl, JSON.stringify(commande))
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}



updateClient(client): Observable<Commande> {
  return this.post<Commande>(this.commandeUrl + 'edit', JSON.stringify(client))
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

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

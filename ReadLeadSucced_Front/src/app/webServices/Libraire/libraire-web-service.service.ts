import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Libraire } from '../../models/Libraire';
import { ApiService } from 'src/Shared/api.service';


@Injectable({
  providedIn: 'root'
})

export class LibraireWebServiceService  extends ApiService {


  libraireUrl = environment.appUrl + 'api/Libraires/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getLibraire(): Observable<Libraire[]> {
    return this.get<Libraire[]>(this.libraireUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getLibraireIDString(libraireId: string): Observable<Libraire> {
    return this.getById<Libraire>(this.libraireUrl, libraireId )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


 
  getLibraireID(libraireId: number): Observable<Libraire> {
    return this.getById<Libraire>(this.libraireUrl, libraireId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
 
  // POST  --> AJOUT
  saveLibraire(libraire): Observable<Libraire> {
    return this.post<Libraire>(this.libraireUrl, JSON.stringify(libraire))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  updateLibraire(libraire): Observable<Libraire> {
    return this.post<Libraire>(this.libraireUrl + 'edit', JSON.stringify(libraire))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }



// GESTION DES ERREURS
errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get libraire-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}

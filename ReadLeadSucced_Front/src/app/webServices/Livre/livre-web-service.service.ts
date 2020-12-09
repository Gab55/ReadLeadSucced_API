import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Livre } from 'src/app/models/Livre';
import { SearchLivre } from 'src/app/search/SearchLivre';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LivreWebServiceService extends ApiService {

  livresUrl = environment.appUrl + 'api/Livres/';
  livres$: Observable<Livre[]>;

  constructor(private http: HttpClient) {
    super(http);
   }


  getLivre() {
    this.livres$ = this.get<Livre[]>(this.livresUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler),
      );
  }

  getLivreAsyn(): Observable<Livre[]> {
    return this.get<Livre[]>(this.livresUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  searchLivre(search: string) {
    this.livres$ = this.post<Livre[]>(this.livresUrl + 'search', search)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getLivretID(clientId: number): Observable<Livre> {
    return this.getById<Livre>(this.livresUrl, clientId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  searchClient<T>(search: string): Observable<T> {
    return this.post<T>(this.livresUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  // POST  --> AJOUT
  saveClient(livre): Observable<Livre> {
    return this.post<Livre>(this.livresUrl, livre)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateClient(client): Observable<Livre> {
    return this.post<Livre>(this.livresUrl + 'edit', JSON.stringify(client))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  

  deleteLivres(clientId: number) {
    return this.delete(this.livresUrl, clientId.toString() )
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Categorie } from 'src/app/models/Categorie';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieWebServiceService extends ApiService {

  categorieUrl = environment.appUrl + 'api/Categories/';

  constructor(private http: HttpClient) {
    super(http);
   }

  getCategories(): Observable<Categorie[]> {
    return this.get<Categorie[]>(this.categorieUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getCategorieID(clientId: number): Observable<Categorie> {
    return this.getById<Categorie>(this.categorieUrl, clientId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }



  // POST  --> AJOUT
  saveCategorie(livre): Observable<Categorie> {
    return this.post<Categorie>(this.categorieUrl, JSON.stringify(livre))
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

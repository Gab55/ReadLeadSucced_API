import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Livre } from 'src/app/models/Livre';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LivreWebServiceService extends ApiService {

  livresClient = environment.appUrl + 'api/Livres';

  constructor( private http: HttpClient) {
    super(http);
   }


  getLivre(): Observable<Livre[]> {
    return this.get<Livre[]>(this.livresClient, [])
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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Commentaire } from 'src/app/models/Commentaire';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService extends ApiService {

  commentairesUrl = environment.appUrl + 'api/Commentaires/';

  constructor(private http: HttpClient) {
    super(http);
   }

   getCommentaires(LivreId: number): Observable<Commentaire[]> {
    return this.getById<Commentaire[]>(this.commentairesUrl, LivreId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  addCommentaire(commentaire): Observable<Commentaire> {
    return this.post<Commentaire>(this.commentairesUrl, JSON.stringify(commentaire))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  

  deleteCommentaires(clientId: number) {
    return this.delete(this.commentairesUrl, clientId.toString() )
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


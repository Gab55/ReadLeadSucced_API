import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Gestion des messages d'erreur HTTP
    return next.handle(req).pipe(catchError(err => {
      console.log(err);
      if (err.status === 0) {
        const message = 'Impossible de communiquer avec le serveur. Merci de contacter un administrateur.';
        return throwError(message);
      }
      else {
        if (err.status === 401) {
          // Dans le cas ou l'utilisateur n'est pas authoriser à appeler l'API il sera automatiquement déconnecté

        } else {
          const message = 'Erreur de tout type. Majoritairement 500';
          return throwError(message);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }
  }));
 }

}

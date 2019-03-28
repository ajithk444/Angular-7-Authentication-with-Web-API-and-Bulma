import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/auth/auth-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if ([401, 403].indexOf(err.status) != -1) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    this.authService.logout();
                    location.reload(true);
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            })  
        );
    }
}

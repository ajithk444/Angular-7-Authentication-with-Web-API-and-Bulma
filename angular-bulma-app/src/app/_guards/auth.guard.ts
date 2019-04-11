import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';


//http://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example#authentication-service-ts

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  //https://loiane.com/2017/08/angular-hide-navbar-login-page/

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.authService.isLoggedIn         // {1}
      .pipe(
        take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn) {
            this.router.navigate(['login']);  // {4}
            return false;
          }
          return true;
        })
      );
  }
}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//     const currentUser = this.authService._currentUser;
//     if (currentUser) {
//         // check if route is restricted by role
//         //if (route.data.roles && route.data.roles.indexOf(currentUser.Role) === -1) {
//             // role not authorised so redirect to home page
//             //this.router.navigate(['/']);
//            // return false;
//         //}

//         //authorised so return true
//         return true;
//     }

//     //not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//     return false;
// }
  


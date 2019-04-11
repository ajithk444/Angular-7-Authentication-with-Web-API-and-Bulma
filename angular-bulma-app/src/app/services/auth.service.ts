import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url: string;
  _currentUser: User;
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private http: HttpClient,
    private router: Router,
    private sessionService: SessionService) {
    this._url = environment.APIUrl;
    }

  authenticate(login: Login) {
    console.log('Inside service');
    this.http.post(this._url + '/auth/login', login, {
      headers: this.setHeaders()
    }).subscribe(response => {
      console.log('Valid login');

      var _userData = JSON.parse(JSON.stringify(response));
      this._currentUser = new User;
      this._currentUser.UserName = _userData.username;
      this._currentUser.Token = _userData.token;
      this._currentUser.Role = _userData.role;
      this.sessionService.setUserSession(this._currentUser);
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }, err => {
      console.log('Invalid login');
    });
  }

  logout() {
    this.loggedIn.next(false);
    this.sessionService.endUserSession();
    this.router.navigate(['/login']);
    console.log('Logged out');
  }

  register(user: User) {
    localStorage.removeItem('currentUser');
  }

  setHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
}

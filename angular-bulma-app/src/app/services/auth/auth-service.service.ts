import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  private _user: User = null;
  private invalidLogin: boolean;
  _loginResponse;
  _currentUser;

  constructor(private http: HttpClient,
    private router: Router) {
    this.url = environment.APIUrl;
  }


  setHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  login(login: Login) {
    this.http.post(this.url + '/auth/login', login, {
      headers: this.setHeaders()
    }).subscribe(response => {
      this._loginResponse = JSON.stringify(response);
      console.log('Valid login');
      console.log(response);
      console.log(this._loginResponse.UserName);
      localStorage.setItem("CURRENT_USER", this._loginResponse.UserName);
      localStorage.setItem("CURRENT_USER_TOKEN", this._loginResponse.Token);
      this.invalidLogin = false;
      this.router.navigate(['projects']);
    }, err => {
      console.log('invalid login');
      this.invalidLogin = true;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  
  // get IsLoggedIn() {
  //   // TODO: Make sure _isLoggedIn is included
  //   return (
  //     this.storageService.getSessionItem('wf_token') != null &&
  //     this.storageService.getSessionItem('wf_token') !== undefined
  //   );
  // }

  //   getUserClaims(){
  //    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  // }
}

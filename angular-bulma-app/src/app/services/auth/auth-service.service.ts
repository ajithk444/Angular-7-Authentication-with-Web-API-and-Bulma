import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  invalidLogin: boolean;
  constructor(private http: HttpClient,
    private router: Router) {
    this.url = 'https://localhost:6001/api'; //environment.APIUrl;
  }

  login(login: Login) {
    this.http.post(this.url + '/auth/login', login, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log('valid login');
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(['projects']);
    }, err => {
      console.log('invalid login');
      this.invalidLogin = true;
    });
  }

  //   getUserClaims(){
  //    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  // }
}

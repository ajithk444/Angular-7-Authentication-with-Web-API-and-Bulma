import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.APIUrl;
   }


  //   registerUser(user: User) {
  //     const body: User = {
  //       UserName: user.UserName,
  //       Password: user.Password,
  //       Email: user.Email,
  //       FirstName: user.FirstName,
  //       LastName: user.LastName
  //     }
  //     var reqHeader = new HttpHeaders({'No-Auth':'True'});
  //     return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
  //   }

  //   userAuthentication(userName, password) {
  //     var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  //     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  //     return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  //   }

  //   getUserClaims(){
  //    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Projects } from '../../interface/project';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _baseUrl: string = 'https://apppropla-api.azurewebsites.net/api/projects';
  //private _baseUrl: string = 'https://localhost:6001/api/projects';
  private _header = new HttpHeaders().set('content-type', 'application/json');  constructor(private http: HttpClient) {
  }

   get() {
    return this.http.get<Projects>(this._baseUrl);
  }

   post(projData: Projects):Observable<Projects> {
      return this.http.post<Projects>(this._baseUrl + '/createproject',
                                      projData,
                                      { headers: this._header })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('handleError:');
      return of(result as T);
    }
  }
}

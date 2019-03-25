import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Projects, ProjectsDTO } from '../../models/project';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { projection } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projectsObj: ProjectsDTO;
  private url: string;
  private _header = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) {
    this.url = environment.APIUrl;
  }
  //'https://localhost:6001/api/projects'
  get() {
    return this.http.get(this.url + '/projects');
  }

  getById(id: number) {
    return this.http.get(this.url + '/projects/GetProject/' + id);
  }

  post(projData: Projects) {
    return this.http.post<Projects>(this.url + '/projects/createproject',
      projData)
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('handleError:');
      return of(result as T);
    }
  }
}

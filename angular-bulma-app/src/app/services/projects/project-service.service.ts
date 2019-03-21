import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Projects } from '../../interface/project';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _baseUrl: string = 'https://apppropla-api.azurewebsites.net/api';
  private _header: HttpHeaders;
  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get<Projects>(this._baseUrl+'/projects');
  }

  public post(projData: Projects) {
    return this.http.post<Projects>(this._baseUrl+'/projects/PostProject', projData, { headers: this._header });
  }
}

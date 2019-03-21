import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Project } from '../interface/project';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _baseUrl: string = 'https://apppropla-api.azurewebsites.net/api/projects/';
  private _header: HttpHeaders;
  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get<Project>(this._baseUrl);
  }

  public post(projData: Project) {
    return this.http.post<Project>(this._baseUrl, projData, { headers: this._header });
  }
}

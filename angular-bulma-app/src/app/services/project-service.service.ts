import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl: string = 'https://apppropla-api.azurewebsites.net/api/projects/';

  constructor(private http: HttpClient) {
  }

  public get() {
    return this.http.get(this.baseUrl);
  }
}

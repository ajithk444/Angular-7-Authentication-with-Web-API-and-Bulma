import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.APIUrl;
  }

  get() {
    return this.http.get(this.url + '/tasks');
  }

  post(task: Task) {
    return this.http.post<Task>(this.url + '/tasks/createtask', task);
  }
}

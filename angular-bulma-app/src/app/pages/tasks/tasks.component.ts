import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks;
  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.get().subscribe(
      (data) => { this.tasks = data }
    );
  }

  createTask() {
    this.router.navigate(['addTask']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskCreateForm: FormGroup;
  taskObj: Task;
  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
    this.taskCreateForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(6)]],
      isActive: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.taskCreateForm.controls;
  }

  onSubmit() {
    if (this.taskCreateForm.invalid) {
      return false;
    }
    this.taskObj = new Task;
    this.taskObj.taskName = this.taskCreateForm.get('taskName').value;
    this.taskService.post(this.taskObj)
    .subscribe(
      data => this.viewTask(data)
    );
  }
  viewTask(data) {
    alert('Task created Successfully !!!');
    if (data != null) {
      console.log(JSON.stringify(data));
      this.router.navigate(['tasks']);
    }
  }
}

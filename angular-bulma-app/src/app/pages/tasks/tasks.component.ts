import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskCreateForm: FormGroup;
  taskObj: Task;
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

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
    this.taskService.post(this.taskObj).subscribe(
      (data) => { alert(JSON.stringify(data)) }
    );
  }
}

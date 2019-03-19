import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  // createProjectForm = new FormGroup({
  //   projectName: new FormControl(''),
  //   isActive: new FormControl('')
  // });

  constructor(private fb: FormBuilder) { }

  createProjectForm = this.fb.group({
    projectName: [''],
    isActive: ['']
  });

  onSubmit() {
    console.log(this.createProjectForm.value);
  }
}

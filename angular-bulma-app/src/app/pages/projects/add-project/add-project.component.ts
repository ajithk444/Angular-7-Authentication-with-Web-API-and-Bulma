import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    projectName: ['', Validators.required],
    isActive: ['',Validators.required]
  });

  onSubmit() {
    console.log(this.createProjectForm.value);
  }
}

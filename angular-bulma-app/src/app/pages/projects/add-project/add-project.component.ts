import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project-service.service';
import { Projects } from 'src/app/interface/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {


  constructor(private fb: FormBuilder, private projService: ProjectService, ) { }

  newProject: Projects;
  createProjectForm = this.fb.group({
    projectName: ['', Validators.required],
    isActive: ['', Validators.required]
  });

  onSubmit() {
    console.log(this.createProjectForm.value);
    this.projService.post(this.newProject).subscribe(
      data => console.log('post' + data)
    );
  }

  ngOnInit() {

  }
}

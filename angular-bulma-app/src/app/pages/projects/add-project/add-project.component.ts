import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/projects/project-service.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private projService: ProjectService,
    private router: Router) {

  }

  newProject: Project;
  createProjectForm = this.fb.group({
    projectName: ['', [Validators.required, Validators.minLength(6)]],
    isActive: ['']
  });

  onSubmit() {
    this.newProject = new Project();
    this.newProject.isActive = this.createProjectForm.get('isActive').value;
    this.newProject.projectName = this.createProjectForm.get('projectName').value;
    this.projService.post(this.newProject).
      subscribe(
        data => this.viewProject(data)
      );
  }

  viewProject(data) {
    alert('Project created Successfully !!!');
    if (data != null) {
      console.log(JSON.stringify(data));
      this.router.navigate(['projects']);
      //this.router.navigate(['viewproject', data.id]);
    }
  }

  ngOnInit() {
  }


}

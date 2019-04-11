import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor(private projService: ProjectService, 
              private router: Router,
              private spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.spinner.show();
    this.projService.get().subscribe((res) => {
      console.log(res);
      this.projects = res;
      this.spinner.hide();
    });
  }

  createProject() {
    this.router.navigate(['/addproject']);
  }
}

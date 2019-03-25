import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/projects/project-service.service';
import { Projects } from 'src/app/models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor(private projService: ProjectService, private router: Router) { }


  ngOnInit() {
    this.projService.get().subscribe((res) => {
      console.log(res);
      this.projects = res;
    });
  }

  openAddProject() {
    this.router.navigate(['addproject']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projects/project-service.service';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  sub: any;
  project: any;
  _projectId: number;
  constructor(private projService: ProjectService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.router.params.subscribe(params => {
      this._projectId = + params['id']; // (+) converts string 'id' to a number
      alert(this._projectId);
      this.getProject();
    });
  }

  getProject() {
    this.projService.getById(this._projectId).subscribe(
      (data) => { this.project = data }
    );
  }
}

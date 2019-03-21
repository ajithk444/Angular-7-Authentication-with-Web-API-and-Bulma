import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
  
  


  // createProjectForm = new FormGroup({
  //   projectName: new FormControl(''),
  //   isActive: new FormControl('')
  // });

  constructor(private fb: FormBuilder,private projService: ProjectService,) { }

  createProjectForm = this.fb.group({
    projectName: ['', Validators.required],
    isActive: ['',Validators.required]
  });

  onSubmit() {
    console.log(this.createProjectForm.value);
  }

  ngOnInit() {
    
   }
}

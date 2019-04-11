import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  userObj: User;
  userCreated: boolean;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email:[''],
      password: [''],
      confirmPassword: [''],
      subscribe:['']
    });
  }

  onSubmit(){
    
  }

}

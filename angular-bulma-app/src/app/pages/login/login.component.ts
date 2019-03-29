import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginObj: Login;
  validLogin: boolean;
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return false;
    }
    this.loginObj = new Login;
    this.loginObj.UserName = this.loginForm.get('username').value;
    this.loginObj.Password = this.loginForm.get('password').value;
    console.log(this.loginObj.UserName);
    console.log(this.loginObj.Password);
    this.authService.login(this.loginObj);
  }
}

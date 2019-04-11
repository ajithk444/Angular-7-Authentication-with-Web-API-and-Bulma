import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.spinner.show();
    if (this.loginForm.invalid) {
      this.spinner.hide();
      return false;
    }
    this.loginObj = new Login;
    this.loginObj.UserName = this.loginForm.controls['username'].value;
    this.loginObj.Password = this.loginForm.controls['password'].value;
    this.authService.authenticate(this.loginObj);
    this.spinner.hide();
    console.log('successfully logged in');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;    
  currentUser: string;

  constructor(private router: Router, private authService: AuthService,
    private sessionService: SessionService) {


  }

  ngOnInit() {
    this.currentUser = this.sessionService.getCurrentUser();
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}

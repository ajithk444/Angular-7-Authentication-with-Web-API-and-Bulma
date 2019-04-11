import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AddProjectComponent } from './pages/projects/add-project/add-project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

//http
import { HttpClientModule } from '@angular/common/http';

//loader
import { NgxSpinnerModule } from 'ngx-spinner';

//Reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewProjectComponent } from './pages/projects/view-project/view-project.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddTaskComponent } from './pages/tasks/add-task/add-task.component';
import { LoginComponent } from './pages/login/login.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './_layout/footer/footer.component';

//layout components
import { AppLayoutComponent } from './_layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout.component';

//services
import { TaskService } from './services/task.service';
import { ProjectService } from './services/project.service';
import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectsComponent,
    AddProjectComponent,
    ContactComponent,
    HomeComponent,
    ViewProjectComponent,
    TasksComponent,
    AddTaskComponent,
    LoginComponent,
    SiteHeaderComponent,
    AppHeaderComponent,
    SignupComponent,
    AppLayoutComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [ProjectService, TaskService, AuthService, SessionService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

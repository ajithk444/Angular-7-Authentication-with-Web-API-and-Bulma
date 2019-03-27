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
import { ProjectService } from './services/projects/project-service.service';

//http
import { HttpClientModule } from '@angular/common/http';

//loader
import { NgxSpinnerModule } from 'ngx-spinner';

//Reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewProjectComponent } from './pages/projects/view-project/view-project.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskService } from './services/tasks/task.service';
import { AddTaskComponent } from './pages/tasks/add-task/add-task.component';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './_layout/footer/footer.component';
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
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    AppHeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

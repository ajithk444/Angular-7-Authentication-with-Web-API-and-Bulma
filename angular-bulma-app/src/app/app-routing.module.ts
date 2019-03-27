import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ProjectsComponent } from './pages/projects/projects.component';
import { AddProjectComponent } from './pages/projects/add-project/add-project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewProjectComponent } from './pages/projects/view-project/view-project.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddTaskComponent } from './pages/tasks/add-task/add-task.component';
import { LoginComponent } from './pages/login/login.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SignupComponent } from './pages/signup/signup.component';
const routes: Routes = [
  // {
  //   path: 'app',
  //   component: AppLayoutComponent,
  //   children: [

  //   ]
  // },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'viewproject/:id', component: ViewProjectComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // otherwise redirect to home by default
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

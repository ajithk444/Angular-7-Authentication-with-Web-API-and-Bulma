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
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'projects', component: ProjectsComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'viewproject/:id', component: ViewProjectComponent },

  { path: 'tasks', component: TasksComponent },
  { path: 'addtask', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

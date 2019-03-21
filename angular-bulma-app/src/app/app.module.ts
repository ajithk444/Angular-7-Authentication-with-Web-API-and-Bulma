import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AddProjectComponent } from './pages/projects/add-project/add-project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectService } from './services/projects/project-service.service';

//http
import { HttpClientModule } from '@angular/common/http';

//Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { ViewProjectComponent } from './pages/projects/view-project/view-project.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    AddProjectComponent,
    ContactComponent,
    HomeComponent,
    ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

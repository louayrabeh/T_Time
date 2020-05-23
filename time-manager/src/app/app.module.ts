import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {FullCalendarModule} from '@fullcalendar/angular';
import { LoginComponent } from './login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployedashComponent } from './employedash/employedash.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AjoutertacheComponent } from './ajoutertache/ajoutertache.component';
import { ModifiertacheComponent } from './modifiertache/modifiertache.component';
import { ManagerComponent } from './manager/manager.component';
import { AnalysemanagerComponent } from './analysemanager/analysemanager.component';
import { AjoutprojetComponent } from './ajoutprojet/ajoutprojet.component';
import { RendementComponent } from './rendement/rendement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeComponent,
    EmployedashComponent,
    AnalyseComponent,
    TasksComponent,
    AjoutertacheComponent,
    ModifiertacheComponent,
    ManagerComponent,
    AnalysemanagerComponent,
    AjoutprojetComponent,
    RendementComponent
  ],
  entryComponents:[AjoutertacheComponent,ModifiertacheComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FullCalendarModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

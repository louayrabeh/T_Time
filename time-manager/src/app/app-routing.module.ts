import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployedashComponent } from './employedash/employedash.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { TasksComponent } from './tasks/tasks.component';
import { ManagerComponent } from './manager/manager.component';
import { AnalysemanagerComponent } from './analysemanager/analysemanager.component';
import { AjoutprojetComponent } from './ajoutprojet/ajoutprojet.component';
import { RendementComponent } from './rendement/rendement.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'Employedash',
    component:EmployedashComponent
  },
  {
    path:'analyse',
    component:AnalyseComponent
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },
  {
    path:'analysemanager',
    component:AnalysemanagerComponent
  },
  {
    path:'ajoutprojet',
    component:AjoutprojetComponent
  },
  {
    path:'rendement',
    component:RendementComponent
  },
  /*{
    path:'',
    redirectTo:'/Employedash',
    pathMatch:'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

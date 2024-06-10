import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './module/application-form/application-form.component';
import { ApplicationSuccessComponent } from './module/application-success/application-success.component';

const routes: Routes = [
  { path: '', component: ApplicationFormComponent, pathMatch: 'full' },
  { path: 'home', component: ApplicationFormComponent},
  { path:'success', loadComponent:()=>import('./module/application-success/application-success.component').then((m)=> m.ApplicationSuccessComponent),},
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

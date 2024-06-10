import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { ApplicationFormComponent } from './module/application-form/application-form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ApplicationFormComponent, pathMatch: 'full' },
  { path: 'home', component: ApplicationFormComponent },
  { path: 'success', loadComponent: () => import('./module/application-success/application-success.component').then((m) => m.ApplicationSuccessComponent), canActivate: mapToCanActivate([AuthGuardService]) },
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

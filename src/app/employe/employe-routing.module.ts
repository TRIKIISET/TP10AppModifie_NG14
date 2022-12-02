import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AccueilEmployeComponent } from './accueil-employe/accueil-employe.component';
import { ContactEmployeComponent } from './contact-employe/contact-employe.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }

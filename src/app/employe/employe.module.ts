import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { AccueilEmployeComponent } from './accueil-employe/accueil-employe.component';
import { ContactEmployeComponent } from './contact-employe/contact-employe.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';
import { MenuEmployeComponent } from './menu-employe/menu-employe.component';


@NgModule({
  declarations: [
    AccueilEmployeComponent,
    ContactEmployeComponent,
    DashboardEmployeComponent,
    MenuEmployeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule
  ]
})
export class EmployeModule { }

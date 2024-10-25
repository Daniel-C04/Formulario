import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './Components/employees/employees.component';
import { ListaEmployeesComponent } from './Components/lista-employees/lista-employees.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/:id', component: EmployeesComponent},
  {path: 'lista-employees', component: ListaEmployeesComponent},
  {path: '', redirectTo: '/navbar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  import { Component, OnInit } from '@angular/core';
  import { ServicioEmployeesService, Employees } from '../../Services/servicio-employees.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-lista-employees',
    templateUrl: './lista-employees.component.html',
    styleUrl: './lista-employees.component.css'
  })
  export class ListaEmployeesComponent implements OnInit{
    employees: Employees[] = [];

    constructor(private _employeesService: ServicioEmployeesService,
      private router: Router) {
    }

    ngOnInit(): void {
      this.employees = this._employeesService.getEmployees();
    }
    verEmpleado(id: number) {
      this.router.navigate(['/employees', id]);
    }
    
    eliminarEmpleado(id: number) {
      this._employeesService.eliminarEmpleado(id);
      this.employees = this._employeesService.getEmployees();
    }


  }

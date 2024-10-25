import { Component, OnInit } from '@angular/core';
import { ServicioEmployeesService, Employees } from '../../Services/servicio-employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees: Employees[] = [];
  empleadoSeleccionado: Employees | undefined;

  empleado: Employees = {
    employee_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    hire_date: new Date(),
    job_id: '',
    salary: 0,
    commission_pct: 0,
    manager_id: '',
    department_id: '',
  };



  constructor(
    private activatedRoute: ActivatedRoute,
    private _employeesService: ServicioEmployeesService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.employees = this._employeesService.getEmployees();
    const employeeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.empleadoSeleccionado = this._employeesService.getEmployeesById(employeeId);

    // Si empleadoSeleccionado existe, llenar el objeto empleado
    if (this.empleadoSeleccionado) {
      this.empleado = { ...this.empleadoSeleccionado }; // Copiar datos
    }
  }


  guardarEmpleado(): void {
    console.log(this.empleado); // Muestra el objeto en la consola
    this._employeesService.saveEmployee(this.empleado); // Guarda el empleado
    this.router.navigate(['/lista-employees']); // Redirige a la lista de empleados
  }
  
}

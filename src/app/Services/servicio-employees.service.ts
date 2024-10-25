import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmployeesService {

  private employees: Employees[] = [
    {
      employee_id: 1,
      first_name: 'Juan',
      last_name: 'Perez',
      email: 'juanperez@gmail.com',
      phone_number: '1234567890',
      hire_date: new Date('2020-01-01'),
      job_id: 'AD_PRES',
      salary: 10000,
      commission_pct: 0,
      manager_id: '1',
      department_id: '1'
    },
    {
      employee_id: 2,
      first_name: 'Pedro',
      last_name: 'Gomez',
      email: 'pedrog@gmail.com',
      phone_number: '1234567890',
      hire_date: new Date('2020-01-01'),
      job_id: 'AD_VP',
      salary: 10000,
      commission_pct: 0,
      manager_id: '2',
      department_id: '2'
    }

  ]

  constructor() {
    console.log("Servicio Employees Funcionando");
  }

  public getEmployees(): Employees[] {
    return this.employees;
  }

  public getEmployeesById(id: number): Employees | undefined {
    return this.employees.find((employee) => employee.employee_id === id);
  }

  public eliminarEmpleado(id: number): void {
    this.employees = this.employees.filter((employee) => employee.employee_id !== id);
  }

  saveEmployee(empleado: Employees): void {
    const index = this.employees.findIndex(emp => emp.email === empleado.email); 

    if (index === -1) {
      this.employees.push(empleado);
    } else {
      this.employees[index] = empleado;
    }

  }

}


export interface Employees {
  employee_id: number,
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  hire_date: Date
  job_id: string,
  salary: number,
  commission_pct: number,
  manager_id: string,
  department_id: string
}
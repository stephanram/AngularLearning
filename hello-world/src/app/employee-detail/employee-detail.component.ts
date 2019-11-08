import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  private EmployeeService: EmployeeService;
  public employees: Array<IEmployee> = [];

  constructor(employeeService: EmployeeService) {
    this.EmployeeService = employeeService;
   }

   ngOnInit() {
    this.EmployeeService.getEmployee()
      .subscribe((data) => {
        this.employees = data;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
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

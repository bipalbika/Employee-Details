import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
    this.employeedetails=this.employee.getemployee()
  }
  employeedetails=[ ]
}

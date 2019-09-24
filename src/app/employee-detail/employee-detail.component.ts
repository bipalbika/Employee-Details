import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
  this.employeedetails=this.employee.getemployee()
  }
employeedetails=[]

}

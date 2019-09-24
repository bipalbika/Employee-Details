import { Component } from '@angular/core';
import { employeeservice } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private data:employeeservice){}
 
  title = 'services';
  id;
  name;
  dept;
  myemployee={id:1,name:"",dept:""}
  addemployee(){
  this.myemployee.id=this.id;
  this.myemployee.name=this.name;
  this.myemployee.dept=this.dept;
  this.data.putemployee(this.myemployee);
}
}

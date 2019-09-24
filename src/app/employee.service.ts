import {Injectable } from '@angular/core'
@Injectable()
export class employeeservice{
    employeedetails=[   {id:1,name:"abc",dept:"cse"},
                        {id:2,name:"dbc",dept:"it"},
                        {id:3,name:"fbc",dept:"Hr"}
                    ]
    getemployee(){
        return this.employeedetails
    }
    putemployee(data){
        this.employeedetails.push(data);
    }
}
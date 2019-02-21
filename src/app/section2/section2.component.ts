import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  public person = {
    "firstName":"John",
    "lastName":"Doe"
  }
  public date = new Date();
  public errorMsg;
  public employees = [];
  constructor(private _employeeService: EmployeeService) { }//underscore is used to identify a private variable (of type "EmployeeService" in this case)

  ngOnInit() {
    this._employeeService.getEmployees()//to receive data we must subscribe to the method called
    .subscribe(data => this.employees = data,//once subscribed the employee data arrives asynchronously, the data is assigned to our property using the fat arrow syntax
              error => this.errorMsg = error);//here is the error message handler
  }
}

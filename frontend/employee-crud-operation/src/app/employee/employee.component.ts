import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  storeMessage:string=""
  retrieveMessage?:string="";
  employees?:Array<Employee>;
  constructor(public empSer:EmployeeService) { }  //DI for Service class 

  // life cycle of component 
  ngOnInit(): void {
    this.loadEmployeeDetails();
  }
  
  loadEmployeeDetails() {
    this.empSer.retreiveAllEmployeeRecords().subscribe(result=> {
      this.employees=result;
  },error=>this.retrieveMessage=error);
  }

  storeEmployee(employeeRef:NgForm) {
    let employee = employeeRef.value;
    this.empSer.storeEmployeeRecord(employee).subscribe(result=> {
          this.storeMessage=result.msg;
          this.loadEmployeeDetails();
    },error=>console.log(error));
    employeeRef.reset();
  }
}

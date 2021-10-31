import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string ="http://localhost:9090/api/employees"
  constructor(public http:HttpClient) { }   //DI for httpClient 

  storeEmployeeRecord(employee:Employee):Observable<any>{
    return this.http.post<any>(url+"/employeeStore",employee);
  }

  retreiveAllEmployeeRecords():Observable<Employee[]> {
    return this.http.get<Employee[]>(url+"/getAllEmployeeDetails").
    pipe(map(res=>res.map(data=>{
      data.salary=data.salary+1000;
      return data;
    })),retry(4));
  }
}



/*
Observable<Employee[]>  : if it return array object 
Observable<Employee>  : if it return one object 
Observable<Text>      : if it return string messasge 
Observable<JSON>    : if return simple json messasge. 


*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError }from 'rxjs/operators'

//used when throwing the exception message
//the catch operator is used for Http error handling

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)//the get request takes in a URL as its argument (this may be replaced with a working web server link when necessary) 
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message||"Server Error"); //returns the error message once it isn't null, if it is, then it returns the string "server error"
  }//this is called whenever there is an exception
}
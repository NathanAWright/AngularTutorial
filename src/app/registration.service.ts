import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url = 'http://localhost:3000/enroll'
  constructor(private _http: HttpClient) { }

  register(userData){
    return this._http.post<any>(this._url, userData); //returns the response as an observable which would be used in the reactive-form.component.ts file
  }
}

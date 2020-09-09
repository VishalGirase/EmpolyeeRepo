import { Employee } from './Emplyee';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  saveEmployeeDetails(employee: Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/create",employee);
  }

 getEmployeeDetails():Observable<any>{
    return this._http.get<any>("http://localhost:8080/get");
  }

  getEmployeeDetailsById(id:String):Observable<any>{
    return this._http.get<any>("http://localhost:8080/getById/"+id);
  }
}

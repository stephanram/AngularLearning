import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError, observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IEmployee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private HttpClientService: HttpClient;
  private GetUrl: string;

  constructor(httpClient: HttpClient) {
      this.HttpClientService = httpClient;
      this.GetUrl = 'http://dummy.restapiexample.com/api/v1/employees';
   }

  getEmployee = (): Observable<IEmployee[]> => {
     return this.HttpClientService.get<IEmployee[]>(this.GetUrl);
  }
}

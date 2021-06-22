import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UsersService {

  private productManagementSerivceURL = "http://localhost:5000/users";

  constructor(
    private httpClient: HttpClient
  ) { }

  // GET Requests
  public getAllUsers(): Observable<any> {
    let result = this.httpClient.get(`${this.productManagementSerivceURL}`);
    return result;
  }

  public getUserById(params): Observable<any> {
    let result = this.httpClient.get(`${this.productManagementSerivceURL}/${params}`);
    return result;
  }

  // POST Requests
  public createUser(userData): Observable<any> {
    let result = this.httpClient.post(`${this.productManagementSerivceURL}/add`, userData);
    return result;
  }

  public updateUser(params, userData): Observable<any> {
    let result = this.httpClient.post(`${this.productManagementSerivceURL}/update/${params}`, userData);
    return result;
  }

  // DELETE Requests
  public deleteUser(params): Observable<any> {
    let result = this.httpClient.delete(`${this.productManagementSerivceURL}/delete/${params}`);
    return result;
  }
  

}

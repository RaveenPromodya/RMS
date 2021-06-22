import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roleManagementServiceURL = "http://localhost:4000/roles";

  constructor(
    private httpClient: HttpClient
  ) { }

  // GET Requests
  public getAllRoles(): Observable<any> {
    let result = this.httpClient.get(`${this.roleManagementServiceURL}`);
    return result;
  }

  public getRoleById(params): Observable<any> {
    let result = this.httpClient.get(`${this.roleManagementServiceURL}/${params}`);
    return result;
  }

  // POST Requests
  public createRole(roleData): Observable<any> {
    let result = this.httpClient.post(`${this.roleManagementServiceURL}/add`, roleData);
    return result;
  }

  public updateRole(params, roleData): Observable<any> {
    let result = this.httpClient.post(`${this.roleManagementServiceURL}/update/${params}`, roleData);
    return result;
  }

  // DELETE Requests
  public deleteRole(params): Observable<any> {
    let result = this.httpClient.delete(`${this.roleManagementServiceURL}/delete/${params}`);
    return result;
  }
}

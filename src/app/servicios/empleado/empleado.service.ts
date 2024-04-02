import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

 
  private URL= "http://localhost:8080/api/empleados";

  constructor(private httpClient: HttpClient) { }
  
  public getAllEmployes(): Observable <any>{
    return this.httpClient.get(this.URL);
  }


  public getEmployes(id: any):Observable <any>{
    return this.httpClient.get(this.URL+"/"+id);
  }

  public createEmployes(user:any):Observable <any>{
    return this.httpClient.post(this.URL,user);
  }

  public deleteEmployes(id:any):Observable <any>{
    return this.httpClient.delete(this.URL+"/"+id);
  }

  public updateEmployes(id: any, user:any){
    return this.httpClient.put(this.URL+"/"+id,user);
  }
}

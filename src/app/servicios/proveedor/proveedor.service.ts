import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private URL= "http://localhost:8080/api/proveedores";

  constructor(private httpClient: HttpClient) { }
  
  public getAllProveers(): Observable <any>{
    return this.httpClient.get(this.URL);
  }

  public getProveers(id: any):Observable <any>{
    return this.httpClient.get(this.URL+"/"+id);
  }

  public createProveers(user:any):Observable <any>{
    return this.httpClient.post(this.URL,user);
  }

  public deleteProveers(id:any):Observable <any>{
    return this.httpClient.delete(this.URL+"/"+id);
  }

  public updateProveers(id: any, user:any){
    return this.httpClient.put(this.URL+"/"+id,user);
  }
}

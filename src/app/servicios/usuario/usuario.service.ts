import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL= "http://localhost:8080/api/usuarios";

  constructor(private httpClient: HttpClient) { }
  
  public getAllUsers(): Observable <any>{
    return this.httpClient.get(this.URL);
  }


  public getUsser(id: any):Observable <any>{
    return this.httpClient.get(this.URL+"/"+id);
  }

  public createUsers(user:any):Observable <any>{
    return this.httpClient.post(this.URL,user);
  }

  public deleteUsers(id:any):Observable <any>{
    return this.httpClient.delete(this.URL+"/"+id);
  }

  public updateUsers(id: any, user:any){
    return this.httpClient.put(this.URL+"/"+id,user);
  }
}

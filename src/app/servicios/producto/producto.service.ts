import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URL= "http://localhost:8080/api/productos";

  constructor(private httpClient: HttpClient) { }
  
  public getAllProducts(): Observable <any>{
    return this.httpClient.get(this.URL);
  }


  public getProducts(id: any):Observable <any>{
    return this.httpClient.get(this.URL+"/"+id);
  }

  public createProducts(user:any):Observable <any>{
    return this.httpClient.post(this.URL,user);
  }

  public deleteProducts(id:any):Observable <any>{
    return this.httpClient.delete(this.URL+"/"+id);
  }

  public updateProducts(id: any, user:any){
    return this.httpClient.put(this.URL+"/"+id,user);
  }
}

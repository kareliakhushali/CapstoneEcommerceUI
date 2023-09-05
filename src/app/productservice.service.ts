import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  readonly apiUrl = 'http://localhost:4758/api/';
  readonly imageUrl = 'http://localhost:4758/images/';
  constructor(private http:HttpClient) { }
  getProductList():Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+"Product");
  }
  addProduct(product:any):Observable<any>{
    return this.http.post(this.apiUrl+"Product/createproduct/",product);
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.apiUrl+"Product/deleteproduct?id="+id);
  }
}


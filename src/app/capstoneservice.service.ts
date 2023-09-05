import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CapstoneserviceService {
  readonly apiUrl = 'http://localhost:4758/api/';
  readonly imageUrl = 'http://localhost:4758/images/';

  constructor(private http:HttpClient) { }
  getCategoryList():Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+"Category");
  }
  addCategory(category:any):Observable<any>{
    console.log(category);
    return this.http.post(this.apiUrl+"Category/createcategory",category);
  }
  editCategory(category:any):Observable<any>
  {
    console.log(category);
    return this.http.put(this.apiUrl+"Category/editCategory?id=",category);
  }
  deleteCategory(id:number):Observable<any>{
    return this.http.delete(this.apiUrl+"Category/deletecategory?id="+id);
  }
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
  checkProductExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${id}/exists`);
  }
}

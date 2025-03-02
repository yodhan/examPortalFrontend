import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCategories(){
      return this.http.get(`${environment.apiBaseUrl}category/`);
  }

  public addCategories(category:any){
     return this.http.post(`${environment.apiBaseUrl}category/`,category);
  }

}

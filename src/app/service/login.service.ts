import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public generateToken(loginData:any):Observable<any>{
    return this.http.post(`${environment.apiBaseUrl}generate-token`,loginData);
  }

  public getCurrentUser(loginData:any):Observable<any>{
    return this.http.get(`${environment.apiBaseUrl}current-user`);
  }

  public saveToken(token:string){
    localStorage.setItem("token",token);
    return true;
  }

  public  isLoggedIn():Boolean{
    var tokenStr = localStorage.getItem("token")  ;
    if(tokenStr && tokenStr.length>10){
      return true;
    }
    return false;
  }

  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true;
  }

  public getToken(){
    return localStorage.getItem('token')
  }

  


}

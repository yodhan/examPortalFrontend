import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


}

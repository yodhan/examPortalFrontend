import { Injectable } from '@angular/core';
import { User } from '@app/models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private loginservice:LoginService) { }

  public setUser(user:User |null){
    localStorage.setItem("user", JSON.stringify(user));
  }
  public getUser(){
    let userStr =localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    } else {
      this.loginservice.logout();
      return null;
    }

  }

  
}

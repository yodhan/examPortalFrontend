import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@app/models/user';
import { LoginService } from '@app/service/login.service';
import { UserserviceService } from '@app/service/userApi.service';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(private userService:UserserviceService, private snackbar:MatSnackBar, private loginService:LoginService){}

  public user:any ={
    username:'',
    password:'',

  }
  login() {
      if( this.user.userName!="" && this.user.password!=""){
       this.loginService.generateToken(this.user).subscribe((data)=>{
        console.log(data);
        
       },
       (error)=>{
        console.log(error);
        
       });
       
      
      }
      else{
        this.snackbar.open("UserName/Password is required","",{
          duration:3000
        })
        return
      }
  }
}

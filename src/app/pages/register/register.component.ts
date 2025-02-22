import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@app/models/user';
import { UserserviceService } from '@app/service/userApi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private userService:UserserviceService, private snackbar:MatSnackBar){}

  public user:User ={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  registerFormSubmit(event:any){
    // console.log(event);
    if(this.user.userName =="" || this.user.userName==null ){
      this.snackbar.open("Username is required", 'ok',
        {
          duration: 3000,
          horizontalPosition:'center'
        }
       )
       return
    }
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire("Success done!!",'user'+ data.id + ' is registred',"success")
        // this.snackbar.open("Success", "ok",{
        //   duration:3000,
        //   horizontalPosition:"center"
        // })
      },
      (error)=>{
        console.log(error);
        this.snackbar.open("Something went wrong", "ok",{
          duration:3000
        })
        
      }
    )
    
  }

}

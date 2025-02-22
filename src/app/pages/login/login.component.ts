import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@app/models/user';
import { LoginService } from '@app/service/login.service';
import { UserService } from '@app/service/user.service';
import { UserApiService } from '@app/service/userApi.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	standalone: false,
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	constructor(private userApiService: UserApiService, private route:Router,private snackbar: MatSnackBar, private loginService: LoginService, private userService: UserService) { }

	public user: any = {
		username: '',
		password: '',

	}
	login() {
		if (this.user.userName != "" && this.user.password != "") {
			this.loginService.generateToken(this.user).subscribe((data) => {
				
				this.loginService.saveToken(data.token);
				this.loginService.getCurrentUser(data.token).subscribe(
					(user) => {
						this.userService.setUser(user);
						if(this.userService.getUserRole()=="ADMIN"){
							this.route.navigate(['/admin']);
						}else if(this.userService.getUserRole()=="NORMAL"){ 
							this.route.navigate(['/user-dashboard']);
						}else {
							this.loginService.logout();
							// location.reload();
						}
					},
					(error) => {
						console.log(error);
						
					}
				);
			},
				(error) => {
					console.log(error);
					this.snackbar.open("UserName/Password is Invalid, try again", "", {
						duration: 3000
					});

				});
		}
		else {
			this.snackbar.open("UserName/Password is required", "", {
				duration: 3000
			})
			return
		}
	}
}

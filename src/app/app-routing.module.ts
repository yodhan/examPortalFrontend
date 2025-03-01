import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ErrorComponent } from './pages/error/error/error.component';
import { adminGuard } from './guard/admin.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'register', component: RegisterComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, pathMatch: 'full' },
	// { path: 'admin', component: DashboardComponent, pathMatch: 'full', canActivate:[adminGuard],
	{ path: 'admin', component: DashboardComponent,
		children:[
			{
				path:"",
				component:AdminHomeComponent
			},
			{
				path:'profile',
				component:ProfileComponent

			}
		]
	},
	{
		path: 'user-dashboard',
		component: UserDashboardComponent,
		pathMatch: 'full',
	},
	{ path: 'error', component: ErrorComponent },
	{ path: 'profile', component: ProfileComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

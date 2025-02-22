import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent,pathMatch:"full"},
  { path: "signup",component:RegisterComponent, pathMatch:"full"},
  { path: "login", component:LoginComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

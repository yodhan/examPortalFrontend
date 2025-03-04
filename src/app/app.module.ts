import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ErrorComponent } from './pages/error/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { MatCardModule} from '@angular/material/card';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  NavbarComponent,
  RegisterComponent,
  HomeComponent,
  LoginComponent,
  DashboardComponent,
  UserDashboardComponent,
  ErrorComponent,
  ProfileComponent,
  SidebarComponent,
  AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

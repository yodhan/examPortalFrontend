import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '@app/service/login.service';
import { UserService } from '@app/service/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);
	const router = inject(Router);
	const loginService = inject(LoginService);

	const role = userService.getUserRole();
	const isLoggedIn = loginService.isLoggedIn();
	if (!isLoggedIn) {
		router.navigate(['/login']);
		return false;
	}
	if (role === 'ADMIN') {
		return true; // Allow access
	} else {
		router.navigate(['/error']); // Redirect unauthorized users
		return false;
	}
};

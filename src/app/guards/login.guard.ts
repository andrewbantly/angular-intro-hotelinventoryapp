import { CanMatchFn, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';

 
export const loginGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("is logged in? ", inject(LoginService).isLoggedIn);
  return loginService.isLoggedIn ? true : router.parseUrl('/login');
  // return true;
};

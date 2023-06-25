import { CanMatchFn, Route, UrlSegment } from '@angular/router';
// import { LoginComponent } from '../login/login.component';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';

export const loginGuard: CanMatchFn = (route: Route, segments: UrlSegment[]): boolean => {
  console.log("here: ", inject(LoginService).isLoggedIn)
  return inject(LoginService).isLoggedIn;
  // return true;
};

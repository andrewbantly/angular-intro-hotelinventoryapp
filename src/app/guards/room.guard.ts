import { CanActivateChildFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {

  const loginService = inject(LoginService)
  console.log("loginService admin:", loginService.isAdmin)
  return loginService.isAdmin;
};

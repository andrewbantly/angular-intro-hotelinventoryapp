import { CanActivateFn } from '@angular/router';

export const commentGuard: CanActivateFn = (route, state) => {
  return true;
};

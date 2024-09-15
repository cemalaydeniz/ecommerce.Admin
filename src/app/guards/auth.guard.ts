import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // WAITING: the sign-in system in the backend should be implemented first

  return true;
};

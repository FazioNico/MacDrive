import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = async (route, state): Promise<boolean> => {
  const isAdmin = Boolean(localStorage.getItem('isAdmin'));
  if (!isAdmin) {
    throw new Error('only available for Admin User');
  }
  return isAdmin;
};

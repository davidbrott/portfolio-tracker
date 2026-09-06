import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { ApplicationStore } from '../application.store';

export const authGuard: CanActivateChildFn = () => {
  return inject(ApplicationStore).loggedIn();
};

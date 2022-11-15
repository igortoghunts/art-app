import { Injectable } from '@angular/core';
import { IAuthService, IUser } from './auth.service.interfice';

@Injectable({ providedIn: 'root' })
export class AuthService implements IAuthService {
  user = {
    isAuthenticated: false,
  };

  get isAuthenticated(): boolean {
    return this.user.isAuthenticated;
  }

  getUser(): IUser {
    return this.user;
  }

  login(data: any) {
    console.log(data);
  }
}

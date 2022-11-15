import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class IsAuthorizedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['home']).then();
      return false;
    }

    return !this.authService.isAuthenticated;
  }
}

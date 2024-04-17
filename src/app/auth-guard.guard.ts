import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = false;
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
    this._authService
      .getIsLoggedIn()
      .subscribe(logged => (this.isLoggedIn = logged));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (this.isLoggedIn) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

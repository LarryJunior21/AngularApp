import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  doLogin(value: string): void {
    this.auth.writeName(value);

    // Navigate to landing page after login
    this.router.navigate(['']);
  }
}

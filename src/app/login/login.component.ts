import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [BrowserStorageService],
})
export class LoginComponent {
  @ViewChild('name') nameInputRef!: ElementRef;
  disabled = true;
  isLoggedIn$ = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private storage: BrowserStorageService
  ) {}

  ngOnInit() {
    this.auth.getIsLoggedIn().subscribe(logged => (this.isLoggedIn$ = logged));

    if (this.nameInputRef) this.nameInputRef.nativeElement.value = '';
    if (this.isLoggedIn$) this.router.navigate(['']);
  }

  doLogin$(value: string): void {
    this.auth.writeName(value);

    // Navigate to landing page after login
    this.router.navigate(['']);

    const obj = {
      name: value,
      isLoggedIn: true,
    };
    this.storage.set('storedName', JSON.stringify(obj));
  }

  checkEmpty(value: string): void {
    this.disabled = value === '' ? true : false;
  }
}

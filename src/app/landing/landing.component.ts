import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { BrowserStorageService, BROWSER_STORAGE } from '../storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  providers: [BrowserStorageService],
})
export class LandingComponent {
  appTitle = 'Custom title';
  isLoggedIn = false;
  name = '';
  anotherName = '';

  constructor(
    private auth: AuthService,
    private storage: BrowserStorageService
  ) {}

  ngOnInit() {
    this.auth.getIsLoggedIn().subscribe(logged => (this.isLoggedIn = logged));
    this.auth.getName().subscribe(name => (this.name = name));

    this.checkLoggedIn();
  }

  checkLoggedIn() {
    const storedName = this.storage.get('storedName');
    if (storedName) {
      const data = JSON.parse(storedName);
      this.name = data.name;
      this.isLoggedIn = data.isLoggedIn;
    }
  }
}

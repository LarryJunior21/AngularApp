import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  appTitle = 'Custom title';
  isLoggedIn = false;
  name = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getIsLoggedIn().subscribe(logged => (this.isLoggedIn = logged));
    this.auth.getName().subscribe(name => (this.name = name));
  }
}

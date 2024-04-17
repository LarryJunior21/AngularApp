import { Injectable, InjectionToken, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserStorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private name: BehaviorSubject<string>;
  private loggedIn: BehaviorSubject<boolean>;

  constructor(private storage: BrowserStorageService) {
    this.name = new BehaviorSubject<string>('');
    this.loggedIn = new BehaviorSubject<boolean>(false);

    const data = this.storage.get('storedName');

    if (data) {
      const parsedData = JSON.parse(data);
      this.name.next(parsedData.name);
      this.loggedIn.next(parsedData.isLoggedIn);
    }
  }

  writeName(name: string) {
    // Ensure previous value is cleared
    this.name.next('');
    this.loggedIn.next(false);

    // Sets new data
    this.name.next(name);
    this.loggedIn.next(true);
  }

  getName(): Observable<string> {
    return this.name.asObservable();
  }

  getIsLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.name.next('');
    this.loggedIn.next(false);
    this.storage.clear();
  }
}

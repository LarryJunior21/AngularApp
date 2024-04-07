import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private name: BehaviorSubject<string>;
  private loggedIn: BehaviorSubject<boolean>;

  // Only name and loggedIn for now
  // login: string = '';
  // pwd: string = '';

  constructor() {
    this.name = new BehaviorSubject<string>('');
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  writeName(name: string) {
    this.name.next(name);
    this.loggedIn.next(true);
  }

  getName(): Observable<string> {
    return this.name.asObservable();
  }

  getIsLoggedIn() {
    return this.loggedIn.asObservable();
  }
}

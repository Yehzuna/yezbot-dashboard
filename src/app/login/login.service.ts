import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  isAuth () {
    return localStorage.getItem('token');
  }

  login() {
    localStorage.setItem('token', 'token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

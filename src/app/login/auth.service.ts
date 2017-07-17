import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
export interface User {
  token: string,
  email: string,
  name: string,
  role: string,
}

export interface AuthConfig {
  BASE_URL: string,
  CLIENT_ID: string,
  CLIENT_SECRET: string,
  SCOPES: string,
}

export const AUTHCONFIG: AuthConfig = {
  BASE_URL: '',
  CLIENT_ID: '9yj5uqj5fywartq4hewxwkx7dzlyzo',
  CLIENT_SECRET: 'xbv74x1syqy6gg7plhgsq72dvkw77q',
  SCOPES: 'user_read',
};
*/

@Injectable()
export class AuthService {
  private headers = new Headers({'Accept': 'application/vnd.twitchtv.v5+json'});
  private clientId = '9yj5uqj5fywartq4hewxwkx7dzlyzo';
  private baseUrl = 'https://api.twitch.tv/kraken/oauth2/authorize';
  private scope = 'user_read';
  private redirectUri = 'http://localhost';
  private state = '123456';

  constructor(private http: Http) { }

  isAuth () {
    return localStorage.getItem('token');
  }

  login(): Observable<any> {
    const url = `${this.baseUrl}?response_type=token&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${this.scope}&state=${this.state}`;
    console.log(url);

    return this.http.get(url)
        .map((response: Response) => {
          console.log(response);
          // localStorage.setItem('token', 'token');
        })
        .catch((error: any) => Observable.throw(error.message));
  }

  logout() {
    localStorage.removeItem('token');
  }
}

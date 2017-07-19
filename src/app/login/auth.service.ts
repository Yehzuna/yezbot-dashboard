import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private headers = new Headers({'Accept': 'application/vnd.twitchtv.v5+json'});
  private clientId = '9yj5uqj5fywartq4hewxwkx7dzlyzo';
  private baseUrl = 'https://api.twitch.tv/kraken/oauth2/authorize';
  private scope = 'user_read+channel_read';
  private redirectUri = 'http://localhost:4200/login';

  constructor(private http: Http) { }

  isAuth () {
    return localStorage.getItem('token');
  }

  authUrl(): string {
    const uri = encodeURIComponent(this.redirectUri);
    const state = this.random();
    const nonce = this.random();

    return `${this.baseUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=${uri}&scope=${this.scope}&state=${state}&nonce=${nonce}`;
  }

  login(code: string): Observable<any> {
    // http://localhost:4200/login?code=fzm9arkhdvec80ns1f7kkx2eexyjux&scope=user_read&state=123456
    // http://localhost:4200/login?error=redirect_mismatch&error_description=Parameter%2Bredirect_uri%2Bdoes%2Bnot%2Bmatch%2Bregistered%2BURI&state=123456

    const url = `http://localhost:8000/auth?code=${code}`;

    return this.http.get(url)
        .map((response: Response) => response)
        .catch((error: any) => Observable.throw(error));
  }

  random() {
    return (Math.random() * 1e32).toString(36);
  }

  logout() {
    localStorage.removeItem('token');
  }
}

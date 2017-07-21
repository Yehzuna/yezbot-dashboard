import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private clientId = '9yj5uqj5fywartq4hewxwkx7dzlyzo';
  private baseUrl = 'https://api.twitch.tv/kraken/oauth2/authorize';
  private scope = 'channel_read';
  private redirectUri = 'http://localhost:4200/login';
  private state: string;
  private nonce: string;

  constructor(private http: Http) {
      this.state = this.random();
      this.nonce = this.random();
  }

  isAuth () {
    return localStorage.getItem('hash');
  }

  authUrl(): string {
    const uri = encodeURIComponent(this.redirectUri);

    return `${this.baseUrl}?response_type=code&client_id=${this.clientId}&redirect_uri=${uri}&scope=${this.scope}&state=${this.state}&nonce=${this.nonce}`;
  }

  login(params: Params): Observable<any> {
    // http://localhost:4200/login?code=fzm9arkhdvec80ns1f7kkx2eexyjux&scope=user_read&state=123456
    // http://localhost:4200/login?error=redirect_mismatch&error_description=Parameter%2Bredirect_uri%2Bdoes%2Bnot%2Bmatch%2Bregistered%2BURI&state=123456

    if (typeof params.error !== 'undefined') {
        return Observable.throw(params.error_description);
    }

    if (typeof params.code === 'undefined') {
        return Observable.throw('Invalid code');
    }

    if (typeof params.state === 'undefined' || params.state !== this.state) {
        //return Observable.throw('Invalid state');
    }

    const url = `http://localhost:8000/auth?code=${params.code}`;

    console.log(url);
    return;
/*
    return this.http.get(url)
        .map((response: Response) => {
            console.log(response.json());
            localStorage.setItem('hash', response.json().hash);
            return response.json();
        })
        .catch((error: any) => Observable.throw(error));*/
  }

  random() {
    return (Math.random() * 1e32).toString(36);
  }

  logout() {
    localStorage.removeItem('hash');
  }
}

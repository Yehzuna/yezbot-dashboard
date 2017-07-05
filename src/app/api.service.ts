import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from './models/config';
import { Cheer } from './models/cheer';

@Injectable()
export class ApiService {
  private base = 'http://yezbot.local/api/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getConfig(channel: string): Observable<Config> {
    const url = `${this.base}${channel}/config`;

    return this.http.get(url)
        .map(response => {
          const config: Config = response.json();
          console.log(config);
          return config;
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message);
  }
}

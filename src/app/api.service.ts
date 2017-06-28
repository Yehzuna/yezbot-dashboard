import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from './models/config';
import { Cheer } from './models/cheer';

@Injectable()
export class ApiService {

  private base = 'http://yezbot.local/api/';

  constructor(private http: Http) { }

  getConfig(channel: string): Promise<Config[]> {
    const url = `${this.base}${channel}/config`;

    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Config[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

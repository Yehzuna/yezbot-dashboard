import { Component, OnInit } from '@angular/core';

import { Config } from './models/config';
import { Cheer } from './models/cheer';

import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    config: Config;

    constructor (private apiService: ApiService) {}

    ngOnInit(): void {
        this.getConfig();
    }

    getConfig(): void {
      this.apiService.getConfig('test').then(config => {
        console.log('test', config);
        this.config = config
      });
    }
}

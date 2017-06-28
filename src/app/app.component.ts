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
  channel: '';
  config: Config[];

  constructor (private apiService: ApiService) {}

  ngOnInit() { }
}

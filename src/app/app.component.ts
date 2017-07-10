import { Component, OnInit } from '@angular/core';

import { Config } from './_models/config';
import { Cheer } from './_models/cheer';

import { ApiService } from './_services/api.service';
import { MenuService } from './menu/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    config: Config;

    constructor (private apiService: ApiService) {}

    ngOnInit(): void {
        console.log('init');
        this.getConfig();
    }

    getConfig(): void {
         /*
        this.apiService.getConfig('test').subscribe(config => {
            //console.log('test', config);
            this.config = config
        });
        */
    }
}

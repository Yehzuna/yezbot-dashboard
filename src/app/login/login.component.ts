import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from './auth.service';
import { AlertService } from '../alert/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            if (typeof params.code !== 'undefined') {
                this.authService.login(params).subscribe(data => {
                    this.alertService.success(data);
                },
                error => {
                    this.alertService.error(error);
                });
            }
        });
    }

    login() {
        // console.log(this.authService.twitchUrl());
        window.location.href = this.authService.authUrl();
    }
}

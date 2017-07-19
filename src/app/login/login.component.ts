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
      console.log(params);

      if (typeof params.code !== 'undefined') {
        this.authService.login(params.code).subscribe(data => {
          this.alertService.success(data);
        },
        error => {
          this.alertService.error(error);
        });
      }

      if (typeof params.error !== 'undefined') {
        this.alertService.error(params.error_description);
      }
    });
  }

  login() {
    // console.log(this.authService.twitchUrl());
    window.location.href = this.authService.authUrl();
  }
}

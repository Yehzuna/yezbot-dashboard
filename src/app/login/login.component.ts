import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  constructor(
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  login() {
    this.authService.login().subscribe(() => {
      this.router.navigate([this.returnUrl]);
    });
  }
}

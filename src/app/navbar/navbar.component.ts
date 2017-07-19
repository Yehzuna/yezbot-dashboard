import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../login/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
    public dashboard: boolean;
    public logged: boolean;
    public role: string;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
        this.dashboard = false;
        this.logged = false;
        this.role = 'user';
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log(event);
                // this.refresh(event.url);
            }
        });
    }

    logout() {
        this.authService.logout();

        this.router.navigate(['login']);
    }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../login/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public dashboard: boolean;
    public logged: boolean;
    public role: string;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.dashboard = false;
        this.logged = false;

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log(event);
            }
        });
    }

    logout() {
        this.authService.logout();

        this.router.navigate(['login']);
    }
}

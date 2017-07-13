import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public items: Array<Object>;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log(event)
                if (event.url === '/login') {
                    this.Login();
                } else {
                    this.notLogged();
                }
            }
        });

        this.items = [];
    }

    Login() {
        this.items = [
            {
                title: 'Home',
                css: 'home',
                routerLink: '',
                icon: 'fa-home',
            }
        ];
    }

    notLogged() {
        this.items = [
            {
                title: 'Home',
                css: 'home',
                routerLink: '',
                icon: 'fa-home',
            }, {
                title: 'Sign In',
                css: 'login',
                routerLink: 'login',
                icon: 'fa-sign-in',
            }
        ];
    }
}

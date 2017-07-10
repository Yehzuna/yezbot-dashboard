import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class Menu {
  title: string;
  path: string;
}

@Injectable()
export class MenuService {
  private menu: Menu[];

  constructor(private router: Router) { }

  getMenuItems() {
    /*
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        console.log(event);
      }
    });
    */
    console.log(this.router.url);

    return [];
  }
}

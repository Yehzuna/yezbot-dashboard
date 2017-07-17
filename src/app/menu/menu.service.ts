import { Injectable } from '@angular/core';

export const menuItems = [
  {
    title: 'Emotes',
    routerLink: 'emotes',
    icon: 'fa-home',
    subMenu: []
  },
  {
    title: 'Cheer',
    routerLink: 'cheers',
    icon: 'fa-home',
    subMenu: [
      {
        title: 'Cheer',
        routerLink: 'cheers',
      }
    ]
  }
];

@Injectable()
export class MenuService {
  public getMenuItems() {
    return menuItems;
  }
}

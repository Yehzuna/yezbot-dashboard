import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuItems: Array<Object>;

  constructor(
      private menuService: MenuService,
      private loginService: LoginService
  ) { }

  ngOnInit() {
    console.log('login');
    if (this.loginService.isAuth()) {
      this.menuItems = this.menuService.getMenuItems();
    }
  }
}

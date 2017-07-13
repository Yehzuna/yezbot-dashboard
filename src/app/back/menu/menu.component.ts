import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuItems: Array<Object>;

  constructor(
      private menuService: MenuService,
      private authService: AuthService
  ) { }

  ngOnInit() {
    console.log('login');
    if (this.authService.isAuth()) {
      this.menuItems = this.menuService.getMenuItems();
    }
  }
}

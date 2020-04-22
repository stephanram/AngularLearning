import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'aspire-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data: Menu[];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.data = this.menuService.getMenuData();
  }
}

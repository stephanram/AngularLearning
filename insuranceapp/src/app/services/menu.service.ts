import { Injectable } from '@angular/core';
import { MenuData } from '../models/menuData';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuData(): Menu[] {
    return MenuData;
  }
}

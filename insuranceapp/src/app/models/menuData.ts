import { Item, Menu } from './menu';


export const MenuData: Menu[] = [
  new Menu('Claim', '', [new Item('Create', 'pi pi-plus', 'claim/create'),
  new Item('Edit', 'pi pi-user-edit', 'claim/edit'),
  new Item('View Status', 'pi pi-info', 'claim/view')
  ], ''),

  new Menu('Policy Dashboard', '', [
    new Item('Renew', 'pi pi-play', 'policy/renew'),
    new Item('View Status', 'pi pi-user', 'policy/viewstatus')], ''),

  new Menu('Vehicle', '', [
    new Item('View', 'pi pi-info-circle', '')], 'vehicle/view-vehicle'),

  new Menu('Accounts', '', [
    new Item('My Profile', 'pi pi-user', 'accounts/my-profile'),
    new Item('Logout', 'pi pi-fw pi-sign-out', 'accounts/logout')
  ], ''),



];

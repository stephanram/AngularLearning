import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { ClaimComponent } from './claim/claim.component';
import { PolicyComponent } from './policy/policy.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewVehicleComponent } from './vehicle/view-vehicle/view-vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MyProfileComponent } from './accounts/my-profile/my-profile.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { LoginComponent } from './security/login/login.component';
import { LoginGuard } from './utility/loginGuard';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      {
        path: 'claim',
        component: ClaimComponent,
        loadChildren: () => import('./claim/claim.module').then(m => m.ClaimModule)
      },
      {
        path: 'policy',
        component: PolicyComponent,
        children: [
          {
            path: 'renew',
            component: RenewComponent
          },
          {
            path: 'viewstatus',
            component: ViewstatusComponent
          }
        ]
      },
      {
        path: 'vehicle',
        component: VehicleComponent,
        children: [
          {
            path: 'view-vehicle',
            component: ViewVehicleComponent
          }
        ]
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [
          {
            path: 'my-profile',
            component: MyProfileComponent
          },
          {
            path: 'logout',
            component: LogoutComponent
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

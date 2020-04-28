import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { PolicyComponent } from './policy/policy.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';

import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { ViewVehicleComponent } from './vehicle/view-vehicle/view-vehicle.component';
import { MyProfileComponent } from './accounts/my-profile/my-profile.component';
import { LogoutComponent } from './accounts/logout/logout.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './security/login/login.component';
import { FormsModule } from '@angular/forms';
import { AngularMatControlModule } from './ui-module/angular-mat-control/angular-mat-control.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    PolicyComponent,
    VehicleComponent,
    AccountsComponent,

    RenewComponent,
    ViewstatusComponent,
    ViewVehicleComponent,
    MyProfileComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    AngularMatControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

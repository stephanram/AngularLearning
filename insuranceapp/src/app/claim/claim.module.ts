import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ClaimRoutingModule } from './claim-routing.module';
import { LossComponent } from './create/loss/loss.component';
import { DamageComponent } from './create/damage/damage.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AngularMatControlModule } from '../ui-module/angular-mat-control/angular-mat-control.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PrimengControlModule } from '../ui-module/primeng-control/primeng-control.module'

@NgModule({
  declarations: [
    ClaimComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    LossComponent,
    DamageComponent,
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    TabMenuModule,
    AngularMatControlModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengControlModule
  ]
})
export class ClaimModule { }

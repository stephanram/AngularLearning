import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { DamageComponent } from './create/damage/damage.component';
import { LossComponent } from './create/loss/loss.component';


const routes: Routes = [
    {
        path: 'create',
        component: CreateComponent,
        children: [
            {
                path: 'damage',
                component: DamageComponent
            },
            {
                path: 'loss',
                component: LossComponent
            }
        ]
    },
    {
        path: 'edit',
        component: EditComponent
    },
    {
        path: 'view',
        component: ViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }

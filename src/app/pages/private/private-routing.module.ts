import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: { title: 'Dashboard' },
                title: 'Dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { title: 'Dashboard' },
                title: 'Dashboard'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}

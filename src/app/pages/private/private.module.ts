import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MATERIAL_MODULE } from 'src/app/core/constants/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateComponent } from './private.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [DashboardComponent, PrivateComponent, ToolbarComponent],
    imports: [CommonModule, PrivateRoutingModule, ...MATERIAL_MODULE, FormsModule, ReactiveFormsModule]
})
export class PrivateModule {}

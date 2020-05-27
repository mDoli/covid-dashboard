import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule { }

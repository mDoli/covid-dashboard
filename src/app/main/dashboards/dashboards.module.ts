import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module';
import { DashboardsComponent } from './dashboards.component';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';


@NgModule({
    imports: [
        CommonModule,
        DashboardsRoutingModule,
        SharedModule,
    ],
    declarations: [DashboardsComponent],
    exports: [DashboardsComponent]
})
export class DashboardsModule { }

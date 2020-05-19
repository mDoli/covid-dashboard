import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module';
import { DashboardsComponent } from './dashboards.component';


@NgModule({
    declarations: [DashboardsComponent],
    imports: [
        SharedModule,
    ],
    exports: [DashboardsComponent]
})
export class DashboardsModule { }

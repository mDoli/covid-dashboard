import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        // component: DashboardComponent
        loadChildren: () => import('./main/dashboard/dashboard.module').then(t => t.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
